export const referenceDocumentation: Record<string, string> = {
  '/getting-languages': `# Getting the List of Languages

**GET** https://api-b2b.backenster.com/b1/api/v3/getLanguages

## Query Params

**platform**
- Type: string
- Required: true
- Default: api

api

**code**  
- Type: string
- Default: en_GB
- Description: The language code in the format "language code_code of the country", which is used to display the names of the languages. The language code is represented only in lowercase letters, the country code only in uppercase letters (example en_GB, es_ES, ru_RU etc). If this option is not present, then English is used by default

en_GB

## Responses

**200**
Success

**403**
Authorization error. You should add the API_KEY to request which can be created on the user control panel page https://lingvanex.com/account

## Code Examples

<details>
<summary>Shell</summary>

**Request:**
\`\`\`bash
curl -X GET "https://api-b2b.backenster.com/b1/api/v3/getLanguages?platform=api&code=en_GB" \\
  -H "Authorization: Lingvanex-Auth-Key YOUR_API_KEY"
\`\`\`

**Response:**
\`\`\`json
{
  "err": null,
  "result": [
    {
      "code": "af_ZA",
      "englishName": "Afrikaans",
      "nativeName": "Afrikaans"
    },
    {
      "code": "ar_SA",
      "englishName": "Arabic",
      "nativeName": "العربية"
    }
  ]
}
\`\`\`
</details>

<details>
<summary>Node</summary>

**Request:**
\`\`\`javascript
const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://api-b2b.backenster.com/b1/api/v3/getLanguages',
  params: {
    platform: 'api',
    code: 'en_GB'
  },
  headers: {
    Authorization: 'Lingvanex-Auth-Key YOUR_API_KEY'
  }
};

axios.request(options).then(function (response) {
  console.log(response.data);
}).catch(function (error) {
  console.error(error);
});
\`\`\`

**Response:**
\`\`\`json
{
  "err": null,
  "result": [
    {
      "code": "af_ZA",
      "englishName": "Afrikaans",
      "nativeName": "Afrikaans"
    },
    {
      "code": "ar_SA",
      "englishName": "Arabic",
      "nativeName": "العربية"
    }
  ]
}
\`\`\`
</details>

<details>
<summary>Ruby</summary>

**Request:**
\`\`\`ruby
require 'net/http'
require 'uri'

uri = URI('https://api-b2b.backenster.com/b1/api/v3/getLanguages')
uri.query = URI.encode_www_form({
  platform: 'api',
  code: 'en_GB'
})

http = Net::HTTP.new(uri.host, uri.port)
http.use_ssl = true

request = Net::HTTP::Get.new(uri)
request['Authorization'] = 'Lingvanex-Auth-Key YOUR_API_KEY'

response = http.request(request)
puts response.body
\`\`\`

**Response:**
\`\`\`json
{
  "err": null,
  "result": [
    {
      "code": "af_ZA",
      "englishName": "Afrikaans",
      "nativeName": "Afrikaans"
    },
    {
      "code": "ar_SA",
      "englishName": "Arabic",
      "nativeName": "العربية"
    }
  ]
}
\`\`\`
</details>

<details>
<summary>PHP</summary>

**Request:**
\`\`\`php
<?php
$curl = curl_init();

curl_setopt_array($curl, [
  CURLOPT_URL => "https://api-b2b.backenster.com/b1/api/v3/getLanguages?platform=api&code=en_GB",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_HTTPHEADER => [
    "Authorization: Lingvanex-Auth-Key YOUR_API_KEY"
  ],
]);

$response = curl_exec($curl);
curl_close($curl);

echo $response;
?>
\`\`\`

**Response:**
\`\`\`json
{
  "err": null,
  "result": [
    {
      "code": "af_ZA",
      "englishName": "Afrikaans",
      "nativeName": "Afrikaans"
    },
    {
      "code": "ar_SA",
      "englishName": "Arabic",
      "nativeName": "العربية"
    }
  ]
}
\`\`\`
</details>

<details>
<summary>Swift</summary>

**Request:**
\`\`\`swift
import Foundation

let url = URL(string: "https://api-b2b.backenster.com/b1/api/v3/getLanguages?platform=api&code=en_GB")!
var request = URLRequest(url: url)
request.setValue("Lingvanex-Auth-Key YOUR_API_KEY", forHTTPHeaderField: "Authorization")

let task = URLSession.shared.dataTask(with: request) { data, response, error in
    if let data = data {
        print(String(data: data, encoding: .utf8)!)
    }
}

task.resume()
\`\`\`

**Response:**
\`\`\`json
{
  "err": null,
  "result": [
    {
      "code": "af_ZA",
      "englishName": "Afrikaans",
      "nativeName": "Afrikaans"
    },
    {
      "code": "ar_SA",
      "englishName": "Arabic",
      "nativeName": "العربية"
    }
  ]
}
\`\`\`
</details>

<details>
<summary>C</summary>

**Request:**
\`\`\`c
#include <stdio.h>
#include <curl/curl.h>

int main(void) {
    CURL *curl;
    CURLcode res;

    curl = curl_easy_init();
    if(curl) {
        curl_easy_setopt(curl, CURLOPT_URL, "https://api-b2b.backenster.com/b1/api/v3/getLanguages?platform=api&code=en_GB");
        
        struct curl_slist *headers = NULL;
        headers = curl_slist_append(headers, "Authorization: Lingvanex-Auth-Key YOUR_API_KEY");
        curl_easy_setopt(curl, CURLOPT_HTTPHEADER, headers);

        res = curl_easy_perform(curl);
        curl_easy_cleanup(curl);
        curl_slist_free_all(headers);
    }
    return 0;
}
\`\`\`

**Response:**
\`\`\`json
{
  "err": null,
  "result": [
    {
      "code": "af_ZA",
      "englishName": "Afrikaans",
      "nativeName": "Afrikaans"
    },
    {
      "code": "ar_SA",
      "englishName": "Arabic",
      "nativeName": "العربية"
    }
  ]
}
\`\`\`
</details>

<details>
<summary>C#</summary>

**Request:**
\`\`\`csharp
using System;
using System.Net.Http;
using System.Threading.Tasks;

class Program
{
    private static readonly HttpClient client = new HttpClient();

    static async Task Main()
    {
        client.DefaultRequestHeaders.Add("Authorization", "Lingvanex-Auth-Key YOUR_API_KEY");
        
        string response = await client.GetStringAsync("https://api-b2b.backenster.com/b1/api/v3/getLanguages?platform=api&code=en_GB");
        Console.WriteLine(response);
    }
}
\`\`\`

**Response:**
\`\`\`json
{
  "err": null,
  "result": [
    {
      "code": "af_ZA",
      "englishName": "Afrikaans",
      "nativeName": "Afrikaans"
    },
    {
      "code": "ar_SA",
      "englishName": "Arabic",
      "nativeName": "العربية"
    }
  ]
}
\`\`\`
</details>

<details>
<summary>C++</summary>

**Request:**
\`\`\`cpp
#include <iostream>
#include <curl/curl.h>

size_t WriteCallback(void *contents, size_t size, size_t nmemb, void *userp) {
    ((std::string*)userp)->append((char*)contents, size * nmemb);
    return size * nmemb;
}

int main() {
    CURL *curl;
    CURLcode res;
    std::string readBuffer;

    curl = curl_easy_init();
    if(curl) {
        curl_easy_setopt(curl, CURLOPT_URL, "https://api-b2b.backenster.com/b1/api/v3/getLanguages?platform=api&code=en_GB");
        curl_easy_setopt(curl, CURLOPT_WRITEFUNCTION, WriteCallback);
        curl_easy_setopt(curl, CURLOPT_WRITEDATA, &readBuffer);
        
        struct curl_slist *headers = NULL;
        headers = curl_slist_append(headers, "Authorization: Lingvanex-Auth-Key YOUR_API_KEY");
        curl_easy_setopt(curl, CURLOPT_HTTPHEADER, headers);

        res = curl_easy_perform(curl);
        curl_easy_cleanup(curl);
        curl_slist_free_all(headers);
        
        std::cout << readBuffer << std::endl;
    }
    return 0;
}
\`\`\`

**Response:**
\`\`\`json
{
  "err": null,
  "result": [
    {
      "code": "af_ZA",
      "englishName": "Afrikaans",
      "nativeName": "Afrikaans"
    },
    {
      "code": "ar_SA",
      "englishName": "Arabic",
      "nativeName": "العربية"
    }
  ]
}
\`\`\`
</details>

<details>
<summary>Clojure</summary>

**Request:**
\`\`\`clojure
(require '[clj-http.client :as client])

(def response 
  (client/get "https://api-b2b.backenster.com/b1/api/v3/getLanguages"
              {:query-params {:platform "api" :code "en_GB"}
               :headers {"Authorization" "Lingvanex-Auth-Key YOUR_API_KEY"}}))

(println (:body response))
\`\`\`

**Response:**
\`\`\`json
{
  "err": null,
  "result": [
    {
      "code": "af_ZA",
      "englishName": "Afrikaans",
      "nativeName": "Afrikaans"
    },
    {
      "code": "ar_SA",
      "englishName": "Arabic",
      "nativeName": "العربية"
    }
  ]
}
\`\`\`
</details>

<details>
<summary>Go</summary>

**Request:**
\`\`\`go
package main

import (
    "fmt"
    "io"
    "net/http"
)

func main() {
    url := "https://api-b2b.backenster.com/b1/api/v3/getLanguages?platform=api&code=en_GB"
    
    req, _ := http.NewRequest("GET", url, nil)
    req.Header.Add("Authorization", "Lingvanex-Auth-Key YOUR_API_KEY")
    
    res, _ := http.DefaultClient.Do(req)
    defer res.Body.Close()
    
    body, _ := io.ReadAll(res.Body)
    fmt.Println(string(body))
}
\`\`\`

**Response:**
\`\`\`json
{
  "err": null,
  "result": [
    {
      "code": "af_ZA",
      "englishName": "Afrikaans",
      "nativeName": "Afrikaans"
    },
    {
      "code": "ar_SA",
      "englishName": "Arabic",
      "nativeName": "العربية"
    }
  ]
}
\`\`\`
</details>

<details>
<summary>HTTP</summary>

**Request:**
\`\`\`http
GET /b1/api/v3/getLanguages?platform=api&code=en_GB HTTP/1.1
Host: api-b2b.backenster.com
Authorization: Lingvanex-Auth-Key YOUR_API_KEY
\`\`\`

**Response:**
\`\`\`json
{
  "err": null,
  "result": [
    {
      "code": "af_ZA",
      "englishName": "Afrikaans",
      "nativeName": "Afrikaans"
    },
    {
      "code": "ar_SA",
      "englishName": "Arabic",
      "nativeName": "العربية"
    }
  ]
}
\`\`\`
</details>

<details>
<summary>Java</summary>

**Request:**
\`\`\`java
import java.io.IOException;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;

public class Main {
    public static void main(String[] args) throws IOException, InterruptedException {
        HttpClient client = HttpClient.newHttpClient();
        HttpRequest request = HttpRequest.newBuilder()
                .uri(URI.create("https://api-b2b.backenster.com/b1/api/v3/getLanguages?platform=api&code=en_GB"))
                .header("Authorization", "Lingvanex-Auth-Key YOUR_API_KEY")
                .build();

        HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
        System.out.println(response.body());
    }
}
\`\`\`

**Response:**
\`\`\`json
{
  "err": null,
  "result": [
    {
      "code": "af_ZA",
      "englishName": "Afrikaans",
      "nativeName": "Afrikaans"
    },
    {
      "code": "ar_SA",
      "englishName": "Arabic",
      "nativeName": "العربية"
    }
  ]
}
\`\`\`
</details>

<details>
<summary>JavaScript</summary>

**Request:**
\`\`\`javascript
const url = 'https://api-b2b.backenster.com/b1/api/v3/getLanguages?platform=api&code=en_GB';
const options = {
  method: 'GET',
  headers: {
    Authorization: 'Lingvanex-Auth-Key YOUR_API_KEY'
  }
};

fetch(url, options)
  .then(res => res.json())
  .then(json => console.log(json))
  .catch(err => console.error('error:' + err));
\`\`\`

**Response:**
\`\`\`json
{
  "err": null,
  "result": [
    {
      "code": "af_ZA",
      "englishName": "Afrikaans",
      "nativeName": "Afrikaans"
    },
    {
      "code": "ar_SA",
      "englishName": "Arabic",
      "nativeName": "العربية"
    }
  ]
}
\`\`\`
</details>

<details>
<summary>JSON</summary>

**Request:**
\`\`\`json
{
  "method": "GET",
  "url": "https://api-b2b.backenster.com/b1/api/v3/getLanguages",
  "params": {
    "platform": "api",
    "code": "en_GB"
  },
  "headers": {
    "Authorization": "Lingvanex-Auth-Key YOUR_API_KEY"
  }
}
\`\`\`

**Response:**
\`\`\`json
{
  "err": null,
  "result": [
    {
      "code": "af_ZA",
      "englishName": "Afrikaans",
      "nativeName": "Afrikaans"
    },
    {
      "code": "ar_SA",
      "englishName": "Arabic",
      "nativeName": "العربية"
    }
  ]
}
\`\`\`
</details>

<details>
<summary>Kotlin</summary>

**Request:**
\`\`\`kotlin
import okhttp3.OkHttpClient
import okhttp3.Request

fun main() {
    val client = OkHttpClient()
    
    val request = Request.Builder()
        .url("https://api-b2b.backenster.com/b1/api/v3/getLanguages?platform=api&code=en_GB")
        .addHeader("Authorization", "Lingvanex-Auth-Key YOUR_API_KEY")
        .build()
    
    client.newCall(request).execute().use { response ->
        println(response.body?.string())
    }
}
\`\`\`

**Response:**
\`\`\`json
{
  "err": null,
  "result": [
    {
      "code": "af_ZA",
      "englishName": "Afrikaans",
      "nativeName": "Afrikaans"
    },
    {
      "code": "ar_SA",
      "englishName": "Arabic",
      "nativeName": "العربية"
    }
  ]
}
\`\`\`
</details>

<details>
<summary>Objective_C</summary>

**Request:**
\`\`\`objc
#import <Foundation/Foundation.h>

int main(int argc, const char * argv[]) {
    @autoreleasepool {
        NSURL *url = [NSURL URLWithString:@"https://api-b2b.backenster.com/b1/api/v3/getLanguages?platform=api&code=en_GB"];
        NSMutableURLRequest *request = [NSMutableURLRequest requestWithURL:url];
        [request setValue:@"Lingvanex-Auth-Key YOUR_API_KEY" forHTTPHeaderField:@"Authorization"];
        
        NSURLSession *session = [NSURLSession sharedSession];
        NSURLSessionDataTask *task = [session dataTaskWithRequest:request
                                                completionHandler:^(NSData *data, NSURLResponse *response, NSError *error) {
            if (data) {
                NSString *result = [[NSString alloc] initWithData:data encoding:NSUTF8StringEncoding];
                NSLog(@"%@", result);
            }
        }];
        [task resume];
        
        [[NSRunLoop currentRunLoop] run];
    }
    return 0;
}
\`\`\`

**Response:**
\`\`\`json
{
  "err": null,
  "result": [
    {
      "code": "af_ZA",
      "englishName": "Afrikaans",
      "nativeName": "Afrikaans"
    },
    {
      "code": "ar_SA",
      "englishName": "Arabic",
      "nativeName": "العربية"
    }
  ]
}
\`\`\`
</details>

<details>
<summary>OCaml</summary>

**Request:**
\`\`\`ocaml
open Lwt.Infix

let get_languages () =
  let uri = Uri.of_string "https://api-b2b.backenster.com/b1/api/v3/getLanguages?platform=api&code=en_GB" in
  let headers = Cohttp.Header.init_with "Authorization" "Lingvanex-Auth-Key YOUR_API_KEY" in
  Cohttp_lwt_unix.Client.get ~headers uri >>= fun (resp, body) ->
  Cohttp_lwt.Body.to_string body >|= fun body_string ->
  print_endline body_string

let () = Lwt_main.run (get_languages ())
\`\`\`

**Response:**
\`\`\`json
{
  "err": null,
  "result": [
    {
      "code": "af_ZA",
      "englishName": "Afrikaans",
      "nativeName": "Afrikaans"
    },
    {
      "code": "ar_SA",
      "englishName": "Arabic",
      "nativeName": "العربية"
    }
  ]
}
\`\`\`
</details>

<details>
<summary>PowerShell</summary>

**Request:**
\`\`\`powershell
$headers = @{
    'Authorization' = 'Lingvanex-Auth-Key YOUR_API_KEY'
}

$response = Invoke-RestMethod -Uri 'https://api-b2b.backenster.com/b1/api/v3/getLanguages?platform=api&code=en_GB' -Method Get -Headers $headers
$response | ConvertTo-Json
\`\`\`

**Response:**
\`\`\`json
{
  "err": null,
  "result": [
    {
      "code": "af_ZA",
      "englishName": "Afrikaans",
      "nativeName": "Afrikaans"
    },
    {
      "code": "ar_SA",
      "englishName": "Arabic",
      "nativeName": "العربية"
    }
  ]
}
\`\`\`
</details>

<details>
<summary>Python</summary>

**Request:**
\`\`\`python
import requests

url = "https://api-b2b.backenster.com/b1/api/v3/getLanguages"
querystring = {"platform": "api", "code": "en_GB"}
headers = {"Authorization": "Lingvanex-Auth-Key YOUR_API_KEY"}

response = requests.request("GET", url, headers=headers, params=querystring)
print(response.text)
\`\`\`

**Response:**
\`\`\`json
{
  "err": null,
  "result": [
    {
      "code": "af_ZA",
      "englishName": "Afrikaans",
      "nativeName": "Afrikaans"
    },
    {
      "code": "ar_SA",
      "englishName": "Arabic",
      "nativeName": "العربية"
    }
  ]
}
\`\`\`
</details>

<details>
<summary>R</summary>

**Request:**
\`\`\`r
library(httr)

url <- "https://api-b2b.backenster.com/b1/api/v3/getLanguages"
headers <- add_headers(Authorization = "Lingvanex-Auth-Key YOUR_API_KEY")
query <- list(platform = "api", code = "en_GB")

response <- GET(url, headers, query = query)
content(response, "text")
\`\`\`

**Response:**
\`\`\`json
{
  "err": null,
  "result": [
    {
      "code": "af_ZA",
      "englishName": "Afrikaans",
      "nativeName": "Afrikaans"
    },
    {
      "code": "ar_SA",
      "englishName": "Arabic",
      "nativeName": "العربية"
    }
  ]
}
\`\`\`
</details>
`,
  '/translate': `# Translate API

Translate text between supported languages using the Lingvanex Translator Service.

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

## Code Examples

### cURL

\`\`\`bash
curl -X POST "https://api-b2b.backenster.com/b1/api/v3/translate" \\
  -H "Authorization: Lingvanex-Auth-Key YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -H "Accept: application/json" \\
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

### PowerShell

\`\`\`powershell
$headers = @{
    'Authorization' = 'Lingvanex-Auth-Key YOUR_API_KEY'
    'Content-Type' = 'application/json'
    'Accept' = 'application/json'
}

$body = @{
    platform = 'api'
    from = 'en_GB'
    to = 'de_DE'
    data = 'Hello, world!'
    enableTransliteration = $false
} | ConvertTo-Json

$response = Invoke-WebRequest -Uri 'https://api-b2b.backenster.com/b1/api/v3/translate' \\
    -Method POST -Headers $headers -Body $body

$result = $response.Content | ConvertFrom-Json
Write-Output $result.result
\`\`\`

### HTTP Raw Request

\`\`\`http
POST /b1/api/v3/translate HTTP/1.1
Host: api-b2b.backenster.com
Authorization: Lingvanex-Auth-Key YOUR_API_KEY
Content-Type: application/json
Accept: application/json
Content-Length: 123

{
  "platform": "api",
  "from": "en_GB",
  "to": "de_DE", 
  "data": "Hello, world!",
  "enableTransliteration": false
}
\`\`\`

### Node.js (fetch)

\`\`\`javascript
const fetch = require('node-fetch');

async function translateText(text, from, to) {
  const response = await fetch('https://api-b2b.backenster.com/b1/api/v3/translate', {
    method: 'POST',
    headers: {
      'Authorization': 'Lingvanex-Auth-Key YOUR_API_KEY',
      'Content-Type': 'application/json',
      'Accept': 'application/json'
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
  
  if (data.err) {
    throw new Error(\`Translation error: \${data.err}\`);
  }
  
  return data.result;
}

// Usage
translateText('Hello, world!', 'en_GB', 'de_DE')
  .then(result => console.log('Translation:', result))
  .catch(error => console.error(error));
\`\`\`

### JavaScript (Browser - via Backend)

⚠️ **Never call the API directly from browser JavaScript**. Instead, create a backend endpoint:

\`\`\`javascript
// Frontend code - calls your backend
async function translateText(text, from, to) {
  const response = await fetch('/api/translate', {  // Your backend endpoint
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ text, from, to })
  });
  
  const data = await response.json();
  return data.result;
}

// Usage
translateText('Hello, world!', 'en_GB', 'de_DE')
  .then(result => document.getElementById('output').textContent = result);
\`\`\`

### Python (requests)

\`\`\`python
import requests
import json

def translate_text(text, from_lang, to_lang, enable_transliteration=False):
    url = "https://api-b2b.backenster.com/b1/api/v3/translate"
    
    headers = {
        "Authorization": "Lingvanex-Auth-Key YOUR_API_KEY",
        "Content-Type": "application/json",
        "Accept": "application/json"
    }
    
    payload = {
        "platform": "api",
        "from": from_lang,
        "to": to_lang,
        "data": text,
        "enableTransliteration": enable_transliteration
    }
    
    response = requests.post(url, headers=headers, json=payload)
    data = response.json()
    
    if data.get("err"):
        raise Exception(f"Translation error: {data['err']}")
        
    return data["result"]

# Usage
try:
    result = translate_text("Hello, world!", "en_GB", "de_DE")
    print(f"Translation: {result}")
except Exception as e:
    print(f"Error: {e}")
\`\`\`

### PHP (Guzzle)

\`\`\`php
<?php
require 'vendor/autoload.php';

use GuzzleHttp\Client;
use GuzzleHttp\Exception\RequestException;

function translateText($text, $from, $to, $enableTransliteration = false) {
    $client = new Client();
    $url = 'https://api-b2b.backenster.com/b1/api/v3/translate';
    
    $headers = [
        'Authorization' => 'Lingvanex-Auth-Key YOUR_API_KEY',
        'Content-Type' => 'application/json',
        'Accept' => 'application/json'
    ];
    
    $payload = [
        'platform' => 'api',
        'from' => $from,
        'to' => $to,
        'data' => $text,
        'enableTransliteration' => $enableTransliteration
    ];
    
    try {
        $response = $client->post($url, [
            'headers' => $headers,
            'json' => $payload
        ]);
        
        $data = json_decode($response->getBody(), true);
        
        if ($data['err']) {
            throw new Exception("Translation error: " . $data['err']);
        }
        
        return $data['result'];
    } catch (RequestException $e) {
        throw new Exception("Request failed: " . $e->getMessage());
    }
}

// Usage
try {
    $result = translateText("Hello, world!", "en_GB", "de_DE");
    echo "Translation: " . $result . "\n";
} catch (Exception $e) {
    echo "Error: " . $e->getMessage() . "\n";
}
?>
\`\`\`

### Ruby (Net::HTTP)

\`\`\`ruby
require 'net/http'
require 'json'
require 'uri'

def translate_text(text, from_lang, to_lang, enable_transliteration = false)
  uri = URI('https://api-b2b.backenster.com/b1/api/v3/translate')
  
  http = Net::HTTP.new(uri.host, uri.port)
  http.use_ssl = true
  
  request = Net::HTTP::Post.new(uri)
  request['Authorization'] = 'Lingvanex-Auth-Key YOUR_API_KEY'
  request['Content-Type'] = 'application/json'
  request['Accept'] = 'application/json'
  
  payload = {
    platform: 'api',
    from: from_lang,
    to: to_lang,
    data: text,
    enableTransliteration: enable_transliteration
  }
  
  request.body = payload.to_json
  
  response = http.request(request)
  data = JSON.parse(response.body)
  
  if data['err']
    raise "Translation error: #{data['err']}"
  end
  
  data['result']
end

# Usage
begin
  result = translate_text("Hello, world!", "en_GB", "de_DE")  
  puts "Translation: #{result}"
rescue => e
  puts "Error: #{e.message}"
end
\`\`\`

### C (libcurl)

\`\`\`c
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <curl/curl.h>

struct APIResponse {
    char *data;
    size_t size;
};

static size_t WriteCallback(void *contents, size_t size, size_t nmemb, struct APIResponse *response) {
    size_t realsize = size * nmemb;
    char *ptr = realloc(response->data, response->size + realsize + 1);
    
    if (!ptr) {
        printf("Not enough memory (realloc returned NULL)\\n");
        return 0;
    }
    
    response->data = ptr;
    memcpy(&(response->data[response->size]), contents, realsize);
    response->size += realsize;
    response->data[response->size] = 0;
    
    return realsize;
}

int translate_text(const char* text, const char* from, const char* to) {
    CURL *curl;
    CURLcode res;
    struct APIResponse response = {0};
    
    curl = curl_easy_init();
    if (!curl) {
        return 1;
    }
    
    // Prepare JSON payload
    char json_data[1024];
    snprintf(json_data, sizeof(json_data),
        "{"
        "\"platform\": \"api\","
        "\"from\": \"%s\","
        "\"to\": \"%s\","
        "\"data\": \"%s\","
        "\"enableTransliteration\": false"
        "}",
        from, to, text);
    
    // Prepare headers
    struct curl_slist *headers = NULL;
    headers = curl_slist_append(headers, "Authorization: Lingvanex-Auth-Key YOUR_API_KEY");
    headers = curl_slist_append(headers, "Content-Type: application/json");
    headers = curl_slist_append(headers, "Accept: application/json");
    
    // Set curl options
    curl_easy_setopt(curl, CURLOPT_URL, "https://api-b2b.backenster.com/b1/api/v3/translate");
    curl_easy_setopt(curl, CURLOPT_POSTFIELDS, json_data);
    curl_easy_setopt(curl, CURLOPT_HTTPHEADER, headers);
    curl_easy_setopt(curl, CURLOPT_WRITEFUNCTION, WriteCallback);
    curl_easy_setopt(curl, CURLOPT_WRITEDATA, &response);
    
    // Make the request
    res = curl_easy_perform(curl);
    
    if (res != CURLE_OK) {
        fprintf(stderr, "curl_easy_perform() failed: %s\\n", curl_easy_strerror(res));
    } else {
        printf("Response: %s\\n", response.data);
    }
    
    // Cleanup
    curl_slist_free_all(headers);
    curl_easy_cleanup(curl);
    free(response.data);
    
    return (res == CURLE_OK) ? 0 : 1;
}

int main() {
    translate_text("Hello, world!", "en_GB", "de_DE");
    return 0;
}
\`\`\`

### C++ (libcurl)

\`\`\`cpp
#include <iostream>
#include <string>
#include <curl/curl.h>
#include <nlohmann/json.hpp>

using json = nlohmann::json;

static size_t WriteCallback(void* contents, size_t size, size_t nmemb, std::string* data) {
    data->append((char*)contents, size * nmemb);
    return size * nmemb;
}

std::string translateText(const std::string& text, const std::string& from, const std::string& to) {
    CURL* curl;
    CURLcode res;
    std::string response;
    
    curl = curl_easy_init();
    if (!curl) {
        throw std::runtime_error("Failed to initialize curl");
    }
    
    // Prepare JSON payload
    json payload = {
        {"platform", "api"},
        {"from", from},
        {"to", to},
        {"data", text},
        {"enableTransliteration", false}
    };
    
    std::string json_data = payload.dump();
    
    // Prepare headers
    struct curl_slist* headers = nullptr;
    headers = curl_slist_append(headers, "Authorization: Lingvanex-Auth-Key YOUR_API_KEY");
    headers = curl_slist_append(headers, "Content-Type: application/json");
    headers = curl_slist_append(headers, "Accept: application/json");
    
    // Set curl options
    curl_easy_setopt(curl, CURLOPT_URL, "https://api-b2b.backenster.com/b1/api/v3/translate");
    curl_easy_setopt(curl, CURLOPT_POSTFIELDS, json_data.c_str());
    curl_easy_setopt(curl, CURLOPT_HTTPHEADER, headers);
    curl_easy_setopt(curl, CURLOPT_WRITEFUNCTION, WriteCallback);
    curl_easy_setopt(curl, CURLOPT_WRITEDATA, &response);
    
    // Make the request
    res = curl_easy_perform(curl);
    
    // Cleanup
    curl_slist_free_all(headers);
    curl_easy_cleanup(curl);
    
    if (res != CURLE_OK) {
        throw std::runtime_error("Request failed: " + std::string(curl_easy_strerror(res)));
    }
    
    // Parse response
    json responseJson = json::parse(response);
    
    if (!responseJson["err"].is_null()) {
        throw std::runtime_error("Translation error: " + responseJson["err"].get<std::string>());
    }
    
    return responseJson["result"].get<std::string>();
}

int main() {
    try {
        std::string result = translateText("Hello, world!", "en_GB", "de_DE");
        std::cout << "Translation: " << result << std::endl;
    } catch (const std::exception& e) {
        std::cerr << "Error: " << e.what() << std::endl;
    }
    
    return 0;
}
\`\`\`

### C# (HttpClient)

\`\`\`csharp
using System;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;
using Newtonsoft.Json;

public class TranslationRequest
{
    [JsonProperty("platform")]
    public string Platform { get; set; } = "api";
    
    [JsonProperty("from")]
    public string From { get; set; }
    
    [JsonProperty("to")]
    public string To { get; set; }
    
    [JsonProperty("data")]
    public string Data { get; set; }
    
    [JsonProperty("enableTransliteration")]
    public bool EnableTransliteration { get; set; } = false;
}

public class TranslationResponse
{
    [JsonProperty("err")]
    public string Error { get; set; }
    
    [JsonProperty("result")]
    public string Result { get; set; }
}

public class LingvanexTranslator
{
    private static readonly string ApiKey = "YOUR_API_KEY";
    private static readonly string BaseUrl = "https://api-b2b.backenster.com/b1/api/v3";
    
    public static async Task<string> TranslateTextAsync(string text, string from, string to, bool enableTransliteration = false)
    {
        using var client = new HttpClient();
        
        client.DefaultRequestHeaders.Add("Authorization", $"Lingvanex-Auth-Key {ApiKey}");
        client.DefaultRequestHeaders.Add("Accept", "application/json");
        
        var request = new TranslationRequest
        {
            From = from,
            To = to,
            Data = text,
            EnableTransliteration = enableTransliteration
        };
        
        var json = JsonConvert.SerializeObject(request);
        var content = new StringContent(json, Encoding.UTF8, "application/json");
        
        try
        {
            var response = await client.PostAsync($"{BaseUrl}/translate", content);
            var responseContent = await response.Content.ReadAsStringAsync();
            var response = JsonConvert.DeserializeObject<TranslationResponse>(responseContent);
            
            if (!string.IsNullOrEmpty(response.Error))
            {
                throw new Exception($"Translation error: {response.Error}");
            }
            
            return response.Result;
        }
        catch (HttpRequestException ex)
        {
            throw new Exception($"Request failed: {ex.Message}");
        }
    }
    
    public static async Task Main(string[] args)
    {
        try
        {
            var result = await TranslateTextAsync("Hello, world!", "en_GB", "de_DE");
            Console.WriteLine($"Translation: {result}");
            
            // Example with transliteration
            var resultWithTranslit = await TranslateTextAsync("Hello, world!", "en_GB", "ru_RU", true);  
            Console.WriteLine($"Translation with transliteration: {resultWithTranslit}");
        }
        catch (Exception ex)
        {
            Console.WriteLine($"Error: {ex.Message}");
        }
    }
}
\`\`\`

### Go

\`\`\`go
package main

import (
    "bytes"
    "encoding/json"
    "fmt"
    "io"
    "net/http"
)

type TranslateRequest struct {
    Platform              string \`json:"platform"\`
    From                  string \`json:"from"\`
    To                    string \`json:"to"\`
    Data                  string \`json:"data"\`
    EnableTransliteration bool   \`json:"enableTransliteration"\`
}

type TranslateResponse struct {
    Err    interface{} \`json:"err"\`
    Result string      \`json:"result"\`
}

func translateText(text, from, to string, enableTransliteration bool) (string, error) {
    url := "https://api-b2b.backenster.com/b1/api/v3/translate"
    
    request := TranslateRequest{
        Platform:              "api",
        From:                  from,
        To:                    to,
        Data:                  text,
        EnableTransliteration: enableTransliteration,
    }
    
    jsonData, err := json.Marshal(request)
    if err != nil {
        return "", err
    }
    
    req, err := http.NewRequest("POST", url, bytes.NewBuffer(jsonData))
    if err != nil {
        return "", err
    }
    
    req.Header.Set("Authorization", "Lingvanex-Auth-Key YOUR_API_KEY")
    req.Header.Set("Content-Type", "application/json")
    req.Header.Set("Accept", "application/json")
    
    client := &http.Client{}
    resp, err := client.Do(req)
    if err != nil {
        return "", err
    }
    defer resp.Body.Close()
    
    body, err := io.ReadAll(resp.Body)
    if err != nil {
        return "", err
    }
    
    var translateResp TranslateResponse
    if err := json.Unmarshal(body, &translateResp); err != nil {
        return "", err
    }
    
    if translateResp.Err != nil {
        return "", fmt.Errorf("translation error: %v", translateResp.Err)
    }
    
    return translateResp.Result, nil
}

func main() {
    // Basic translation
    result, err := translateText("Hello, world!", "en_GB", "de_DE", false)
    if err != nil {
        fmt.Printf("Error: %v\\n", err)
        return
    }
    fmt.Printf("Translation: %s\\n", result)
    
    // Translation with transliteration
    resultTranslit, err := translateText("Hello, world!", "en_GB", "ru_RU", true)
    if err != nil {
        fmt.Printf("Error: %v\\n", err)
        return  
    }
    fmt.Printf("Translation with transliteration: %s\\n", resultTranslit)
}
\`\`\`

### Java (OkHttp)

\`\`\`java
import okhttp3.*;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.JsonNode;
import java.io.IOException;

public class LingvanexTranslator {
    private static final String API_KEY = "YOUR_API_KEY";
    private static final String BASE_URL = "https://api-b2b.backenster.com/b1/api/v3";
    private static final MediaType JSON = MediaType.get("application/json; charset=utf-8");
    
    private final OkHttpClient client;
    private final ObjectMapper objectMapper;
    
    public LingvanexTranslator() {
        this.client = new OkHttpClient();
        this.objectMapper = new ObjectMapper();
    }
    
    public String translateText(String text, String from, String to, boolean enableTransliteration) throws IOException {
        // Create request body
        String json = String.format(
            "{\"platform\": \"api\", \"from\": \"%s\", \"to\": \"%s\", \"data\": \"%s\", \"enableTransliteration\": %b}",
            from, to, text, enableTransliteration
        );
        
        RequestBody body = RequestBody.create(json, JSON);
        
        Request request = new Request.Builder()
            .url(BASE_URL + "/translate")
            .header("Authorization", "Lingvanex-Auth-Key " + API_KEY)
            .header("Accept", "application/json")
            .post(body)
            .build();
            
        try (Response response = client.newCall(request).execute()) {
            if (!response.isSuccessful()) {
                throw new IOException("Unexpected code " + response);
            }
            
            String responseBody = response.body().string();
            JsonNode jsonNode = objectMapper.readTree(responseBody);
            
            if (!jsonNode.get("err").isNull()) {
                throw new IOException("Translation error: " + jsonNode.get("err").asText());
            }
            
            return jsonNode.get("result").asText();
        }
    }
    
    public static void main(String[] args) {
        LingvanexTranslator translator = new LingvanexTranslator();
        
        try {
            String result = translator.translateText("Hello, world!", "en_GB", "de_DE", false);
            System.out.println("Translation: " + result);
            
            String resultTranslit = translator.translateText("Hello, world!", "en_GB", "ru_RU", true);
            System.out.println("Translation with transliteration: " + resultTranslit);
        } catch (IOException e) {
            System.err.println("Error: " + e.getMessage());
        }
    }
}
\`\`\`

### Kotlin (OkHttp)

\`\`\`kotlin
import okhttp3.*
import okhttp3.MediaType.Companion.toMediaType
import okhttp3.RequestBody.Companion.toRequestBody
import kotlinx.serialization.*
import kotlinx.serialization.json.*
import java.io.IOException

@Serializable
data class TranslateRequest(
    val platform: String = "api",
    val from: String,
    val to: String,
    val data: String,
    val enableTransliteration: Boolean = false
)

@Serializable  
data class TranslateResponse(
    val err: String? = null,
    val result: String? = null
)

class LingvanexTranslator {
    private val apiKey = "YOUR_API_KEY"
    private val baseUrl = "https://api-b2b.backenster.com/b1/api/v3"
    private val client = OkHttpClient()
    private val json = Json { ignoreUnknownKeys = true }
    
    @Throws(IOException::class)
    fun translateText(text: String, from: String, to: String, enableTransliteration: Boolean = false): String {
        val request = TranslateRequest(
            from = from,
            to = to, 
            data = text,
            enableTransliteration = enableTransliteration
        )
        
        val jsonString = json.encodeToString(request)
        val body = jsonString.toRequestBody("application/json".toMediaType())
        
        val httpRequest = Request.Builder()
            .url("$baseUrl/translate")
            .header("Authorization", "Lingvanex-Auth-Key $apiKey")
            .header("Accept", "application/json")
            .post(body)
            .build()
            
        client.newCall(httpRequest).execute().use { response ->
            if (!response.isSuccessful) {
                throw IOException("Unexpected code $response")
            }
            
            val responseBody = response.body?.string() ?: throw IOException("Empty response")
            val response = json.decodeFromString<TranslateResponse>(responseBody)
            
            if (response.err != null) {
                throw IOException("Translation error: \${response.err}")
            }
            
            return response.result ?: throw IOException("No translation result")
        }
    }
}

fun main() {
    val translator = LingvanexTranslator()
    
    try {
        val result = translator.translateText("Hello, world!", "en_GB", "de_DE")
        println("Translation: $result")
        
        val resultTranslit = translator.translateText("Hello, world!", "en_GB", "ru_RU", true)
        println("Translation with transliteration: $resultTranslit")
    } catch (ex: IOException) {
        println("Error: \${ex.message}")
    }
}
\`\`\`

### Objective-C

\`\`\`objc
#import <Foundation/Foundation.h>

@interface LingvanexTranslator : NSObject

+ (void)translateText:(NSString *)text 
                 from:(NSString *)fromLang
                   to:(NSString *)toLang
 enableTransliteration:(BOOL)enableTransliteration
           completion:(void (^)(NSString *result, NSError *error))completion;

@end

@implementation LingvanexTranslator

+ (void)translateText:(NSString *)text 
                 from:(NSString *)fromLang
                   to:(NSString *)toLang
 enableTransliteration:(BOOL)enableTransliteration
           completion:(void (^)(NSString *result, NSError *error))completion {
    
    NSString *urlString = @"https://api-b2b.backenster.com/b1/api/v3/translate";
    NSURL *url = [NSURL URLWithString:urlString];
    
    NSMutableURLRequest *request = [NSMutableURLRequest requestWithURL:url];
    [request setHTTPMethod:@"POST"];
    [request setValue:@"Lingvanex-Auth-Key YOUR_API_KEY" forHTTPHeaderField:@"Authorization"];
    [request setValue:@"application/json" forHTTPHeaderField:@"Content-Type"];
    [request setValue:@"application/json" forHTTPHeaderField:@"Accept"];
    
    NSDictionary *payload = @{
        @"platform": @"api",
        @"from": fromLang,
        @"to": toLang,
        @"data": text,
        @"enableTransliteration": @(enableTransliteration)
    };
    
    NSError *jsonError;
    NSData *jsonData = [NSJSONSerialization dataWithJSONObject:payload
                                                       options:0
                                                         error:&jsonError];
    
    if (jsonError) {
        completion(nil, jsonError);
        return;
    }
    
    [request setHTTPBody:jsonData];
    
    NSURLSessionDataTask *task = [[NSURLSession sharedSession] 
        dataTaskWithRequest:request 
        completionHandler:^(NSData *data, NSURLResponse *response, NSError *error) {
            
            if (error) {
                completion(nil, error);
                return;
            }
            
            NSError *parseError;
            NSDictionary *json = [NSJSONSerialization JSONObjectWithData:data
                                                                 options:0
                                                                   error:&parseError];
            
            if (parseError) {
                completion(nil, parseError);
                return;
            }
            
            NSString *err = json[@"err"];
            if (err && ![err isEqual:[NSNull null]]) {
                NSError *translationError = [NSError errorWithDomain:@"LingvanexError" 
                                                                code:1001 
                                                            userInfo:@{NSLocalizedDescriptionKey: err}];
                completion(nil, translationError);
                return;
            }
            
            NSString *result = json[@"result"];
            completion(result, nil);
        }];
    
    [task resume];
}

@end

// Usage example
int main(int argc, const char * argv[]) {
    @autoreleasepool {
        [LingvanexTranslator translateText:@"Hello, world!" 
                                      from:@"en_GB"
                                        to:@"de_DE"
                      enableTransliteration:NO
                                completion:^(NSString *result, NSError *error) {
            if (error) {
                NSLog(@"Error: %@", error.localizedDescription);
            } else {
                NSLog(@"Translation: %@", result);
            }
        }];
        
        // Keep the program running to see the result
        [[NSRunLoop currentRunLoop] runUntilDate:[NSDate dateWithTimeIntervalSinceNow:5.0]];
    }
    return 0;
}
\`\`\`

### Swift (URLSession async/await)

\`\`\`swift
import Foundation

struct TranslateRequest: Codable {
    let platform: String = "api"
    let from: String
    let to: String
    let data: String
    let enableTransliteration: Bool
}

struct TranslateResponse: Codable {
    let err: String?
    let result: String?
}

class LingvanexTranslator {
    private let apiKey = "YOUR_API_KEY"
    private let baseURL = "https://api-b2b.backenster.com/b1/api/v3"
    
    func translateText(_ text: String, from: String, to: String, enableTransliteration: Bool = false) async throws -> String {
        guard let url = URL(string: "\(baseURL)/translate") else {
            throw URLError(.badURL)
        }
        
        var request = URLRequest(url: url)
        request.httpMethod = "POST"
        request.setValue("Lingvanex-Auth-Key \(apiKey)", forHTTPHeaderField: "Authorization")
        request.setValue("application/json", forHTTPHeaderField: "Content-Type")
        request.setValue("application/json", forHTTPHeaderField: "Accept")
        
        let payload = TranslateRequest(
            from: from,
            to: to,
            data: text,
            enableTransliteration: enableTransliteration
        )
        
        let encoder = JSONEncoder()
        request.httpBody = try encoder.encode(payload)
        
        let (data, _) = try await URLSession.shared.data(for: request)
        
        let decoder = JSONDecoder()
        let response = try decoder.decode(TranslateResponse.self, from: data)
        
        if let error = response.err {
            throw NSError(domain: "LingvanexError", code: 1001, userInfo: [NSLocalizedDescriptionKey: error])
        }
        
        guard let result = response.result else {
            throw NSError(domain: "LingvanexError", code: 1002, userInfo: [NSLocalizedDescriptionKey: "No translation result"])
        }
        
        return result
    }
}

// Usage example
@main
struct TranslatorApp {
    static func main() async {
        let translator = LingvanexTranslator()
        
        do {
            let result = try await translator.translateText("Hello, world!", from: "en_GB", to: "de_DE")
            print("Translation: \(result)")
            
            let resultTranslit = try await translator.translateText("Hello, world!", from: "en_GB", to: "ru_RU", enableTransliteration: true)
            print("Translation with transliteration: \(resultTranslit)")
        } catch {
            print("Error: \(error.localizedDescription)")
        }
    }
}
\`\`\`

### R (httr)

\`\`\`r
library(httr)
library(jsonlite)

translate_text <- function(text, from_lang, to_lang, enable_transliteration = FALSE) {
  url <- "https://api-b2b.backenster.com/b1/api/v3/translate"
  
  headers <- add_headers(
    'Authorization' = 'Lingvanex-Auth-Key YOUR_API_KEY',
    'Content-Type' = 'application/json',
    'Accept' = 'application/json'
  )
  
  payload <- list(
    platform = "api",
    from = from_lang,
    to = to_lang,
    data = text,
    enableTransliteration = enable_transliteration
  )
  
  response <- POST(
    url = url,
    body = toJSON(payload, auto_unbox = TRUE),
    headers,
    encode = "raw"
  )
  
  if (status_code(response) != 200) {
    stop(paste("HTTP error:", status_code(response)))
  }
  
  content_parsed <- content(response, "parsed", encoding = "UTF-8")
  
  if (!is.null(content_parsed$err)) {
    stop(paste("Translation error:", content_parsed$err))
  }
  
  return(content_parsed$result)
}

# Usage examples
tryCatch({
  result <- translate_text("Hello, world!", "en_GB", "de_DE")
  cat("Translation:", result, "\n")
  
  result_translit <- translate_text("Hello, world!", "en_GB", "ru_RU", TRUE)
  cat("Translation with transliteration:", result_translit, "\n")
}, error = function(e) {
  cat("Error:", e$message, "\n")
})
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
