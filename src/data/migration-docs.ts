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
  '/method-translate': `# Method translate

Translates input text, returning translated text.

## HTTP request

\`POST https://api-gl.lingvanex.com/language/translate/v2\`

## Query parameters

| Parameters | Description |
| --- | --- |
| **q** | **string** (Required)<br>The input text to translate. Provide an array of strings to translate multiple phrases. The maximum number of strings is 128. |
| **target** | **string** (Required)<br>The language to use for translation of the input text, set to one of the language codes listed in [Language Support.](https://docs.lingvanex.com/reference/language-support) |
| **format** | **string**<br>The format of the source text, in either HTML (default) or plain-text. A value of html indicates HTML and a value of text indicates plain-text. |
| **source** | **string**<br>The language of the source text, set to one of the language codes listed in [Language Support.](https://docs.lingvanex.com/reference/language-support) If the source language is not specified, the API will attempt to detect the source language automatically and return it within the response. |
| **model** | **string**<br>Not optional, does not affect anything. |
| **key** | **string**<br>A valid API key to handle requests for this API. |

## Response body

If successful, the response body contains data with the following structure:

JSON representation

\`\`\`json
{
  "data": {
    object(TranslateTextResponseList)
  }
}
\`\`\`

| Fields | Description |
| --- | --- |
| **data** | **object(TranslateTextResponseList)**<br>The list of language translation responses. This list contains a language translation response for each query (q) sent in the language translation request. |

## TranslateTextResponseList

A response list contains a list of separate language translation responses.

JSON representation

\`\`\`json
{
  "translations": [
    array
  ]
}
\`\`\`

| Fields | Description |
| --- | --- |
| **translations[]** | **array (TranslateTextResponseTranslation)**<br>Contains list of translation results of the supplied text. |

## TranslateTextResponseTranslation

Contains a list of translation results for the requested text.

JSON representation

\`\`\`json
{
  "detectedSourceLanguage": string,
  "model": string,
  "translatedText": string
}
\`\`\`

| Fields | Description |
| --- | --- |
| **detectedSourceLanguage** | **string**<br>The source language of the initial request, detected automatically, if no source language was passed within the initial request. If the source language was passed, auto-detection of the language will not occur and this field will be omitted. |
| **model** | **string**<br>The translation model. Cloud Translation – Basic offers only the nmt Neural Machine Translation (NMT) model.<br>If you did not include a model parameter with your request, then this field is not included in the response. |
| **translatedText** | **string**<br>Text translated into the target language. |`,
  
  '/method-detect': `# Method detect

Detects the language of text within a request.

## HTTP request

\`POST https://api-gl.lingvanex.com/language/translate/v2/detect\`

## Query parameters

| Parameters | Description |
| --- | --- |
| **q** | **string** (Required)<br>The input text upon which to perform language detection. Repeat this parameter to perform language detection on multiple text inputs. |
| **key** | **string**<br>A valid API key to handle requests for this API. |

## Response body

If successful, the response body contains data with the following structure:

JSON representation

\`\`\`json
{
  "data": {
    object(DetectLanguageResponseList)
  }
}
\`\`\`

| Fields | Description |
| --- | --- |
| **data** | **object (ListValue)**<br>The list of language detection responses. This list will contain a language detection response for each query (q) sent in the language detection request. |

## DetectLanguageResponseList

A response list contains a list of separate language detection responses.

JSON representation

\`\`\`json
{
  "detections": [
    array
  ]
}
\`\`\`

| Fields | Description |
| --- | --- |
| **detections[]** | **array (ListValue format)**<br>Language detection results for each input text piece.<br>The detections ListValue includes the following values:<br>• **language (string)** - The detected language<br>• **isReliable (boolean)** - Deprecated Indicates whether the language detection result is reliable<br>• **confidence (float)** - Deprecated The confidence of the detection result for this language<br>★ We recommend not basing any decisions or thresholds on the isReliable or confidence values. |

For example:

JSON representation

\`\`\`json
"detections": [
  [
    {
      "confidence": 1,
      "language": "zh-Hant",
      "isReliable": false
    }
  ],
  [
    {
      "confidence": 1,
      "language": "es",
      "isReliable": false
    }
  ]
]
\`\`\``,
  
  '/method-languages': `# Method languages

Returns a list of supported languages for translation.

## HTTP request

\`GET https://api-gl.lingvanex.com/language/translate/v2/languages\`

## Query parameters

| Parameters | Description |
| --- | --- |
| **target** | **string**<br>The target language code for the results. If specified, then the language names are returned in the name field of the response, localized in the target language. If you do not supply a target language, then the name field is omitted from the response and only the language codes are returned. |
| **model** | **string**<br>Not optional, does not affect anything. |
| **key** | **string**<br>A valid API key to handle requests for this API. |

## Response body

If successful, the response body contains data with the following structure:

JSON representation

\`\`\`json
{
  "data": {
    object(GetSupportedLanguagesResponseList)
  }
}
\`\`\`

| Fields | Description |
| --- | --- |
| **data** | **object(GetSupportedLanguagesResponseList)**<br>A list of supported language responses. This list will contain an entry for each language supported by the Translation API. |

## GetSupportedLanguagesResponseList

A response list contains a list of separate supported language responses.

JSON representation

\`\`\`json
{
  "languages": [
    {
      object(GetSupportedLanguagesResponseLanguage)
    }
  ]
}
\`\`\`

| Fields | Description |
| --- | --- |
| **languages[]** | **array (GetSupportedLanguagesResponseLanguage)**<br>The set of supported languages. |

## GetSupportedLanguagesResponseLanguage

A single supported language response corresponds to information related to one supported language.

JSON representation

\`\`\`json
{
  "language": string,
  "name": string
}
\`\`\`

| Fields | Description |
| --- | --- |
| **language** | **string**<br>Supported language code, generally consisting of its ISO 639-1 identifier. (E.g. 'en', 'ja'). In certain cases, BCP-47 codes including language + region identifiers are returned (e.g. 'zh-TW' and 'zh-CH') |
| **name** | **string**<br>Human readable name of the language localized to the target language. |`,
  
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

  '/get-languages': `# Get languages

<ApiEndpoint method="GET" url="https://api-gl.lingvanex.com/language/translate/v2/languages" />

## Responses

<div class="space-y-3 my-4">
  <div class="border-l-4 border-l-green-500 bg-green-500/10 p-4 rounded-r">
    <div class="flex items-center gap-2 mb-1">
      <code class="text-sm font-bold text-green-600 dark:text-green-400">200</code>
      <span class="text-sm font-semibold text-foreground">Successful response</span>
    </div>
  </div>

  <div class="border-l-4 border-l-red-500 bg-red-500/10 p-4 rounded-r">
    <div class="flex items-center gap-2 mb-1">
      <code class="text-sm font-bold text-red-600 dark:text-red-400">403</code>
      <span class="text-sm font-semibold text-foreground">Authorization error</span>
    </div>
    <p class="text-sm text-muted-foreground mt-2">You should add the API_KEY to the request, which can be created on the user control panel page <a href="https://lingvanex.com/account" class="text-primary hover:underline" target="_blank" rel="noopener noreferrer">https://lingvanex.com/account</a></p>
  </div>
</div>

## Examples
`,

  '/language-support': `# Lingvanex API Supported Languages

## Translation

The Translation API's recognition engine supports a wide variety of languages for the Neural Machine Translation (NMT) model.

These languages are specified within a recognition request using language code parameters as noted on this page. Most language code parameters conform to (language\_COUNTRY) identifiers, except where noted.

Translations from any language to any language in this list are supported. The list is updated as new languages are added. In column \`Direction text supported\` \`ltr\` means "left to right" and \`rtl\` means "right to left" direction.

| Language | Language code | Direction text supported |
| --- | --- | --- |
| Afrikaans | af\_ZA | ltr |
| Albanian | sq\_AL | ltr |
| Amharic | am\_ET | ltr |
| Arabic | ar\_SA | rtl |
| Armenian | hy\_AM | ltr |
| Azerbaijani | az\_AZ | ltr |
| Basque | eu\_ES | ltr |
| Belarusian | be\_BY | ltr |
| Bengali | bn\_BD | ltr |
| Bosnian | bs\_BA | ltr |
| Bulgarian | bg\_BG | ltr |
| Catalan | ca\_ES | ltr |
| Cebuano | ceb\_PH | ltr |
| Chinese (Simplified) | zh-Hans\_CN | ltr |
| Chinese (Traditional) | zh-Hant\_TW | ltr |
| Corsican | co\_FR | ltr |
| Croatian | hr\_HR | ltr |
| Czech | cs\_CZ | ltr |
| Danish | da\_DK | ltr |
| Dutch | nl\_NL | ltr |
| English | en\_US | ltr |
| Esperanto | eo\_WORLD | ltr |
| Estonian | et\_EE | ltr |
| Finnish | fi\_FI | ltr |
| French | fr\_FR | ltr |
| Frisian | fy\_NL | ltr |
| Galician | gl\_ES | ltr |
| Georgian | ka\_GE | ltr |
| German | de\_DE | ltr |
| Greek | el\_GR | ltr |
| Gujarati | gu\_IN | ltr |
| Haitian Creole | ht\_HT | ltr |
| Hausa | ha\_NE | ltr |
| Hawaiian | haw\_US | ltr |
| Hebrew | he\_IL | rtl |
| Hindi | hi\_IN | ltr |
| Hmong | hmn\_CN | ltr |
| Hungarian | hu\_HU | ltr |
| Icelandic | is\_IS | ltr |
| Igbo | ig\_NG | ltr |
| Indonesian | id\_ID | ltr |
| Irish | ga\_IE | ltr |
| Italian | it\_IT | ltr |
| Japanese | ja\_JP | ltr |
| Javanese | jv\_ID | ltr |
| Kannada | kn\_IN | ltr |
| Kazakh | kk\_KZ | ltr |
| Khmer | km\_KH | ltr |
| Kinyarwanda | rw\_RW | ltr |
| Korean | ko\_KR | ltr |
| Kurdish (Kurmanji) | ku\_IR | ltr |
| Kyrgyz | ky\_KG | ltr |
| Lao | lo\_LA | ltr |
| Latin | la\_VAT | ltr |
| Latvian | lv\_LV | ltr |
| Lithuanian | lt\_LT | ltr |
| Luxembourgish | lb\_LU | ltr |
| Macedonian | mk\_MK | ltr |
| Malagasy | mg\_MG | ltr |
| Malay | ms\_MY | ltr |
| Malayalam | ml\_IN | ltr |
| Maltese | mt\_MT | ltr |
| Maori | mi\_NZ | ltr |
| Marathi | mr\_IN | ltr |
| Mongolian | mn\_MN | ltr |
| Myanmar (Burmese) | my\_MM | ltr |
| Nepali | ne\_NP | ltr |
| Nyanja (Chichewa) | ny\_MW | ltr |
| Norwegian | no\_NO | ltr |
| Odia (Oriya) | or\_OR | ltr |
| Pashto | ps\_AF | rtl |
| Persian (Iranian) | fa\_IR | rtl |
| Polish | pl\_PL | ltr |
| Portuguese (Brazil) | pt\_BR | ltr |
| Portuguese (Portugal) | pt\_PT | ltr |
| Punjabi (Panjabi) | pa\_PK | ltr |
| Romanian | ro\_RO | ltr |
| Russian | ru\_RU | ltr |
| Samoan | sm\_WS | ltr |
| Scots Gaelic | gd\_GB | ltr |
| Serbian (Cyrillic) | sr-Cyrl\_RS | ltr |
| Sesotho | st\_LS | ltr |
| Shona | sn\_ZW | ltr |
| Sindhi | sd\_PK | rtl |
| Sinhala | si\_LK | ltr |
| Slovak | sk\_SK | ltr |
| Slovenian | sl\_SI | ltr |
| Somali | so\_SO | ltr |
| Spanish | es\_ES | ltr |
| Sundanese | su\_ID | ltr |
| Swahili | sw\_TZ | ltr |
| Swedish | sv\_SE | ltr |
| Tagalog (Filipino) | tl\_PH | ltr |
| Tajik | tg\_TJ | ltr |
| Tamil | ta\_IN | ltr |
| Tatar | tt\_TT | ltr |
| Telugu | te\_IN | ltr |
| Thai | th\_TH | ltr |
| Turkish | tr\_TR | ltr |
| Turkmen | tk\_TM | ltr |
| Ukrainian | uk\_UA | ltr |
| Urdu | ur\_PK | rtl |
| Uyghur | ug\_CN | rtl |
| Uzbek | uz\_UZ | ltr |
| Vietnamese | vi\_VN | ltr |
| Welsh | cy\_GB | ltr |
| Xhosa | xh\_ZA | ltr |
| Yiddish | yi\_IL | rtl |
| Yoruba | yo\_NG | ltr |
| Zulu | zu\_ZA | ltr |

## Transliteration

The Transliterate operation in the Text Translation feature supports the following languages. In the "To/From", "<-->" indicates that the language can be transliterated from or to either of the scripts listed. The "-->" indicates that the language can only be transliterated from one script to the other.

| Language | Language code | Script | To/From | Script |
| --- | --- | --- | --- | --- |
| Arabic | ar\_SA | Arabic (Arab) | <--> | Latin (Latn) |
| Bengali | bn\_BD | Bengali (Beng) | <--> | Latin (Latn) |
| Belarusian | be\_BY | Cyrillic (Cyrl) | <--> | Latin (Latn) |
| Bulgarian | bg\_BG | Cyrillic (Cyrl) | <--> | Latin (Latn) |
| Chinese (Simplified) | zh-Hans\_CN | Chinese (Simplified Hans) | <--> | Latin (Latn) |
| Chinese (Traditional) | zh-Hant\_TW | Chinese (Simplified Hans) | <--> | Latin (Latn) |
| Greek | el\_GR | Greek (Grek) | <--> | Latin (Latn) |
| Gujarati | gu\_IN | Gujarati (Gujr) | <--> | Latin (Latn) |
| Hebrew | he\_IL | Hebrew (Hebr) | <--> | Latin (Latn) |
| Hindi | hi\_IN | Devanagari (Deva) | <--> | Latin (Latn) |
| Japanese | ja\_JP | Japanese (Jpan) | <--> | Latin (Latn) |
| Kannada | kn\_IN | Kannada (Knda) | <--> | Latin (Latn) |
| Kazakh | kk\_KZ | Cyrillic (Cyrl) | <--> | Latin (Latn) |
| Korean | ko\_KR | Korean (Kore) | <--> | Latin (Latn) |
| Kyrgyz | ky\_KG | Cyrillic (Cyrl) | <--> | Latin (Latn) |
| Macedonian | mk\_MK | Cyrillic (Cyrl) | <--> | Latin (Latn) |
| Malayalam | ml\_IN | Malayalam (Mlym) | <--> | Latin (Latn) |
| Marathi | mr\_IN | Devanagari (Deva) | <--> | Latin (Latn) |
| Mongolian | mn\_MN | Cyrillic (Cyrl) | <--> | Latin (Latn) |
| Odia (Oriya) | or\_OR | Oriya (Orya) | <--> | Latin (Latn) |
| Persian (Iranian) | fa\_IR | Arabic (Arab) | <--> | Latin (Latn) |
| Punjabi (Panjabi) | pa\_PK | Gurmukhi (Guru) | <--> | Latin (Latn) |
| Russian | ru\_RU | Cyrillic (Cyrl) | <--> | Latin (Latn) |
| Serbian (Cyrillic) | sr-Cyrl\_RS | Cyrillic (Cyrl) | <--> | Latin (Latn) |
| Sindhi | sd\_PK | Arabic (Arab) | <--> | Latin (Latn) |
| Sinhala | si\_LK | Sinhala (Sinh) | <--> | Latin (Latn) |
| Tajik | tg\_TJ | Cyrillic (Cyrl) | <--> | Latin (Latn) |
| Tamil | ta\_IN | Tamil (Taml) | <--> | Latin (Latn) |
| Tatar | tt\_TT | Cyrillic (Cyrl) | <--> | Latin (Latn) |
| Telugu | te\_IN | Telugu (Telu) | <--> | Latin (Latn) |
| Thai | th\_TH | Thai (Thai) | <--> | Latin (Latn) |
| Ukrainian | uk\_UA | Cyrillic (Cyrl) | <--> | Latin (Latn) |
| Urdu | ur\_PK | Arabic (Arab) | <--> | Latin (Latn) |`
};

export default migrationDocumentation;