export const gettingLanguagesExamples = [
  {
    language: "Shell",
    request: "```bash\ncurl -X GET \"https://api-b2b.backenster.com/b1/api/v3/getLanguages?platform=api&code=en_GB\" \\\n  -H \"Authorization: Lingvanex-Auth-Key YOUR_API_KEY\"\n```",
    response: "```json\n{\n  \"err\": null,\n  \"result\": [\n    {\n      \"code\": \"af_ZA\",\n      \"englishName\": \"Afrikaans\",\n      \"nativeName\": \"Afrikaans\"\n    },\n    {\n      \"code\": \"ar_SA\",\n      \"englishName\": \"Arabic\",\n      \"nativeName\": \"العربية\"\n    }\n  ]\n}\n```"
  },
  {
    language: "Node",
    request: "```javascript\nconst axios = require('axios');\n\nconst options = {\n  method: 'GET',\n  url: 'https://api-b2b.backenster.com/b1/api/v3/getLanguages',\n  params: {\n    platform: 'api',\n    code: 'en_GB'\n  },\n  headers: {\n    Authorization: 'Lingvanex-Auth-Key YOUR_API_KEY'\n  }\n};\n\naxios.request(options).then(function (response) {\n  console.log(response.data);\n}).catch(function (error) {\n  console.error(error);\n});\n```",
    response: "```json\n{\n  \"err\": null,\n  \"result\": [\n    {\n      \"code\": \"af_ZA\",\n      \"englishName\": \"Afrikaans\",\n      \"nativeName\": \"Afrikaans\"\n    },\n    {\n      \"code\": \"ar_SA\",\n      \"englishName\": \"Arabic\",\n      \"nativeName\": \"العربية\"\n    }\n  ]\n}\n```"
  },
  {
    language: "Ruby",
    request: "```ruby\nrequire 'net/http'\nrequire 'uri'\n\nuri = URI('https://api-b2b.backenster.com/b1/api/v3/getLanguages')\nuri.query = URI.encode_www_form({\n  platform: 'api',\n  code: 'en_GB'\n})\n\nhttp = Net::HTTP.new(uri.host, uri.port)\nhttp.use_ssl = true\n\nrequest = Net::HTTP::Get.new(uri)\nrequest['Authorization'] = 'Lingvanex-Auth-Key YOUR_API_KEY'\n\nresponse = http.request(request)\nputs response.body\n```",
    response: "```json\n{\n  \"err\": null,\n  \"result\": [\n    {\n      \"code\": \"af_ZA\",\n      \"englishName\": \"Afrikaans\",\n      \"nativeName\": \"Afrikaans\"\n    },\n    {\n      \"code\": \"ar_SA\",\n      \"englishName\": \"Arabic\",\n      \"nativeName\": \"العربية\"\n    }\n  ]\n}\n```"
  },
  {
    language: "PHP",
    request: "```php\n<?php\n$curl = curl_init();\n\ncurl_setopt_array($curl, [\n  CURLOPT_URL => \"https://api-b2b.backenster.com/b1/api/v3/getLanguages?platform=api&code=en_GB\",\n  CURLOPT_RETURNTRANSFER => true,\n  CURLOPT_HTTPHEADER => [\n    \"Authorization: Lingvanex-Auth-Key YOUR_API_KEY\"\n  ],\n]);\n\n$response = curl_exec($curl);\ncurl_close($curl);\n\necho $response;\n?>\n```",
    response: "```json\n{\n  \"err\": null,\n  \"result\": [\n    {\n      \"code\": \"af_ZA\",\n      \"englishName\": \"Afrikaans\",\n      \"nativeName\": \"Afrikaans\"\n    },\n    {\n      \"code\": \"ar_SA\",\n      \"englishName\": \"Arabic\",\n      \"nativeName\": \"العربية\"\n    }\n  ]\n}\n```"
  },
  {
    language: "Swift",
    request: "```swift\nimport Foundation\n\nlet url = URL(string: \"https://api-b2b.backenster.com/b1/api/v3/getLanguages?platform=api&code=en_GB\")!\nvar request = URLRequest(url: url)\nrequest.setValue(\"Lingvanex-Auth-Key YOUR_API_KEY\", forHTTPHeaderField: \"Authorization\")\n\nlet task = URLSession.shared.dataTask(with: request) { data, response, error in\n    if let data = data {\n        print(String(data: data, encoding: .utf8)!)\n    }\n}\n\ntask.resume()\n```",
    response: "```json\n{\n  \"err\": null,\n  \"result\": [\n    {\n      \"code\": \"af_ZA\",\n      \"englishName\": \"Afrikaans\",\n      \"nativeName\": \"Afrikaans\"\n    },\n    {\n      \"code\": \"ar_SA\",\n      \"englishName\": \"Arabic\",\n      \"nativeName\": \"العربية\"\n    }\n  ]\n}\n```"
  },
  {
    language: "C",
    request: "```c\n#include <stdio.h>\n#include <curl/curl.h>\n\nint main(void) {\n    CURL *curl;\n    CURLcode res;\n\n    curl = curl_easy_init();\n    if(curl) {\n        curl_easy_setopt(curl, CURLOPT_URL, \"https://api-b2b.backenster.com/b1/api/v3/getLanguages?platform=api&code=en_GB\");\n        \n        struct curl_slist *headers = NULL;\n        headers = curl_slist_append(headers, \"Authorization: Lingvanex-Auth-Key YOUR_API_KEY\");\n        curl_easy_setopt(curl, CURLOPT_HTTPHEADER, headers);\n\n        res = curl_easy_perform(curl);\n        curl_easy_cleanup(curl);\n        curl_slist_free_all(headers);\n    }\n    return 0;\n}\n```",
    response: "```json\n{\n  \"err\": null,\n  \"result\": [\n    {\n      \"code\": \"af_ZA\",\n      \"englishName\": \"Afrikaans\",\n      \"nativeName\": \"Afrikaans\"\n    },\n    {\n      \"code\": \"ar_SA\",\n      \"englishName\": \"Arabic\",\n      \"nativeName\": \"العربية\"\n    }\n  ]\n}\n```"
  },
  {
    language: "C#",
    request: "```csharp\nusing System;\nusing System.Net.Http;\nusing System.Threading.Tasks;\n\nclass Program\n{\n    private static readonly HttpClient client = new HttpClient();\n\n    static async Task Main()\n    {\n        client.DefaultRequestHeaders.Add(\"Authorization\", \"Lingvanex-Auth-Key YOUR_API_KEY\");\n        \n        string response = await client.GetStringAsync(\"https://api-b2b.backenster.com/b1/api/v3/getLanguages?platform=api&code=en_GB\");\n        Console.WriteLine(response);\n    }\n}\n```",
    response: "```json\n{\n  \"err\": null,\n  \"result\": [\n    {\n      \"code\": \"af_ZA\",\n      \"englishName\": \"Afrikaans\",\n      \"nativeName\": \"Afrikaans\"\n    },\n    {\n      \"code\": \"ar_SA\",\n      \"englishName\": \"Arabic\",\n      \"nativeName\": \"العربية\"\n    }\n  ]\n}\n```"
  },
  {
    language: "C++",
    request: "```cpp\n#include <iostream>\n#include <curl/curl.h>\n\nsize_t WriteCallback(void *contents, size_t size, size_t nmemb, void *userp) {\n    ((std::string*)userp)->append((char*)contents, size * nmemb);\n    return size * nmemb;\n}\n\nint main() {\n    CURL *curl;\n    CURLcode res;\n    std::string readBuffer;\n\n    curl = curl_easy_init();\n    if(curl) {\n        curl_easy_setopt(curl, CURLOPT_URL, \"https://api-b2b.backenster.com/b1/api/v3/getLanguages?platform=api&code=en_GB\");\n        curl_easy_setopt(curl, CURLOPT_WRITEFUNCTION, WriteCallback);\n        curl_easy_setopt(curl, CURLOPT_WRITEDATA, &readBuffer);\n        \n        struct curl_slist *headers = NULL;\n        headers = curl_slist_append(headers, \"Authorization: Lingvanex-Auth-Key YOUR_API_KEY\");\n        curl_easy_setopt(curl, CURLOPT_HTTPHEADER, headers);\n\n        res = curl_easy_perform(curl);\n        curl_easy_cleanup(curl);\n        curl_slist_free_all(headers);\n        \n        std::cout << readBuffer << std::endl;\n    }\n    return 0;\n}\n```",
    response: "```json\n{\n  \"err\": null,\n  \"result\": [\n    {\n      \"code\": \"af_ZA\",\n      \"englishName\": \"Afrikaans\",\n      \"nativeName\": \"Afrikaans\"\n    },\n    {\n      \"code\": \"ar_SA\",\n      \"englishName\": \"Arabic\",\n      \"nativeName\": \"العربية\"\n    }\n  ]\n}\n```"
  },
  {
    language: "Clojure",
    request: "```clojure\n(require '[clj-http.client :as client])\n\n(def response \n  (client/get \"https://api-b2b.backenster.com/b1/api/v3/getLanguages\"\n              {:query-params {:platform \"api\" :code \"en_GB\"}\n               :headers {\"Authorization\" \"Lingvanex-Auth-Key YOUR_API_KEY\"}}))\n\n(println (:body response))\n```",
    response: "```json\n{\n  \"err\": null,\n  \"result\": [\n    {\n      \"code\": \"af_ZA\",\n      \"englishName\": \"Afrikaans\",\n      \"nativeName\": \"Afrikaans\"\n    },\n    {\n      \"code\": \"ar_SA\",\n      \"englishName\": \"Arabic\",\n      \"nativeName\": \"العربية\"\n    }\n  ]\n}\n```"
  },
  {
    language: "Go",
    request: "```go\npackage main\n\nimport (\n    \"fmt\"\n    \"io\"\n    \"net/http\"\n)\n\nfunc main() {\n    url := \"https://api-b2b.backenster.com/b1/api/v3/getLanguages?platform=api&code=en_GB\"\n    \n    req, _ := http.NewRequest(\"GET\", url, nil)\n    req.Header.Add(\"Authorization\", \"Lingvanex-Auth-Key YOUR_API_KEY\")\n    \n    res, _ := http.DefaultClient.Do(req)\n    defer res.Body.Close()\n    \n    body, _ := io.ReadAll(res.Body)\n    fmt.Println(string(body))\n}\n```",
    response: "```json\n{\n  \"err\": null,\n  \"result\": [\n    {\n      \"code\": \"af_ZA\",\n      \"englishName\": \"Afrikaans\",\n      \"nativeName\": \"Afrikaans\"\n    },\n    {\n      \"code\": \"ar_SA\",\n      \"englishName\": \"Arabic\",\n      \"nativeName\": \"العربية\"\n    }\n  ]\n}\n```"
  },
  {
    language: "HTTP",
    request: "```http\nGET /b1/api/v3/getLanguages?platform=api&code=en_GB HTTP/1.1\nHost: api-b2b.backenster.com\nAuthorization: Lingvanex-Auth-Key YOUR_API_KEY\n```",
    response: "```json\n{\n  \"err\": null,\n  \"result\": [\n    {\n      \"code\": \"af_ZA\",\n      \"englishName\": \"Afrikaans\",\n      \"nativeName\": \"Afrikaans\"\n    },\n    {\n      \"code\": \"ar_SA\",\n      \"englishName\": \"Arabic\",\n      \"nativeName\": \"العربية\"\n    }\n  ]\n}\n```"
  },
  {
    language: "Java",
    request: "```java\nimport java.io.IOException;\nimport java.net.URI;\nimport java.net.http.HttpClient;\nimport java.net.http.HttpRequest;\nimport java.net.http.HttpResponse;\n\npublic class Main {\n    public static void main(String[] args) throws IOException, InterruptedException {\n        HttpClient client = HttpClient.newHttpClient();\n        HttpRequest request = HttpRequest.newBuilder()\n                .uri(URI.create(\"https://api-b2b.backenster.com/b1/api/v3/getLanguages?platform=api&code=en_GB\"))\n                .header(\"Authorization\", \"Lingvanex-Auth-Key YOUR_API_KEY\")\n                .build();\n\n        HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());\n        System.out.println(response.body());\n    }\n}\n```",
    response: "```json\n{\n  \"err\": null,\n  \"result\": [\n    {\n      \"code\": \"af_ZA\",\n      \"englishName\": \"Afrikaans\",\n      \"nativeName\": \"Afrikaans\"\n    },\n    {\n      \"code\": \"ar_SA\",\n      \"englishName\": \"Arabic\",\n      \"nativeName\": \"العربية\"\n    }\n  ]\n}\n```"
  },
  {
    language: "JavaScript",
    request: "```javascript\nconst url = 'https://api-b2b.backenster.com/b1/api/v3/getLanguages?platform=api&code=en_GB';\nconst options = {\n  method: 'GET',\n  headers: {\n    Authorization: 'Lingvanex-Auth-Key YOUR_API_KEY'\n  }\n};\n\nfetch(url, options)\n  .then(res => res.json())\n  .then(json => console.log(json))\n  .catch(err => console.error('error:' + err));\n```",
    response: "```json\n{\n  \"err\": null,\n  \"result\": [\n    {\n      \"code\": \"af_ZA\",\n      \"englishName\": \"Afrikaans\",\n      \"nativeName\": \"Afrikaans\"\n    },\n    {\n      \"code\": \"ar_SA\",\n      \"englishName\": \"Arabic\",\n      \"nativeName\": \"العربية\"\n    }\n  ]\n}\n```"
  },
  {
    language: "JSON",
    request: "```json\n{\n  \"method\": \"GET\",\n  \"url\": \"https://api-b2b.backenster.com/b1/api/v3/getLanguages\",\n  \"params\": {\n    \"platform\": \"api\",\n    \"code\": \"en_GB\"\n  },\n  \"headers\": {\n    \"Authorization\": \"Lingvanex-Auth-Key YOUR_API_KEY\"\n  }\n}\n```",
    response: "```json\n{\n  \"err\": null,\n  \"result\": [\n    {\n      \"code\": \"af_ZA\",\n      \"englishName\": \"Afrikaans\",\n      \"nativeName\": \"Afrikaans\"\n    },\n    {\n      \"code\": \"ar_SA\",\n      \"englishName\": \"Arabic\",\n      \"nativeName\": \"العربية\"\n    }\n  ]\n}\n```"
  },
  {
    language: "Kotlin",
    request: "```kotlin\nimport okhttp3.OkHttpClient\nimport okhttp3.Request\n\nfun main() {\n    val client = OkHttpClient()\n    \n    val request = Request.Builder()\n        .url(\"https://api-b2b.backenster.com/b1/api/v3/getLanguages?platform=api&code=en_GB\")\n        .addHeader(\"Authorization\", \"Lingvanex-Auth-Key YOUR_API_KEY\")\n        .build()\n    \n    client.newCall(request).execute().use { response ->\n        println(response.body?.string())\n    }\n}\n```",
    response: "```json\n{\n  \"err\": null,\n  \"result\": [\n    {\n      \"code\": \"af_ZA\",\n      \"englishName\": \"Afrikaans\",\n      \"nativeName\": \"Afrikaans\"\n    },\n    {\n      \"code\": \"ar_SA\",\n      \"englishName\": \"Arabic\",\n      \"nativeName\": \"العربية\"\n    }\n  ]\n}\n```"
  },
  {
    language: "Objective_C",
    request: "```objc\n#import <Foundation/Foundation.h>\n\nint main(int argc, const char * argv[]) {\n    @autoreleasepool {\n        NSURL *url = [NSURL URLWithString:@\"https://api-b2b.backenster.com/b1/api/v3/getLanguages?platform=api&code=en_GB\"];\n        NSMutableURLRequest *request = [NSMutableURLRequest requestWithURL:url];\n        [request setValue:@\"Lingvanex-Auth-Key YOUR_API_KEY\" forHTTPHeaderField:@\"Authorization\"];\n        \n        NSURLSession *session = [NSURLSession sharedSession];\n        NSURLSessionDataTask *task = [session dataTaskWithRequest:request\n                                                completionHandler:^(NSData *data, NSURLResponse *response, NSError *error) {\n            if (data) {\n                NSString *result = [[NSString alloc] initWithData:data encoding:NSUTF8StringEncoding];\n                NSLog(@\"%@\", result);\n            }\n        }];\n        [task resume];\n        \n        [[NSRunLoop currentRunLoop] run];\n    }\n    return 0;\n}\n```",
    response: "```json\n{\n  \"err\": null,\n  \"result\": [\n    {\n      \"code\": \"af_ZA\",\n      \"englishName\": \"Afrikaans\",\n      \"nativeName\": \"Afrikaans\"\n    },\n    {\n      \"code\": \"ar_SA\",\n      \"englishName\": \"Arabic\",\n      \"nativeName\": \"العربية\"\n    }\n  ]\n}\n```"
  },
  {
    language: "OCaml",
    request: "```ocaml\nopen Lwt.Infix\n\nlet get_languages () =\n  let uri = Uri.of_string \"https://api-b2b.backenster.com/b1/api/v3/getLanguages?platform=api&code=en_GB\" in\n  let headers = Cohttp.Header.init_with \"Authorization\" \"Lingvanex-Auth-Key YOUR_API_KEY\" in\n  Cohttp_lwt_unix.Client.get ~headers uri >>= fun (resp, body) ->\n  Cohttp_lwt.Body.to_string body >|= fun body_string ->\n  print_endline body_string\n\nlet () = Lwt_main.run (get_languages ())\n```",
    response: "```json\n{\n  \"err\": null,\n  \"result\": [\n    {\n      \"code\": \"af_ZA\",\n      \"englishName\": \"Afrikaans\",\n      \"nativeName\": \"Afrikaans\"\n    },\n    {\n      \"code\": \"ar_SA\",\n      \"englishName\": \"Arabic\",\n      \"nativeName\": \"العربية\"\n    }\n  ]\n}\n```"
  },
  {
    language: "PowerShell",
    request: "```powershell\n$headers = @{\n    'Authorization' = 'Lingvanex-Auth-Key YOUR_API_KEY'\n}\n\n$response = Invoke-RestMethod -Uri 'https://api-b2b.backenster.com/b1/api/v3/getLanguages?platform=api&code=en_GB' -Method Get -Headers $headers\n$response | ConvertTo-Json\n```",
    response: "```json\n{\n  \"err\": null,\n  \"result\": [\n    {\n      \"code\": \"af_ZA\",\n      \"englishName\": \"Afrikaans\",\n      \"nativeName\": \"Afrikaans\"\n    },\n    {\n      \"code\": \"ar_SA\",\n      \"englishName\": \"Arabic\",\n      \"nativeName\": \"العربية\"\n    }\n  ]\n}\n```"
  },
  {
    language: "Python",
    request: "```python\nimport requests\n\nurl = \"https://api-b2b.backenster.com/b1/api/v3/getLanguages\"\nquerystring = {\"platform\": \"api\", \"code\": \"en_GB\"}\nheaders = {\"Authorization\": \"Lingvanex-Auth-Key YOUR_API_KEY\"}\n\nresponse = requests.request(\"GET\", url, headers=headers, params=querystring)\nprint(response.text)\n```",
    response: "```json\n{\n  \"err\": null,\n  \"result\": [\n    {\n      \"code\": \"af_ZA\",\n      \"englishName\": \"Afrikaans\",\n      \"nativeName\": \"Afrikaans\"\n    },\n    {\n      \"code\": \"ar_SA\",\n      \"englishName\": \"Arabic\",\n      \"nativeName\": \"العربية\"\n    }\n  ]\n}\n```"
  },
  {
    language: "R",
    request: "```r\nlibrary(httr)\n\nurl <- \"https://api-b2b.backenster.com/b1/api/v3/getLanguages\"\nheaders <- add_headers(Authorization = \"Lingvanex-Auth-Key YOUR_API_KEY\")\nquery <- list(platform = \"api\", code = \"en_GB\")\n\nresponse <- GET(url, headers, query = query)\ncontent(response, \"text\")\n```",
    response: "```json\n{\n  \"err\": null,\n  \"result\": [\n    {\n      \"code\": \"af_ZA\",\n      \"englishName\": \"Afrikaans\",\n      \"nativeName\": \"Afrikaans\"\n    },\n    {\n      \"code\": \"ar_SA\",\n      \"englishName\": \"Arabic\",\n      \"nativeName\": \"العربية\"\n    }\n  ]\n}\n```"
  }
];
