export const migrationDocumentation: Record<string, string> = {
  '/google-migration-guide': `# Switching from Google Translate to Lingvanex Translator

To switch from Google Translate to Lingvanex Translator you just need to change your HTTP request from \`https://translation.googleapis.com/\` to \`https://api-gl.lingvanex.com/\`

All settings in Lingvanex Translator are exactly the same as in Google Translate.

More information can be found in the documentation.

## References to documentation

[**Method: translate**](/method-translate)

[**Method: detect**](/method-detect)

[**Method: languages**](/method-languages)

[**Language support**](/method-language-support)`,
  '/method-translate': `# Method: Translate`,
  
  '/method-detect': `# Method: Detect`,
  
  '/method-languages': `# Method: Languages`,
  
  '/method-language-support': `# Lingvanex API Supported Languages

These languages are specified within a recognition request using language code parameters as noted on this page. Most language code parameters conform to ISO-639-1 identifiers, except where noted.

Translations from any language to any language in this list are supported. The list is updated as new languages are added.

| Language | ISO-639-1 Code |
| --- | --- |
| Afrikaans | af |
| Albanian | sq |
| Amharic | am |
| Arabic | ar |
| Armenian | hy |
| Azerbaijani | az |
| Basque | eu |
| Belarusian | be |
| Bengali | bn |
| Bosnian | bs |
| Bulgarian | bg |
| Catalan | ca |
| Cebuano | ceb |
| Chinese (Simplified) | zh-Hans_CN |
| Chinese (Traditional) | zh-Hant_TW |
| Corsican | co |
| Croatian | hr |
| Czech | cs |
| Danish | da |
| Dutch | nl |
| English | en |
| Esperanto | eo |
| Estonian | et |
| Finnish | fi |
| French | fr |
| Frisian | fy |
| Galician | gl |
| Georgian | ka |
| German | de |
| Greek | el |
| Gujarati | gu |
| Haitian Creole | ht |
| Hausa | ha |
| Hawaiian | haw |
| Hebrew | he |
| Hindi | hi |
| Hmong | hmn |
| Hungarian | hu |
| Icelandic | is |
| Igbo | ig |
| Indonesian | id |
| Irish | ga |
| Italian | it |
| Japanese | ja |
| Javanese | jv |
| Kannada | kn |
| Kazakh | kk |
| Khmer | km |
| Kinyarwanda | rw |
| Korean | ko |
| Kurdish | ku |
| Kyrgyz | ky |
| Lao | lo |
| Latin | la |
| Latvian | lv |
| Lithuanian | lt |
| Luxembourgish | lb |
| Macedonian | mk |
| Malagasy | mg |
| Malay | ms |
| Malayalam | ml |
| Maltese | mt |
| Maori | mi |
| Marathi | mr |
| Mongolian | mn |
| Myanmar (Burmese) | my |
| Nepali | ne |
| Norwegian | no |
| Nyanja (Chichewa) | ny |
| Odia (Oriya) | or |
| Pashto | ps |
| Persian | fa |
| Polish | pl |
| Portuguese (Portugal, Brazil) | pt |
| Punjabi | pa |
| Romanian | ro |
| Russian | ru |
| Samoan | sm |
| Scots Gaelic | gd |
| Serbian Cyrilic | sr-Cyrl |
| Sesotho | st |
| Shona | sn |
| Sindhi | sd |
| Sinhala (Sinhalese) | si |
| Slovak | sk |
| Slovenian | sl |
| Somali | so |
| Spanish | es |
| Sundanese | su |
| Swahili | sw |
| Swedish | sv |
| Tagalog (Filipino) | tl |
| Tajik | tg |
| Tamil | ta |
| Tatar | tt |
| Telugu | te |
| Thai | th |
| Turkish | tr |
| Turkmen | tk |
| Ukrainian | uk |
| Urdu | ur |
| Uyghur | ug |
| Uzbek | uz |
| Vietnamese | vi |
| Welsh | cy |
| Xhosa | xh |
| Yiddish | yi |
| Yoruba | yo |
| Zulu | zu |`,

  '/language-support': `# Lingvanex API Supported Languages

These languages are specified within a recognition request using language code parameters as noted on this page. Most language code parameters conform to ISO-639-1 identifiers, except where noted.

Translations from any language to any language in this list are supported. The list is updated as new languages are added.

| Language | ISO-639-1 Code |
| --- | --- |
| Afrikaans | af |
| Albanian | sq |
| Amharic | am |
| Arabic | ar |
| Armenian | hy |
| Azerbaijani | az |
| Basque | eu |
| Belarusian | be |
| Bengali | bn |
| Bosnian | bs |
| Bulgarian | bg |
| Catalan | ca |
| Cebuano | ceb |
| Chinese (Simplified) | zh-Hans_CN |
| Chinese (Traditional) | zh-Hant_TW |
| Corsican | co |
| Croatian | hr |
| Czech | cs |
| Danish | da |
| Dutch | nl |
| English | en |
| Esperanto | eo |
| Estonian | et |
| Finnish | fi |
| French | fr |
| Frisian | fy |
| Galician | gl |
| Georgian | ka |
| German | de |
| Greek | el |
| Gujarati | gu |
| Haitian Creole | ht |
| Hausa | ha |
| Hawaiian | haw |
| Hebrew | he |
| Hindi | hi |
| Hmong | hmn |
| Hungarian | hu |
| Icelandic | is |
| Igbo | ig |
| Indonesian | id |
| Irish | ga |
| Italian | it |
| Japanese | ja |
| Javanese | jv |
| Kannada | kn |
| Kazakh | kk |
| Khmer | km |
| Kinyarwanda | rw |
| Korean | ko |
| Kurdish | ku |
| Kyrgyz | ky |
| Lao | lo |
| Latin | la |
| Latvian | lv |
| Lithuanian | lt |
| Luxembourgish | lb |
| Macedonian | mk |
| Malagasy | mg |
| Malay | ms |
| Malayalam | ml |
| Maltese | mt |
| Maori | mi |
| Marathi | mr |
| Mongolian | mn |
| Myanmar (Burmese) | my |
| Nepali | ne |
| Norwegian | no |
| Nyanja (Chichewa) | ny |
| Odia (Oriya) | or |
| Pashto | ps |
| Persian | fa |
| Polish | pl |
| Portuguese (Portugal, Brazil) | pt |
| Punjabi | pa |
| Romanian | ro |
| Russian | ru |
| Samoan | sm |
| Scots Gaelic | gd |
| Serbian Cyrilic | sr-Cyrl |
| Sesotho | st |
| Shona | sn |
| Sindhi | sd |
| Sinhala (Sinhalese) | si |
| Slovak | sk |
| Slovenian | sl |
| Somali | so |
| Spanish | es |
| Sundanese | su |
| Swahili | sw |
| Swedish | sv |
| Tagalog (Filipino) | tl |
| Tajik | tg |
| Tamil | ta |
| Tatar | tt |
| Telugu | te |
| Thai | th |
| Turkish | tr |
| Turkmen | tk |
| Ukrainian | uk |
| Urdu | ur |
| Uyghur | ug |
| Uzbek | uz |
| Vietnamese | vi |
| Welsh | cy |
| Xhosa | xh |
| Yiddish | yi |
| Yoruba | yo |
| Zulu | zu |`
};

export default migrationDocumentation;