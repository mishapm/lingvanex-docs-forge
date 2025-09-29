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
| **translatedText** | **string**<br>Text translated into the target language. |`
};

export default migrationDocumentation;