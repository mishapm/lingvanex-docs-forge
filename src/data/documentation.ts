export const documentationContent: Record<string, string> = {
  '/what-is-lingvanex': `# What is Lingvanex Translator Service?

**Lingvanex Translator Service** is a cloud-based neural machine translation platform designed for developers and businesses. Compatible with any operating system, Lingvanex enables you to build intelligent, multi-language solutions for your applications across all supported languages.

## Translator Features and Development Options

The following features are supported by the Translator service. Use these capabilities to integrate translation functionality into your applications:

| Feature | Description | Development Options |
|---------|-------------|-------------------|
| **Text Translation** | Translates text from supported source to target language in real time | • [REST API](/translate)<br>• Translation Server<br>• Mobile SDK |
| **HTML Translation** | Translates HTML content from supported source to target language in real time | • [REST API](/translate)<br>• Translation Server<br>• Mobile SDK |

## Try the Lingvanex Translator Service for Free

To use the Lingvanex Translator you'll need a Lingvanex account. If you don't have one, you can sign up for free:

1. Create your account at the [Lingvanex registration page](https://lingvanex.com/account/)
2. Navigate to the [Cloud API section](https://account.lingvanex.com/ru/dashboard/) in your account dashboard
3. Complete the billing address information
4. Click "Continue to payment" to generate your API key
5. For the free trial period, no payment card is required

Your API key will be available in the Cloud API section of your account, ready for use in translation requests.

## Getting Started Video Tutorial

Watch this step-by-step guide on how to create your Lingvanex API key:

<div style="margin: 20px 0;">
  <div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%;">
    <iframe style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" src="https://www.youtube.com/embed/9DT8UPjxQT4?si=IeYZXUiFIiHOkI53" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
  </div>
</div>

[**Watch on YouTube →**](https://www.youtube.com/watch?v=9DT8UPjxQT4)`,

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
| Urdu | ur\_PK | Arabic (Arab) | <--> | Latin (Latn) |`,

  '/pricing': `# Pricing

## $5 per 1 million characters translation   

The price of cloud API is $5 per 1 million characters translation.

Custom pricing for more than 500 million characters per month.

When you [create the API key](https://docs.lingvanex.com/reference/overview#try-the-lingvanex-translator-service-for-free) on the account page you receive 1$.

So you can translate 200 000 characters for free.`,

  '/faq': `# Translator Service FAQ

## How much does the API cost?

The price per million characters is 5$.

## Is there a free plan?

When you [create the API key](https://docs.lingvanex.com/reference/overview#try-the-lingvanex-translator-service-for-free) on the account page you receive 1$. So you can translate 200 000 characters for free.

## Where can I get the authorization key?

Before using the API you need to create the [account](https://lingvanex.com/account) and then generate the API key at the bottom of the page. You must use this authorization key to authorize requests.

## Do I have a request limit per month?

You don't have any limit per month. You only have a character limit. You can use the API till you have money on your balance.

## How can I translate HTML?

You need to add the parameter "translateMode" with the value "html" to the translate method.

## How can I make a particular word non-translatable?

You just need to add one of the tags: \`"t"\`, \`"notranslate"\`, \`"shade"\`. Here is an example from a text with the non-translatable world of Lingvanex:

HTML tags example:
\`\`\`html
<notranslate>Lingvanex</notranslate>
\`\`\`

If you use **"translateMode": "html"** with HTML content containing non-translatable elements.

## How does Translator count characters?

Translator counts every code point defined in Unicode as a character except html tags If you use \`"translateMode": "html"\` and non-translatable tags if you don't use \`"translateMode": "html"\`. Each translation counts as a separate translation, even if the request was made in a single API call translating to multiple languages. The length of the response doesn't matter and the number of requests, words, bytes, or sentences isn't relevant to character count.

Translator counts the following input:

- Text passed to Translator in the body of a request.
- An individual letter.
- Punctuation.
- A space, tab, markup, or any white-space character.
- A repeated translation, even if you've previously translated the same text. Every character submitted to the translate function is counted even when the content is unchanged or the source and target language are the same.

Non-translatable tags aren't counted when you don't use \`"translateMode": "html"\`. For example, when you translate \`<notranslate>Hello</notranslate>\` translator counts only 5 characters, not 32.

## Where can I see my monthly usage?

You can track your spending in your Lingvanex account.

1. [Log in](https://lingvanex.com/login/) to the Lingvanex website.
2. Go to the Cloud API tab.
3. At the bottom, under your API key, you will see the amount you spent in the translation service.

## What translation limits does API have (chars in requests, requests per second, etc.)?

We recommend not to send more than 10 parallel requests per second. We don't have concrete limits for maximum characters per request right now. But probably, we will add a limit for 20 000 characters per request soon for optimal performance and response time. So if you want to translate a text that has more than 20 000 characters it's better to divide it into several requests and send them sequentially.

## Does API support JSON translation?

No, but you can translate all keys and values recursively and create a new JSON using the translated content.`
};

export default documentationContent;