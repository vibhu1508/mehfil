/* Mehfil — all the content lives in this file.
 *
 * TRACKS: `yt` is the YouTube video id — the part after ?v= in a normal
 * youtube.com/watch URL. A track with yt: null shows in the list but cannot
 * play; the row is dimmed and marked. Fill these in as you curate.
 *
 * Before adding a video, check two things: that it is embeddable (open
 * youtube.com/embed/<id> directly — if it refuses, it will refuse here too)
 * and that it is not region-locked for India.
 */

export const PEGS = [
  {
    id: 'pehla',
    slug: 'pehla-peg',
    clock: '9 PM',
    dv: 'पहला पेग',
    en: 'Pehla Peg',
    tagline: 'Halki mehfil. Sab abhi sharif hain.',
    headline: ['Do peg,', 'teen ghazal,', 'subah tak.'],
    kicker: 'आज रात की महफ़िल',
    hours: [21, 22]
  },
  {
    id: 'doosra',
    slug: 'doosra-peg',
    clock: '11 PM',
    dv: 'दूसरा पेग',
    en: 'Doosra Peg',
    tagline: 'Ab shayari shuru.',
    headline: ['Ab thodi', 'shayari ho', 'jaaye.'],
    kicker: 'रात गहरा रही है',
    hours: [23, 0]
  },
  {
    id: 'teesra',
    slug: 'teesra-peg',
    clock: '1 AM',
    dv: 'तीसरा पेग',
    en: 'Teesra Peg',
    tagline: 'Purani baatein nikal aayi.',
    headline: ['Purani', 'baatein nikal', 'aayi.'],
    kicker: 'अब कोई नहीं देख रहा',
    hours: [1, 2]
  },
  {
    id: 'aakhri',
    slug: 'aakhri-peg',
    clock: '3 AM',
    dv: 'आख़िरी पेग',
    en: 'Aakhri Peg',
    tagline: 'Ro lo. Koi nahi dekh raha.',
    headline: ['Ro lo.', 'Koi nahi', 'dekh raha.'],
    kicker: 'सुबह होने को है',
    hours: [3, 4, 5]
  }
];

/* Filter chips shown above the tracklist. `all` is always first. */
export const FILTERS = [
  { id: 'all',      label: 'Sab' },
  { id: 'ghazal',   label: 'Ghazal' },
  { id: 'sufi',     label: 'Sufi' },
  { id: 'sharaabi', label: 'Sharaabi' },
  { id: 'retro',    label: 'Retro Filmi' }
];

/* Imported from your YouTube Music playlist "mehfil ke gaane" (39 songs).
 * Titles, artists and ids came straight off the playlist - nothing invented.
 *
 * THE PEG SPLIT IS MY SUGGESTION, NOT YOURS. I grouped them by mood: light and
 * flirty at 9, romantic at 11, philosophical at 1, heartbreak at 3. Moving a
 * song is cut-and-paste between these arrays, and that assignment IS the
 * curation - it is the one thing only you can do.
 *
 * `note` is the editorial line under each title. I wrote five as examples of
 * the voice and left the rest empty on purpose; they should sound like you.
 */
export const TRACKS = {
  pehla: [
    { title: 'Pehla Nasha', artist: 'Udit Narayan', year: '', yt: '1R8MGdgZDns', tags: ['retro'], note: 'Pehle peg ke liye aur kya chahiye.' },
    { title: 'Kya Khoob Lagti Ho', artist: 'Mukesh', year: '', yt: 'ObZI0H-ek3A', tags: ['retro'], note: '' },
    { title: 'Ek Ajnabee Haseena Se', artist: 'Kishore Kumar', year: '', yt: 'EYE61OWUUm8', tags: ['retro'], note: '' },
    { title: 'Mere Samnewali Khidki Mein', artist: 'Kishore Kumar', year: '', yt: '6RchbVJpJRI', tags: ['retro'], note: '' },
    { title: 'Taarif Karoon Kya Uski', artist: 'Mohammed Rafi', year: '', yt: 'u1FP8sV2hPo', tags: ['retro'], note: '' },
    { title: 'Aajkal Tere Mere Pyar Ke Charche', artist: 'Suman Kalyanpur', year: '', yt: 'KPrCdP0zVec', tags: ['retro'], note: '' },
    { title: 'Badan Pe Sitare Lapete Huye', artist: 'Mohammed Rafi', year: '', yt: 'xGj2dDzOBww', tags: ['retro'], note: '' },
    { title: 'Hai Apna Dil To Aawara (Happy)', artist: 'Hemanth Kumar', year: '', yt: 'Kpjo3Cxc_90', tags: ['retro'], note: '' },
    { title: 'In Ankhon Ki Masti', artist: 'Asha Bhosle', year: '', yt: 'bzTBf-l3RQs', tags: ['ghazal', 'retro'], note: '' },
    { title: 'Bade Achhe Lagte Hain', artist: 'Amit Kumar', year: '', yt: 'LFMR9rIje-I', tags: ['retro'], note: '' }
  ],
  doosra: [
    { title: 'Chura Liya Hai Tumne Jo Dil Ko', artist: 'Asha Bhosle', year: '', yt: 'KT0NlItK86A', tags: ['retro'], note: '' },
    { title: 'Ajib Dastan Hai Yeh', artist: 'Lata Mangeshkar', year: '', yt: 'wsVFbRDQCTo', tags: ['retro'], note: '' },
    { title: 'Abhi Na Jao Chhod Kar', artist: 'Asha Bhosle', year: '', yt: 'YHd3rYyP9Yk', tags: ['retro'], note: 'Ruk jao — abhi mehfil shuru hui hai.' },
    { title: 'Aa Chal Ke Tujhe', artist: 'Kishore Kumar', year: '', yt: 'Zrd4x9qcLME', tags: ['retro'], note: '' },
    { title: 'Aap Ki Nazron Ne Samjha', artist: 'Lata Mangeshkar', year: '', yt: '3mWbA4bImPw', tags: ['retro'], note: '' },
    { title: 'Neele Neele Ambar Par (Male Version)', artist: 'Kishore Kumar', year: '', yt: '9Eg4d56rt-U', tags: ['retro'], note: '' },
    { title: 'Likhe Jo Khat Tujhe', artist: 'Mohammed Rafi', year: '', yt: 'eAXSrnHDlfQ', tags: ['retro'], note: '' },
    { title: 'O Mere Dil Ke Chain', artist: 'Kishore Kumar', year: '', yt: 'CrnRqE8hOIc', tags: ['retro'], note: '' },
    { title: 'Yeh Shaam Mastani', artist: 'Abhijeet Unplugged', year: '', yt: '5iHx7tt-5Xs', tags: ['retro'], note: '' },
    { title: 'Dekha Ek Khwab', artist: 'Lata Mangeshkar', year: '', yt: 'oPlHNekNTtI', tags: ['retro'], note: '' }
  ],
  teesra: [
    { title: 'Main Pal Do Pal Ka Shair Hoon', artist: 'Mukesh', year: '', yt: 'GMLFuNHHB6s', tags: ['ghazal', 'retro'], note: 'Teesre peg par har koi shayar ban jaata hai.' },
    { title: 'Kuchh To Log Kahenge', artist: 'Kishore Kumar', year: '', yt: 'VATfbq_116I', tags: ['retro'], note: '' },
    { title: 'Aanewala Pal Janewala Hai', artist: 'Kishore Kumar', year: '', yt: 'CyTecJYollY', tags: ['retro'], note: '' },
    { title: 'Pyar Hamen Kis Mod Pe (From "Satte Pe Satta")', artist: 'Kishore Kumar', year: '', yt: '0mXqRqASqhY', tags: ['retro'], note: '' },
    { title: 'Jane Woh Kaise Log The', artist: 'Hemanth Kumar', year: '', yt: '6MoZcTcERB8', tags: ['retro'], note: '' },
    { title: 'Suhana Safar Aur Yeh Mausam', artist: 'Mukesh', year: '', yt: 'Txd0KWKKYdY', tags: ['retro'], note: '' },
    { title: 'Zindagi Kaisi Hai Paheli', artist: 'Manna Dey', year: '', yt: '1JxEV-oGcYg', tags: ['retro'], note: '' },
    { title: 'Kisi Ki Muskurahaton Se', artist: 'Mukesh', year: '', yt: '6_Nmc3lhyVQ', tags: ['retro'], note: '' },
    { title: 'Babuji Dheere Chalna', artist: 'Geeta Dutt', year: '', yt: 'HA8B0XI5XSE', tags: ['retro'], note: 'Babuji dheere chalna — sabse sahi salaah.' },
    { title: 'Hothon Se Chhu Lo Tum (From "Prem Geet")', artist: 'Jagjit Singh', year: '', yt: '31f0mVT2Mvc', tags: ['ghazal', 'retro'], note: 'Jagjit sahab. Iske baad kuch kehne ki zaroorat nahi.' }
  ],
  aakhri: [
    { title: 'Yeh Kya Hua', artist: 'Kishore Kumar', year: '', yt: 'iZF46F2FlvI', tags: ['retro'], note: '' },
    { title: 'Jab Koi Baat Bigad Jaye', artist: 'Kumar Sanu', year: '', yt: 'hM_cLcRsdc8', tags: ['retro'], note: '' },
    { title: 'Qismat Ki Hawa Kabhi Naram', artist: 'C. Ramchandra', year: '', yt: 'iBsZjE4JLH4', tags: ['retro'], note: '' },
    { title: 'Hamen Tumse Pyar Kitna -kishore Kumar', artist: 'Kishore Kumar', year: '', yt: 'oqUdGfzKHe8', tags: ['retro'], note: '' },
    { title: 'Ek Pyar Ka Naghma Hai - Sad', artist: 'Lata Mangeshkar', year: '', yt: 'sz-wrI1Pg4k', tags: ['retro'], note: '' },
    { title: 'Kya Hua Tera Vada', artist: 'Mohammed Rafi', year: '', yt: 'OnomKR46aP4', tags: ['retro'], note: '' },
    { title: 'Chhalka Yeh Jaam', artist: 'Mohammed Rafi', year: '', yt: 'iWgT21xoJtY', tags: ['sharaabi', 'retro'], note: 'Aakhri peg, aakhri gaana.' },
    { title: 'Tera Mera Rishta (Original Version)', artist: 'Pritam', year: '', yt: 'XA_uBJjutgc', tags: ['retro'], note: '' }
  ]
};

/* SHAYARI — each one carries both scripts. `dv` is Devanagari, `roman` is
 * Hinglish; the reader switches with the toggle on the sher card and the choice
 * sticks. Both arrays must have the same number of lines.
 *
 * ATTRIBUTION — searched, and here is where it landed:
 *   Ghalib, Momin, Mir ....... public domain (all dead before 1870)
 *   Ahmad Faraz .............. d. 2008, in copyright, credited
 *   Parveen Shakir ........... d. 1994, in copyright. NOTE: the original is in
 *                              the woman's voice; what we have is a gender-
 *                              flipped retelling, so it reads "after".
 *   Safdar Rizvi ............. "Mujhe chaand dekhna pasand hai" — worth a
 *                              second check, the trail is social media
 *   Zia Mazkoor .............. confirmed on Rekhta
 *   STILL UNATTRIBUTED: "Hum bhi aayenge teri shaadi me", "Dhaage bandhoge",
 *   "Tujhse ishq karke dekh liya", "Mai yaad aaunga tujhe aakhri phere par".
 *   Searches found them all over social media with no author. If they are
 *   yours, put your name on them.
 */
export const SHERS = {
  pehla: [
    { roman: ['Mujhe chaand dekhna pasand hai',
              'Usse chaand sa dikhna pasand hai',
              'Voh bhi apne bag me hi chupati',
              'Aakhon me kajal maathe par bindi nhi lagati',
              'Hooto ko unke hi haal pe chhod deti hai',
              'Muskuraate hi samaaj ke saare baandh tod deti hai',
              'Ab socho voh agar kajal lagaa le',
              'Ek dafaa voh uljhe baalo ko suljha le',
              'Yeh zamana apna rukh na badal de',
              'koi uske saath naa chalde',
              'Yeh hawayein ruk naa jaaye',
              'Usse dekhne ko kahin'],
      dv:    ['मुझे चाँद देखना पसंद है',
              'उसे चाँद सा दिखना पसंद है',
              'वो भी अपने बैग में ही छुपाती',
              'आँखों में काजल माथे पर बिंदी नहीं लगाती',
              'होंठों को उनके ही हाल पे छोड़ देती है',
              'मुस्कुराते ही समाज के सारे बाँध तोड़ देती है',
              'अब सोचो वो अगर काजल लगा ले',
              'एक दफ़ा वो उलझे बालों को सुलझा ले',
              'ये ज़माना अपना रुख़ न बदल दे',
              'कोई उसके साथ ना चल दे',
              'ये हवाएँ रुक ना जाएँ',
              'उसे देखने को कहीं'],
      /* Attributed to Safdar Rizvi — the trail is his own tumblr plus social
         reposts, so worth confirming against a printed source. */
      poet: 'Safdar Rizvi', poetDv: 'सफ़दर रिज़वी' },
    { roman: ['Hazaaron khwahishen aisi ki har khwahish pe dam nikle',
              'Bahut nikle mere armaan lekin phir bhi kam nikle'],
      dv:    ['हज़ारों ख़्वाहिशें ऐसी कि हर ख़्वाहिश पे दम निकले',
              'बहुत निकले मिरे अरमान लेकिन फिर भी कम निकले'],
      poet: 'Mirza Ghalib', poetDv: 'मिर्ज़ा ग़ालिब' }
  ],
  doosra: [
    { roman: ['Hum bhi aayenge teri shaadi me',
              'dekhne ki naseeb wale kaise hote hain'],
      dv:    ['हम भी आएँगे तेरी शादी में',
              'देखने कि नसीब वाले कैसे होते हैं'],
      poet: '', poetDv: '' },
    { roman: ['Dhaage bandhoge haath jodoge',
              'Dar dar jake fariyad karoge',
              'Woh sirf man bhar jaane tak baat karegi',
              'Tum mar jaane tak usko yaad rakhoge'],
      dv:    ['धागे बांधोगे हाथ जोड़ोगे',
              'दर दर जाके फ़रियाद करोगे',
              'वो सिर्फ़ मन भर जाने तक बात करेगी',
              'तुम मर जाने तक उसको याद रखोगे'],
      poet: '', poetDv: '' },
    { roman: ['Tum mere paas hote ho goya',
              'Jab koi doosra nahin hota'],
      dv:    ['तुम मेरे पास होते हो गोया',
              'जब कोई दूसरा नहीं होता'],
      poet: 'Momin Khan Momin', poetDv: 'मोमिन ख़ाँ मोमिन' }
  ],
  teesra: [
    { roman: ['Tujhse ishq karke dekh liya ab kaam koi aur hai',
              'Tujhe Bina paaye kho diya ab anjaam koi aur hai',
              'Aur hum chupaana chahte the uski mehandi me kabhi',
              'Aaj unhi haatho me dhundta apna naam koi aur hai'],
      dv:    ['तुझसे इश्क़ करके देख लिया अब काम कोई और है',
              'तुझे बिना पाए खो दिया अब अंजाम कोई और है',
              'और हम छुपाना चाहते थे उसकी मेहंदी में कभी',
              'आज उन्हीं हाथों में ढूँढता अपना नाम कोई और है'],
      poet: '', poetDv: '' },
    { roman: ['Mai yaad aaunga tujhe aakhri phere par....',
              'Tu rakhegi apne bete ka naam mere naam par',
              'Par shakal jaayegi uski uske baap ke upar'],
      dv:    ['मैं याद आऊँगा तुझे आख़िरी फेरे पर....',
              'तू रखेगी अपने बेटे का नाम मेरे नाम पर',
              'पर शकल जाएगी उसकी उसके बाप के ऊपर'],
      poet: '', poetDv: '' },
    { roman: ["Ishq ne 'Ghalib' nikamma kar diya",
              'Warna hum bhi aadmi the kaam ke'],
      dv:    ['इश्क़ ने ग़ालिब निकम्मा कर दिया',
              'वर्ना हम भी आदमी थे काम के'],
      poet: 'Mirza Ghalib', poetDv: 'मिर्ज़ा ग़ालिब' }
  ],
  aakhri: [
    { roman: ['Ab ke hum bichde toh shayad khwabon me mile',
              'Jis tarah sookhe hue fool kitabon me mile'],
      dv:    ['अब के हम बिछड़े तो शायद ख़्वाबों में मिलें',
              'जिस तरह सूखे हुए फूल किताबों में मिलें'],
      poet: 'Ahmad Faraz', poetDv: 'अहमद फ़राज़' },
    { roman: ['Kamal-e-zakth ko khud bhi toh azmaunga',
              'Mai apne haath se uska dulha sajaunga',
              'Supurd karke usse chaand ke haathon me',
              'Mai apne ghar ke andhero me laut jaunga',
              'Badan ke qarb ko voh samajh naa payega',
              'Mai dil me rounga aakhon me muskuraunga',
              'Voh kya gyi ki rifaqat ke saare lutf gye',
              'Mai kisse ruth sakunga kisse manaunga'],
      dv:    ['कमाल-ए-ज़ब्त को ख़ुद भी तो आज़माऊँगा',
              'मैं अपने हाथ से उसका दूल्हा सजाऊँगा',
              'सुपुर्द करके उसे चाँद के हाथों में',
              'मैं अपने घर के अँधेरों में लौट जाऊँगा',
              'बदन के क़ुर्ब को वो समझ ना पाएगा',
              'मैं दिल में रोऊँगा आँखों में मुस्कुराऊँगा',
              'वो क्या गई कि रिफ़ाक़त के सारे लुत्फ़ गए',
              'मैं किससे रूठ सकूँगा किसे मनाऊँगा'],
      /* The original is Parveen Shakir's, in the woman's voice — "aazmaungi",
         "main apne haath se us ki dulhan sajaungi". This is a gender-flipped
         retelling, so it is credited as an adaptation, not as her text. */
      poet: 'after Parveen Shakir', poetDv: 'पर्वीन शाकिर से' },
    { roman: ['Hum ko neeche utaar lenge log',
              'Ishq latka rahega pankhe se'],
      dv:    ['हम को नीचे उतार लेंगे लोग',
              'इश्क़ लटका रहेगा पंखे से'],
      poet: 'Zia Mazkoor', poetDv: 'ज़िया मज़कूर' },
    { roman: ['Ulti ho gayin sab tadbeeren kuchh na dawa ne kaam kiya',
              'Dekha is beemari-e-dil ne aakhir kaam tamaam kiya'],
      dv:    ['उल्टी हो गईं सब तदबीरें कुछ न दवा ने काम किया',
              'देखा इस बीमारी-ए-दिल ने आख़िर काम तमाम किया'],
      poet: 'Mir Taqi Mir', poetDv: 'मीर तक़ी मीर' }
  ]
};

export const FAQ = [
  { q: 'Ye gaane kahan se aate hain?',
    a: 'Har gaana YouTube par uske official channel se chalta hai. Hum koi audio host nahi karte — play wahin count hota hai jahan artist ko milta hai.' },
  { q: 'Apna gaana suggest kar sakta hoon?',
    a: 'Haan. Instagram par DM kar do, har hafte list dekhte hain.' },
  { q: 'Playlist kitni baar badalti hai?',
    a: 'Har mahine ek naya peg ya ek nayi mehfil. Purani list hatti nahi.' },
  { q: 'Ye free hai?',
    a: 'Poori tarah. Na login, na ads, na paywall.' }
];

export const SITE = {
  name: 'महफ़िल',
  nameEn: 'Mehfil',
  curator: '[YOUR NAME]',
  instagram: '[your_handle]',
  shareText: 'Aaj raat ki mehfil — do peg, teen ghazal, subah tak.',

  /* Tracking params stripped. NOTE: this list id is 13 characters; YouTube
     playlist ids are normally 34. Open it and confirm it is the right list. */
  ytMusicPlaylist: 'https://music.youtube.com/playlist?list=PLUUbNeVBmV3E',
  spotifyPlaylist: null,

  /* Live listener count. Leave null and the counter stays hidden — the site
     will NOT invent a number. Deploy worker/ and paste its URL here. */
  presenceEndpoint: null,

  /* Playlist auto-sync. Point this at your worker's /tracks and the site pulls
     the live playlist on every load: add a song on YouTube and it shows up
     here, no code change. TRACKS below stays the fallback if the worker is
     unreachable, and it stays the home of your curation — peg, tags and notes
     are matched by video id, so they survive every sync. */
  tracksEndpoint: null,          // e.g. 'https://mehfil-presence.you.workers.dev/tracks'
  newSongsPeg: 'pehla',          // where songs you have not sorted yet land

  /* What this is, and what it is not. */
  about: [
    'Mehfil ek purani baithak hai — takht, gaddi, harmonium, ek bulb, aur raat bhar chalti baatein. Yahan ghazal hai, shayari hai, aur woh khaamoshi jo do gaano ke beech aati hai.',
    'Ye club ya party ki jagah nahi hai. Na DJ, na remix, na dance floor. Jo mehfil ghar ki chhat par, dost ke kamre me, ya kisi purane ustad ke saamne jamti thi — ye uske liye hai.',
    'Har gaana YouTube par uske apne channel se chalta hai. Hum kuch host nahi karte.'
  ],
  aboutWarn: 'Peeyo, magar sambhal ke. Gaadi mat chalana. 21+'
};
