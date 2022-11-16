const config = document.getElementById("eight-dollars-settings");
const data = JSON.parse(config.innerText);

const MEME_MODE = data.memeMode;
const SUS_MODE = data.susMode;
const TEXT_ENABLED = data.textEnabled;
const REMOVE_TWITTER_BLUE_VERIFICATION = data.removeBlueVerification;
const TEXT_VERIFIED_LABEL = data.textOptions?.verifiedLabel || "";
const TEXT_TWITTER_BLUE_LABEL = data.textOptions?.twitterBlueLabel || "";
const TEXT_ENABLE_BORDER = data.textOptions?.enableBorder ?? true;

const VERIFIED_ACCOUNT_ARIA_LABEL_I18N = {
  'ar-x-fm': 'حساب موَثَّق',
  ar: 'حساب موَثَّق',
  bg: 'Потвърден профил',
  bn: 'যাচাইকৃত অ্যাকাউন্ট',
  ca: 'Compte verificat',
  cs: 'Ověřený účet',
  da: 'Verificeret konto',
  de: 'Verifizierter Account',
  el: 'Επαληθευμένος λογαριασμός',
  'en-gb': 'Verified account',
  en: 'Verified account',
  es: 'Cuenta verificada',
  eu: 'Egiaztatutako kontua',
  fa: 'حساب تاییدشده',
  fi: 'Varmennettu tili',
  fil: 'Beripikadong account',
  fr: 'Compte certifié',
  ga: 'Cuntas deimhnithe',
  gl: 'Conta verificada',
  gu: 'ચકાસાયેલું એકાઉન્ટ',
  he: 'חשבון מאומת',
  hi: 'सत्यापित खाता',
  hr: 'Potvrđeni račun',
  hu: 'Hitelesített felhasználó',
  id: 'Akun terverifikasi',
  it: 'Account verificato',
  ja: '認証済みアカウント',
  kn: 'ಪರಿಶೀಲಿಸಿದ ಖಾತೆ',
  ko: '인증된 계정',
  mr: 'खाते सत्यापित केले',
  ms: 'Akaun Disahkan',
  nb: 'Verifisert konto',
  nl: 'Geverifieerd account',
  pl: 'Zweryfikowane konto',
  pt: 'Conta verificada',
  ro: 'Cont verificat',
  ru: 'Подлинная учетная запись',
  sk: 'Overený účet',
  sr: 'Потврђен налог',
  sv: 'Verifierat konto',
  ta: 'சரிபார்க்கப்பட்ட கணக்கு',
  th: 'บัญชีที่ยืนยันแล้ว',
  tr: 'Onaylanmış hesap',
  uk: 'Підтверджений профіль',
  ur: 'تصدیق شدہ اکاؤنٹ',
  vi: 'Tài khoản đã xác nhận',
  'zh-hant': '已認證的帳戶',
  zh: '认证账号'
}
const PROVIDES_DETAILS_ARIA_LABEL_I18N = {
  'ar-x-fm': 'لتوفير تفاصيل حول الحسابات الموثّقة.',
  ar: 'لتوفير تفاصيل حول الحسابات الموثّقة.',
  bg: 'Дава подробности за потвърдените профили.',
  bn: 'যাচাই করা অ্যাকাউন্ট সম্পর্কে বিশদ বিবরণ দিন।',
  ca: 'Proporciona informació sobre els comptes verificats.',
  cs: 'Poskytuje podrobnosti o ověřených účtech.',
  da: 'Giver oplysninger om verificerede konti.',
  de: 'Gibt Details über verifizierte Accounts an.',
  el: 'Παρέχει λεπτομέρειες σχετικά με τους επαληθευμένους λογαριασμούς.',
  'en-gb': 'Provides details about verified accounts.',
  en: 'Provides details about verified accounts.',
  es: 'Proporciona detalles sobre las cuentas verificadas.',
  eu: 'Egiaztatutako kontuei buruzko xehetasunak ematen ditu.',
  fa: 'جزئیاتی درباره حساب‌های کاربری تأییدشده ارائه می‌دهد.',
  fi: 'Tarkempia tietoja varmennetuista tileistä.',
  fil: 'Nagbibigay ng mga detalye tungkol sa mga beripikadong account.',
  fr: 'Donne des détails sur les comptes certifiés.',
  ga: 'Soláthraítear sonraí maidir le cuntais dheimhnithe.',
  gl: 'Fornece detalles sobre contas verificadas.',
  gu: 'ચકાસાયેલ એકાઉન્ટ વિષે વિગતો આપે છે.',
  he: 'מידע לגבי חשבונות מאומתים.',
  hi: 'सत्यापित खातों के विवरण प्रदान करें.',
  hr: 'Daje podatke o potvrđenim računima.',
  hu: 'További részletek az ellenőrzött felhasználói fiókokkal kapcsolatban.',
  id: 'Memberikan detail tentang akun terverifikasi.',
  it: 'Fornisce dettagli sugli account verificati.',
  ja: '認証済みアカウントについての詳細が表示されます。',
  kn: 'ಪರಿಶೀಲಿಸಿದ ಖಾತೆಗಳ ಬಗ್ಗೆ ವಿವರಗಳನ್ನು ಒದಗಿಸುತ್ತದೆ.',
  ko: '인증된 계정에 대한 세부 정보를 제공합니다.',
  mr: 'सत्यापित खात्यांविषयी तपशील दिला जातो.',
  ms: 'Menyediakan butiran tentang akaun disahkan.',
  nb: 'Gir detaljert informasjon om verifiserte kontoer.',
  nl: 'Verstrekt informatie over geverifieerde accounts.',
  pl: 'Więcej informacji na temat weryfikacji kont.',
  pt: 'Dá detalhes sobre contas verificadas.',
  ro: 'Oferă detalii despre conturile verificate.',
  ru: 'Объясняет, что такое подлинные учетные записи.',
  sk: 'Poskytne podrobnosti o overených účtoch.',
  sr: 'Наводи детаље о потврђеним налозима.',
  sv: 'Ger information om verifierade konton.',
  ta: 'சரிபார்க்கப்பட்ட கணக்குகள் பற்றிய விவரங்களை வழங்குகிறது.',
  th: 'ระบุรายละเอียดเกี่ยวกับบัญชีที่ยืนยันแล้ว',
  tr: 'Onaylanmış hesaplar hakkında ayrıntılı bilgi verir.',
  uk: 'Надає відомості про підтверджені профілі.',
  ur: 'تصدیق شدہ اکاؤنٹس کے متعلق تفصیلات فراہم کریں۔',
  vi: 'Cung cấp thông tin chi tiết về tài khoản đã xác minh.',
  'zh-hant': '提供已認證帳戶的詳細資料。',
  zh: '提供已验证账号的详细信息。'
}

const lang = document.documentElement.lang.toLowerCase()
const VERIFIED_ACCOUNT_ARIA_LABEL = VERIFIED_ACCOUNT_ARIA_LABEL_I18N[lang] || VERIFIED_ACCOUNT_ARIA_LABEL_I18N.en
const PROVIDES_DETAILS_ARIA_LABEL = PROVIDES_DETAILS_ARIA_LABEL_I18N[lang] || PROVIDES_DETAILS_ARIA_LABEL_I18N.en

const COMIC_SANS_BLUE_DOLLAR_SVG = (isAriaLabel, className) => `<svg class="${className}" ${isAriaLabel ? `aria-label="${VERIFIED_ACCOUNT_ARIA_LABEL}"` : ''} ${isAriaLabel ? `data-eight-dollars-original-classes="${className}"` : ''} width="24" height="24" viewBox="0 0 24 24" data-eight-dollars-status="blueVerified" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22.25 12C22.25 10.57 21.37 9.33 20.06 8.66C20.52 7.27 20.26 5.76 19.25 4.75C18.24 3.74 16.73 3.48 15.34 3.94C14.68 2.63 13.43 1.75 12 1.75C10.57 1.75 9.33 2.63 8.67 3.94C7.27 3.48 5.76 3.74 4.75 4.75C3.74 5.76 3.49 7.27 3.95 8.66C2.64 9.33 1.75 10.57 1.75 12C1.75 13.43 2.64 14.67 3.95 15.34C3.49 16.73 3.74 18.24 4.75 19.25C5.76 20.26 7.27 20.51 8.66 20.06C9.33 21.37 10.57 22.25 12 22.25C13.43 22.25 14.68 21.37 15.34 20.06C16.73 20.51 18.24 20.26 19.25 19.25C20.26 18.24 20.52 16.73 20.06 15.34C21.37 14.67 22.25 13.43 22.25 12Z" fill="#1D9BF0"/>
<path d="M11.3339 10.3033V7.58999C10.1557 7.96788 9.56661 8.55235 9.56661 9.34341C9.56661 9.83215 10.1557 10.1521 11.3339 10.3033ZM12.9147 11.898V15.8281C13.5423 15.6467 14.0663 15.3796 14.4867 15.0269C14.9544 14.6238 15.1883 14.188 15.1883 13.7194C15.1883 12.8427 14.4304 12.2356 12.9147 11.898ZM12.9147 4.64242V5.9197H12.9503C13.5186 5.9197 14.167 6.00283 14.8952 6.16911C15.8484 6.38577 16.325 6.66289 16.325 7.00047C16.325 7.44387 16.0616 7.66556 15.5346 7.66556C15.2978 7.66556 14.8804 7.61266 14.2824 7.50685C13.6903 7.396 13.2345 7.3431 12.9147 7.34813V10.4242C14.2232 10.525 15.2475 10.8903 15.9876 11.5201C16.6625 12.1046 17 12.81 17 13.6363C17 14.649 16.5885 15.488 15.7655 16.153C15.0373 16.7375 14.087 17.123 12.9147 17.3094V19.3198C12.9147 19.5163 12.8378 19.6775 12.6838 19.8035C12.5358 19.9345 12.3464 20 12.1155 20C11.5944 20 11.3339 19.7783 11.3339 19.3349V17.4077C8.44464 17.3724 7 16.735 7 15.4955C7 15.042 7.24571 14.8153 7.73712 14.8153C8.01539 14.8153 8.28182 14.9085 8.53641 15.0949C8.91533 15.3721 9.20249 15.5535 9.39787 15.6391C9.87152 15.8407 10.5169 15.9565 11.3339 15.9868V11.7015H11.2629C10.3452 11.6712 9.55181 11.4798 8.88277 11.1271C8.05388 10.6937 7.63943 10.0916 7.63943 9.32074C7.63943 8.63045 8.01835 7.98048 8.7762 7.37081C9.47484 6.80649 10.3274 6.39584 11.3339 6.13888V4.68777C11.3339 4.49126 11.4109 4.32751 11.5648 4.1965C11.7247 4.0655 11.9201 4 12.151 4C12.6602 4 12.9147 4.21414 12.9147 4.64242Z" fill="white"/>
</svg>`;

const REGULAR_BLUE_DOLLAR_SVG = (isAriaLabel, className) => `<svg class="${className}" ${isAriaLabel ? `aria-label="${VERIFIED_ACCOUNT_ARIA_LABEL}"` : ''} ${isAriaLabel ? `data-eight-dollars-original-classes="${className}"` : ''} width="24px" height="24px" viewBox="0 0 24 24" data-eight-dollars-status="blueVerified" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<path d="M22.25,12 C22.25,10.57 21.37,9.33 20.06,8.66 C20.52,7.27 20.26,5.76 19.25,4.75 C18.24,3.74 16.73,3.48 15.34,3.94 C14.68,2.63 13.43,1.75 12,1.75 C10.57,1.75 9.33,2.63 8.67,3.94 C7.27,3.48 5.76,3.74 4.75,4.75 C3.74,5.76 3.49,7.27 3.95,8.66 C2.64,9.33 1.75,10.57 1.75,12 C1.75,13.43 2.64,14.67 3.95,15.34 C3.49,16.73 3.74,18.24 4.75,19.25 C5.76,20.26 7.27,20.51 8.66,20.06 C9.33,21.37 10.57,22.25 12,22.25 C13.43,22.25 14.68,21.37 15.34,20.06 C16.73,20.51 18.24,20.26 19.25,19.25 C20.26,18.24 20.52,16.73 20.06,15.34 C21.37,14.67 22.25,13.43 22.25,12 Z" id="Path" fill="#1D9BF0" fill-rule="nonzero"></path>
<path d="M13.8953012,9.17414679 C13.7123981,8.90893727 13.4677652,8.7146027 13.1614025,8.5911431 C12.8550397,8.46768349 12.532673,8.40595369 12.1943022,8.40595369 C11.9931088,8.40595369 11.7987742,8.42881658 11.6112985,8.47454236 C11.4238228,8.52026814 11.2546374,8.59342938 11.1037424,8.6940261 C10.9528473,8.79462282 10.831674,8.92494129 10.7402224,9.08498152 C10.6487709,9.24502175 10.6030451,9.43478374 10.6030451,9.65426748 C10.6030451,9.9834931 10.7173595,10.2349849 10.9459884,10.4087429 C11.1746173,10.5825008 11.4581172,10.7333959 11.7964879,10.8614281 C12.1348587,10.9894603 12.5052375,11.1129199 12.9076244,11.2318069 C13.3100113,11.3506939 13.6803901,11.5153067 14.0187608,11.7256453 C14.3571316,11.9359839 14.6406315,12.2149112 14.8692604,12.5624271 C15.0978893,12.909943 15.2122037,13.3717734 15.2122037,13.9479182 C15.2122037,14.4691921 15.1161796,14.9241636 14.9241313,15.3128328 C14.732083,15.7015019 14.4737324,16.0238686 14.1490793,16.279933 C13.8244263,16.5359974 13.4471886,16.7280457 13.0173663,16.8560778 C12.5875439,16.98411 12.1348587,17.0481261 11.6593106,17.0481261 C11.0557303,17.0481261 10.4750129,16.9475294 9.91715837,16.746336 C9.35930385,16.5451425 8.87918316,16.2067718 8.4767963,15.7312237 L9.77998103,14.4691921 C9.99031962,14.7892726 10.2669606,15.0384781 10.6099039,15.2168086 C10.9528473,15.3951392 11.3163672,15.4843044 11.7004638,15.4843044 C11.9016572,15.4843044 12.1028507,15.456869 12.3040441,15.401998 C12.5052375,15.3471271 12.6881406,15.2648207 12.8527535,15.1550788 C13.0173663,15.045337 13.149971,14.9058733 13.2505677,14.7366879 C13.3511645,14.5675026 13.4014628,14.373168 13.4014628,14.1536842 C13.4014628,13.7970232 13.2871484,13.5226685 13.0585195,13.3306202 C12.8298906,13.1385719 12.5463907,12.9762454 12.20802,12.8436406 C11.8696492,12.7110359 11.4992704,12.58529 11.0968835,12.466403 C10.6944966,12.3475159 10.3241178,12.1851894 9.98574704,11.9794234 C9.64737627,11.7736574 9.36387643,11.4993027 9.13524753,11.1563594 C8.90661863,10.813416 8.79230418,10.3538719 8.79230418,9.77772709 C8.79230418,9.27474351 8.89518719,8.8403486 9.1009532,8.47454236 C9.30671921,8.10873612 9.57650131,7.80465968 9.9102995,7.56231304 C10.2440977,7.31996641 10.625908,7.13934958 11.0557303,7.02046255 C11.4855526,6.90157552 11.9245201,6.84213201 12.3726328,6.84213201 C12.8847615,6.84213201 13.3808862,6.91986583 13.8610069,7.07533349 C14.3411276,7.23080114 14.7732362,7.48686551 15.1573328,7.84352659 L13.8953012,9.17414679 Z" id="Path" fill="#FFFFFF" fill-rule="nonzero"></path>
<polygon id="Path" fill="#FFFFFF" fill-rule="nonzero" points="12.4306693 5.98530124 12.4306693 18.0146988 11.375459 18.0146988 11.375459 5.98530124"></polygon>
</svg>`

const AMOGUS_SVG = (isAriaLabel, className) => `<svg class="${className}" ${isAriaLabel ? `aria-label="${VERIFIED_ACCOUNT_ARIA_LABEL}"` : ''} ${isAriaLabel ? `data-eight-dollars-original-classes="${className}"` : ''} width="24" height="24" viewBox="0 0 32 32" data-eight-dollars-status="blueVerified" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M 25.155922,9.9006893 C 24.659006,8.9142186 23.808726,8.5093238 23.109363,7.7363431 22.45049,7.0075328 22.008785,6.1057219 21.261571,5.4542094 20.322951,4.6333775 19.148757,4.1659081 17.908306,4.062844 16.575836,3.9487379 15.239683,3.9855456 13.914571,4.2100784 12.924422,4.3793981 12.044696,4.780612 11.363736,5.5425503 10.796884,6.1793389 10.454564,6.9339154 10.207948,7.7400241 10.057026,8.2406211 9.9392443,8.7485797 9.8472226,9.2639005 c -0.055219,0.3055112 0.00375,1.0895345 -0.3460017,1.2294075 -0.3607236,0.143553 -1.0784922,-0.05521 -1.5091517,0.04049 -0.9533439,0.209809 -1.6011753,0.743534 -1.8441112,1.722643 -0.1803626,0.72881 -0.2871077,1.468664 -0.3717671,2.215878 -0.1214688,1.10426 -0.1914048,2.21588 -0.2061283,3.3275 -0.014687,1.229405 0.014687,2.455134 0.2613407,3.669817 0.2245328,1.118982 0.890769,1.829389 1.9508566,2.197473 0.5153202,0.18036 1.0527264,0.261341 1.5974938,0.257661 0.1214687,0 0.1582759,0.02945 0.1693195,0.154594 0.06625,0.72145 0.139875,1.439216 0.2834266,2.149621 0.080984,0.412258 0.1656398,0.824515 0.3864912,1.1926 1.122662,1.84411 3.725027,2.072324 5.296756,0.684641 0.496916,-0.438023 0.669917,-1.082173 0.728811,-1.774175 0.06625,-0.776661 -0.01838,-1.6159 0.04417,-2.285813 0.01837,-0.187732 0.01484,-0.187732 0.206128,-0.132517 0.63679,0.184035 0.857641,0.125157 0.879726,0.80611 0.01484,0.441702 0,0.879727 0.06258,1.317747 0.128829,0.887088 0.544767,1.623258 1.446577,1.891962 1.310388,0.390171 3.890671,0.552129 4.225628,-1.266215 0.09573,-0.519002 0.184055,-1.034322 0.268705,-1.553322 0.161959,-0.990153 0.298149,-1.987667 0.426978,-2.981498 0.147235,-1.130025 0.276066,-2.26005 0.298152,-3.401119 0.02576,-1.420811 0.0038,-2.841622 -0.08464,-4.262434 -0.01484,-0.235575 0.04418,-0.379128 0.235575,-0.530043 1.310387,-1.030643 1.645343,-2.550838 0.901812,-4.0342253 z M 9.5159443,12.028226 c -0.058891,0.828194 -0.1104225,1.656389 -0.1435469,2.484583 -0.036812,0.894447 -0.055219,1.788897 -0.058891,2.683346 -0.011088,1.730008 0.022079,3.46001 0.1141087,5.186333 0.00375,0.05889 0.040485,0.136187 -0.073626,0.132516 C 8.7613734,22.489223 8.1945202,22.393535 7.6939232,22.036488 7.3736887,21.808274 7.2853483,21.465954 7.2154108,21.116273 7.0387294,20.269674 6.9982403,19.408353 6.9908779,18.547033 c 0,-0.143547 0,-0.287108 0,-0.430662 -0.00375,-1.06377 0.062577,-2.127536 0.1656396,-3.187625 0.080985,-0.798743 0.1803627,-1.59381 0.3791298,-2.374151 0.077298,-0.29815 0.2650217,-0.482194 0.544767,-0.574215 0.4380223,-0.147234 0.8907675,-0.121475 1.3435144,-0.09202 0.088344,0.0038 0.095702,0.0589 0.092016,0.139875 z m 13.1149067,7.818151 c -0.0773,1.107938 -0.242938,2.208515 -0.393851,3.309092 -0.143563,1.026959 -0.309193,2.05024 -0.485875,3.069838 -0.03681,0.206128 -0.121475,0.320235 -0.316552,0.386491 -0.482193,0.165636 -0.97175,0.158285 -1.468666,0.103062 -0.268701,-0.02945 -0.533722,-0.08834 -0.791384,-0.180358 -0.150906,-0.05521 -0.246617,-0.143548 -0.287106,-0.309193 -0.13989,-0.566852 -0.143563,-1.137385 -0.06994,-1.711601 0.03681,-0.268703 0.04418,-0.268703 0.312874,-0.320233 0.397534,-0.07362 0.772983,-0.195082 1.085854,-0.46379 0.239255,-0.209808 0.390173,-0.47115 0.478511,-0.80611 -1.001193,0.357045 -1.954537,0.154594 -2.907879,-0.103062 -0.474832,-0.128844 -0.945981,-0.283426 -1.420813,-0.41962 -0.250298,-0.07361 -0.507957,-0.117788 -0.7693,-0.02576 -0.360723,0.128828 -0.51532,0.419618 -0.59998,0.765617 -0.125157,0.507961 -0.158284,1.030642 -0.187732,1.549643 -0.03681,0.680959 -0.06256,1.361919 -0.06256,2.042879 0,0.06994 -0.02576,0.121475 -0.06994,0.169311 -1.056408,1.126345 -2.425687,0.795068 -3.194987,-0.143547 -0.202438,-0.246611 -0.224524,-0.570528 -0.279736,-0.872359 -0.206128,-1.148429 -0.290788,-2.31158 -0.357044,-3.474731 -0.117781,-1.972941 -0.147234,-3.949564 -0.117781,-5.922505 0.02209,-1.49075 0.08098,-2.981499 0.209809,-4.464885 0.09201,-1.038003 0.195086,-2.076006 0.419619,-3.0956044 0.117775,-0.5337249 0.279745,-1.0564072 0.500597,-1.5570042 0.46747,-1.0453645 1.269896,-1.6232595 2.388878,-1.792579 1.163152,-0.1730015 2.337347,-0.1877251 3.50418,-0.1141075 1.236768,0.077299 2.271092,0.6257464 3.091922,1.5643659 0.03312,0.040489 0.08099,0.069936 0.08468,0.1398719 -0.239256,-0.022082 -0.474831,-0.051531 -0.710408,-0.062575 -1.137385,-0.062575 -2.249005,0.106745 -3.34222,0.4085755 -0.493237,0.1361921 -0.968066,0.3165541 -1.45026,0.4858735 -0.353362,0.1251515 -0.611022,0.3533627 -0.831875,0.6441506 -0.467469,0.6147039 -0.699362,1.3177483 -0.743535,2.0870487 -0.04786,0.835555 0.09938,1.641664 0.386493,2.422006 0.360723,0.964386 1.100577,1.5386 2.020793,1.91773 0.677278,0.276064 1.384002,0.404894 2.112812,0.449064 1.420814,0.08465 2.801136,-0.114113 4.133609,-0.611023 0.09938,-0.03681 0.128843,-0.02208 0.132516,0.08465 0.05889,1.615899 0.114112,3.235478 -0.0038,4.851373 z m 1.001194,-7.251298 c -0.489554,0.496916 -1.096898,0.798747 -1.741048,1.030641 -0.942297,0.33864 -1.921409,0.500598 -3.176581,0.496916 -0.537407,-0.0038 -1.306707,-0.0957 -2.039199,-0.415937 -0.408573,-0.180363 -0.802424,-0.404895 -0.99383,-0.81347 -0.4233,-0.89813 -0.581578,-1.84043 -0.272385,-2.815858 0.02945,-0.095703 0.07363,-0.1877234 0.1178,-0.276065 0.128827,-0.2650219 0.312872,-0.4527458 0.611022,-0.5594908 1.122664,-0.4048949 2.26005,-0.7104063 3.460009,-0.7324914 1.130027,-0.022086 2.204835,0.1766814 3.16186,0.8061087 0.618385,0.4048945 1.093217,0.9312575 1.2883,1.6637485 0.173008,0.614704 0.03682,1.159472 -0.415938,1.615898 z" fill="#1D9BF0"/>
</svg>`;

const REGULAR_BLUE_CHECK_SVG = (isAriaLabel, className) => `<svg viewBox="0 0 24 24" ${isAriaLabel ? `aria-label="${VERIFIED_ACCOUNT_ARIA_LABEL}"` : ''} ${isAriaLabel ? `data-eight-dollars-original-classes="${className}"` : ''} role="img" data-eight-dollars-status="verified" class="${className}"><g><path d="M22.25 12c0-1.43-.88-2.67-2.19-3.34.46-1.39.2-2.9-.81-3.91s-2.52-1.27-3.91-.81c-.66-1.31-1.91-2.19-3.34-2.19s-2.67.88-3.33 2.19c-1.4-.46-2.91-.2-3.92.81s-1.26 2.52-.8 3.91c-1.31.67-2.2 1.91-2.2 3.34s.89 2.67 2.2 3.34c-.46 1.39-.21 2.9.8 3.91s2.52 1.26 3.91.81c.67 1.31 1.91 2.19 3.34 2.19s2.68-.88 3.34-2.19c1.39.45 2.9.2 3.91-.81s1.27-2.52.81-3.91c1.31-.67 2.19-1.91 2.19-3.34zm-11.71 4.2L6.8 12.46l1.41-1.42 2.26 2.26 4.8-5.23 1.47 1.36-6.2 6.76z" style="fill: "#1D9BF0";"></path></g></svg>`;

function getOriginalClasses(elm) {
  if (elm.dataset.eightDollarsOriginalClasses) {
    return elm.dataset.eightDollarsOriginalClasses;
  }
  return [...elm.classList].join(" ")
}

function changeVerified(prependHTML, elm, isSmall, isIndeterminate) {
  if (elm.dataset.eightDollarsStatus === 'verified') {
    // already replaced this element
    return
  }

  // hide if believe there's bad data
  if (isIndeterminate) {
    elm.style.display = 'none';
    elm.setAttribute('data-eight-dollars-status', 'verified');
    return;
  }

  const small = REGULAR_BLUE_CHECK_SVG(true, getOriginalClasses(elm));
  const smallInnerElement = REGULAR_BLUE_CHECK_SVG(false, getOriginalClasses(elm));
  const big =  `
    <span style='margin-left: 0.25rem; display: flex; flex-direction: row; align-items: center;${TEXT_ENABLE_BORDER ? ` border-radius: 120px; border: 1px solid #536471;`: ``} padding: 0.1rem 0.4rem 0.1rem 0.2rem; gap: ${TEXT_VERIFIED_LABEL ? 0.2 : 0}rem;' aria-label="${VERIFIED_ACCOUNT_ARIA_LABEL}" data-eight-dollars-status="verified" data-eight-dollars-original-classes="${getOriginalClasses(elm)}">
      ${smallInnerElement}
      <p style=' font-size: 0.8rem; margin: 0; font-weight: 600;'>${TEXT_VERIFIED_LABEL}</p>
    </span>`;
  try {
    if (prependHTML !== "") {
      // Ideally, we wouldn't mutate the parent element, because those 2 styles won't be managed by us further on.
      // That is, if the `aria-label`-selected element changes, the parent styles won't be properly updated.
      // This approach is tolerable, because it's unlikely that a `aria-label`-selected element changes from a
      // "React text node(s) + React element node" sibling configuration to a "single React element node" sibling configuration.
      elm.parentElement.style.display = "inline-flex";
      elm.parentElement.style.alignItems = "center";  
    }
    if (isSmall || !TEXT_ENABLED) {
      elm.parentElement.innerHTML = `${prependHTML}${small}`;
    } else {
      elm.parentElement.innerHTML = `${prependHTML}${big}`;
    }
  } catch (e) {
    console.error('error changing verified', e);
  }
}

function changeBlueVerified(prependHTML, elm, isSmall) {
  if (elm.dataset.eightDollarsStatus === 'blueVerified') {
    // already replaced this element
    return
  }

  if (REMOVE_TWITTER_BLUE_VERIFICATION) {
    elm.style.display = 'none';
    elm.setAttribute('data-eight-dollars-status', 'blueVerified');
    return;
  }

  const small = MEME_MODE ? `${COMIC_SANS_BLUE_DOLLAR_SVG(true, getOriginalClasses(elm))}` : SUS_MODE ? `${AMOGUS_SVG(true, getOriginalClasses(elm))}` : `${REGULAR_BLUE_DOLLAR_SVG(true, getOriginalClasses(elm))}`
  const smallInnerElement = MEME_MODE ? `${COMIC_SANS_BLUE_DOLLAR_SVG(false, getOriginalClasses(elm))}` : SUS_MODE ? `${AMOGUS_SVG(false, getOriginalClasses(elm))}` : `${REGULAR_BLUE_DOLLAR_SVG(false, getOriginalClasses(elm))}`
  const big = `
    <span style='margin-left: 0.25rem; display: flex; flex-direction: row; align-items: center;${TEXT_ENABLE_BORDER ? ` border-radius: 120px; border: 1px solid #536471;`: ``} padding: 0.1rem 0.4rem 0.1rem 0.2rem; gap: ${TEXT_TWITTER_BLUE_LABEL ? 0.2 : 0}rem;' aria-label="${VERIFIED_ACCOUNT_ARIA_LABEL}" data-eight-dollars-status="blueVerified" data-eight-dollars-original-classes="${getOriginalClasses(elm)}">
      ${smallInnerElement}
      <p style=' font-size: 0.8rem; margin: 0; font-weight: 600;'>${TEXT_TWITTER_BLUE_LABEL}</p>
    </span>`
  try {
    if (prependHTML !== "") {
      // Ideally, we wouldn't mutate the parent element, because those 2 styles won't be managed by us further on.
      // That is, if the `aria-label`-selected element changes, the parent styles won't be properly updated.
      // This approach is tolerable, because it's unlikely that a `aria-label`-selected element changes from a
      // "React text node(s) + React element node" sibling configuration to a "single React element node" sibling configuration.
      elm.parentElement.style.display = "inline-flex";
      elm.parentElement.style.alignItems = "center";  
    }
    if (isSmall || !TEXT_ENABLED) {
      elm.parentElement.innerHTML = `${prependHTML}${small}`;
    } else {
      elm.parentElement.innerHTML = `${prependHTML}${big}`;
    }
  } catch (e) {
    console.error('error changing blue verified', e);
  }
}

const BLUE_CHECK_PATTERN_NEW = `:not([aria-label="${PROVIDES_DETAILS_ARIA_LABEL}"]) > [aria-label="${VERIFIED_ACCOUNT_ARIA_LABEL}"]`
const BLUE_CHECK_PATTERN_PROVIDE_DETAILS = `[aria-label="${PROVIDES_DETAILS_ARIA_LABEL}"]`

function querySelectorAllIncludingMe(node, selector) {
  if (node.matches(selector)) {
    return [node]
  }
  return [...node.querySelectorAll(selector)]
}

function getPreviusSiblingsOuterHTML(node) {
  let prev = node.previousElementSibling;
  let html = [];
  while (prev) {
    html.push(prev.outerHTML);
    prev = prev.previousElementSibling;
  }
  return html.reverse().join('');
}

// From https://stackoverflow.com/a/74240138/2230249
function getReactProps(parent, target) {
  const keyof_ReactProps = Object.keys(parent).find(k => k.startsWith("__reactProps$"));
  const symof_ReactFragment = Symbol.for("react.fragment");

  // Find the path from target to parent
  let path = [];
  let elem = target;
  while (elem !== parent) {
      let index = 0;
      for (let sibling = elem; sibling != null;) {
          if (sibling[keyof_ReactProps]) index++;
          sibling = sibling.previousElementSibling;
      }
      path.push({ child: elem, index });
      elem = elem.parentElement;
  }
  // Walk down the path to find the react state props
  let state = elem[keyof_ReactProps];
  for (let i = path.length - 1; i >= 0 && state != null; i--) {
      // Find the target child state index
      let childStateIndex = 0, childElemIndex = 0;
      while (childStateIndex < state.children.length) {
          let childState = state.children[childStateIndex];
          if (childState instanceof Object) {
              // Fragment children are inlined in the parent DOM element
              let isFragment = childState.type === symof_ReactFragment && childState.props.children.length;
              childElemIndex += isFragment ? childState.props.children.length : 1;
              if (childElemIndex === path[i].index) break;
          }
          childStateIndex++;
      }
      let childState = state.children[childStateIndex] ?? (childStateIndex === 0 ? state.children : null);
      state = childState?.props;
      elem = path[i].child;
  }
  return state;
}

function checkIfSmall(node) {
  let parent = node.parentElement;
  while (parent) {
    if (parent.getAttribute('aria-label') === 'Who to follow') {
      return true
    }
    if (parent.dataset.testid === 'SpaceDockExpanded') {
      return true
    }
    if (parent.dataset.testid === 'typeaheadRecentSearchesItem') {
      return true
    }
    if (parent.dataset.testid === 'DMDrawer') {
      return true
    }
    parent = parent.parentElement;
  }
  return false
}
function checkIfKnownBadData(node) {
  let parent = node.parentElement;
  while (parent) {
    // Twitter Spaces is known to give bad data
    // in particular, when user purchased the $8 checkmark
    // not only isBlueVerified is true, but isVerified is true as well
    if (parent.dataset.testid === 'SpaceDockExpanded') {
      return true
    }
    parent = parent.parentElement;
  }
  return false
}

const trackingBlueChecks = new Set()
const trackingBlueChecksProvidesDetails = new Set()

function evaluateBlueCheck() {
  for (const blueCheckComponent of trackingBlueChecks.values()) {
    try {
      const nestedProps = getReactProps(blueCheckComponent.parentElement.parentElement.parentElement, blueCheckComponent)

      if (!nestedProps) {
        // some components don't have nested props,
        // so we can't do anything with them

        const propsToLookInto = getReactProps(blueCheckComponent.parentElement.parentElement, blueCheckComponent.parentElement)
        const elementChild = propsToLookInto?.children.find(child => child.$$typeof === Symbol.for('react.element'))
        const nestedProps = elementChild?.props

        if (!nestedProps) {
          continue
        }

        const isSmall = checkIfSmall(blueCheckComponent)
        const isKnownBadData = checkIfKnownBadData(blueCheckComponent)
        const prependHTML = getPreviusSiblingsOuterHTML(blueCheckComponent)

        if (isKnownBadData && nestedProps.isVerified && nestedProps.isBlueVerified) {
          changeVerified(prependHTML, blueCheckComponent, isSmall, true);
        } else if (nestedProps.isVerified) {
          changeVerified(prependHTML, blueCheckComponent, isSmall, false);
        } else if (nestedProps.isBlueVerified) {
          changeBlueVerified(prependHTML, blueCheckComponent, isSmall, false);
        }
        continue
      }

      const isSmall = checkIfSmall(blueCheckComponent)
      const isKnownBadData = checkIfKnownBadData(blueCheckComponent)

      if (isKnownBadData && nestedProps.isVerified && nestedProps.isBlueVerified) {
        changeVerified("", blueCheckComponent, isSmall, true);
      } else if (nestedProps.isVerified) {
        changeVerified("", blueCheckComponent, isSmall, false);
      } else if (nestedProps.isBlueVerified) {
        changeBlueVerified("", blueCheckComponent, isSmall, false);
      }
    }
    catch (e) {
      console.error("Error getting 'Verified account' react props: ", e)
    }
  }
}
function evaluateBlueCheckProvidesDetails() {
  const isSmall = false // none of the Provides Details blue checks are small
  for (const blueCheckEl of trackingBlueChecksProvidesDetails.values()) {
    const blueCheckComponent = blueCheckEl.parentElement
    try {
      const nestedProps = getReactProps(blueCheckComponent.parentElement.parentElement.parentElement.parentElement, blueCheckComponent)

      const changeTarget = blueCheckComponent.querySelector(`[aria-label="${VERIFIED_ACCOUNT_ARIA_LABEL}"]`)

      if (!changeTarget) {
        throw new Error("Change target not found for a 'Provides details' node")
      }

      if (nestedProps.isVerified) {
        changeVerified("", changeTarget, isSmall, false);
      } else if (nestedProps.isBlueVerified) {
        changeBlueVerified("", changeTarget, isSmall, false);
      }
    } catch (e) {
      console.error("Error getting 'Provides details' react props: ", e)
    }
  }
}

function performBlueCheckFindAndReplace(node) {
  const blueChecks = querySelectorAllIncludingMe(node, BLUE_CHECK_PATTERN_NEW)
  for (const blueCheckComponent of blueChecks) {
    trackingBlueChecks.add(blueCheckComponent)
  }

  const blueChecksProvidesDetails = querySelectorAllIncludingMe(node, BLUE_CHECK_PATTERN_PROVIDE_DETAILS)
  for (const blueCheckEl of blueChecksProvidesDetails) {
    trackingBlueChecksProvidesDetails.add(blueCheckEl)
  }
}

async function main() {
  const observer = new MutationObserver(function (mutations, observer) {
    try {
      for (const mutation of mutations) {
        if (mutation.type === 'attributes') {
          performBlueCheckFindAndReplace(mutation.target)
        }
        for (const node of mutation.addedNodes) {
          if (node.nodeType === 1) {
            performBlueCheckFindAndReplace(node)
          }
        }
      }

      // garbage collect trackingBlueChecks and trackingBlueChecksProvidesDetails
      for (const blueCheckComponent of trackingBlueChecks) {
        if (!blueCheckComponent.isConnected) {
          trackingBlueChecks.delete(blueCheckComponent)
        }
      }
      for (const blueCheckEl of trackingBlueChecksProvidesDetails) {
        if (!blueCheckEl.isConnected) {
          trackingBlueChecksProvidesDetails.delete(blueCheckEl)
        }
      }

      evaluateBlueCheck()
      evaluateBlueCheckProvidesDetails()
    }
    catch (error) {
      console.log('uncaught mutation error', error)
    }
  });

  observer.observe(document, {
    childList: true,
    subtree: true,
    attributes: true
  });
}

main();
