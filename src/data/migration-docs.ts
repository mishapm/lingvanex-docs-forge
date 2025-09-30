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
  
  '/method-languages': `# Get languages

Returns a list of supported languages for translation.

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
    <p class="text-sm text-muted-foreground mt-2">You should add the API_KEY to the request, which can be created on the user control panel page at <a href="https://lingvanex.com/account" class="text-primary hover:underline" target="_blank" rel="noopener noreferrer">https://lingvanex.com/account</a>.</p>
  </div>
</div>

## Examples
`,
  
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
