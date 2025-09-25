export const migrationDocumentation: Record<string, string> = {
  '/method-translate': `# Switching from Google Translate: Method translate

This guide shows you how to migrate your Google Translate API calls to use Lingvanex Translator Service.

## Key Differences

| Aspect | Google Translate | Lingvanex |
|--------|------------------|-----------|
| **Authentication** | OAuth 2.0 / API Key | API Key in Authorization header |
| **Base URL** | translate.googleapis.com | api-b2b.backenster.com |
| **Language Codes** | Simple (e.g., 'en', 'de') | Regional variants (e.g., 'en_GB', 'de_DE') |
| **Request Format** | Query params or POST body | JSON POST body only |
| **Response Format** | Nested JSON structure | Simple JSON with 'err' and 'result' |

## Before: Google Translate

\`\`\`bash
curl -X POST "https://translation.googleapis.com/language/translate/v2" \\
  -H "Authorization: Bearer YOUR_OAUTH_TOKEN" \\
  -H "Content-Type: application/json" \\
  -d '{
    "q": "Hello, world!",
    "source": "en",
    "target": "de",
    "format": "text"
  }'
\`\`\`

**Google Response:**
\`\`\`json
{
  "data": {
    "translations": [
      {
        "translatedText": "Hallo, Welt!",
        "detectedSourceLanguage": "en"
      }
    ]
  }
}
\`\`\`

## After: Lingvanex Translator

\`\`\`bash
curl -X POST "https://api-b2b.backenster.com/b1/api/v3/translate" \\
  -H "Authorization: Lingvanex-Auth-Key YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "platform": "api",
    "from": "en_GB",
    "to": "de_DE",
    "data": "Hello, world!",
    "enableTransliteration": false
  }'
\`\`\`

**Lingvanex Response:**
\`\`\`json
{
  "err": null,
  "result": "Hallo, Welt!"
}
\`\`\`

## Migration Code Examples

### JavaScript Migration

**Before (Google):**
\`\`\`javascript
// Google Translate
const { Translate } = require('@google-cloud/translate').v2;
const translate = new Translate();

async function translateText(text, target) {
  const [translation] = await translate.translate(text, target);
  return translation;
}
\`\`\`

**After (Lingvanex):**
\`\`\`javascript
// Lingvanex Translator
async function translateText(text, from, to) {
  const response = await fetch('https://api-b2b.backenster.com/b1/api/v3/translate', {
    method: 'POST',
    headers: {
      'Authorization': 'Lingvanex-Auth-Key YOUR_API_KEY',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      platform: 'api',
      from: from,
      to: to,
      data: text,
      enableTransliteration: false
    })
  });
  
  const data = await response.json();
  if (data.err) throw new Error(data.err);
  return data.result;
}
\`\`\`

### Python Migration

**Before (Google):**
\`\`\`python
# Google Translate
from google.cloud import translate_v2 as translate

client = translate.Client()
result = client.translate('Hello, world!', target_language='de')
print(result['translatedText'])
\`\`\`

**After (Lingvanex):**
\`\`\`python
# Lingvanex Translator  
import requests

def translate_text(text, from_lang, to_lang):
    response = requests.post(
        'https://api-b2b.backenster.com/b1/api/v3/translate',
        headers={
            'Authorization': 'Lingvanex-Auth-Key YOUR_API_KEY',
            'Content-Type': 'application/json'
        },
        json={
            'platform': 'api',
            'from': from_lang,
            'to': to_lang,
            'data': text,
            'enableTransliteration': False
        }
    )
    data = response.json()
    if data.get('err'):
        raise Exception(data['err'])
    return data['result']

result = translate_text('Hello, world!', 'en_GB', 'de_DE')
print(result)
\`\`\`

## Language Code Mapping

| Google Code | Lingvanex Code | Language |
|-------------|----------------|----------|
| en | en_GB or en_US | English |
| de | de_DE | German |
| fr | fr_FR | French |
| es | es_ES | Spanish |
| ru | ru_RU | Russian |
| zh | zh_CN or zh_TW | Chinese |
| ja | ja_JP | Japanese |
| ko | ko_KR | Korean |
| pt | pt_PT or pt_BR | Portuguese |
| it | it_IT | Italian |

Choose the appropriate regional variant based on your target audience.`
};

export default migrationDocumentation;