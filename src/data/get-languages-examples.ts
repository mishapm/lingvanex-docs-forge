export const getLanguagesExamples = [
  {
    language: 'Shell',
    request: '```bash\ncurl --request GET \\\n  --url \'https://api-gl.lingvanex.com/language/translate/v2/languages\' \\\n  --header \'Authorization: Bearer YOUR_API_KEY\'\n```',
    response: '```json\n{\n  "result": [\n    {\n      "code": "af",\n      "name": "Afrikaans"\n    },\n    {\n      "code": "ar",\n      "name": "Arabic"\n    },\n    {\n      "code": "zh",\n      "name": "Chinese"\n    }\n  ]\n}\n```'
  },
  {
    language: 'Node',
    request: '```javascript\nconst fetch = require(\'node-fetch\');\n\nconst url = \'https://api-gl.lingvanex.com/language/translate/v2/languages\';\nconst options = {\n  method: \'GET\',\n  headers: {\n    \'Authorization\': \'Bearer YOUR_API_KEY\'\n  }\n};\n\nfetch(url, options)\n  .then(res => res.json())\n  .then(json => console.log(json))\n  .catch(err => console.error(\'error:\' + err));\n```',
    response: '```json\n{\n  "result": [\n    {\n      "code": "af",\n      "name": "Afrikaans"\n    },\n    {\n      "code": "ar",\n      "name": "Arabic"\n    },\n    {\n      "code": "zh",\n      "name": "Chinese"\n    }\n  ]\n}\n```'
  },
  {
    language: 'Ruby',
    request: '```ruby\nrequire \'uri\'\nrequire \'net/http\'\nrequire \'json\'\n\nurl = URI(\'https://api-gl.lingvanex.com/language/translate/v2/languages\')\n\nhttp = Net::HTTP.new(url.host, url.port)\nhttp.use_ssl = true\n\nrequest = Net::HTTP::Get.new(url)\nrequest[\'Authorization\'] = \'Bearer YOUR_API_KEY\'\n\nresponse = http.request(request)\nputs JSON.parse(response.read_body)\n```',
    response: '```json\n{\n  "result": [\n    {\n      "code": "af",\n      "name": "Afrikaans"\n    },\n    {\n      "code": "ar",\n      "name": "Arabic"\n    },\n    {\n      "code": "zh",\n      "name": "Chinese"\n    }\n  ]\n}\n```'
  },
  {
    language: 'PHP',
    request: '```php\n<?php\n\n$curl = curl_init();\n\ncurl_setopt_array($curl, [\n  CURLOPT_URL => "https://api-gl.lingvanex.com/language/translate/v2/languages",\n  CURLOPT_RETURNTRANSFER => true,\n  CURLOPT_HTTPHEADER => [\n    "Authorization: Bearer YOUR_API_KEY"\n  ],\n]);\n\n$response = curl_exec($curl);\n$err = curl_error($curl);\n\ncurl_close($curl);\n\nif ($err) {\n  echo "cURL Error #:" . $err;\n} else {\n  echo $response;\n}\n```',
    response: '```json\n{\n  "result": [\n    {\n      "code": "af",\n      "name": "Afrikaans"\n    },\n    {\n      "code": "ar",\n      "name": "Arabic"\n    },\n    {\n      "code": "zh",\n      "name": "Chinese"\n    }\n  ]\n}\n```'
  },
  {
    language: 'Swift',
    request: '```swift\nimport Foundation\n\nlet url = URL(string: "https://api-gl.lingvanex.com/language/translate/v2/languages")!\nvar request = URLRequest(url: url)\nrequest.httpMethod = "GET"\nrequest.addValue("Bearer YOUR_API_KEY", forHTTPHeaderField: "Authorization")\n\nlet task = URLSession.shared.dataTask(with: request) { data, response, error in\n  if let error = error {\n    print("Error: \\(error)")\n    return\n  }\n  \n  if let data = data,\n     let json = try? JSONSerialization.jsonObject(with: data) {\n    print(json)\n  }\n}\n\ntask.resume()\n```',
    response: '```json\n{\n  "result": [\n    {\n      "code": "af",\n      "name": "Afrikaans"\n    },\n    {\n      "code": "ar",\n      "name": "Arabic"\n    },\n    {\n      "code": "zh",\n      "name": "Chinese"\n    }\n  ]\n}\n```'
  },
  {
    language: 'C',
    request: '```c\n#include <stdio.h>\n#include <curl/curl.h>\n\nint main(void) {\n  CURL *curl;\n  CURLcode res;\n\n  curl = curl_easy_init();\n  if(curl) {\n    struct curl_slist *headers = NULL;\n    headers = curl_slist_append(headers, "Authorization: Bearer YOUR_API_KEY");\n    \n    curl_easy_setopt(curl, CURLOPT_URL, "https://api-gl.lingvanex.com/language/translate/v2/languages");\n    curl_easy_setopt(curl, CURLOPT_HTTPHEADER, headers);\n    \n    res = curl_easy_perform(curl);\n    \n    if(res != CURLE_OK)\n      fprintf(stderr, "curl_easy_perform() failed: %s\\n", curl_easy_strerror(res));\n    \n    curl_slist_free_all(headers);\n    curl_easy_cleanup(curl);\n  }\n  return 0;\n}\n```',
    response: '```json\n{\n  "result": [\n    {\n      "code": "af",\n      "name": "Afrikaans"\n    },\n    {\n      "code": "ar",\n      "name": "Arabic"\n    },\n    {\n      "code": "zh",\n      "name": "Chinese"\n    }\n  ]\n}\n```'
  },
  {
    language: 'C#',
    request: '```csharp\nusing System;\nusing System.Net.Http;\nusing System.Threading.Tasks;\n\nclass Program\n{\n    static async Task Main()\n    {\n        using var client = new HttpClient();\n        client.DefaultRequestHeaders.Add("Authorization", "Bearer YOUR_API_KEY");\n        \n        var response = await client.GetAsync("https://api-gl.lingvanex.com/language/translate/v2/languages");\n        var content = await response.Content.ReadAsStringAsync();\n        \n        Console.WriteLine(content);\n    }\n}\n```',
    response: '```json\n{\n  "result": [\n    {\n      "code": "af",\n      "name": "Afrikaans"\n    },\n    {\n      "code": "ar",\n      "name": "Arabic"\n    },\n    {\n      "code": "zh",\n      "name": "Chinese"\n    }\n  ]\n}\n```'
  },
  {
    language: 'C++',
    request: '```cpp\n#include <iostream>\n#include <curl/curl.h>\n\nint main() {\n    CURL *curl;\n    CURLcode res;\n    \n    curl = curl_easy_init();\n    if(curl) {\n        struct curl_slist *headers = NULL;\n        headers = curl_slist_append(headers, "Authorization: Bearer YOUR_API_KEY");\n        \n        curl_easy_setopt(curl, CURLOPT_URL, "https://api-gl.lingvanex.com/language/translate/v2/languages");\n        curl_easy_setopt(curl, CURLOPT_HTTPHEADER, headers);\n        \n        res = curl_easy_perform(curl);\n        \n        if(res != CURLE_OK)\n            std::cerr << "curl_easy_perform() failed: " << curl_easy_strerror(res) << std::endl;\n        \n        curl_slist_free_all(headers);\n        curl_easy_cleanup(curl);\n    }\n    return 0;\n}\n```',
    response: '```json\n{\n  "result": [\n    {\n      "code": "af",\n      "name": "Afrikaans"\n    },\n    {\n      "code": "ar",\n      "name": "Arabic"\n    },\n    {\n      "code": "zh",\n      "name": "Chinese"\n    }\n  ]\n}\n```'
  },
  {
    language: 'Clojure',
    request: '```clojure\n(require \'[clj-http.client :as client])\n\n(def response \n  (client/get "https://api-gl.lingvanex.com/language/translate/v2/languages"\n    {:headers {"Authorization" "Bearer YOUR_API_KEY"}}))\n\n(println (:body response))\n```',
    response: '```json\n{\n  "result": [\n    {\n      "code": "af",\n      "name": "Afrikaans"\n    },\n    {\n      "code": "ar",\n      "name": "Arabic"\n    },\n    {\n      "code": "zh",\n      "name": "Chinese"\n    }\n  ]\n}\n```'
  },
  {
    language: 'Go',
    request: '```go\npackage main\n\nimport (\n    "fmt"\n    "io"\n    "net/http"\n)\n\nfunc main() {\n    url := "https://api-gl.lingvanex.com/language/translate/v2/languages"\n    \n    req, _ := http.NewRequest("GET", url, nil)\n    req.Header.Add("Authorization", "Bearer YOUR_API_KEY")\n    \n    res, _ := http.DefaultClient.Do(req)\n    defer res.Body.Close()\n    \n    body, _ := io.ReadAll(res.Body)\n    fmt.Println(string(body))\n}\n```',
    response: '```json\n{\n  "result": [\n    {\n      "code": "af",\n      "name": "Afrikaans"\n    },\n    {\n      "code": "ar",\n      "name": "Arabic"\n    },\n    {\n      "code": "zh",\n      "name": "Chinese"\n    }\n  ]\n}\n```'
  },
  {
    language: 'HTTP',
    request: '```http\nGET /language/translate/v2/languages HTTP/1.1\nHost: api-gl.lingvanex.com\nAuthorization: Bearer YOUR_API_KEY\n```',
    response: '```json\n{\n  "result": [\n    {\n      "code": "af",\n      "name": "Afrikaans"\n    },\n    {\n      "code": "ar",\n      "name": "Arabic"\n    },\n    {\n      "code": "zh",\n      "name": "Chinese"\n    }\n  ]\n}\n```'
  },
  {
    language: 'Java',
    request: '```java\nimport java.net.http.*;\nimport java.net.URI;\n\npublic class Main {\n    public static void main(String[] args) throws Exception {\n        HttpClient client = HttpClient.newHttpClient();\n        \n        HttpRequest request = HttpRequest.newBuilder()\n            .uri(URI.create("https://api-gl.lingvanex.com/language/translate/v2/languages"))\n            .header("Authorization", "Bearer YOUR_API_KEY")\n            .GET()\n            .build();\n        \n        HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());\n        System.out.println(response.body());\n    }\n}\n```',
    response: '```json\n{\n  "result": [\n    {\n      "code": "af",\n      "name": "Afrikaans"\n    },\n    {\n      "code": "ar",\n      "name": "Arabic"\n    },\n    {\n      "code": "zh",\n      "name": "Chinese"\n    }\n  ]\n}\n```'
  },
  {
    language: 'JavaScript',
    request: '```javascript\nconst url = \'https://api-gl.lingvanex.com/language/translate/v2/languages\';\nconst options = {\n  method: \'GET\',\n  headers: {\n    \'Authorization\': \'Bearer YOUR_API_KEY\'\n  }\n};\n\nfetch(url, options)\n  .then(res => res.json())\n  .then(json => console.log(json))\n  .catch(err => console.error(\'error:\' + err));\n```',
    response: '```json\n{\n  "result": [\n    {\n      "code": "af",\n      "name": "Afrikaans"\n    },\n    {\n      "code": "ar",\n      "name": "Arabic"\n    },\n    {\n      "code": "zh",\n      "name": "Chinese"\n    }\n  ]\n}\n```'
  },
  {
    language: 'JSON',
    request: '```json\n{\n  "method": "GET",\n  "url": "https://api-gl.lingvanex.com/language/translate/v2/languages",\n  "headers": {\n    "Authorization": "Bearer YOUR_API_KEY"\n  }\n}\n```',
    response: '```json\n{\n  "result": [\n    {\n      "code": "af",\n      "name": "Afrikaans"\n    },\n    {\n      "code": "ar",\n      "name": "Arabic"\n    },\n    {\n      "code": "zh",\n      "name": "Chinese"\n    }\n  ]\n}\n```'
  },
  {
    language: 'Kotlin',
    request: '```kotlin\nimport java.net.http.*\nimport java.net.URI\n\nfun main() {\n    val client = HttpClient.newHttpClient()\n    \n    val request = HttpRequest.newBuilder()\n        .uri(URI.create("https://api-gl.lingvanex.com/language/translate/v2/languages"))\n        .header("Authorization", "Bearer YOUR_API_KEY")\n        .GET()\n        .build()\n    \n    val response = client.send(request, HttpResponse.BodyHandlers.ofString())\n    println(response.body())\n}\n```',
    response: '```json\n{\n  "result": [\n    {\n      "code": "af",\n      "name": "Afrikaans"\n    },\n    {\n      "code": "ar",\n      "name": "Arabic"\n    },\n    {\n      "code": "zh",\n      "name": "Chinese"\n    }\n  ]\n}\n```'
  },
  {
    language: 'Objective-C',
    request: '```objc\n#import <Foundation/Foundation.h>\n\nint main(int argc, const char * argv[]) {\n    @autoreleasepool {\n        NSURL *url = [NSURL URLWithString:@"https://api-gl.lingvanex.com/language/translate/v2/languages"];\n        NSMutableURLRequest *request = [NSMutableURLRequest requestWithURL:url];\n        [request setHTTPMethod:@"GET"];\n        [request setValue:@"Bearer YOUR_API_KEY" forHTTPHeaderField:@"Authorization"];\n        \n        NSURLSession *session = [NSURLSession sharedSession];\n        NSURLSessionDataTask *task = [session dataTaskWithRequest:request\n            completionHandler:^(NSData *data, NSURLResponse *response, NSError *error) {\n                if (error) {\n                    NSLog(@"Error: %@", error);\n                } else {\n                    NSString *result = [[NSString alloc] initWithData:data encoding:NSUTF8StringEncoding];\n                    NSLog(@"%@", result);\n                }\n            }];\n        [task resume];\n        \n        [[NSRunLoop currentRunLoop] run];\n    }\n    return 0;\n}\n```',
    response: '```json\n{\n  "result": [\n    {\n      "code": "af",\n      "name": "Afrikaans"\n    },\n    {\n      "code": "ar",\n      "name": "Arabic"\n    },\n    {\n      "code": "zh",\n      "name": "Chinese"\n    }\n  ]\n}\n```'
  },
  {
    language: 'OCaml',
    request: '```ocaml\nopen Lwt\nopen Cohttp\nopen Cohttp_lwt_unix\n\nlet uri = Uri.of_string "https://api-gl.lingvanex.com/language/translate/v2/languages" in\nlet headers = Header.init ()\n  |> fun h -> Header.add h "Authorization" "Bearer YOUR_API_KEY" in\n\nClient.get ~headers uri >>= fun (resp, body) ->\n  body |> Cohttp_lwt.Body.to_string >|= fun body ->\n  Printf.printf "%s" body\n```',
    response: '```json\n{\n  "result": [\n    {\n      "code": "af",\n      "name": "Afrikaans"\n    },\n    {\n      "code": "ar",\n      "name": "Arabic"\n    },\n    {\n      "code": "zh",\n      "name": "Chinese"\n    }\n  ]\n}\n```'
  },
  {
    language: 'PowerShell',
    request: '```powershell\n$headers = @{\n    "Authorization" = "Bearer YOUR_API_KEY"\n}\n\n$response = Invoke-RestMethod -Uri "https://api-gl.lingvanex.com/language/translate/v2/languages" -Method GET -Headers $headers\n\n$response | ConvertTo-Json\n```',
    response: '```json\n{\n  "result": [\n    {\n      "code": "af",\n      "name": "Afrikaans"\n    },\n    {\n      "code": "ar",\n      "name": "Arabic"\n    },\n    {\n      "code": "zh",\n      "name": "Chinese"\n    }\n  ]\n}\n```'
  },
  {
    language: 'Python',
    request: '```python\nimport requests\n\nurl = "https://api-gl.lingvanex.com/language/translate/v2/languages"\n\nheaders = {\n    "Authorization": "Bearer YOUR_API_KEY"\n}\n\nresponse = requests.get(url, headers=headers)\n\nprint(response.json())\n```',
    response: '```json\n{\n  "result": [\n    {\n      "code": "af",\n      "name": "Afrikaans"\n    },\n    {\n      "code": "ar",\n      "name": "Arabic"\n    },\n    {\n      "code": "zh",\n      "name": "Chinese"\n    }\n  ]\n}\n```'
  },
  {
    language: 'R',
    request: '```r\nlibrary(httr)\n\nurl <- "https://api-gl.lingvanex.com/language/translate/v2/languages"\n\nresponse <- GET(\n  url,\n  add_headers(Authorization = "Bearer YOUR_API_KEY")\n)\n\ncontent(response, "text")\n```',
    response: '```json\n{\n  "result": [\n    {\n      "code": "af",\n      "name": "Afrikaans"\n    },\n    {\n      "code": "ar",\n      "name": "Arabic"\n    },\n    {\n      "code": "zh",\n      "name": "Chinese"\n    }\n  ]\n}\n```'
  }
];
