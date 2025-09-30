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

## Examples
`,
  '/translate': `# Translate Text

This method translates text and HTML single string or arrays. Also it performs transliteration, language auto detection.

<ApiEndpoint method="POST" url="https://api-b2b.backenster.com/b1/api/v3/translate" />

## Body Params

<div class="space-y-4 my-4">
  <div class="border border-border rounded-lg p-4 bg-card">
    <div class="flex items-start gap-3 mb-2">
      <code class="text-sm font-semibold text-primary">from</code>
    </div>
    <div class="ml-0 space-y-2">
      <p class="text-sm text-muted-foreground">Type: <code class="text-xs">string</code></p>
      <p class="text-sm text-muted-foreground">Default: <code class="text-xs bg-muted px-1.5 py-0.5 rounded">auto-detect</code></p>
      <p class="text-sm text-foreground mt-2">The language code in the format "language code_code of the country" from which the text is translated. The language code is represented only in lowercase letters, the country code only in uppercase letters (example en_GB, es_ES, ru_RU and etc.). If this parameter is not present, the auto-detect language mode is enabled.</p>
    </div>
  </div>

  <div class="border border-border rounded-lg p-4 bg-card">
    <div class="flex items-start gap-3 mb-2">
      <code class="text-sm font-semibold text-primary">to</code>
      <span class="text-xs px-2 py-1 bg-destructive/10 text-destructive rounded">required</span>
    </div>
    <div class="ml-0 space-y-2">
      <p class="text-sm text-muted-foreground">Type: <code class="text-xs">string</code></p>
      <p class="text-sm text-foreground mt-2">Language code in the format "language code_code of the country" to which the text is translated.</p>
    </div>
  </div>

  <div class="border border-border rounded-lg p-4 bg-card">
    <div class="flex items-start gap-3 mb-2">
      <code class="text-sm font-semibold text-primary">data</code>
      <span class="text-xs px-2 py-1 bg-destructive/10 text-destructive rounded">required</span>
    </div>
    <div class="ml-0 space-y-2">
      <p class="text-sm text-muted-foreground">Type: <code class="text-xs">string or array</code></p>
      <p class="text-sm text-foreground mt-2">Data for translation.</p>
    </div>
  </div>

  <div class="border border-border rounded-lg p-4 bg-card">
    <div class="flex items-start gap-3 mb-2">
      <code class="text-sm font-semibold text-primary">translateMode</code>
    </div>
    <div class="ml-0 space-y-2">
      <p class="text-sm text-muted-foreground">Type: <code class="text-xs">string</code></p>
      <p class="text-sm text-foreground mt-2">Describe the input text format. Possible value is "html" for translating and preserving html structure. If value is not specified or is other than "html" than plain text is translating.</p>
    </div>
  </div>

  <div class="border border-border rounded-lg p-4 bg-card">
    <div class="flex items-start gap-3 mb-2">
      <code class="text-sm font-semibold text-primary">enableTransliteration</code>
    </div>
    <div class="ml-0 space-y-2">
      <p class="text-sm text-muted-foreground">Type: <code class="text-xs">boolean</code></p>
      <p class="text-sm text-muted-foreground">Default: <code class="text-xs bg-muted px-1.5 py-0.5 rounded">false</code></p>
      <p class="text-sm text-foreground mt-2">If true response includes sourceTransliteration and targetTransliteration fields.</p>
    </div>
  </div>

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
</div>

## Responses

<div class="space-y-3 my-4">
  <div class="border-l-4 border-l-green-500 bg-green-500/10 p-4 rounded-r">
    <div class="flex items-center gap-2 mb-1">
      <code class="text-sm font-bold text-green-600 dark:text-green-400">200</code>
      <span class="text-sm font-semibold text-foreground">Success</span>
    </div>
    <p class="text-sm text-muted-foreground mt-2">Successful translation</p>
  </div>

  <div class="border-l-4 border-l-red-500 bg-red-500/10 p-4 rounded-r">
    <div class="flex items-center gap-2 mb-1">
      <code class="text-sm font-bold text-red-600 dark:text-red-400">403</code>
      <span class="text-sm font-semibold text-foreground">Authorization error</span>
    </div>
    <p class="text-sm text-muted-foreground mt-2">You should add the API_KEY to request which can be created on the user control panel page <a href="https://lingvanex.com/account" class="text-primary hover:underline" target="_blank" rel="noopener noreferrer">https://lingvanex.com/account</a></p>
  </div>

  <div class="border-l-4 border-l-yellow-500 bg-yellow-500/10 p-4 rounded-r">
    <div class="flex items-center gap-2 mb-1">
      <code class="text-sm font-bold text-yellow-600 dark:text-yellow-400">400</code>
      <span class="text-sm font-semibold text-foreground">Bad Request</span>
    </div>
    <p class="text-sm text-muted-foreground mt-2">Invalid parameters or missing required fields</p>
  </div>

  <div class="border-l-4 border-l-red-500 bg-red-500/10 p-4 rounded-r">
    <div class="flex items-center gap-2 mb-1">
      <code class="text-sm font-bold text-red-600 dark:text-red-400">500</code>
      <span class="text-sm font-semibold text-foreground">Internal Server Error</span>
    </div>
    <p class="text-sm text-muted-foreground mt-2">Server error occurred while processing the request</p>
  </div>
</div>

## Examples
`,
  '/translate-html': `# Translate HTML

<ApiEndpoint method="POST" url="https://api-gl.lingvanex.com/language/translate/v2" />

## Body Params

<div class="space-y-4 my-4">
  <div class="border border-border rounded-lg p-4 bg-card">
    <div class="flex items-start gap-3 mb-2">
      <code class="text-sm font-semibold text-primary">target</code>
      <span class="text-xs px-2 py-1 bg-destructive/10 text-destructive rounded">required</span>
    </div>
    <div class="ml-0 space-y-2">
      <p class="text-sm text-muted-foreground">Type: <code class="text-xs">string</code></p>
      <p class="text-sm text-foreground mt-2">The language code in the format "language code" from which the text is translated. The language code is represented only in lowercase letters (en, de, es).</p>
    </div>
  </div>

  <div class="border border-border rounded-lg p-4 bg-card">
    <div class="flex items-start gap-3 mb-2">
      <code class="text-sm font-semibold text-primary">q</code>
      <span class="text-xs px-2 py-1 bg-destructive/10 text-destructive rounded">required</span>
    </div>
    <div class="ml-0 space-y-2">
      <p class="text-sm text-muted-foreground">Type: <code class="text-xs">string or array</code></p>
      <p class="text-sm text-foreground mt-2">Option 1 - single html. Option 2 - html array.</p>
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
    <p class="text-sm text-muted-foreground mt-2">Successful response</p>
  </div>

  <div class="border-l-4 border-l-red-500 bg-red-500/10 p-4 rounded-r">
    <div class="flex items-center gap-2 mb-1">
      <code class="text-sm font-bold text-red-600 dark:text-red-400">403</code>
      <span class="text-sm font-semibold text-foreground">Authorization error</span>
    </div>
    <p class="text-sm text-muted-foreground mt-2">You should add the API_KEY to request which can be created on the user control panel page <a href="https://lingvanex.com/account" class="text-primary hover:underline" target="_blank" rel="noopener noreferrer">https://lingvanex.com/account</a></p>
  </div>
</div>

## Examples
`,
  '/detect-languages': `# Detect Languages

<ApiEndpoint method="POST" url="https://api-gl.lingvanex.com/language/translate/v2/detect" />

## Body Params

<div class="space-y-4 my-4">
  <div class="border border-border rounded-lg p-4 bg-card">
    <div class="flex items-start gap-3 mb-2">
      <code class="text-sm font-semibold text-primary">q</code>
      <span class="text-xs px-2 py-1 bg-destructive/10 text-destructive rounded">required</span>
    </div>
    <div class="ml-0 space-y-2">
      <p class="text-sm text-muted-foreground">Type: <code class="text-xs">string or array</code></p>
      <p class="text-sm text-foreground mt-2">Data for detect languages. Option 1 - single language. Option 2 - array of languages.</p>
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
    <p class="text-sm text-muted-foreground mt-2">Successful response</p>
  </div>

  <div class="border-l-4 border-l-red-500 bg-red-500/10 p-4 rounded-r">
    <div class="flex items-center gap-2 mb-1">
      <code class="text-sm font-bold text-red-600 dark:text-red-400">403</code>
      <span class="text-sm font-semibold text-foreground">Authorization error</span>
    </div>
    <p class="text-sm text-muted-foreground mt-2">You should add the API_KEY to request which can be created on the user control panel page <a href="https://lingvanex.com/account" class="text-primary hover:underline" target="_blank" rel="noopener noreferrer">https://lingvanex.com/account</a></p>
  </div>
</div>

## Examples
`,
};

export default referenceDocumentation;
