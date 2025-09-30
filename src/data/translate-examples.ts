export const translateExamples = [
  {
    language: 'Shell',
    request: `\`\`\`bash
curl --request POST \\
  --url https://api-b2b.backenster.com/b1/api/v3/translate \\
  --header 'Authorization: Bearer <api_key>' \\
  --header 'Content-Type: application/json' \\
  --data '{
  "platform": "api",
  "from": "en_GB",
  "to": "de_DE",
  "data": "Hello, world!",
  "enableTransliteration": false
}'
\`\`\``,
    response: `\`\`\`json
{
  "err": null,
  "result": "Hallo, Welt!"
}
\`\`\``
  },
  {
    language: 'HTTP',
    request: `\`\`\`http
POST /b1/api/v3/translate HTTP/1.1
Host: api-b2b.backenster.com
Authorization: Bearer <api_key>
Content-Type: application/json

{
  "platform": "api",
  "from": "en_GB",
  "to": "de_DE",
  "data": "Hello, world!",
  "enableTransliteration": false
}
\`\`\``,
    response: `\`\`\`json
{
  "err": null,
  "result": "Hallo, Welt!"
}
\`\`\``
  },
  {
    language: 'Node',
    request: `\`\`\`javascript
const url = 'https://api-b2b.backenster.com/b1/api/v3/translate';
const options = {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer <api_key>',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    platform: 'api',
    from: 'en_GB',
    to: 'de_DE',
    data: 'Hello, world!',
    enableTransliteration: false
  })
};

try {
  const response = await fetch(url, options);
  const data = await response.json();
  console.log(data);
} catch (error) {
  console.error(error);
}
\`\`\``,
    response: `\`\`\`json
{
  "err": null,
  "result": "Hallo, Welt!"
}
\`\`\``
  },
  {
    language: 'Ruby',
    request: `\`\`\`ruby
require 'uri'
require 'net/http'
require 'json'

url = URI("https://api-b2b.backenster.com/b1/api/v3/translate")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Post.new(url)
request["Authorization"] = 'Bearer <api_key>'
request["Content-Type"] = 'application/json'
request.body = {
  platform: 'api',
  from: 'en_GB',
  to: 'de_DE',
  data: 'Hello, world!',
  enableTransliteration: false
}.to_json

response = http.request(request)
puts response.read_body
\`\`\``,
    response: `\`\`\`json
{
  "err": null,
  "result": "Hallo, Welt!"
}
\`\`\``
  },
  {
    language: 'PHP',
    request: `\`\`\`php
<?php
$curl = curl_init();

curl_setopt_array($curl, [
  CURLOPT_URL => "https://api-b2b.backenster.com/b1/api/v3/translate",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => "",
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 30,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => "POST",
  CURLOPT_POSTFIELDS => json_encode([
    'platform' => 'api',
    'from' => 'en_GB',
    'to' => 'de_DE',
    'data' => 'Hello, world!',
    'enableTransliteration' => false
  ]),
  CURLOPT_HTTPHEADER => [
    "Authorization: Bearer <api_key>",
    "Content-Type: application/json"
  ],
]);

$response = curl_exec($curl);
$err = curl_error($curl);

curl_close($curl);

if ($err) {
  echo "cURL Error #:" . $err;
} else {
  echo $response;
}
?>
\`\`\``,
    response: `\`\`\`json
{
  "err": null,
  "result": "Hallo, Welt!"
}
\`\`\``
  },
  {
    language: 'Python',
    request: `\`\`\`python
import requests
import json

url = "https://api-b2b.backenster.com/b1/api/v3/translate"

payload = {
    "platform": "api",
    "from": "en_GB",
    "to": "de_DE",
    "data": "Hello, world!",
    "enableTransliteration": False
}
headers = {
    "Authorization": "Bearer <api_key>",
    "Content-Type": "application/json"
}

response = requests.post(url, json=payload, headers=headers)

print(response.json())
\`\`\``,
    response: `\`\`\`json
{
  "err": null,
  "result": "Hallo, Welt!"
}
\`\`\``
  },
  {
    language: 'JavaScript',
    request: `\`\`\`javascript
const url = 'https://api-b2b.backenster.com/b1/api/v3/translate';

const data = {
  platform: 'api',
  from: 'en_GB',
  to: 'de_DE',
  data: 'Hello, world!',
  enableTransliteration: false
};

fetch(url, {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer <api_key>',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(data)
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));
\`\`\``,
    response: `\`\`\`json
{
  "err": null,
  "result": "Hallo, Welt!"
}
\`\`\``
  },
  {
    language: 'Swift',
    request: `\`\`\`swift
import Foundation

let url = URL(string: "https://api-b2b.backenster.com/b1/api/v3/translate")!
var request = URLRequest(url: url)
request.httpMethod = "POST"
request.setValue("Bearer <api_key>", forHTTPHeaderField: "Authorization")
request.setValue("application/json", forHTTPHeaderField: "Content-Type")

let body: [String: Any] = [
    "platform": "api",
    "from": "en_GB",
    "to": "de_DE",
    "data": "Hello, world!",
    "enableTransliteration": false
]

request.httpBody = try? JSONSerialization.data(withJSONObject: body)

let task = URLSession.shared.dataTask(with: request) { data, response, error in
    if let data = data {
        let json = try? JSONSerialization.jsonObject(with: data)
        print(json ?? "No data")
    }
}

task.resume()
\`\`\``,
    response: `\`\`\`json
{
  "err": null,
  "result": "Hallo, Welt!"
}
\`\`\``
  },
  {
    language: 'C',
    request: `\`\`\`c
#include <stdio.h>
#include <curl/curl.h>

int main(void) {
    CURL *curl;
    CURLcode res;
    
    curl = curl_easy_init();
    if(curl) {
        struct curl_slist *headers = NULL;
        headers = curl_slist_append(headers, "Authorization: Bearer <api_key>");
        headers = curl_slist_append(headers, "Content-Type: application/json");
        
        const char *data = "{\\"platform\\": \\"api\\", \\"from\\": \\"en_GB\\", "
                          "\\"to\\": \\"de_DE\\", \\"data\\": \\"Hello, world!\\", "
                          "\\"enableTransliteration\\": false}";
        
        curl_easy_setopt(curl, CURLOPT_URL, "https://api-b2b.backenster.com/b1/api/v3/translate");
        curl_easy_setopt(curl, CURLOPT_HTTPHEADER, headers);
        curl_easy_setopt(curl, CURLOPT_POSTFIELDS, data);
        
        res = curl_easy_perform(curl);
        
        curl_slist_free_all(headers);
        curl_easy_cleanup(curl);
    }
    return 0;
}
\`\`\``,
    response: `\`\`\`json
{
  "err": null,
  "result": "Hallo, Welt!"
}
\`\`\``
  },
  {
    language: 'C#',
    request: `\`\`\`csharp
using System;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;
using Newtonsoft.Json;

class Program
{
    static async Task Main()
    {
        var client = new HttpClient();
        client.DefaultRequestHeaders.Add("Authorization", "Bearer <api_key>");
        
        var data = new
        {
            platform = "api",
            from = "en_GB",
            to = "de_DE",
            data = "Hello, world!",
            enableTransliteration = false
        };
        
        var json = JsonConvert.SerializeObject(data);
        var content = new StringContent(json, Encoding.UTF8, "application/json");
        
        var response = await client.PostAsync(
            "https://api-b2b.backenster.com/b1/api/v3/translate", 
            content
        );
        
        var result = await response.Content.ReadAsStringAsync();
        Console.WriteLine(result);
    }
}
\`\`\``,
    response: `\`\`\`json
{
  "err": null,
  "result": "Hallo, Welt!"
}
\`\`\``
  },
  {
    language: 'C++',
    request: `\`\`\`cpp
#include <iostream>
#include <curl/curl.h>
#include <string>

int main() {
    CURL *curl;
    CURLcode res;
    
    curl = curl_easy_init();
    if(curl) {
        struct curl_slist *headers = NULL;
        headers = curl_slist_append(headers, "Authorization: Bearer <api_key>");
        headers = curl_slist_append(headers, "Content-Type: application/json");
        
        std::string data = R"({
            "platform": "api",
            "from": "en_GB",
            "to": "de_DE",
            "data": "Hello, world!",
            "enableTransliteration": false
        })";
        
        curl_easy_setopt(curl, CURLOPT_URL, "https://api-b2b.backenster.com/b1/api/v3/translate");
        curl_easy_setopt(curl, CURLOPT_HTTPHEADER, headers);
        curl_easy_setopt(curl, CURLOPT_POSTFIELDS, data.c_str());
        
        res = curl_easy_perform(curl);
        
        curl_slist_free_all(headers);
        curl_easy_cleanup(curl);
    }
    return 0;
}
\`\`\``,
    response: `\`\`\`json
{
  "err": null,
  "result": "Hallo, Welt!"
}
\`\`\``
  },
  {
    language: 'Clojure',
    request: `\`\`\`clojure
(require '[clj-http.client :as client])
(require '[cheshire.core :as json])

(def response
  (client/post "https://api-b2b.backenster.com/b1/api/v3/translate"
    {:headers {"Authorization" "Bearer <api_key>"
               "Content-Type" "application/json"}
     :body (json/generate-string
             {:platform "api"
              :from "en_GB"
              :to "de_DE"
              :data "Hello, world!"
              :enableTransliteration false})}))

(println (:body response))
\`\`\``,
    response: `\`\`\`json
{
  "err": null,
  "result": "Hallo, Welt!"
}
\`\`\``
  },
  {
    language: 'Go',
    request: `\`\`\`go
package main

import (
    "bytes"
    "encoding/json"
    "fmt"
    "io/ioutil"
    "net/http"
)

func main() {
    url := "https://api-b2b.backenster.com/b1/api/v3/translate"
    
    payload := map[string]interface{}{
        "platform": "api",
        "from": "en_GB",
        "to": "de_DE",
        "data": "Hello, world!",
        "enableTransliteration": false,
    }
    
    jsonData, _ := json.Marshal(payload)
    
    req, _ := http.NewRequest("POST", url, bytes.NewBuffer(jsonData))
    req.Header.Set("Authorization", "Bearer <api_key>")
    req.Header.Set("Content-Type", "application/json")
    
    client := &http.Client{}
    resp, _ := client.Do(req)
    defer resp.Body.Close()
    
    body, _ := ioutil.ReadAll(resp.Body)
    fmt.Println(string(body))
}
\`\`\``,
    response: `\`\`\`json
{
  "err": null,
  "result": "Hallo, Welt!"
}
\`\`\``
  },
  {
    language: 'Java',
    request: `\`\`\`java
import java.net.http.*;
import java.net.URI;
import org.json.JSONObject;

public class TranslateAPI {
    public static void main(String[] args) throws Exception {
        HttpClient client = HttpClient.newHttpClient();
        
        JSONObject json = new JSONObject();
        json.put("platform", "api");
        json.put("from", "en_GB");
        json.put("to", "de_DE");
        json.put("data", "Hello, world!");
        json.put("enableTransliteration", false);
        
        HttpRequest request = HttpRequest.newBuilder()
            .uri(URI.create("https://api-b2b.backenster.com/b1/api/v3/translate"))
            .header("Authorization", "Bearer <api_key>")
            .header("Content-Type", "application/json")
            .POST(HttpRequest.BodyPublishers.ofString(json.toString()))
            .build();
        
        HttpResponse<String> response = client.send(request, 
            HttpResponse.BodyHandlers.ofString());
        
        System.out.println(response.body());
    }
}
\`\`\``,
    response: `\`\`\`json
{
  "err": null,
  "result": "Hallo, Welt!"
}
\`\`\``
  },
  {
    language: 'JSON',
    request: `\`\`\`json
{
  "platform": "api",
  "from": "en_GB",
  "to": "de_DE",
  "data": "Hello, world!",
  "enableTransliteration": false
}
\`\`\``,
    response: `\`\`\`json
{
  "err": null,
  "result": "Hallo, Welt!"
}
\`\`\``
  },
  {
    language: 'Kotlin',
    request: `\`\`\`kotlin
import okhttp3.*
import okhttp3.MediaType.Companion.toMediaType
import okhttp3.RequestBody.Companion.toRequestBody
import org.json.JSONObject

fun main() {
    val client = OkHttpClient()
    
    val json = JSONObject().apply {
        put("platform", "api")
        put("from", "en_GB")
        put("to", "de_DE")
        put("data", "Hello, world!")
        put("enableTransliteration", false)
    }
    
    val mediaType = "application/json".toMediaType()
    val body = json.toString().toRequestBody(mediaType)
    
    val request = Request.Builder()
        .url("https://api-b2b.backenster.com/b1/api/v3/translate")
        .addHeader("Authorization", "Bearer <api_key>")
        .addHeader("Content-Type", "application/json")
        .post(body)
        .build()
    
    client.newCall(request).execute().use { response ->
        println(response.body?.string())
    }
}
\`\`\``,
    response: `\`\`\`json
{
  "err": null,
  "result": "Hallo, Welt!"
}
\`\`\``
  },
  {
    language: 'Objective-C',
    request: `\`\`\`objc
#import <Foundation/Foundation.h>

int main(int argc, const char * argv[]) {
    @autoreleasepool {
        NSURL *url = [NSURL URLWithString:@"https://api-b2b.backenster.com/b1/api/v3/translate"];
        NSMutableURLRequest *request = [NSMutableURLRequest requestWithURL:url];
        [request setHTTPMethod:@"POST"];
        [request setValue:@"Bearer <api_key>" forHTTPHeaderField:@"Authorization"];
        [request setValue:@"application/json" forHTTPHeaderField:@"Content-Type"];
        
        NSDictionary *body = @{
            @"platform": @"api",
            @"from": @"en_GB",
            @"to": @"de_DE",
            @"data": @"Hello, world!",
            @"enableTransliteration": @NO
        };
        
        NSData *jsonData = [NSJSONSerialization dataWithJSONObject:body options:0 error:nil];
        [request setHTTPBody:jsonData];
        
        NSURLSession *session = [NSURLSession sharedSession];
        NSURLSessionDataTask *task = [session dataTaskWithRequest:request
            completionHandler:^(NSData *data, NSURLResponse *response, NSError *error) {
                if (data) {
                    NSDictionary *json = [NSJSONSerialization JSONObjectWithData:data options:0 error:nil];
                    NSLog(@"%@", json);
                }
            }];
        [task resume];
    }
    return 0;
}
\`\`\``,
    response: `\`\`\`json
{
  "err": null,
  "result": "Hallo, Welt!"
}
\`\`\``
  },
  {
    language: 'OCaml',
    request: `\`\`\`ocaml
open Cohttp_lwt_unix
open Cohttp
open Lwt

let () =
  let uri = Uri.of_string "https://api-b2b.backenster.com/b1/api/v3/translate" in
  let headers = Header.init ()
    |> fun h -> Header.add h "Authorization" "Bearer <api_key>"
    |> fun h -> Header.add h "Content-Type" "application/json" in
  let body = Cohttp_lwt.Body.of_string 
    {\`{"platform":"api","from":"en_GB","to":"de_DE","data":"Hello, world!","enableTransliteration":false}\`} in
  
  let%lwt (response, body) = Client.post ~headers ~body uri in
  let%lwt body_str = Cohttp_lwt.Body.to_string body in
  Lwt_io.printl body_str
\`\`\``,
    response: `\`\`\`json
{
  "err": null,
  "result": "Hallo, Welt!"
}
\`\`\``
  },
  {
    language: 'PowerShell',
    request: `\`\`\`powershell
$headers = @{
    "Authorization" = "Bearer <api_key>"
    "Content-Type" = "application/json"
}

$body = @{
    platform = "api"
    from = "en_GB"
    to = "de_DE"
    data = "Hello, world!"
    enableTransliteration = $false
} | ConvertTo-Json

$response = Invoke-RestMethod -Uri "https://api-b2b.backenster.com/b1/api/v3/translate" -Method Post -Headers $headers -Body $body

$response | ConvertTo-Json
\`\`\``,
    response: `\`\`\`json
{
  "err": null,
  "result": "Hallo, Welt!"
}
\`\`\``
  },
  {
    language: 'R',
    request: `\`\`\`r
library(httr)
library(jsonlite)

url <- "https://api-b2b.backenster.com/b1/api/v3/translate"

body <- list(
  platform = "api",
  from = "en_GB",
  to = "de_DE",
  data = "Hello, world!",
  enableTransliteration = FALSE
)

response <- POST(
  url,
  add_headers(
    Authorization = "Bearer <api_key>",
    \`Content-Type\` = "application/json"
  ),
  body = toJSON(body, auto_unbox = TRUE),
  encode = "json"
)

content(response, "text")
\`\`\``,
    response: `\`\`\`json
{
  "err": null,
  "result": "Hallo, Welt!"
}
\`\`\``
  }
];
