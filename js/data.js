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
  { id: 'retro',    label: 'Retro Filmi' },
  { id: 'party',    label: 'Party' }
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
    { title: 'Pehla Nasha', artist: 'Udit Narayan', year: '', yt: '1R8MGdgZDns', tags: ['sharaabi'], note: 'Pehle peg ke liye aur kya chahiye.' },
    { title: 'Kya Khoob Lagti Ho', artist: 'Mukesh', year: '', yt: 'ObZI0H-ek3A', tags: ['retro'], note: '' },
    { title: 'Ek Ajnabee Haseena Se', artist: 'Kishore Kumar', year: '', yt: 'EYE61OWUUm8', tags: ['retro'], note: '' },
    { title: 'Mere Samnewali Khidki Mein', artist: 'Kishore Kumar', year: '', yt: '6RchbVJpJRI', tags: ['retro'], note: '' },
    { title: 'Taarif Karoon Kya Uski', artist: 'Mohammed Rafi', year: '', yt: 'u1FP8sV2hPo', tags: ['retro'], note: '' },
    { title: 'Aajkal Tere Mere Pyar Ke Charche', artist: 'Suman Kalyanpur', year: '', yt: 'KPrCdP0zVec', tags: ['retro'], note: '' },
    { title: 'Badan Pe Sitare Lapete Huye', artist: 'Mohammed Rafi', year: '', yt: 'xGj2dDzOBww', tags: ['retro'], note: '' },
    { title: 'Hai Apna Dil To Aawara (Happy)', artist: 'Hemanth Kumar', year: '', yt: 'Kpjo3Cxc_90', tags: ['retro'], note: '' },
    { title: 'In Ankhon Ki Masti', artist: 'Asha Bhosle', year: '', yt: 'bzTBf-l3RQs', tags: ['ghazal'], note: '' },
    { title: 'Bade Achhe Lagte Hain', artist: 'Amit Kumar', year: '', yt: 'LFMR9rIje-I', tags: ['retro'], note: '' },
    { title: 'Hum Kaale Hai To Kya Hua - Helen, Mehmood, Gumnaam Song', artist: 'Gaane Naye Purane', year: '', yt: 'qxjqAg5Hxaw', tags: ['retro'], note: '' },
    { title: 'Aaj Rapat Jaye | आज रपट जाए | Namak Halaal (1982) | Amitabh Bachchan | Kishore Kumar | Asha Bho', artist: '70s & 80s FilmiGaane', year: '', yt: 'Tforerprg3o', tags: ['retro'], note: '' },
    { title: '𝐊𝐚𝐥𝐚 𝐂𝐡𝐚𝐬𝐡𝐦𝐚 🕶️ | Baar Baar Dekho | Sidharth M & Katrina Kaif | Badshah, Neha Kakkar, Prem & Ha', artist: 'Zee Music Company', year: '', yt: 'k4yXQkG2s1E', tags: ['retro'], note: '' },
    { title: 'Jumme Ki Raat Full Video Song | Salman Khan, Jacqueline Fernandez | Mika Singh | Himesh Reshamm', artist: 'T-Series', year: '', yt: 'dv_Qjzca56k', tags: ['retro'], note: '' },
    { title: 'Tere Vaaste | Zara Hatke Zara Bachke | Vicky Kaushal, Sara Ali Khan, Varun J, Sachin-Jigar,Amit', artist: 'Saregama Music', year: '', yt: 'X7WXHhokylc', tags: ['retro'], note: '' },
    { title: 'If System of a Down were from India | Indian Idol (Nachiket)', artist: 'Andre Antunes', year: '', yt: 'SIJ2VStbSBI', tags: ['retro'], note: '' },
    { title: 'Leke Prabhu Ka Naam Song | Tiger 3 | Salman Khan, Katrina | Pritam | Arijit Singh, Nikhita | Am', artist: 'YRF', year: '', yt: '6GxXehkPyBs', tags: ['retro'], note: '' },
    { title: 'Khal Nayak Hoon Main | Sanjay Dutt | Kavita Krishnamurthy | Vinod Rathod', artist: '90\'s Gaane', year: '', yt: 'EYl8yxt85ik', tags: ['party'], note: '' },
    { title: 'DILBAR Full Song | Satyameva Jayate | John Abraham Nora Fatehi | Tanishk B Neha Kakkar Ikka Dhv', artist: 'T-Series', year: '', yt: 'TRa9IMvccjg', tags: ['party'], note: '' },
    { title: 'Lungi Dance | Chennai Express | New Video Feat. Honey Singh, Shahrukh Khan, Deepika Paudkone', artist: 'T-Series', year: '', yt: '69CEiHfS_mc', tags: ['party'], note: '' },
    { title: 'Besharam Rang Song | Pathaan | Shah Rukh Khan, Deepika Padukone | Vishal & Sheykhar | Shilpa, K', artist: 'YRF', year: '', yt: 'huxhqphtDrM', tags: ['party'], note: '' },
    { title: 'Bang Bang Title Track Full Video | BANG BANG|Hrithik Roshan Katrina Kaif |Vishal Shekhar,Benny,', artist: 'Zee Music Company', year: '', yt: 'jZyAB2KFDls', tags: ['party'], note: '' },
    { title: 'Gali Gali Full Video Song | KGF | Neha Kakkar | Mouni Roy | Tanishk Bagchi | Rashmi Virag |T-SE', artist: 'T-Series', year: '', yt: '1BVgpX4w0Wk', tags: ['party'], note: '' },
    { title: 'Lyrical: Chammak Challo | Ra One | ShahRukh Khan | Kareena Kapoor', artist: 'T-Series', year: '', yt: 'oAVhUAaVCVQ', tags: ['party'], note: '' },
    { title: 'Badshah – Genda Phool | Jacqueline Fernandez | Payal Dev | Hit Anthem of the Year 2021', artist: 'Sony Music India', year: '', yt: 'SD4Z8dlZPd8', tags: ['party'], note: '' },
    { title: 'Kantara - Varaha Roopam(Lyric Video)| Sai Vignesh | Rishab Shetty | Ajaneesh Loknath | Hombale ', artist: 'Hombale Films', year: '', yt: 'gH_RYRwVrVM', tags: ['party'], note: '' },
    { title: 'Mehbooba Mehbooba (HD) | Sholay (1975) | Helen |Amjad Khan | Amitabh Bachchan | Bollywood Dance', artist: 'RD Burman Hit Songs ', year: '', yt: 'AgkfoRWOnoc', tags: ['party'], note: '' },
    { title: '"Sheila Ki Jawani" Full Song | Tees Maar Khan | Katrina Kaif | Vishal Dadlani, Sunidhi Chauhan', artist: 'T-Series', year: '', yt: 'ZTmF2v59CtI', tags: ['party'], note: '' },
    { title: 'Guli Mata - Saad Lamjarred | Shreya Ghoshal | Jennifer Winget | Anshul Garg', artist: 'Play DMF', year: '', yt: 'Gp1RNYBckBs', tags: ['party'], note: '' }
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
    { title: 'Dekha Ek Khwab', artist: 'Lata Mangeshkar', year: '', yt: 'oPlHNekNTtI', tags: ['retro'], note: '' },
    { title: 'Chura Liya Hai Tumne Jo Dil Ko', artist: 'Asha Bhosle', year: '', yt: 'WF0HJv-9S_4', tags: ['retro'], note: '' },
    { title: 'My Name Is Anthony Gonsalves | Amar Akbar Anthony | Amitabh Bachchan | Kishore Kumar', artist: 'Bollywood Hits', year: '', yt: 'ORlfGLKTkUs', tags: ['retro'], note: '' },
    { title: 'Meri Umar Ke Naujawano Om Shanti Om | Karz | Rishi Kapoor | Kishore Kumar | 80\'s Song', artist: '90\'s Gaane', year: '', yt: 'cBqq_3d_tO0', tags: ['retro'], note: '' },
    { title: 'Mere Mehboob Qayamat Hogi  (Original) - Mr. X In Bombay - Kishore Kumar\'s Greatest Hits - Old ', artist: 'Bollywood Classics', year: '', yt: 'yIzCBU0_LyY', tags: ['retro'], note: '' },
    { title: 'ये जो मोहब्बत है 4K Video Song - Yeh Jo Mohabbat Hai - Kati Patang Song - राजेश खन्ना - किशोर क', artist: 'Gaane Naye Purane', year: '', yt: 'TFgodv_aaYo', tags: ['retro'], note: '' },
    { title: 'Amar Prem : All Songs Video Jukebox | Rajesh Khanna | Sharmila Tagore | Old Hindi Classic Songs', artist: 'Gaane Naye Purane', year: '', yt: '3L6lN7EPFYE', tags: ['retro'], note: '' },
    { title: 'Kishore Kumar: Pyar Deewana Hota Hai Mastana Hota Hai | Dard Geet Bollywood | 70s Ols Song', artist: 'Dard Bhare Songs', year: '', yt: '-qMdbL15rvk', tags: ['retro'], note: '' },
    { title: 'Barsaat Ke Mausam Mein | Naajayaz | Naseeruddin Shah | Kumar Sanu | Roop Kumar Rathod', artist: 'Bollywood Hits', year: '', yt: 'rrzSZ0NMID4', tags: ['retro'], note: '' },
    { title: 'Bekarar Karke Hume Yu Na Jaeye | Purane Gane | Old Song from Jawan Trailer', artist: 'Retro Hit Songs', year: '', yt: '1yjp5UE7qJQ', tags: ['retro'], note: '' },
    { title: 'Bheegi Bheegi Raaton Mein - Ajanabee (1974) | Romantic Song | Kishore Kumar , Lata Mangeshkar', artist: 'Gaane 70s 80s', year: '', yt: 'yjhQBc07oVs', tags: ['retro'], note: '' },
    { title: 'Isse Pahle Ke Yaad Tu Aayee Lyrical Video | Nazrana | Kishore Kumar | Anand Bakshi | Rajesh Kha', artist: 'T-Series Bollywood Classics', year: '', yt: 'rSISZY_4ibk', tags: ['retro'], note: '' },
    { title: 'Yeh Shaam Mastani 4K | Kishore Kumar | Rajesh Khanna | Kati Patang | Classic Bollywood 4K Video', artist: 'SuperHit Gaane', year: '', yt: 'lbfWsIpXsCA', tags: ['retro'], note: '' },
    { title: '4K मेरे सपनो की रानी कब आएगी तू - Mere Sapno Ki Rani | Aradhana | Kishore Kumar | Rajesh Khanna', artist: 'Romantic Gaane', year: '', yt: 'jKaGdsxODk0', tags: ['retro'], note: '' },
    { title: 'Badan Pe Sitare Lapete Huye | Mohammad Rafi | Prince | Shammi Kapoor, Vyjayanthimala', artist: 'Red Chillies Entertainment', year: '', yt: 'MkABeVCv4lw', tags: ['retro'], note: '' },
    { title: 'Coke Studio | Season 14 | Pasoori | Ali Sethi x Shae Gill', artist: 'Coke Studio Pakistan', year: '', yt: '5Eqb_-j3FDA', tags: ['retro'], note: '' },
    { title: 'BEQARAR KARKE HUME YUN NA JAIYE HD - Hemant Kumar - Biswajeet, Waheeda Rehman - Bees Saal Baad ', artist: 'SuperHit Gaane', year: '', yt: 'WgP_2Bw4qlI', tags: ['retro'], note: '' },
    { title: 'Yeh Ratein Yeh Mausam | Dilli Ka Thug (1958) | Nutan | Asha Bhosle | Kishore Kumar Hit Songs', artist: 'Kishore Kumar Hit Songs', year: '', yt: 'zMGYCKr5trw', tags: ['retro'], note: '' },
    { title: 'Mera Dil Ye Pukare Aaja - Vaijayanti Mala, Lata Mangeshkar, Nagin, Emotional Song', artist: 'Ultra Bollywood', year: '', yt: 'mr_n9R3E_w4', tags: ['retro'], note: '' },
    { title: 'Mera Dil Ye Pukare Aaja (Rap Version) @OskarArtist | mere gham ke sahare aja | bheega bheega ha', artist: 'OSKAR', year: '', yt: 'KRtknNX0I9U', tags: ['retro'], note: '' },
    { title: 'Mera Dil Ye Pukare Aja New Qawwali Version 2023 Shahbaz Fayyaz Qawwal SFQ Media', artist: 'SFQ Media', year: '', yt: '44ipDQJudo8', tags: ['retro'], note: '' },
    { title: 'Ye Jo Mohabbat hai - Original by Kishore Kumar (while driving in \'Foggy\' Lahore)', artist: 'Kanu', year: '', yt: 'JkS5ffJI8zQ', tags: ['retro'], note: '' },
    { title: 'दिल के झरोके में तुझको बिठाकर | Dil Ke Jharoke | Brahmachari (1968) | Shammi Kapoor, Rajshree |', artist: 'Naye Filmi Gaane', year: '', yt: '5MN9eOcB36s', tags: ['retro'], note: '' },
    { title: 'आज कल तेरे मेरे प्यार के | Aaj Kal Tere Mere Pyar Ke | Brahmachari | Shammi K, Mumtaz | Mohd Ra', artist: 'Shudh Desi Gaane', year: '', yt: 'jlJna_x0E64', tags: ['retro'], note: '' },
    { title: 'Kaun Hai Jo Sapnon Mein Aaya | Rajendra Kumar | Saira Banu | Jhuk Gaya Aasman | Mohammad Rafi S', artist: 'Mohd Rafi Hit Songs', year: '', yt: '9n_R4Vfu-bo', tags: ['retro'], note: '' },
    { title: 'Chand Mera Dil | Ah Kya Mahfil Hai | Tum Kya Jano | Mil Gaya Hamko Saathi | Hum Kisise Kum Nahi', artist: 'BondTune Hindi', year: '', yt: 'uyjiK9QCU5U', tags: ['retro'], note: '' },
    { title: 'Solah Baras Ki Baali Umar - Ek Duuje Ke Liye - Kamal Hasan & Rati Agnihotri - Old Hindi Song', artist: 'Rajshri', year: '', yt: '322FOeeonf4', tags: ['retro'], note: '' },
    { title: 'Bekhayali Full Song | Kabir Singh | Shahid K,Kiara A|Sandeep Reddy Vanga | Sachet-Parampara | I', artist: 'T-Series', year: '', yt: 'VOLKJJvfAbg', tags: ['retro'], note: '' },
    { title: 'Sunn Raha Hai Na Tu Aashiqui 2 Full Video Song | Aditya Roy Kapur, Shraddha Kapoor', artist: 'T-Series', year: '', yt: 'eHRrZ5DQCV4', tags: ['retro'], note: '' },
    { title: 'Ae Dil Hai Mushkil - Full Song | Aishwarya | Ranbir | Anushka | @pritam7415 | @Musicrooyt', artist: 'Sony Music India', year: '', yt: 'vUCM_0evdQY', tags: ['retro'], note: '' },
    { title: 'Bulleya – Ae Dil Hai Mushkil | Karan Johar | Aishwarya, Ranbir, Anushka | Pritam | Amit Mishra', artist: 'Sony Music India', year: '', yt: 'hXh35CtnSyU', tags: ['retro'], note: '' },
    { title: 'Sunn Raha Hai Na Tu Aashiqui 2 (Official) Video Song  | Aditya Roy Kapur, Shraddha Kapoor', artist: 'T-Series', year: '', yt: 'tQL-gx7PeBc', tags: ['retro'], note: '' },
    { title: 'Dil Galti Kar Baitha Hai | Meet Bros Ft. Jubin Nautiyal | Mouni Roy | Manoj M | Ashish P | Bhus', artist: 'T-Series', year: '', yt: '1--qqQrimMA', tags: ['retro'], note: '' },
    { title: 'KISHORE KUMAR HIT SONGS LO-FI mix tape | bollywood Puraane gaane but lofi remake', artist: 'Beaulieu Cerene', year: '', yt: 'RJ2fNtLwczk', tags: ['retro'], note: '' },
    { title: 'Jawan: Not Ramaiya Vastavaiya Extended Version (Hindi): Shah Rukh Khan |Atlee |Anirudh |Nayanth', artist: 'T-Series', year: '', yt: 'm3OtL4peEWU', tags: ['party'], note: '' },
    { title: 'Balma Song Khiladi 786 Ft. Akshay Kumar, Asin', artist: 'T-Series', year: '', yt: 'kPmAJPUVY8I', tags: ['party'], note: '' },
    { title: 'Laila Main Laila | Raees | Shah Rukh Khan | Sunny Leone | Pawni Pandey | Ram Sampath', artist: 'Zee Music Company', year: '', yt: '95I5VaR7GeU', tags: ['party'], note: '' },
    { title: 'What Jhumka? | Rocky Aur Rani Kii Prem Kahaani | Ranveer | Alia | Pritam | Amitabh | Arijit | J', artist: 'Saregama Music', year: '', yt: '87JIOAX3njM', tags: ['party'], note: '' },
    { title: 'One Two Three Four Chennai Express Full Video Song | Shahrukh Khan, Deepika Padukone', artist: 'T-Series', year: '', yt: 'W9mrvDWUR9g', tags: ['party'], note: '' },
    { title: 'Swag Se Swagat | Full Song | Tiger Zinda Hai, Salman Khan, Katrina Kaif, Vishal Dadlani, Neha B', artist: 'YRF', year: '', yt: '7TRFf7uUfhQ', tags: ['party'], note: '' },
    { title: 'Lyrical | Ghungroo Full Song | WAR | Hrithik, Vaani, Arijit Singh, Shilpa | Vishal & Shekhar, K', artist: 'YRF', year: '', yt: 'caySD0OJJvk', tags: ['party'], note: '' },
    { title: 'Full Song: Muqabla | Street Dancer 3D |A.R. Rahman, Prabhudeva, Varun D, Shraddha K, Tanishk B', artist: 'T-Series', year: '', yt: 'l75z7FrYRXI', tags: ['party'], note: '' },
    { title: '"Senorita Zindagi Na Milegi Dobara" Full HD Video Song | Farhan Akhtar, Hrithik Roshan, Abhay D', artist: 'T-Series', year: '', yt: 'yDv0WSgXJVg', tags: ['party'], note: '' },
    { title: '3 - Why This Kolaveri Di Official Video | Dhanush | Anirudh Ravichander | Shruti Haasan', artist: 'Sony Music South', year: '', yt: 'YR12Z8f1Dh8', tags: ['party'], note: '' },
    { title: 'Khatouba - Remix | Dj Vk Remix | Asha Bhosle | Alibaba Aur 40 Chor | R D Burman| Zeenat Aman | ', artist: 'DJ VK REMIX', year: '', yt: 'PQ1HaZtZ7bQ', tags: ['party'], note: '' }
  ],
  teesra: [
    { title: 'Main Pal Do Pal Ka Shair Hoon', artist: 'Mukesh', year: '', yt: 'GMLFuNHHB6s', tags: ['ghazal'], note: 'Teesre peg par har koi shayar ban jaata hai.' },
    { title: 'Kuchh To Log Kahenge', artist: 'Kishore Kumar', year: '', yt: 'VATfbq_116I', tags: ['retro'], note: '' },
    { title: 'Aanewala Pal Janewala Hai', artist: 'Kishore Kumar', year: '', yt: 'CyTecJYollY', tags: ['retro'], note: '' },
    { title: 'Pyar Hamen Kis Mod Pe (From "Satte Pe Satta")', artist: 'Kishore Kumar', year: '', yt: '0mXqRqASqhY', tags: ['retro'], note: '' },
    { title: 'Jane Woh Kaise Log The', artist: 'Hemanth Kumar', year: '', yt: '6MoZcTcERB8', tags: ['retro'], note: '' },
    { title: 'Suhana Safar Aur Yeh Mausam', artist: 'Mukesh', year: '', yt: 'Txd0KWKKYdY', tags: ['retro'], note: '' },
    { title: 'Zindagi Kaisi Hai Paheli', artist: 'Manna Dey', year: '', yt: '1JxEV-oGcYg', tags: ['retro'], note: '' },
    { title: 'Kisi Ki Muskurahaton Se', artist: 'Mukesh', year: '', yt: '6_Nmc3lhyVQ', tags: ['retro'], note: '' },
    { title: 'Babuji Dheere Chalna', artist: 'Geeta Dutt', year: '', yt: 'HA8B0XI5XSE', tags: ['retro'], note: 'Babuji dheere chalna — sabse sahi salaah.' },
    { title: 'Hothon Se Chhu Lo Tum (From "Prem Geet")', artist: 'Jagjit Singh', year: '', yt: '31f0mVT2Mvc', tags: ['ghazal'], note: 'Jagjit sahab. Iske baad kuch kehne ki zaroorat nahi.' },
    { title: 'Tu Kal Chala Jayega To Main Kya Karunga (I)|Manhar Udhas,Mohammed Aziz|Naam 1986 Songs | Sanjay', artist: 'Goldmines Gaane Sune Ansune', year: '', yt: 'opVwEZ5080g', tags: ['ghazal'], note: '' },
    { title: 'Namak Halaal - Jawani Janeman Haseen Dilruba - Asha Bhosle', artist: 'Shemaroo', year: '', yt: 'f5bEkgKTZmw', tags: ['party'], note: '' },
    { title: 'Mehbooba Mehbooba | Sholay (1975) | Helen | Amitabh Bachchan | Bollywood Dance Hit Song', artist: 'Shemaroo Filmi Gaane', year: '', yt: 'ByAbV-MKDgs', tags: ['party'], note: '' },
    { title: 'Jhoome Jo Pathaan Song | Shah Rukh Khan, Deepika | Vishal & Sheykhar, Arijit Singh, Sukriti, Ku', artist: 'YRF', year: '', yt: 'YxWlaYCA8MU', tags: ['party'], note: '' },
    { title: 'Milegi Milegi Video Song |  STREE | Mika Singh | Sachin-Jigar | Rajkummar Rao, Shraddha Kapoor', artist: 'T-Series', year: '', yt: '1xYZeDReUz4', tags: ['party'], note: '' },
    { title: 'JAWAN: Not Ramaiya Vastavaiya | Shah Rukh Khan | Atlee | Anirudh | Nayanthara | Vishal D | Shil', artist: 'T-Series', year: '', yt: 'ohS06vkHjLE', tags: ['party'], note: '' },
    { title: 'Show Me The Thumka (Song) Tu Jhoothi Main Makkaar |Ranbir,Shraddha|Pritam|Sunidhi,Shashwat|Amit', artist: 'T-Series', year: '', yt: 'KgpFBdapobY', tags: ['party'], note: '' },
    { title: 'Param Sundari - Full Song | Mimi | Kriti Sanon, Pankaj T | A.R. Rahman | Shreya | Amitabh', artist: 'Sony Music India', year: '', yt: 'nfNc0XJdZWk', tags: ['party'], note: '' },
    { title: 'Tamma Tamma Again | Varun , Alia | Bappi L, Anuradha P | Tanishk, Badshah |  "Badrinath Ki Dulh', artist: 'T-Series', year: '', yt: 'EEX_XM6SxmY', tags: ['party'], note: '' },
    { title: 'Tarzan My Tarzan Aaja Main Sikha Du Pyar | Kimi Katkar | Tarzan | Bollywood Songs HD | Alisha C', artist: 'Shemaroo Filmi Gaane', year: '', yt: '5e5WhGURNJ4', tags: ['party'], note: '' },
    { title: 'Mere Rashke Qamar Tu Ne Pehli Nazar (UNFAK) Remix By Junaid Asghar @Irfan Malik', artist: 'Irfan Malik', year: '', yt: '2nBJ_FFQuLI', tags: ['ghazal', 'party'], note: '' },
    { title: 'Dum Maro Dum|#Remix|1971 songs|Asha Bhosle|R.D Burman|Hare Krishna Hare Ram|Zeenat aman|#Dance ', artist: 'Vizonic India', year: '', yt: 'F0PI6t2Vpx4', tags: ['sharaabi', 'party'], note: '' }
  ],
  aakhri: [
    { title: 'Yeh Kya Hua', artist: 'Kishore Kumar', year: '', yt: 'iZF46F2FlvI', tags: ['retro'], note: '' },
    { title: 'Jab Koi Baat Bigad Jaye', artist: 'The Kumar Sanu Official', year: '', yt: 'hM_cLcRsdc8', tags: ['retro'], note: '' },
    { title: 'Qismat Ki Hawa Kabhi Naram', artist: 'C. Ramchandra', year: '', yt: 'iBsZjE4JLH4', tags: ['retro'], note: '' },
    { title: 'Hamen Tumse Pyar Kitna -kishore Kumar', artist: 'Kishore Kumar', year: '', yt: 'oqUdGfzKHe8', tags: ['retro'], note: '' },
    { title: 'Ek Pyar Ka Naghma Hai - Sad', artist: 'Lata Mangeshkar', year: '', yt: 'sz-wrI1Pg4k', tags: ['retro'], note: '' },
    { title: 'Kya Hua Tera Vada', artist: 'Mohammed Rafi', year: '', yt: 'OnomKR46aP4', tags: ['retro'], note: '' },
    { title: 'Chhalka Yeh Jaam', artist: 'Mohammed Rafi', year: '', yt: 'iWgT21xoJtY', tags: ['sharaabi'], note: 'Aakhri peg, aakhri gaana.' },
    { title: 'Tera Mera Rishta (Original Version)', artist: 'Pritam', year: '', yt: 'XA_uBJjutgc', tags: ['retro'], note: '' },
    { title: 'Chal Mere Bhai Tere Haath Jodta Hoon 4K| Amitabh Bachchan, Rishi Kapoor | Mohammed Rafi | Nasee', artist: 'SuperHit Gaane', year: '', yt: 'aGPWneWwH4U', tags: ['retro'], note: '' },
    { title: 'Log Kehte Hain Main Sharabi Hoon HD Song', artist: 'Salman Barkat', year: '', yt: 'IFTGi_BU39g', tags: ['sharaabi'], note: '' },
    { title: 'Mujhe Peene Ka Shauk Nahi | 4K Video Song | Coolie | Rishi Kapoor, Alka Yagnik | 90s Superhit S', artist: 'media', year: '', yt: '7DgiWQSN-jQ', tags: ['sharaabi'], note: '' },
    { title: 'Thodi Thodi piya karo (Pankaj Udas Sharabi Ghazal)', artist: 'b4u611', year: '', yt: '9STi_IBXRmk', tags: ['sharaabi', 'ghazal'], note: '' },
    { title: 'Zindagi Imtihan Leti Hai 😭🥺 (( Jhankar )) Mukesh, Amitabh Bachchan | Reena Roy, Anwar Hussain', artist: 'Mukesh', year: '', yt: '1S9pSwlW5Oo', tags: ['retro'], note: '' },
    { title: 'mujhko yaaron maaf karna_Main Nashe Mein Hoon1958_RajKapoor& Mala Sinha_Mukesh_Shailendr _a tri', artist: 'mastkalandr', year: '', yt: 'Zeojk4hprwk', tags: ['sharaabi'], note: '' },
    { title: 'Namak Halaal  - Thodi Si Jo Pee Lee Hai Chori - Kishore Kumar - Chorus', artist: 'Shemaroo', year: '', yt: 'ofkL9rbUMEk', tags: ['sharaabi'], note: '' },
    { title: 'Apni To Jaise Taise Kat Jayegi | Amitabh Bachchan | Kishore Kumar | Aapka Kya Hoga | 90s Songs', artist: 'Abhijeet Bharti ', year: '', yt: 'W44RqMnKV88', tags: ['retro'], note: '' },
    { title: 'Alcoholia (Full Video) Vikram Vedha | Hrithik, Saif | Vishal-Sheykhar, Manoj M | Snigdhajit, An', artist: 'T-Series', year: '', yt: 'nZ6o00Z3co4', tags: ['sharaabi'], note: '' },
    { title: 'Thodi Thodi Piya Karo - Pankaj Udhas', artist: 'Vic Patel', year: '', yt: '_vEcs_menUk', tags: ['sharaabi', 'ghazal'], note: '' },
    { title: 'Karaoke Hindi Songs | Mujhko Peena Hai Peene Do | Mohd Aziz | Mithun | Phool Aur Angaar | Hits ', artist: 'Karaoke Hindi Songs', year: '', yt: 'RcnlEbV8HjU', tags: ['sharaabi'], note: '' },
    { title: 'Full Video: Hookah Bar | Khiladi 786 | Akshay Kumar & Asin | Himesh Reshammiya', artist: 'T-Series', year: '', yt: 'b4b1cMVZOUU', tags: ['sharaabi'], note: '' },
    { title: 'Saaki Saaki Full Song | Musafir | Sanjay Dutt | Koena Mitra', artist: 'T-Series', year: '', yt: 'yY2Rd5cxGos', tags: ['sharaabi'], note: '' },
    { title: 'DO PEG MAAR Full Video Song | ONE NIGHT STAND | Sunny Leone | Neha Kakkar | T-Series', artist: 'T-Series', year: '', yt: 'NSXK3fBDD0c', tags: ['sharaabi'], note: '' },
    { title: 'Jehda Nasha(Full Video)An Action Hero | Ayushmann Nora |Tanishk Faridkot Amar IP Singh,Yohani,H', artist: 'T-Series', year: '', yt: '6zf2dNLS-fs', tags: ['sharaabi'], note: '' },
    { title: 'Mujhko Peena Hai Peene Do | Mohd Aziz | Mithun | Sharaab Song', artist: 'Shemaroo Filmi Gaane', year: '', yt: 'Ax5jPATJM1A', tags: ['sharaabi'], note: '' },
    { title: '"Dum Maaro Dum" Full Song | "Deepika Padukone"', artist: 'T-Series', year: '', yt: '_CMBCfxN1lU', tags: ['sharaabi'], note: '' },
    { title: 'Lift Karadey - Adnan Sami | Official Video | Riaz-Ur-Rehman Saghar', artist: 'SonyMusicIndiaVEVO', year: '', yt: 'IU2ttJ73h2Y', tags: ['sharaabi'], note: '' },
    { title: 'Mein Sharabi (Full Video Song) | Cocktail | Deepika Padukone, Saif Ali khan | Yo Yo Honey Singh', artist: 'Sony Music India', year: '', yt: 'uflTkwrd8pA', tags: ['sharaabi'], note: '' },
    { title: 'Drunk N High (Official Video) Mellow D, Aastha Gill | Adah Sharma | Akull | VYRLOriginals | New', artist: 'Universal Music India', year: '', yt: 'ZHKQgmpabD8', tags: ['sharaabi'], note: '' },
    { title: 'Nonstop Daruwala Song MP3 | दर्दभरे शराबी गाने | 70s 80s Old is Gold Hindi Sad Songs Jukebox', artist: 'OLD HINDI SONG पुराने हिंदी गाने', year: '', yt: 'WMdD9pyby7c', tags: ['sharaabi'], note: '' },
    { title: 'Jumma Chumma De De (HD) | Hum 1991 | Amitabh Bachchan, Kimi Katkar | Kavita Krishnamurthy Hits', artist: 'NH Studioz', year: '', yt: '5gTToFIZp-g', tags: ['party'], note: '' },
    { title: '\'Abhi Toh Party Shuru Hui Hai\' Full Video Song | Khoobsurat | Badshah | Sonam Kapoor | Aastha', artist: 'T-Series', year: '', yt: '8LZgzAZ2lpQ', tags: ['party'], note: '' },
    { title: 'Oo Antava Mawa..Oo Oo Antava Video Song (Telugu) | Pushpa Songs | Allu Arjun| DSP |Sukumar |Sam', artist: 'Aditya Music', year: '', yt: 'u_wB6byrl5k', tags: ['party'], note: '' },
    { title: 'JAWAN: Zinda Banda (Hindi): Shah Rukh Khan |Atlee |Anirudh |Nayanthara |Vijay Sethupathi |Deepi', artist: 'T-Series', year: '', yt: 'AQEc4BwX6dk', tags: ['party'], note: '' },
    { title: 'Jawan: Chaleya (Lyrical Video) | Shah Rukh Khan | Nayanthara | Atlee | Anirudh | Arijit S, Shil', artist: 'T-Series', year: '', yt: 'wr9M-CoxP7A', tags: ['party'], note: '' },
    { title: 'Bhool Bhulaiyaa 2 (Title Track) Kartik A, Kiara A, Tabu |Pritam, Tanishk, Neeraj, Anees B, Bhus', artist: 'T-Series', year: '', yt: 'J1rOfVst-EQ', tags: ['party'], note: '' },
    { title: 'Taal Se Taal Mila | A.R Rahman | Alka Yagnik | Udit Narayan | Taal (1999)', artist: '90\'s Gaane', year: '', yt: 'OinGHNpnGtc', tags: ['party'], note: '' },
    { title: 'Ranjithame - Varisu Lyric Song (Tamil) | Thalapathy Vijay | Rashmika | Vamshi Paidipally | Tham', artist: 'T-Series', year: '', yt: 'zuVV9Y55gvc', tags: ['party'], note: '' },
    { title: '"Chammak Challo Ra.One" (video song) ShahRukh Khan,Kareena Kapoor', artist: 'T-Series', year: '', yt: 'lxB-ki-qE64', tags: ['party'], note: '' },
    { title: 'Maari 2 [Telugu] - Rowdy Baby (Video Song) | Dhanush,Sai Pallavi | Yuvan Shankar Raja | Balaji ', artist: 'Divo Music', year: '', yt: 'yUoC5stm05o', tags: ['party'], note: '' },
    { title: 'Crazy Kiya Re | Full Song | Dhoom:2 | Aishwarya Rai, Hrithik Roshan, Sunidhi Chauhan, Pritam, S', artist: 'YRF', year: '', yt: 'J2Bh68GTUOU', tags: ['party'], note: '' }
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

  /* You */
  curator: 'Vibhu Gupta',
  role: 'AI Engineer',
  photo: '/assets/vibhu.jpg',        // 256px web copy of assets/vibhu.jpeg
  x: 'VibhuGupta1508',
  portfolio: '[https://your-portfolio-url]',   // <-- paste your portfolio link
  whatsapp: 'https://chat.whatsapp.com/HukkXRYTpF0HkcVaKc7LTE',

  shareText: 'Aaj raat ki mehfil — do peg, teen ghazal, subah tak.',

  ytMusicPlaylist: 'https://music.youtube.com/playlist?list=PLUUbNeVBmV3E',
  spotifyPlaylist: null,

  presenceEndpoint: null,
  tracksEndpoint: null,
  newSongsPeg: 'pehla',

  about: [
    'Mehfil ek purani baithak hai — takht, gaddi, harmonium, ek bulb, aur raat bhar chalti baatein. Yahan ghazal hai, shayari hai, aur woh khaamoshi jo do gaano ke beech aati hai.',
    'Dil se ye purani baithak hai — ghar ki chhat, dost ka kamra, ek purana ustad. Party wale gaane bhi hain, magar apne alag tab me, jab mehfil se mann bhar jaye. Ghar yahi hai.',
    'Har gaana YouTube par uske apne channel se chalta hai. Hum kuch host nahi karte.'
  ],
  aboutWarn: 'Peeyo, magar sambhal ke. Gaadi mat chalana. 21+'
};
