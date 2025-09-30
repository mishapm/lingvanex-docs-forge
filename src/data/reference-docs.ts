export const referenceDocumentation: Record<string, string> = {
  '/getting-languages': `# Getting the List of Languages

<ApiEndpoint method="GET" url="https://api-b2b.backenster.com/b1/api/v3/getLanguages" />

## Query Params

<div class="space-y-4 my-4">
  <div class="border border-border rounded-lg p-4 bg-card">
    <div class="flex items-start gap-3 mb-2">
      <code class="text-sm font-semibold text-primary">platform</code>
      <span class="text-xs px-2 py-1 bg-destructive/10 text-destructive rounded">required</span>
    </div>
    <div class="ml-0 space-y-2">
      <p class="text-sm text-muted-foreground">Type: <code class="text-xs">string</code></p>
      <p class="text-sm text-muted-foreground">Default: <code class="text-xs bg-muted px-1.5 py-0.5 rounded">api</code></p>
    </div>
  </div>

  <div class="border border-border rounded-lg p-4 bg-card">
    <div class="flex items-start gap-3 mb-2">
      <code class="text-sm font-semibold text-primary">code</code>
    </div>
    <div class="ml-0 space-y-2">
      <p class="text-sm text-muted-foreground">Type: <code class="text-xs">string</code></p>
      <p class="text-sm text-muted-foreground">Default: <code class="text-xs bg-muted px-1.5 py-0.5 rounded">en_GB</code></p>
      <p class="text-sm text-foreground mt-2">The language code in the format "language code_code of the country", which is used to display the names of the languages. The language code is represented only in lowercase letters, the country code only in uppercase letters (example en_GB, es_ES, ru_RU etc). If this option is not present, then English is used by default.</p>
    </div>
  </div>
</div>

## Responses

<div class="space-y-3 my-4">
  <div class="border-l-4 border-l-green-500 bg-green-500/10 p-4 rounded-r">
    <div class="flex items-center gap-2 mb-1">
      <code class="text-sm font-bold text-green-600 dark:text-green-400">200</code>
      <span class="text-sm font-semibold text-foreground">Success</span>
    </div>
  </div>

  <div class="border-l-4 border-l-red-500 bg-red-500/10 p-4 rounded-r">
    <div class="flex items-center gap-2 mb-1">
      <code class="text-sm font-bold text-red-600 dark:text-red-400">403</code>
      <span class="text-sm font-semibold text-foreground">Authorization error</span>
    </div>
    <p class="text-sm text-muted-foreground mt-2">You should add the API_KEY to request which can be created on the user control panel page <a href="https://lingvanex.com/account" class="text-primary hover:underline" target="_blank" rel="noopener noreferrer">https://lingvanex.com/account</a></p>
  </div>
</div>

### Examples
`,
  '/translate': `# Translate Text

<ApiEndpoint method="POST" url="https://api-b2b.backenster.com/b1/api/v3/translate" />

## URL Parameters

None

## Headers

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| \`Authorization\` | string | Yes | Your API key in format: \`Lingvanex-Auth-Key YOUR_API_KEY\` |
| \`Content-Type\` | string | Yes | Must be \`application/json\` |

## Body Parameters

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| \`from\` | string | No | auto-detect | The language code in the format "language code_code of the country" from which the text is translated. The language code is represented only in lowercase letters, the country code only in uppercase letters (example en_GB, es_ES, ru_RU and etc.). If this parameter is not present, the auto-detect language mode is enabled |
| \`to\` | string | Yes | - | Language code in the format "language code_code of the country" to which the text is translated |
| \`data\` | string or array | Yes | - | Data for translation |
| \`translateMode\` | string | No | - | Describe the input text format. Possible value is "html" for translating and preserving html structure. If value is not specified or is other than "html" than plain text is translating |
| \`enableTransliteration\` | boolean | No | false | If true response includes sourceTransliteration and targetTransliteration fields |
| \`platform\` | string | Yes | api | Defaults to api |

## Request Example

\`\`\`json
{
  "from": "en_GB",
  "to": "de_DE", 
  "data": "Hello, world!",
  "platform": "api"
}
\`\`\`

## Responses

### 200 - Success

Returns translated text with success status:

\`\`\`json
{
  "err": null,
  "result": "Hallo, Welt!"
}
\`\`\`

### 403 - Authorization Error

Authorization error. You should add the API_KEY to request which can be created on the user control panel page [https://lingvanex.com/account](https://lingvanex.com/account)

\`\`\`json
{
  "err": "Authorization failed"
}
\`\`\`

## Endpoint

\`\`\`
POST https://api-b2b.backenster.com/b1/api/v3/translate
\`\`\`

## Authentication

⚠️ **Security Warning**: Your API key is secret and must never be exposed in client-side code. Always make API calls from your backend server.

Include your API key in the Authorization header:

\`\`\`
Authorization: Lingvanex-Auth-Key YOUR_API_KEY
\`\`\`

## Request Headers

| Header | Value | Required |
|--------|--------|----------|
| \`Authorization\` | \`Lingvanex-Auth-Key YOUR_API_KEY\` | Yes |
| \`Content-Type\` | \`application/json\` | Yes |
| \`Accept\` | \`application/json\` | Yes |

## Request Body

\`\`\`json
{
  "platform": "api",
  "from": "en_GB",
  "to": "de_DE",
  "data": "Hello, world!",
  "enableTransliteration": false
}
\`\`\`

### Request Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| \`platform\` | string | Yes | Always set to "api" |
| \`from\` | string | Yes | Source language code (e.g., "en_GB") |
| \`to\` | string | Yes | Target language code (e.g., "de_DE") |
| \`data\` | string | Yes | Text to translate |
| \`enableTransliteration\` | boolean | No | Enable transliteration (default: false) |

## Response Format

### Successful Response
\`\`\`json
{
  "err": null,
  "result": "Hallo, Welt!"
}
\`\`\`

### Error Response
\`\`\`json
{
  "err": "Invalid language code",
  "result": null
}
\`\`\`

## Advanced Examples

### Translating HTML Content

When translating HTML, the API preserves tags and only translates text content:

\`\`\`json
{
  "platform": "api",
  "from": "en_GB",
  "to": "de_DE",
  "data": "<p>Hello <strong>world</strong>!</p>",
  "enableTransliteration": false
}
\`\`\`

**Response:**
\`\`\`json
{
  "err": null,
  "result": "<p>Hallo <strong>Welt</strong>!</p>"
}
\`\`\`

### Batch Translation

For multiple strings, make separate API calls (the API processes one text string per request):

\`\`\`javascript
async function translateBatch(texts, from, to) {
  const promises = texts.map(text => 
    translateText(text, from, to)
  );
  
  const results = await Promise.all(promises);
  return results;
}

// Usage
const texts = ["Hello", "World", "How are you?"];
const translations = await translateBatch(texts, "en_GB", "de_DE");
console.log(translations); // ["Hallo", "Welt", "Wie geht es dir?"]
\`\`\`

### With Transliteration

Enable transliteration for languages with different writing systems:

\`\`\`json
{
  "platform": "api",
  "from": "en_GB",
  "to": "ru_RU",
  "data": "Hello, world!",
  "enableTransliteration": true
}
\`\`\`

**Response:**
\`\`\`json
{
  "err": null,
  "result": "Привет, мир! (Privet, mir!)"
}
\`\`\`

## Advanced Examples

### Translating HTML Content

When translating HTML, the API preserves tags and only translates text content:

\`\`\`json
{
  "platform": "api",
  "from": "en_GB",
  "to": "de_DE",
  "data": "<p>Hello <strong>world</strong>!</p>",
  "enableTransliteration": false
}
\`\`\`

**Response:**
\`\`\`json
{
  "err": null,
  "result": "<p>Hallo <strong>Welt</strong>!</p>"
}
\`\`\`

### Batch Translation

For multiple strings, make separate API calls (the API processes one text string per request):

\`\`\`javascript
async function translateBatch(texts, from, to) {
  const promises = texts.map(text => 
    translateText(text, from, to)
  );
  
  const results = await Promise.all(promises);
  return results;
}

// Usage
const texts = ["Hello", "World", "How are you?"];
const translations = await translateBatch(texts, "en_GB", "de_DE");
console.log(translations); // ["Hallo", "Welt", "Wie geht es dir?"]
\`\`\`

### With Transliteration

Enable transliteration for languages with different writing systems:

\`\`\`json
{
  "platform": "api",
  "from": "en_GB",
  "to": "ru_RU",
  "data": "Hello, world!",
  "enableTransliteration": true
}
\`\`\`

**Response:**
\`\`\`json
{
  "err": null,
  "result": "Привет, мир! (Privet, mir!)"
}
\`\`\`

## Error Handling

### Common Error Responses

#### Invalid API Key
\`\`\`json
{
  "err": "Invalid API key",
  "result": null
}
\`\`\`

#### Invalid Language Code
\`\`\`json
{
  "err": "Invalid language code",
  "result": null
}
\`\`\`

#### Rate Limit Exceeded
\`\`\`json
{
  "err": "Rate limit exceeded",
  "result": null
}
\`\`\`

#### Quota Exceeded
\`\`\`json
{
  "err": "Monthly quota exceeded",
  "result": null
}
\`\`\`

#### Server Error
\`\`\`json
{
  "err": "Internal server error",
  "result": null
}
\`\`\`

### Error Handling Best Practices

1. **Always check the \`err\` field** before using the result
2. **Implement retry logic** for transient failures (5xx errors)
3. **Use exponential backoff** to avoid overwhelming the API
4. **Log errors** for debugging and monitoring
5. **Handle rate limits gracefully** by implementing request queuing

## Best Practices

### Security
- **Never expose your API key** in client-side code
- **Use environment variables** to store your API key
- **Rotate your API key regularly**
- **Monitor usage** for unexpected activity

### Performance
- **Cache translations** for frequently used text
- **Batch similar requests** to reduce API calls
- **Use appropriate timeouts** for your HTTP requests
- **Implement connection pooling** for high-volume applications

### Reliability
- **Implement retry logic** with exponential backoff
- **Handle errors gracefully** with fallback content
- **Monitor API status** and error rates
- **Use health checks** to verify API availability

### Usage Optimization
- **Choose appropriate language variants** (en_US vs en_GB)
- **Pre-process text** to remove unnecessary content
- **Use transliteration judiciously** (only when needed)
- **Monitor character usage** to optimize costs

## Next Steps

- [Get the list of supported languages](/getting-languages)
- [Learn about language codes and variants](/language-support)
- [Migration guide from Google Translate](/method-translate)
- [View pricing and plans](/pricing)`,
};

export default referenceDocumentation;
