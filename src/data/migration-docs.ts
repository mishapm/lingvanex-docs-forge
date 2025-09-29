export const migrationDocumentation: Record<string, string> = {
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
    array
  ]
}
\`\`\`

| Fields | Description |
| --- | --- |
| **languages[]** | **array (GetSupportedLanguagesResponseLanguage)**<br>Contains list of supported languages information. |

## GetSupportedLanguagesResponseLanguage

Contains supported languages information.

JSON representation

\`\`\`json
{
  "language": string,
  "name": string
}
\`\`\`

| Fields | Description |
| --- | --- |
| **language** | **string**<br>Supported language code. Usually refers to an ISO 639-1 language code. |
| **name** | **string**<br>Human readable name of the language localized in the target language. |`
};

export default migrationDocumentation;