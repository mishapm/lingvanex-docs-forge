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
  '/translate': `# Translate Text

**POST** https://api-b2b.backenster.com/b1/api/v3/translate

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
