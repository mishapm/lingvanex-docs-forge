export const documentationContent: Record<string, string> = {
  '/what-is-lingvanex': `# What is Lingvanex Translator Service?

**Lingvanex Translator Service** is a cloud-based neural machine translation platform designed for developers and businesses. Compatible with any operating system, Lingvanex enables you to build intelligent, multi-language solutions for your applications across all supported languages.

## Translator Features and Development Options

The following features are supported by the Translator service. Use these capabilities to integrate translation functionality into your applications:

| Feature | Description | Development Options |
|---------|-------------|-------------------|
| **Text Translation** | Translates text from supported source to target language in real time | • [REST API](/translate)<br>• Translation Server<br>• Mobile SDK |
| **HTML Translation** | Translates HTML content from supported source to target language in real time | • [REST API](/translate)<br>• Translation Server<br>• Mobile SDK |
| **Language Detection** | Automatically detects the source language of input text | • [REST API](/detect)<br>• Mobile SDK |
| **Transliteration** | Converts text between different writing systems | • [REST API](/transliterate)<br>• Mobile SDK |

## Try the Lingvanex Translator Service for Free

To use the Lingvanex Translator you'll need a Lingvanex account. If you don't have one, you can sign up for free:

1. Create your account at the [Lingvanex registration page](https://lingvanex.com/account/)
2. Navigate to the [Cloud API section](https://lingvanex.com/account/#b2b) in your account dashboard
3. Complete the billing address information
4. Click "Continue to payment" to generate your API key
5. For the free trial period, no payment card is required

Your API key will be available in the Cloud API section of your account, ready for use in translation requests.

## Getting Started Video Tutorial

Watch this step-by-step guide on how to create your Lingvanex API key:

<div style="display: flex; justify-content: center; margin: 20px 0;">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/9DT8UPjxQT4?si=IeYZXUiFIiHOkI53" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

[**Watch on YouTube →**](https://www.youtube.com/watch?v=9DT8UPjxQT4)

## Quick Start Example

Here's a basic example of translating text from English to German:

\`\`\`bash
curl -X POST https://api-b2b.backenster.com/b1/api/v3/translate \\
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

**Response:**
\`\`\`json
{
  "err": null,
  "result": "Hallo, Welt!"
}
\`\`\`

## Security Best Practices

⚠️ **Important Security Notice**: Your API key is confidential and should never be exposed in client-side code. Always make API calls from your backend server to protect your authentication credentials.

## Next Steps

- Explore our [complete language support](/language-support)
- Review [pricing options](/pricing) for your usage needs
- Check out the [full API reference](/translate) for detailed implementation
- Read our [FAQ section](/faq) for common questions`,

  '/language-support': `# Language Support

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
| Urdu | ur\_PK | Arabic (Arab) | <--> | Latin (Latn) |`,

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