export const documentationContent: Record<string, string> = {
  '/what-is-lingvanex': ``,

  '/language-support': `# Language Support

Lingvanex Translator Service supports translation between 100+ languages, including major world languages and regional variants. Our service provides comprehensive coverage for global translation needs.

## Supported Language Codes

The API uses ISO language codes with country variants for precise language targeting:

### Major Languages

| Language | Code | Name |
|----------|------|------|
| English (UK) | \`en_GB\` | English (United Kingdom) |
| English (US) | \`en_US\` | English (United States) |
| German | \`de_DE\` | German (Germany) |
| French | \`fr_FR\` | French (France) |
| Spanish | \`es_ES\` | Spanish (Spain) |
| Russian | \`ru_RU\` | Russian (Russia) |
| Chinese (Simplified) | \`zh_CN\` | Chinese (China) |
| Chinese (Traditional) | \`zh_TW\` | Chinese (Taiwan) |
| Japanese | \`ja_JP\` | Japanese (Japan) |
| Korean | \`ko_KR\` | Korean (South Korea) |
| Italian | \`it_IT\` | Italian (Italy) |
| Portuguese | \`pt_PT\` | Portuguese (Portugal) |
| Portuguese (Brazil) | \`pt_BR\` | Portuguese (Brazil) |
| Dutch | \`nl_NL\` | Dutch (Netherlands) |
| Arabic | \`ar_SA\` | Arabic (Saudi Arabia) |

### European Languages

| Language | Code | Name |
|----------|------|------|
| Polish | \`pl_PL\` | Polish (Poland) |
| Czech | \`cs_CZ\` | Czech (Czech Republic) |
| Swedish | \`sv_SE\` | Swedish (Sweden) |
| Norwegian | \`no_NO\` | Norwegian (Norway) |
| Danish | \`da_DK\` | Danish (Denmark) |
| Finnish | \`fi_FI\` | Finnish (Finland) |
| Greek | \`el_GR\` | Greek (Greece) |
| Hungarian | \`hu_HU\` | Hungarian (Hungary) |
| Romanian | \`ro_RO\` | Romanian (Romania) |
| Bulgarian | \`bg_BG\` | Bulgarian (Bulgaria) |

### Asian Languages

| Language | Code | Name |
|----------|------|------|
| Hindi | \`hi_IN\` | Hindi (India) |
| Thai | \`th_TH\` | Thai (Thailand) |
| Vietnamese | \`vi_VN\` | Vietnamese (Vietnam) |
| Indonesian | \`id_ID\` | Indonesian (Indonesia) |
| Malay | \`ms_MY\` | Malay (Malaysia) |
| Hebrew | \`he_IL\` | Hebrew (Israel) |
| Turkish | \`tr_TR\` | Turkish (Turkey) |

## Getting Language List Programmatically

You can retrieve the complete list of supported languages using our API:

\`\`\`bash
curl -X GET "https://api-b2b.backenster.com/b1/api/v3/languages" \\
  -H "Authorization: Lingvanex-Auth-Key YOUR_API_KEY" \\
  -H "Accept: application/json"
\`\`\`

**Response:**
\`\`\`json
{
  "err": null,
  "result": [
    {
      "code": "en_GB",
      "name": "English (United Kingdom)",
      "nativeName": "English"
    },
    {
      "code": "de_DE", 
      "name": "German (Germany)",
      "nativeName": "Deutsch"
    },
    {
      "code": "fr_FR",
      "name": "French (France)", 
      "nativeName": "Français"
    }
  ]
}
\`\`\`

## Language Detection

If you're unsure about the source language, you can use our language detection feature:

\`\`\`json
POST https://api-b2b.backenster.com/b1/api/v3/detect
Authorization: Lingvanex-Auth-Key YOUR_API_KEY
Content-Type: application/json

{
  "platform": "api",
  "data": "Bonjour le monde!"
}
\`\`\`

**Response:**
\`\`\`json
{
  "err": null,
  "result": {
    "language": "fr_FR",
    "confidence": 0.99
  }
}
\`\`\`

## Regional Variants

Many languages have regional variants that differ in vocabulary, spelling, or cultural context:

- **English**: \`en_US\` (American) vs \`en_GB\` (British)
- **Portuguese**: \`pt_PT\` (European) vs \`pt_BR\` (Brazilian) 
- **Spanish**: \`es_ES\` (Spain) vs \`es_MX\` (Mexico)
- **Chinese**: \`zh_CN\` (Simplified) vs \`zh_TW\` (Traditional)

Choose the appropriate variant based on your target audience for the most accurate cultural and linguistic adaptation.

## Translation Quality

Our translation quality varies by language pair:

- **Tier 1**: Major language pairs (EN-DE, EN-FR, EN-ES, etc.) - Highest quality
- **Tier 2**: Common language pairs - High quality  
- **Tier 3**: Less common pairs - Good quality with continuous improvements

For the most up-to-date language support and quality information, please refer to our [API reference](/getting-languages).`,

  '/pricing': `# Pricing

Lingvanex Translator Service offers flexible pricing plans to meet the needs of individuals, startups, and enterprises. Choose the plan that best fits your translation volume and requirements.

## Free Tier

Perfect for testing and small projects:

- **500 characters/month** included
- Access to all 100+ languages
- Standard translation quality
- API key authentication
- Email support
- Rate limit: 10 requests/minute

## Professional Plans

### Starter Plan - $19/month
- **100,000 characters/month**
- All Free tier features
- Priority email support
- Rate limit: 60 requests/minute
- Usage analytics dashboard

### Business Plan - $79/month
- **500,000 characters/month**
- All Starter plan features
- Phone and email support
- Rate limit: 180 requests/minute
- Custom integrations support
- SLA: 99.9% uptime

### Enterprise Plan - Custom Pricing
- **Unlimited characters**
- Dedicated account manager
- 24/7 priority support
- Custom rate limits
- On-premise deployment options
- SLA: 99.95% uptime
- Custom integrations and features

## Pay-as-you-go

For variable usage patterns:

- **$0.20 per 1,000 characters**
- No monthly commitment
- All features included
- Perfect for seasonal businesses
- Scale automatically with demand

## Character Counting

Characters are counted as follows:

- **Source text**: Each character in the input text counts toward your quota
- **Whitespace**: Spaces and line breaks are counted
- **HTML tags**: When translating HTML, only text content is counted (tags are excluded)
- **Empty requests**: Failed requests don't count toward your quota

### Example Character Count
- "Hello, world!" = 13 characters
- "Bonjour le monde!" = 17 characters

## Getting Your API Key

1. **Sign up** for a Lingvanex account at [lingvanex.com](https://lingvanex.com)
2. **Verify your email** address
3. **Choose your plan** or start with the free tier
4. **Generate your API key** from the dashboard
5. **Start translating** immediately

## API Key Security

⚠️ **Critical Security Information**:

- Your API key is **secret** and should never be exposed in client-side code
- Always make API calls from your **backend server**
- Use environment variables to store your API key
- Rotate your API key regularly for enhanced security
- Monitor your usage dashboard for unexpected activity

### Secure Implementation Example

❌ **Never do this** (client-side exposure):
\`\`\`javascript
// WRONG - API key exposed in browser
const apiKey = "your-secret-api-key";
fetch("https://api-b2b.backenster.com/b1/api/v3/translate", {
  headers: {
    "Authorization": \`Lingvanex-Auth-Key \${apiKey}\`
  }
});
\`\`\`

✅ **Correct approach** (server-side):
\`\`\`javascript
// CORRECT - API key secured on server
// Backend server code
const apiKey = process.env.LINGVANEX_API_KEY;
\`\`\`

## Usage Monitoring

Track your usage through:

- **Dashboard analytics**: Real-time usage monitoring
- **API headers**: Usage information returned in response headers
- **Webhooks**: Automated notifications for quota limits
- **Monthly reports**: Detailed usage breakdown via email

## Billing

- **Monthly billing**: Charges processed on the same date each month
- **Prorated upgrades**: Immediate plan upgrades are prorated
- **Overage charges**: Pay-as-you-go rates apply for usage beyond plan limits
- **Currency**: All prices in USD
- **Payment methods**: Credit card, PayPal, bank transfer (Enterprise)

## FAQ

### Can I change plans anytime?
Yes, you can upgrade or downgrade at any time. Changes take effect immediately.

### What happens if I exceed my quota?
Requests will continue to work at pay-as-you-go rates ($0.20/1000 characters).

### Do you offer refunds?
We offer pro-rated refunds for downgrades and cancellations.

### Is there a commitment?
No long-term contracts required. Cancel anytime.

Ready to get started? [Sign up now](https://lingvanex.com/signup) or check out our [API reference](/translate).`,

  '/faq': `# Translator Service FAQ

Find answers to the most commonly asked questions about the Lingvanex Translator Service.

## Getting Started

### How do I get started with Lingvanex Translator Service?

1. **Sign up** for an account at [lingvanex.com](https://lingvanex.com)
2. **Verify your email** address
3. **Generate your API key** from the dashboard
4. **Choose a pricing plan** or start with the free tier
5. **Make your first API call** using our documentation

### Where do I find my API key?

After creating your account:
1. Log into your dashboard
2. Navigate to "API Keys" section
3. Click "Generate New Key" or copy your existing key
4. Store it securely in your application

### Is there a free tier available?

Yes! Our free tier includes:
- 500 characters per month
- Access to all 100+ languages
- Standard translation quality
- Email support

## Authentication & Security

### How do I authenticate API requests?

Use your API key in the Authorization header:

\`\`\`http
Authorization: Lingvanex-Auth-Key YOUR_API_KEY
\`\`\`

### Is my API key secure?

⚠️ **Critical**: Your API key is secret and should never be exposed in client-side code. Always:
- Store it as an environment variable
- Make API calls from your backend server only
- Rotate keys regularly
- Monitor usage for suspicious activity

### Can I use the API from a web browser?

**No, never make direct API calls from browser JavaScript**. This would expose your secret API key to users. Instead:
- Create a backend endpoint that calls our API
- Have your frontend call your secure backend
- Your backend handles the Lingvanex API communication

## API Usage

### What is the base URL for the API?

\`\`\`
https://api-b2b.backenster.com/b1/api/v3/
\`\`\`

### What request format should I use?

- **Method**: POST
- **Content-Type**: application/json
- **Accept**: application/json
- **Authorization**: Lingvanex-Auth-Key YOUR_API_KEY

### What's the basic request structure?

\`\`\`json
{
  "platform": "api",
  "from": "en_GB",
  "to": "de_DE", 
  "data": "Hello, world!",
  "enableTransliteration": false
}
\`\`\`

### How do I handle errors?

Check the \`err\` field in responses:

\`\`\`json
{
  "err": null,           // null = success
  "result": "Hallo, Welt!"
}
\`\`\`

\`\`\`json
{
  "err": "Invalid API key",  // error message
  "result": null
}
\`\`\`

## Languages & Translation

### How many languages are supported?

We support 100+ languages including major world languages and regional variants like:
- \`en_US\` (American English) vs \`en_GB\` (British English)
- \`pt_PT\` (European Portuguese) vs \`pt_BR\` (Brazilian Portuguese)
- \`zh_CN\` (Simplified Chinese) vs \`zh_TW\` (Traditional Chinese)

### How do I get the list of supported languages?

\`\`\`bash
curl -X GET "https://api-b2b.backenster.com/b1/api/v3/languages" \\
  -H "Authorization: Lingvanex-Auth-Key YOUR_API_KEY"
\`\`\`

### Can I detect the source language automatically?

Yes, use our language detection endpoint:

\`\`\`json
POST /b1/api/v3/detect
{
  "platform": "api",
  "data": "Bonjour le monde!"
}
\`\`\`

### What is transliteration?

Transliteration converts text from one writing system to another (e.g., Cyrillic to Latin). Enable it with:

\`\`\`json
{
  "enableTransliteration": true
}
\`\`\`

### Can I translate HTML content?

Yes! Our API can safely translate HTML while preserving tags:

\`\`\`json
{
  "platform": "api",
  "from": "en_GB",
  "to": "de_DE",
  "data": "<p>Hello <strong>world</strong>!</p>",
  "enableTransliteration": false
}
\`\`\`

## Rate Limits & Quotas

### What are the rate limits?

- **Free tier**: 10 requests/minute
- **Starter**: 60 requests/minute  
- **Business**: 180 requests/minute
- **Enterprise**: Custom limits

### How are characters counted?

- Each character in your input text counts toward your quota
- Spaces and punctuation are included
- For HTML, only text content is counted (tags excluded)
- Failed requests don't count

### What happens if I exceed my quota?

Your requests continue to work at pay-as-you-go rates ($0.20 per 1,000 characters).

## Billing & Plans

### Can I change my plan anytime?

Yes, upgrade or downgrade at any time. Changes take effect immediately with prorated billing.

### Do you offer refunds?

We provide pro-rated refunds for downgrades and cancellations.

### What payment methods do you accept?

- Credit cards (Visa, MasterCard, American Express)
- PayPal
- Bank transfer (Enterprise plans only)

## Technical Support

### How do I get support?

- **Free tier**: Email support
- **Paid plans**: Priority email support
- **Business**: Phone and email support
- **Enterprise**: 24/7 dedicated support

### Where can I find code examples?

Check our comprehensive [API reference](/translate) with examples in:
- cURL
- JavaScript/Node.js
- Python
- PHP
- Java
- C#
- Go
- And more!

### Can I get help with integration?

Yes! Our support team can help with:
- API integration guidance
- Best practices recommendations
- Performance optimization
- Custom implementation support

## Migration from Other Services

### How do I migrate from Google Translate?

See our detailed [migration guide](/method-translate) with side-by-side comparisons and code examples.

### What's different from Google Translate API?

- Different authentication (API key vs OAuth)
- Different language codes (\`en_GB\` vs \`en\`)
- Different request/response format
- Competitive pricing with free tier

Still have questions? Contact our support team at support@lingvanex.com or check our [API reference documentation](/translate).`
};

export default documentationContent;