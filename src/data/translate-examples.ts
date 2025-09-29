export const translateExamples = [
  {
    language: "Shell",
    request: "```bash\ncurl -X POST \"https://api-b2b.backenster.com/b1/api/v3/translate\" \\\\\n  -H \"Authorization: Lingvanex-Auth-Key YOUR_API_KEY\" \\\\\n  -H \"Content-Type: application/json\" \\\\\n  -d '{\n    \"from\": \"en_GB\",\n    \"to\": \"de_DE\",\n    \"data\": \"Hello, world!\",\n    \"platform\": \"api\"\n  }'\n```",
    response: "```json\n{\n  \"err\": null,\n  \"result\": \"Hallo, Welt!\"\n}\n```"
  },
  {
    language: "Node",
    request: "```javascript\nconst axios = require('axios');\n\nconst options = {\n  method: 'POST',\n  url: 'https://api-b2b.backenster.com/b1/api/v3/translate',\n  headers: {\n    'Authorization': 'Lingvanex-Auth-Key YOUR_API_KEY',\n    'Content-Type': 'application/json'\n  },\n  data: {\n    from: 'en_GB',\n    to: 'de_DE',\n    data: 'Hello, world!',\n    platform: 'api'\n  }\n};\n\naxios.request(options)\n  .then(response => {\n    console.log(response.data);\n  })\n  .catch(error => {\n    console.error(error);\n  });\n```",
    response: "```json\n{\n  \"err\": null,\n  \"result\": \"Hallo, Welt!\"\n}\n```"
  },
  {
    language: "Ruby",
    request: "```ruby\nrequire 'net/http'\nrequire 'json'\nrequire 'uri'\n\nuri = URI('https://api-b2b.backenster.com/b1/api/v3/translate')\nhttp = Net::HTTP.new(uri.host, uri.port)\nhttp.use_ssl = true\n\nrequest = Net::HTTP::Post.new(uri)\nrequest['Authorization'] = 'Lingvanex-Auth-Key YOUR_API_KEY'\nrequest['Content-Type'] = 'application/json'\nrequest.body = {\n  from: 'en_GB',\n  to: 'de_DE',\n  data: 'Hello, world!',\n  platform: 'api'\n}.to_json\n\nresponse = http.request(request)\nputs response.body\n```",
    response: "```json\n{\n  \"err\": null,\n  \"result\": \"Hallo, Welt!\"\n}\n```"
  },
  {
    language: "PHP",
    request: "```php\n<?php\n$curl = curl_init();\n\ncurl_setopt_array($curl, [\n  CURLOPT_URL => \"https://api-b2b.backenster.com/b1/api/v3/translate\",\n  CURLOPT_RETURNTRANSFER => true,\n  CURLOPT_POST => true,\n  CURLOPT_HTTPHEADER => [\n    \"Authorization: Lingvanex-Auth-Key YOUR_API_KEY\",\n    \"Content-Type: application/json\"\n  ],\n  CURLOPT_POSTFIELDS => json_encode([\n    \"from\" => \"en_GB\",\n    \"to\" => \"de_DE\",\n    \"data\" => \"Hello, world!\",\n    \"platform\" => \"api\"\n  ])\n]);\n\n$response = curl_exec($curl);\ncurl_close($curl);\n\necho $response;\n?>\n```",
    response: "```json\n{\n  \"err\": null,\n  \"result\": \"Hallo, Welt!\"\n}\n```"
  },
  {
    language: "Swift",
    request: "```swift\nimport Foundation\n\nlet url = URL(string: \"https://api-b2b.backenster.com/b1/api/v3/translate\")!\nvar request = URLRequest(url: url)\nrequest.httpMethod = \"POST\"\nrequest.setValue(\"Lingvanex-Auth-Key YOUR_API_KEY\", forHTTPHeaderField: \"Authorization\")\nrequest.setValue(\"application/json\", forHTTPHeaderField: \"Content-Type\")\n\nlet parameters: [String: Any] = [\n    \"from\": \"en_GB\",\n    \"to\": \"de_DE\",\n    \"data\": \"Hello, world!\",\n    \"platform\": \"api\"\n]\n\nrequest.httpBody = try? JSONSerialization.data(withJSONObject: parameters)\n\nlet task = URLSession.shared.dataTask(with: request) { data, response, error in\n    if let data = data {\n        print(String(data: data, encoding: .utf8)!)\n    }\n}\n\ntask.resume()\n```",
    response: "```json\n{\n  \"err\": null,\n  \"result\": \"Hallo, Welt!\"\n}\n```"
  },
  {
    language: "C",
    request: "```c\n#include <stdio.h>\n#include <curl/curl.h>\n#include <string.h>\n\nint main(void) {\n    CURL *curl;\n    CURLcode res;\n    const char *json_data = \"{\\\"from\\\":\\\"en_GB\\\",\\\"to\\\":\\\"de_DE\\\",\\\"data\\\":\\\"Hello, world!\\\",\\\"platform\\\":\\\"api\\\"}\";\n\n    curl = curl_easy_init();\n    if(curl) {\n        curl_easy_setopt(curl, CURLOPT_URL, \"https://api-b2b.backenster.com/b1/api/v3/translate\");\n        \n        struct curl_slist *headers = NULL;\n        headers = curl_slist_append(headers, \"Authorization: Lingvanex-Auth-Key YOUR_API_KEY\");\n        headers = curl_slist_append(headers, \"Content-Type: application/json\");\n        curl_easy_setopt(curl, CURLOPT_HTTPHEADER, headers);\n        \n        curl_easy_setopt(curl, CURLOPT_POSTFIELDS, json_data);\n\n        res = curl_easy_perform(curl);\n        curl_easy_cleanup(curl);\n        curl_slist_free_all(headers);\n    }\n    return 0;\n}\n```",
    response: "```json\n{\n  \"err\": null,\n  \"result\": \"Hallo, Welt!\"\n}\n```"
  },
  {
    language: "C#",
    request: "```csharp\nusing System;\nusing System.Net.Http;\nusing System.Text;\nusing System.Threading.Tasks;\nusing Newtonsoft.Json;\n\nclass Program\n{\n    private static readonly HttpClient client = new HttpClient();\n\n    static async Task Main()\n    {\n        client.DefaultRequestHeaders.Add(\"Authorization\", \"Lingvanex-Auth-Key YOUR_API_KEY\");\n        \n        var requestBody = new\n        {\n            from = \"en_GB\",\n            to = \"de_DE\",\n            data = \"Hello, world!\",\n            platform = \"api\"\n        };\n        \n        var json = JsonConvert.SerializeObject(requestBody);\n        var content = new StringContent(json, Encoding.UTF8, \"application/json\");\n        \n        var response = await client.PostAsync(\"https://api-b2b.backenster.com/b1/api/v3/translate\", content);\n        var responseString = await response.Content.ReadAsStringAsync();\n        \n        Console.WriteLine(responseString);\n    }\n}\n```",
    response: "```json\n{\n  \"err\": null,\n  \"result\": \"Hallo, Welt!\"\n}\n```"
  },
  {
    language: "C++",
    request: "```cpp\n#include <iostream>\n#include <curl/curl.h>\n#include <string>\n\nsize_t WriteCallback(void *contents, size_t size, size_t nmemb, void *userp) {\n    ((std::string*)userp)->append((char*)contents, size * nmemb);\n    return size * nmemb;\n}\n\nint main() {\n    CURL *curl;\n    CURLcode res;\n    std::string readBuffer;\n    const char* json_data = \"{\\\"from\\\":\\\"en_GB\\\",\\\"to\\\":\\\"de_DE\\\",\\\"data\\\":\\\"Hello, world!\\\",\\\"platform\\\":\\\"api\\\"}\";\n\n    curl = curl_easy_init();\n    if(curl) {\n        curl_easy_setopt(curl, CURLOPT_URL, \"https://api-b2b.backenster.com/b1/api/v3/translate\");\n        curl_easy_setopt(curl, CURLOPT_WRITEFUNCTION, WriteCallback);\n        curl_easy_setopt(curl, CURLOPT_WRITEDATA, &readBuffer);\n        curl_easy_setopt(curl, CURLOPT_POSTFIELDS, json_data);\n        \n        struct curl_slist *headers = NULL;\n        headers = curl_slist_append(headers, \"Authorization: Lingvanex-Auth-Key YOUR_API_KEY\");\n        headers = curl_slist_append(headers, \"Content-Type: application/json\");\n        curl_easy_setopt(curl, CURLOPT_HTTPHEADER, headers);\n\n        res = curl_easy_perform(curl);\n        curl_easy_cleanup(curl);\n        curl_slist_free_all(headers);\n        \n        std::cout << readBuffer << std::endl;\n    }\n    return 0;\n}\n```",
    response: "```json\n{\n  \"err\": null,\n  \"result\": \"Hallo, Welt!\"\n}\n```"
  },
  {
    language: "Clojure",
    request: "```clojure\n(require '[clj-http.client :as client]\n         '[cheshire.core :as json])\n\n(def response \n  (client/post \"https://api-b2b.backenster.com/b1/api/v3/translate\"\n               {:headers {\"Authorization\" \"Lingvanex-Auth-Key YOUR_API_KEY\"\n                         \"Content-Type\" \"application/json\"}\n                :body (json/encode {:from \"en_GB\"\n                                   :to \"de_DE\"\n                                   :data \"Hello, world!\"\n                                   :platform \"api\"})}))\n\n(println (:body response))\n```",
    response: "```json\n{\n  \"err\": null,\n  \"result\": \"Hallo, Welt!\"\n}\n```"
  },
  {
    language: "Go",
    request: "```go\npackage main\n\nimport (\n    \"bytes\"\n    \"encoding/json\"\n    \"fmt\"\n    \"io\"\n    \"net/http\"\n)\n\nfunc main() {\n    requestBody := map[string]interface{}{\n        \"from\": \"en_GB\",\n        \"to\": \"de_DE\",\n        \"data\": \"Hello, world!\",\n        \"platform\": \"api\",\n    }\n    \n    jsonData, _ := json.Marshal(requestBody)\n    \n    req, _ := http.NewRequest(\"POST\", \"https://api-b2b.backenster.com/b1/api/v3/translate\", bytes.NewBuffer(jsonData))\n    req.Header.Add(\"Authorization\", \"Lingvanex-Auth-Key YOUR_API_KEY\")\n    req.Header.Add(\"Content-Type\", \"application/json\")\n    \n    client := &http.Client{}\n    res, _ := client.Do(req)\n    defer res.Body.Close()\n    \n    body, _ := io.ReadAll(res.Body)\n    fmt.Println(string(body))\n}\n```",
    response: "```json\n{\n  \"err\": null,\n  \"result\": \"Hallo, Welt!\"\n}\n```"
  },
  {
    language: "HTTP",
    request: "```http\nPOST /b1/api/v3/translate HTTP/1.1\nHost: api-b2b.backenster.com\nAuthorization: Lingvanex-Auth-Key YOUR_API_KEY\nContent-Type: application/json\n\n{\n  \"from\": \"en_GB\",\n  \"to\": \"de_DE\",\n  \"data\": \"Hello, world!\",\n  \"platform\": \"api\"\n}\n```",
    response: "```json\n{\n  \"err\": null,\n  \"result\": \"Hallo, Welt!\"\n}\n```"
  },
  {
    language: "Java",
    request: "```java\nimport java.io.IOException;\nimport java.net.URI;\nimport java.net.http.HttpClient;\nimport java.net.http.HttpRequest;\nimport java.net.http.HttpResponse;\n\npublic class TranslateExample {\n    public static void main(String[] args) throws IOException, InterruptedException {\n        HttpClient client = HttpClient.newHttpClient();\n        \n        String json = \"{\\\"from\\\":\\\"en_GB\\\",\\\"to\\\":\\\"de_DE\\\",\\\"data\\\":\\\"Hello, world!\\\",\\\"platform\\\":\\\"api\\\"}\";\n        \n        HttpRequest request = HttpRequest.newBuilder()\n                .uri(URI.create(\"https://api-b2b.backenster.com/b1/api/v3/translate\"))\n                .header(\"Authorization\", \"Lingvanex-Auth-Key YOUR_API_KEY\")\n                .header(\"Content-Type\", \"application/json\")\n                .POST(HttpRequest.BodyPublishers.ofString(json))\n                .build();\n        \n        HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());\n        System.out.println(response.body());\n    }\n}\n```",
    response: "```json\n{\n  \"err\": null,\n  \"result\": \"Hallo, Welt!\"\n}\n```"
  },
  {
    language: "JavaScript",
    request: "```javascript\nfetch('https://api-b2b.backenster.com/b1/api/v3/translate', {\n  method: 'POST',\n  headers: {\n    'Authorization': 'Lingvanex-Auth-Key YOUR_API_KEY',\n    'Content-Type': 'application/json'\n  },\n  body: JSON.stringify({\n    from: 'en_GB',\n    to: 'de_DE',\n    data: 'Hello, world!',\n    platform: 'api'\n  })\n})\n.then(response => response.json())\n.then(data => console.log(data))\n.catch(error => console.error('Error:', error));\n```",
    response: "```json\n{\n  \"err\": null,\n  \"result\": \"Hallo, Welt!\"\n}\n```"
  },
  {
    language: "JSON",
    request: "```json\n{\n  \"from\": \"en_GB\",\n  \"to\": \"de_DE\",\n  \"data\": \"Hello, world!\",\n  \"platform\": \"api\"\n}\n```",
    response: "```json\n{\n  \"err\": null,\n  \"result\": \"Hallo, Welt!\"\n}\n```"
  },
  {
    language: "Kotlin",
    request: "```kotlin\nimport kotlinx.coroutines.runBlocking\nimport java.net.URI\nimport java.net.http.HttpClient\nimport java.net.http.HttpRequest\nimport java.net.http.HttpResponse\n\nfun main() = runBlocking {\n    val client = HttpClient.newHttpClient()\n    \n    val json = \"\"\"\n        {\n            \"from\": \"en_GB\",\n            \"to\": \"de_DE\",\n            \"data\": \"Hello, world!\",\n            \"platform\": \"api\"\n        }\n    \"\"\".trimIndent()\n    \n    val request = HttpRequest.newBuilder()\n        .uri(URI.create(\"https://api-b2b.backenster.com/b1/api/v3/translate\"))\n        .header(\"Authorization\", \"Lingvanex-Auth-Key YOUR_API_KEY\")\n        .header(\"Content-Type\", \"application/json\")\n        .POST(HttpRequest.BodyPublishers.ofString(json))\n        .build()\n    \n    val response = client.send(request, HttpResponse.BodyHandlers.ofString())\n    println(response.body())\n}\n```",
    response: "```json\n{\n  \"err\": null,\n  \"result\": \"Hallo, Welt!\"\n}\n```"
  },
  {
    language: "Objective_C",
    request: "```objc\n#import <Foundation/Foundation.h>\n\nint main(int argc, const char * argv[]) {\n    @autoreleasepool {\n        NSURL *url = [NSURL URLWithString:@\"https://api-b2b.backenster.com/b1/api/v3/translate\"];\n        NSMutableURLRequest *request = [NSMutableURLRequest requestWithURL:url];\n        [request setHTTPMethod:@\"POST\"];\n        [request setValue:@\"Lingvanex-Auth-Key YOUR_API_KEY\" forHTTPHeaderField:@\"Authorization\"];\n        [request setValue:@\"application/json\" forHTTPHeaderField:@\"Content-Type\"];\n        \n        NSDictionary *parameters = @{\n            @\"from\": @\"en_GB\",\n            @\"to\": @\"de_DE\",\n            @\"data\": @\"Hello, world!\",\n            @\"platform\": @\"api\"\n        };\n        \n        NSData *jsonData = [NSJSONSerialization dataWithJSONObject:parameters options:0 error:nil];\n        [request setHTTPBody:jsonData];\n        \n        NSURLSession *session = [NSURLSession sharedSession];\n        NSURLSessionDataTask *task = [session dataTaskWithRequest:request\n                                               completionHandler:^(NSData *data, NSURLResponse *response, NSError *error) {\n            if (data) {\n                NSString *responseString = [[NSString alloc] initWithData:data encoding:NSUTF8StringEncoding];\n                NSLog(@\"%@\", responseString);\n            }\n        }];\n        \n        [task resume];\n        \n        // Keep the program running\n        [[NSRunLoop currentRunLoop] run];\n    }\n    return 0;\n}\n```",
    response: "```json\n{\n  \"err\": null,\n  \"result\": \"Hallo, Welt!\"\n}\n```"
  },
  {
    language: "OCaml",
    request: "```ocaml\nopen Lwt.Syntax\nopen Cohttp_lwt_unix\n\nlet translate_text () =\n  let headers = Cohttp.Header.of_list [\n    (\"Authorization\", \"Lingvanex-Auth-Key YOUR_API_KEY\");\n    (\"Content-Type\", \"application/json\")\n  ] in\n  let json_body = Yojson.Safe.to_string (`Assoc [\n    (\"from\", `String \"en_GB\");\n    (\"to\", `String \"de_DE\");\n    (\"data\", `String \"Hello, world!\");\n    (\"platform\", `String \"api\")\n  ]) in\n  let* (resp, body) = Client.post ~headers ~body:(`String json_body) \n    (Uri.of_string \"https://api-b2b.backenster.com/b1/api/v3/translate\") in\n  let* body_string = Cohttp_lwt.Body.to_string body in\n  Printf.printf \"%s\\n\" body_string;\n  Lwt.return ()\n\nlet () = Lwt_main.run (translate_text ())\n```",
    response: "```json\n{\n  \"err\": null,\n  \"result\": \"Hallo, Welt!\"\n}\n```"
  },
  {
    language: "PowerShell",
    request: "```powershell\n$headers = @{\n    'Authorization' = 'Lingvanex-Auth-Key YOUR_API_KEY'\n    'Content-Type' = 'application/json'\n}\n\n$body = @{\n    'from' = 'en_GB'\n    'to' = 'de_DE'\n    'data' = 'Hello, world!'\n    'platform' = 'api'\n} | ConvertTo-Json\n\n$response = Invoke-RestMethod -Uri 'https://api-b2b.backenster.com/b1/api/v3/translate' -Method POST -Headers $headers -Body $body\n\nWrite-Output $response\n```",
    response: "```json\n{\n  \"err\": null,\n  \"result\": \"Hallo, Welt!\"\n}\n```"
  },
  {
    language: "Python",
    request: "```python\nimport requests\nimport json\n\nurl = \"https://api-b2b.backenster.com/b1/api/v3/translate\"\n\nheaders = {\n    \"Authorization\": \"Lingvanex-Auth-Key YOUR_API_KEY\",\n    \"Content-Type\": \"application/json\"\n}\n\ndata = {\n    \"from\": \"en_GB\",\n    \"to\": \"de_DE\",\n    \"data\": \"Hello, world!\",\n    \"platform\": \"api\"\n}\n\nresponse = requests.post(url, headers=headers, json=data)\nprint(response.json())\n```",
    response: "```json\n{\n  \"err\": null,\n  \"result\": \"Hallo, Welt!\"\n}\n```"
  },
  {
    language: "R",
    request: "```r\nlibrary(httr)\nlibrary(jsonlite)\n\nurl <- \"https://api-b2b.backenster.com/b1/api/v3/translate\"\n\nheaders <- add_headers(\n  \"Authorization\" = \"Lingvanex-Auth-Key YOUR_API_KEY\",\n  \"Content-Type\" = \"application/json\"\n)\n\nbody <- list(\n  from = \"en_GB\",\n  to = \"de_DE\",\n  data = \"Hello, world!\",\n  platform = \"api\"\n)\n\nresponse <- POST(url, headers, body = toJSON(body, auto_unbox = TRUE))\nresult <- content(response, as = \"text\")\ncat(result)\n```",
    response: "```json\n{\n  \"err\": null,\n  \"result\": \"Hallo, Welt!\"\n}\n```"
  }
];