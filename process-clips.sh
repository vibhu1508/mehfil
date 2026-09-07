#!/usr/bin/env bash
# Mehfil — turn raw Veo exports into web-ready hero clips.
#
#   1. Put your Flow/Gemini downloads here, named exactly:
#        assets/video/raw/pehla-peg.mp4          (16:9 landscape, desktop)
#        assets/video/raw/doosra-peg.mp4
#        assets/video/raw/teesra-peg.mp4
#        assets/video/raw/aakhri-peg.mp4
#        assets/video/raw/mobile/pehla-peg.mp4   (9:16 portrait, mobile)
#        ... and so on
#   2. bash process-clips.sh
#
# Strips audio, ping-pongs for a seamless loop, compresses, writes MP4 + WebM
# and a poster frame. Safe to re-run; overwrites its own output only.

set -uo pipefail
cd "$(dirname "$0")"

PEGS=(pehla-peg doosra-peg teesra-peg aakhri-peg)
RAW=assets/video/raw
OUT=assets/video
STILL=assets/still
CRF=26          # raise for smaller files, lower for better quality
GRAIN=1         # 1 adds fine grain - masks blockiness on low-res renders
WEBM_CRF=36
PINGPONG=1      # 0 to keep clips one-way

if ! command -v ffmpeg >/dev/null 2>&1; then
  echo "ffmpeg not found. Install it first:"
  echo "  brew install ffmpeg"
  exit 1
fi

mkdir -p "$OUT/mobile" "$STILL"

# encode <src> <dest-basename> <max-width> <max-height>
# Never upscales: if the source is smaller than the target, the source size wins.
# Upscaling a 360p render to 1080p only inflates the file - the browser scales it
# on the way to the screen anyway, and does a decent job of it.
encode() {
  local src="$1" dest="$2" w="$3" h="$4"

  local sw sh
  sw=$(ffprobe -v error -select_streams v:0 -show_entries stream=width -of csv=p=0 "$src" 2>/dev/null)
  sh=$(ffprobe -v error -select_streams v:0 -show_entries stream=height -of csv=p=0 "$src" 2>/dev/null)
  if [ -n "$sw" ] && [ "$sw" -lt "$w" ]; then
    echo "  source is ${sw}x${sh}, below the ${w}x${h} target - encoding at source size"
    w="$sw"; h="$sh"
  fi

  local vf="scale=${w}:${h}:force_original_aspect_ratio=increase,crop=${w}:${h}"
  if [ "$GRAIN" = "1" ]; then
    vf="${vf},noise=c0s=5:c0f=t+u"
  fi

  if [ "$PINGPONG" = "1" ]; then
    ffmpeg -y -loglevel error -i "$src" \
      -filter_complex "[0:v]${vf}[s];[s]split[a][b];[b]reverse[r];[a][r]concat=n=2:v=1[v]" \
      -map "[v]" -an -c:v libx264 -crf "$CRF" -preset slow -pix_fmt yuv420p \
      -movflags +faststart "${dest}.mp4"
  else
    ffmpeg -y -loglevel error -i "$src" -vf "$vf" \
      -an -c:v libx264 -crf "$CRF" -preset slow -pix_fmt yuv420p \
      -movflags +faststart "${dest}.mp4"
  fi || { echo "  FAILED encoding $src"; return 1; }

  ffmpeg -y -loglevel error -i "${dest}.mp4" -an \
    -c:v libvpx-vp9 -crf "$WEBM_CRF" -b:v 0 -row-mt 1 "${dest}.webm" \
    || echo "  (webm failed — mp4 is still fine)"
}

size_of() { du -h "$1" 2>/dev/null | cut -f1 | tr -d ' '; }

warn_if_fat() {
  local f="$1"
  [ -f "$f" ] || return 0
  local bytes
  bytes=$(wc -c < "$f" | tr -d ' ')
  if [ "$bytes" -gt 1572864 ]; then
    echo "  ! $(basename "$f") is $(size_of "$f") — over the 1.5 MB target. Raise CRF in this script."
  fi
}

found=0
for peg in "${PEGS[@]}"; do
  echo ""
  echo "=== $peg ==="

  if [ -f "$RAW/$peg.mp4" ]; then
    found=1
    echo "  desktop 1920x1080 ..."
    encode "$RAW/$peg.mp4" "$OUT/$peg" 1920 1080
    if [ -f "$STILL/$peg.jpg" ]; then
      echo "  poster $STILL/$peg.jpg already exists — keeping it (generated stills beat video frames)"
    else
      ffmpeg -y -loglevel error -i "$OUT/$peg.mp4" -frames:v 1 -q:v 3 "$STILL/$peg.jpg"
    fi
    echo "  -> $OUT/$peg.mp4 ($(size_of "$OUT/$peg.mp4"))  $OUT/$peg.webm ($(size_of "$OUT/$peg.webm"))"
    warn_if_fat "$OUT/$peg.mp4"
  else
    echo "  no $RAW/$peg.mp4 — skipped"
  fi

  if [ -f "$RAW/mobile/$peg.mp4" ]; then
    found=1
    echo "  mobile 1080x1920 ..."
    encode "$RAW/mobile/$peg.mp4" "$OUT/mobile/$peg" 1080 1920
    echo "  -> $OUT/mobile/$peg.mp4 ($(size_of "$OUT/mobile/$peg.mp4"))"
    warn_if_fat "$OUT/mobile/$peg.mp4"
  else
    echo "  no $RAW/mobile/$peg.mp4 — skipped"
  fi
done

echo ""
if [ "$found" = "0" ]; then
  echo "Nothing found. Put your downloads in $RAW/ using the names at the top of this file."
else
  echo "Done. Check that every clip still loops cleanly, then commit."
fi
