export const translateHtmlExamples = [
  {
    language: 'Shell',
    request: `\`\`\`bash
curl --request POST \\
  --url https://api-gl.lingvanex.com/language/translate/v2 \\
  --header 'Authorization: Bearer YOUR_API_KEY' \\
  --header 'Content-Type: application/json' \\
  --data '{
    "target": "de",
    "q": "<p>Hello world</p>"
  }'
\`\`\``,
    response: `\`\`\`json
{
  "result": "<p>Hallo Welt</p>",
  "target": "de"
}
\`\`\``
  },
  {
    language: 'Node',
    request: `\`\`\`javascript
const options = {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    target: 'de',
    q: '<p>Hello world</p>'
  })
};

fetch('https://api-gl.lingvanex.com/language/translate/v2', options)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(err => console.error(err));
\`\`\``,
    response: `\`\`\`json
{
  "result": "<p>Hallo Welt</p>",
  "target": "de"
}
\`\`\``
  },
  {
    language: 'Ruby',
    request: `\`\`\`ruby
require 'uri'
require 'net/http'
require 'json'

url = URI('https://api-gl.lingvanex.com/language/translate/v2')
http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Post.new(url)
request['Authorization'] = 'Bearer YOUR_API_KEY'
request['Content-Type'] = 'application/json'
request.body = {
  target: 'de',
  q: '<p>Hello world</p>'
}.to_json

response = http.request(request)
puts response.read_body
\`\`\``,
    response: `\`\`\`json
{
  "result": "<p>Hallo Welt</p>",
  "target": "de"
}
\`\`\``
  },
  {
    language: 'PHP',
    request: `\`\`\`php
<?php
$curl = curl_init();

curl_setopt_array($curl, [
  CURLOPT_URL => "https://api-gl.lingvanex.com/language/translate/v2",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_POST => true,
  CURLOPT_HTTPHEADER => [
    "Authorization: Bearer YOUR_API_KEY",
    "Content-Type: application/json"
  ],
  CURLOPT_POSTFIELDS => json_encode([
    "target" => "de",
    "q" => "<p>Hello world</p>"
  ])
]);

$response = curl_exec($curl);
curl_close($curl);

echo $response;
?>
\`\`\``,
    response: `\`\`\`json
{
  "result": "<p>Hallo Welt</p>",
  "target": "de"
}
\`\`\``
  },
  {
    language: 'Swift',
    request: `\`\`\`swift
import Foundation

let url = URL(string: "https://api-gl.lingvanex.com/language/translate/v2")!
var request = URLRequest(url: url)
request.httpMethod = "POST"
request.setValue("Bearer YOUR_API_KEY", forHTTPHeaderField: "Authorization")
request.setValue("application/json", forHTTPHeaderField: "Content-Type")

let parameters: [String: Any] = [
    "target": "de",
    "q": "<p>Hello world</p>"
]

request.httpBody = try? JSONSerialization.data(withJSONObject: parameters)

let task = URLSession.shared.dataTask(with: request) { data, response, error in
    if let data = data {
        print(String(data: data, encoding: .utf8) ?? "")
    }
}

task.resume()
\`\`\``,
    response: `\`\`\`json
{
  "result": "<p>Hallo Welt</p>",
  "target": "de"
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
        headers = curl_slist_append(headers, "Authorization: Bearer YOUR_API_KEY");
        headers = curl_slist_append(headers, "Content-Type: application/json");
        
        const char *data = "{\\"target\\":\\"de\\",\\"q\\":\\"<p>Hello world</p>\\"}";
        
        curl_easy_setopt(curl, CURLOPT_URL, "https://api-gl.lingvanex.com/language/translate/v2");
        curl_easy_setopt(curl, CURLOPT_HTTPHEADER, headers);
        curl_easy_setopt(curl, CURLOPT_POSTFIELDS, data);
        
        res = curl_easy_perform(curl);
        curl_easy_cleanup(curl);
        curl_slist_free_all(headers);
    }
    return 0;
}
\`\`\``,
    response: `\`\`\`json
{
  "result": "<p>Hallo Welt</p>",
  "target": "de"
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

class Program {
    static async Task Main() {
        using var client = new HttpClient();
        client.DefaultRequestHeaders.Add("Authorization", "Bearer YOUR_API_KEY");
        
        var content = new StringContent(
            "{\\"target\\":\\"de\\",\\"q\\":\\"<p>Hello world</p>\\"}",
            Encoding.UTF8,
            "application/json"
        );
        
        var response = await client.PostAsync(
            "https://api-gl.lingvanex.com/language/translate/v2",
            content
        );
        
        var result = await response.Content.ReadAsStringAsync();
        Console.WriteLine(result);
    }
}
\`\`\``,
    response: `\`\`\`json
{
  "result": "<p>Hallo Welt</p>",
  "target": "de"
}
\`\`\``
  },
  {
    language: 'C++',
    request: `\`\`\`cpp
#include <iostream>
#include <curl/curl.h>

int main() {
    CURL *curl = curl_easy_init();
    
    if(curl) {
        struct curl_slist *headers = NULL;
        headers = curl_slist_append(headers, "Authorization: Bearer YOUR_API_KEY");
        headers = curl_slist_append(headers, "Content-Type: application/json");
        
        const char *data = "{\\"target\\":\\"de\\",\\"q\\":\\"<p>Hello world</p>\\"}";
        
        curl_easy_setopt(curl, CURLOPT_URL, "https://api-gl.lingvanex.com/language/translate/v2");
        curl_easy_setopt(curl, CURLOPT_HTTPHEADER, headers);
        curl_easy_setopt(curl, CURLOPT_POSTFIELDS, data);
        
        CURLcode res = curl_easy_perform(curl);
        
        curl_easy_cleanup(curl);
        curl_slist_free_all(headers);
    }
    
    return 0;
}
\`\`\``,
    response: `\`\`\`json
{
  "result": "<p>Hallo Welt</p>",
  "target": "de"
}
\`\`\``
  },
  {
    language: 'Clojure',
    request: `\`\`\`clojure
(require '[clj-http.client :as client])
(require '[cheshire.core :as json])

(def response
  (client/post "https://api-gl.lingvanex.com/language/translate/v2"
    {:headers {"Authorization" "Bearer YOUR_API_KEY"
               "Content-Type" "application/json"}
     :body (json/generate-string
             {:target "de"
              :q "<p>Hello world</p>"})}))

(println (:body response))
\`\`\``,
    response: `\`\`\`json
{
  "result": "<p>Hallo Welt</p>",
  "target": "de"
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
    "net/http"
)

func main() {
    url := "https://api-gl.lingvanex.com/language/translate/v2"
    
    payload := map[string]interface{}{
        "target": "de",
        "q": "<p>Hello world</p>",
    }
    
    jsonData, _ := json.Marshal(payload)
    
    req, _ := http.NewRequest("POST", url, bytes.NewBuffer(jsonData))
    req.Header.Set("Authorization", "Bearer YOUR_API_KEY")
    req.Header.Set("Content-Type", "application/json")
    
    client := &http.Client{}
    resp, _ := client.Do(req)
    defer resp.Body.Close()
    
    var result map[string]interface{}
    json.NewDecoder(resp.Body).Decode(&result)
    fmt.Println(result)
}
\`\`\``,
    response: `\`\`\`json
{
  "result": "<p>Hallo Welt</p>",
  "target": "de"
}
\`\`\``
  },
  {
    language: 'HTTP',
    request: `\`\`\`http
POST /language/translate/v2 HTTP/1.1
Host: api-gl.lingvanex.com
Authorization: Bearer YOUR_API_KEY
Content-Type: application/json

{
  "target": "de",
  "q": "<p>Hello world</p>"
}
\`\`\``,
    response: `\`\`\`json
{
  "result": "<p>Hallo Welt</p>",
  "target": "de"
}
\`\`\``
  },
  {
    language: 'Java',
    request: `\`\`\`java
import java.net.http.*;
import java.net.URI;

public class Main {
    public static void main(String[] args) throws Exception {
        HttpClient client = HttpClient.newHttpClient();
        
        String json = "{\\"target\\":\\"de\\",\\"q\\":\\"<p>Hello world</p>\\"}";
        
        HttpRequest request = HttpRequest.newBuilder()
            .uri(URI.create("https://api-gl.lingvanex.com/language/translate/v2"))
            .header("Authorization", "Bearer YOUR_API_KEY")
            .header("Content-Type", "application/json")
            .POST(HttpRequest.BodyPublishers.ofString(json))
            .build();
        
        HttpResponse<String> response = client.send(request, 
            HttpResponse.BodyHandlers.ofString());
        
        System.out.println(response.body());
    }
}
\`\`\``,
    response: `\`\`\`json
{
  "result": "<p>Hallo Welt</p>",
  "target": "de"
}
\`\`\``
  },
  {
    language: 'JavaScript',
    request: `\`\`\`javascript
const options = {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    target: 'de',
    q: '<p>Hello world</p>'
  })
};

fetch('https://api-gl.lingvanex.com/language/translate/v2', options)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(err => console.error(err));
\`\`\``,
    response: `\`\`\`json
{
  "result": "<p>Hallo Welt</p>",
  "target": "de"
}
\`\`\``
  },
  {
    language: 'JSON',
    request: `\`\`\`json
{
  "target": "de",
  "q": "<p>Hello world</p>"
}
\`\`\``,
    response: `\`\`\`json
{
  "result": "<p>Hallo Welt</p>",
  "target": "de"
}
\`\`\``
  },
  {
    language: 'Kotlin',
    request: `\`\`\`kotlin
import java.net.URL
import java.net.HttpURLConnection

fun main() {
    val url = URL("https://api-gl.lingvanex.com/language/translate/v2")
    val connection = url.openConnection() as HttpURLConnection
    
    connection.requestMethod = "POST"
    connection.setRequestProperty("Authorization", "Bearer YOUR_API_KEY")
    connection.setRequestProperty("Content-Type", "application/json")
    connection.doOutput = true
    
    val jsonInputString = """{"target":"de","q":"<p>Hello world</p>"}"""
    
    connection.outputStream.use { os ->
        val input = jsonInputString.toByteArray()
        os.write(input, 0, input.size)
    }
    
    connection.inputStream.bufferedReader().use {
        println(it.readText())
    }
}
\`\`\``,
    response: `\`\`\`json
{
  "result": "<p>Hallo Welt</p>",
  "target": "de"
}
\`\`\``
  },
  {
    language: 'Objective-C',
    request: `\`\`\`objectivec
#import <Foundation/Foundation.h>

int main() {
    NSURL *url = [NSURL URLWithString:@"https://api-gl.lingvanex.com/language/translate/v2"];
    NSMutableURLRequest *request = [NSMutableURLRequest requestWithURL:url];
    
    [request setHTTPMethod:@"POST"];
    [request setValue:@"Bearer YOUR_API_KEY" forHTTPHeaderField:@"Authorization"];
    [request setValue:@"application/json" forHTTPHeaderField:@"Content-Type"];
    
    NSDictionary *params = @{
        @"target": @"de",
        @"q": @"<p>Hello world</p>"
    };
    
    NSData *postData = [NSJSONSerialization dataWithJSONObject:params options:0 error:nil];
    [request setHTTPBody:postData];
    
    NSURLSession *session = [NSURLSession sharedSession];
    NSURLSessionDataTask *task = [session dataTaskWithRequest:request
        completionHandler:^(NSData *data, NSURLResponse *response, NSError *error) {
            NSString *result = [[NSString alloc] initWithData:data encoding:NSUTF8StringEncoding];
            NSLog(@"%@", result);
        }];
    
    [task resume];
    [[NSRunLoop mainRunLoop] run];
    
    return 0;
}
\`\`\``,
    response: `\`\`\`json
{
  "result": "<p>Hallo Welt</p>",
  "target": "de"
}
\`\`\``
  },
  {
    language: 'OCaml',
    request: `\`\`\`ocaml
open Lwt
open Cohttp
open Cohttp_lwt_unix

let body = 
  "{\\"target\\":\\"de\\",\\"q\\":\\"<p>Hello world</p>\\"}"

let () =
  let headers = Header.init ()
    |> fun h -> Header.add h "Authorization" "Bearer YOUR_API_KEY"
    |> fun h -> Header.add h "Content-Type" "application/json" in
  
  let uri = Uri.of_string "https://api-gl.lingvanex.com/language/translate/v2" in
  
  Lwt_main.run (
    Client.post ~headers ~body:(\`String body) uri >>= fun (resp, body) ->
    body |> Cohttp_lwt.Body.to_string >|= fun body ->
    print_endline body
  )
\`\`\``,
    response: `\`\`\`json
{
  "result": "<p>Hallo Welt</p>",
  "target": "de"
}
\`\`\``
  },
  {
    language: 'PowerShell',
    request: `\`\`\`powershell
$headers = @{
    "Authorization" = "Bearer YOUR_API_KEY"
    "Content-Type" = "application/json"
}

$body = @{
    target = "de"
    q = "<p>Hello world</p>"
} | ConvertTo-Json

$response = Invoke-RestMethod -Uri "https://api-gl.lingvanex.com/language/translate/v2" \`
    -Method Post \`
    -Headers $headers \`
    -Body $body

$response | ConvertTo-Json
\`\`\``,
    response: `\`\`\`json
{
  "result": "<p>Hallo Welt</p>",
  "target": "de"
}
\`\`\``
  },
  {
    language: 'Python',
    request: `\`\`\`python
import requests

url = "https://api-gl.lingvanex.com/language/translate/v2"

headers = {
    "Authorization": "Bearer YOUR_API_KEY",
    "Content-Type": "application/json"
}

payload = {
    "target": "de",
    "q": "<p>Hello world</p>"
}

response = requests.post(url, json=payload, headers=headers)
print(response.json())
\`\`\``,
    response: `\`\`\`json
{
  "result": "<p>Hallo Welt</p>",
  "target": "de"
}
\`\`\``
  },
  {
    language: 'R',
    request: `\`\`\`r
library(httr)
library(jsonlite)

url <- "https://api-gl.lingvanex.com/language/translate/v2"

headers <- add_headers(
  Authorization = "Bearer YOUR_API_KEY",
  \`Content-Type\` = "application/json"
)

body <- list(
  target = "de",
  q = "<p>Hello world</p>"
)

response <- POST(url, 
                 headers, 
                 body = toJSON(body, auto_unbox = TRUE),
                 encode = "json")

content(response, "text")
\`\`\``,
    response: `\`\`\`json
{
  "result": "<p>Hallo Welt</p>",
  "target": "de"
}
\`\`\``
  }
];
