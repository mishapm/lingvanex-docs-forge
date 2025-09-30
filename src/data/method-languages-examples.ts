export const methodLanguagesExamples = [
  {
    language: 'Shell',
    request: '```bash\ncurl -X GET "https://api-gl.lingvanex.com/language/translate/v2/languages" \\\n     -H "Authorization: Bearer YOUR_API_KEY"\n```',
    response: '```json\n{\n  "data": {\n    "languages": [\n      {\n        "language": "en",\n        "name": "English"\n      },\n      {\n        "language": "es",\n        "name": "Spanish"\n      }\n    ]\n  }\n}\n```'
  },
  {
    language: 'Node',
    request: '```javascript\nconst axios = require(\'axios\');\n\nconst response = await axios.get(\'https://api-gl.lingvanex.com/language/translate/v2/languages\', {\n  headers: {\n    \'Authorization\': \'Bearer YOUR_API_KEY\'\n  }\n});\n\nconsole.log(response.data);\n```',
    response: '```json\n{\n  "data": {\n    "languages": [\n      {\n        "language": "en",\n        "name": "English"\n      },\n      {\n        "language": "es",\n        "name": "Spanish"\n      }\n    ]\n  }\n}\n```'
  },
  {
    language: 'Ruby',
    request: '```ruby\nrequire \'net/http\'\nrequire \'json\'\n\nuri = URI(\'https://api-gl.lingvanex.com/language/translate/v2/languages\')\nreq = Net::HTTP::Get.new(uri)\nreq[\'Authorization\'] = \'Bearer YOUR_API_KEY\'\n\nres = Net::HTTP.start(uri.hostname, uri.port, use_ssl: true) do |http|\n  http.request(req)\nend\n\nputs JSON.parse(res.body)\n```',
    response: '```json\n{\n  "data": {\n    "languages": [\n      {\n        "language": "en",\n        "name": "English"\n      },\n      {\n        "language": "es",\n        "name": "Spanish"\n      }\n    ]\n  }\n}\n```'
  },
  {
    language: 'PHP',
    request: '```php\n<?php\n\n$curl = curl_init();\n\ncurl_setopt_array($curl, array(\n  CURLOPT_URL => \'https://api-gl.lingvanex.com/language/translate/v2/languages\',\n  CURLOPT_RETURNTRANSFER => true,\n  CURLOPT_HTTPHEADER => array(\n    \'Authorization: Bearer YOUR_API_KEY\'\n  ),\n));\n\n$response = curl_exec($curl);\ncurl_close($curl);\necho $response;\n\n?>\n```',
    response: '```json\n{\n  "data": {\n    "languages": [\n      {\n        "language": "en",\n        "name": "English"\n      },\n      {\n        "language": "es",\n        "name": "Spanish"\n      }\n    ]\n  }\n}\n```'
  },
  {
    language: 'Swift',
    request: '```swift\nimport Foundation\n\nlet url = URL(string: "https://api-gl.lingvanex.com/language/translate/v2/languages")!\nvar request = URLRequest(url: url)\nrequest.httpMethod = "GET"\nrequest.setValue("Bearer YOUR_API_KEY", forHTTPHeaderField: "Authorization")\n\nlet task = URLSession.shared.dataTask(with: request) { data, response, error in\n    if let data = data {\n        print(String(data: data, encoding: .utf8) ?? "")\n    }\n}\ntask.resume()\n```',
    response: '```json\n{\n  "data": {\n    "languages": [\n      {\n        "language": "en",\n        "name": "English"\n      },\n      {\n        "language": "es",\n        "name": "Spanish"\n      }\n    ]\n  }\n}\n```'
  },
  {
    language: 'C',
    request: '```c\n#include <stdio.h>\n#include <curl/curl.h>\n\nint main(void) {\n    CURL *curl;\n    CURLcode res;\n    \n    curl = curl_easy_init();\n    if(curl) {\n        struct curl_slist *headers = NULL;\n        headers = curl_slist_append(headers, "Authorization: Bearer YOUR_API_KEY");\n        \n        curl_easy_setopt(curl, CURLOPT_URL, "https://api-gl.lingvanex.com/language/translate/v2/languages");\n        curl_easy_setopt(curl, CURLOPT_HTTPHEADER, headers);\n        \n        res = curl_easy_perform(curl);\n        curl_easy_cleanup(curl);\n        curl_slist_free_all(headers);\n    }\n    return 0;\n}\n```',
    response: '```json\n{\n  "data": {\n    "languages": [\n      {\n        "language": "en",\n        "name": "English"\n      },\n      {\n        "language": "es",\n        "name": "Spanish"\n      }\n    ]\n  }\n}\n```'
  },
  {
    language: 'C#',
    request: '```csharp\nusing System;\nusing System.Net.Http;\nusing System.Threading.Tasks;\n\nclass Program\n{\n    static async Task Main()\n    {\n        using var client = new HttpClient();\n        client.DefaultRequestHeaders.Authorization = \n            new System.Net.Http.Headers.AuthenticationHeaderValue("Bearer", "YOUR_API_KEY");\n        \n        var response = await client.GetAsync("https://api-gl.lingvanex.com/language/translate/v2/languages");\n        var content = await response.Content.ReadAsStringAsync();\n        Console.WriteLine(content);\n    }\n}\n```',
    response: '```json\n{\n  "data": {\n    "languages": [\n      {\n        "language": "en",\n        "name": "English"\n      },\n      {\n        "language": "es",\n        "name": "Spanish"\n      }\n    ]\n  }\n}\n```'
  },
  {
    language: 'C++',
    request: '```cpp\n#include <iostream>\n#include <curl/curl.h>\n\nsize_t WriteCallback(void* contents, size_t size, size_t nmemb, std::string* userp) {\n    userp->append((char*)contents, size * nmemb);\n    return size * nmemb;\n}\n\nint main() {\n    CURL* curl;\n    CURLcode res;\n    std::string readBuffer;\n    \n    curl = curl_easy_init();\n    if(curl) {\n        struct curl_slist* headers = NULL;\n        headers = curl_slist_append(headers, "Authorization: Bearer YOUR_API_KEY");\n        \n        curl_easy_setopt(curl, CURLOPT_URL, "https://api-gl.lingvanex.com/language/translate/v2/languages");\n        curl_easy_setopt(curl, CURLOPT_HTTPHEADER, headers);\n        curl_easy_setopt(curl, CURLOPT_WRITEFUNCTION, WriteCallback);\n        curl_easy_setopt(curl, CURLOPT_WRITEDATA, &readBuffer);\n        \n        res = curl_easy_perform(curl);\n        curl_easy_cleanup(curl);\n        curl_slist_free_all(headers);\n        \n        std::cout << readBuffer << std::endl;\n    }\n    return 0;\n}\n```',
    response: '```json\n{\n  "data": {\n    "languages": [\n      {\n        "language": "en",\n        "name": "English"\n      },\n      {\n        "language": "es",\n        "name": "Spanish"\n      }\n    ]\n  }\n}\n```'
  },
  {
    language: 'Clojure',
    request: '```clojure\n(require \'[clj-http.client :as client])\n(require \'[cheshire.core :as json])\n\n(def response\n  (client/get "https://api-gl.lingvanex.com/language/translate/v2/languages"\n              {:headers {"Authorization" "Bearer YOUR_API_KEY"}}))\n\n(println (json/generate-string (:body response) {:pretty true}))\n```',
    response: '```json\n{\n  "data": {\n    "languages": [\n      {\n        "language": "en",\n        "name": "English"\n      },\n      {\n        "language": "es",\n        "name": "Spanish"\n      }\n    ]\n  }\n}\n```'
  },
  {
    language: 'Go',
    request: '```go\npackage main\n\nimport (\n    "fmt"\n    "io/ioutil"\n    "net/http"\n)\n\nfunc main() {\n    client := &http.Client{}\n    req, _ := http.NewRequest("GET", "https://api-gl.lingvanex.com/language/translate/v2/languages", nil)\n    req.Header.Set("Authorization", "Bearer YOUR_API_KEY")\n    \n    resp, err := client.Do(req)\n    if err != nil {\n        panic(err)\n    }\n    defer resp.Body.Close()\n    \n    body, _ := ioutil.ReadAll(resp.Body)\n    fmt.Println(string(body))\n}\n```',
    response: '```json\n{\n  "data": {\n    "languages": [\n      {\n        "language": "en",\n        "name": "English"\n      },\n      {\n        "language": "es",\n        "name": "Spanish"\n      }\n    ]\n  }\n}\n```'
  },
  {
    language: 'HTTP',
    request: '```http\nGET /language/translate/v2/languages HTTP/1.1\nHost: api-gl.lingvanex.com\nAuthorization: Bearer YOUR_API_KEY\n```',
    response: '```json\n{\n  "data": {\n    "languages": [\n      {\n        "language": "en",\n        "name": "English"\n      },\n      {\n        "language": "es",\n        "name": "Spanish"\n      }\n    ]\n  }\n}\n```'
  },
  {
    language: 'Java',
    request: '```java\nimport java.io.*;\nimport java.net.*;\n\npublic class LanguageRequest {\n    public static void main(String[] args) throws IOException {\n        URL url = new URL("https://api-gl.lingvanex.com/language/translate/v2/languages");\n        HttpURLConnection connection = (HttpURLConnection) url.openConnection();\n        connection.setRequestMethod("GET");\n        connection.setRequestProperty("Authorization", "Bearer YOUR_API_KEY");\n        \n        BufferedReader reader = new BufferedReader(\n            new InputStreamReader(connection.getInputStream()));\n        String line;\n        StringBuilder response = new StringBuilder();\n        \n        while ((line = reader.readLine()) != null) {\n            response.append(line);\n        }\n        reader.close();\n        \n        System.out.println(response.toString());\n    }\n}\n```',
    response: '```json\n{\n  "data": {\n    "languages": [\n      {\n        "language": "en",\n        "name": "English"\n      },\n      {\n        "language": "es",\n        "name": "Spanish"\n      }\n    ]\n  }\n}\n```'
  },
  {
    language: 'JavaScript',
    request: '```javascript\nfetch(\'https://api-gl.lingvanex.com/language/translate/v2/languages\', {\n  method: \'GET\',\n  headers: {\n    \'Authorization\': \'Bearer YOUR_API_KEY\'\n  }\n})\n.then(response => response.json())\n.then(data => console.log(data))\n.catch(error => console.error(\'Error:\', error));\n```',
    response: '```json\n{\n  "data": {\n    "languages": [\n      {\n        "language": "en",\n        "name": "English"\n      },\n      {\n        "language": "es",\n        "name": "Spanish"\n      }\n    ]\n  }\n}\n```'
  },
  {
    language: 'JSON',
    request: '```json\n{\n  "method": "GET",\n  "url": "https://api-gl.lingvanex.com/language/translate/v2/languages",\n  "headers": {\n    "Authorization": "Bearer YOUR_API_KEY"\n  }\n}\n```',
    response: '```json\n{\n  "data": {\n    "languages": [\n      {\n        "language": "en",\n        "name": "English"\n      },\n      {\n        "language": "es",\n        "name": "Spanish"\n      }\n    ]\n  }\n}\n```'
  },
  {
    language: 'Kotlin',
    request: '```kotlin\nimport okhttp3.*\nimport java.io.IOException\n\nfun main() {\n    val client = OkHttpClient()\n    \n    val request = Request.Builder()\n        .url("https://api-gl.lingvanex.com/language/translate/v2/languages")\n        .addHeader("Authorization", "Bearer YOUR_API_KEY")\n        .build()\n    \n    client.newCall(request).enqueue(object : Callback {\n        override fun onFailure(call: Call, e: IOException) {\n            e.printStackTrace()\n        }\n        \n        override fun onResponse(call: Call, response: Response) {\n            println(response.body?.string())\n        }\n    })\n}\n```',
    response: '```json\n{\n  "data": {\n    "languages": [\n      {\n        "language": "en",\n        "name": "English"\n      },\n      {\n        "language": "es",\n        "name": "Spanish"\n      }\n    ]\n  }\n}\n```'
  },
  {
    language: 'Objective_C',
    request: '```objc\n#import <Foundation/Foundation.h>\n\nint main(int argc, const char * argv[]) {\n    @autoreleasepool {\n        NSMutableURLRequest *request = [[NSMutableURLRequest alloc] init];\n        [request setHTTPMethod:@"GET"];\n        [request setURL:[NSURL URLWithString:@"https://api-gl.lingvanex.com/language/translate/v2/languages"]];\n        [request setValue:@"Bearer YOUR_API_KEY" forHTTPHeaderField:@"Authorization"];\n        \n        NSURLSession *session = [NSURLSession sharedSession];\n        NSURLSessionDataTask *dataTask = [session dataTaskWithRequest:request\n        completionHandler:^(NSData *data, NSURLResponse *response, NSError *error) {\n            if (error) {\n                NSLog(@"%@", error);\n            } else {\n                NSString *responseString = [[NSString alloc] initWithData:data encoding:NSUTF8StringEncoding];\n                NSLog(@"%@", responseString);\n            }\n        }];\n        [dataTask resume];\n    }\n    return 0;\n}\n```',
    response: '```json\n{\n  "data": {\n    "languages": [\n      {\n        "language": "en",\n        "name": "English"\n      },\n      {\n        "language": "es",\n        "name": "Spanish"\n      }\n    ]\n  }\n}\n```'
  },
  {
    language: 'OCaml',
    request: '```ocaml\nopen Lwt.Syntax\nopen Cohttp_lwt_unix\n\nlet () =\n  let headers = Header.init_with ["Authorization", "Bearer YOUR_API_KEY"] in\n  let uri = Uri.of_string "https://api-gl.lingvanex.com/language/translate/v2/languages" in\n  \n  let* (resp, body) = Client.get ~headers uri in\n  let* body_string = Cohttp_lwt.Body.to_string body in\n  Printf.printf "%s\\n" body_string;\n  Lwt.return_unit\n```',
    response: '```json\n{\n  "data": {\n    "languages": [\n      {\n        "language": "en",\n        "name": "English"\n      },\n      {\n        "language": "es",\n        "name": "Spanish"\n      }\n    ]\n  }\n}\n```'
  },
  {
    language: 'PowerShell',
    request: '```powershell\n$headers = @{\n    "Authorization" = "Bearer YOUR_API_KEY"\n}\n\n$response = Invoke-RestMethod -Uri "https://api-gl.lingvanex.com/language/translate/v2/languages" -Method GET -Headers $headers\n\n$response | ConvertTo-Json -Depth 10\n```',
    response: '```json\n{\n  "data": {\n    "languages": [\n      {\n        "language": "en",\n        "name": "English"\n      },\n      {\n        "language": "es",\n        "name": "Spanish"\n      }\n    ]\n  }\n}\n```'
  },
  {
    language: 'Python',
    request: '```python\nimport requests\n\nheaders = {\n    \'Authorization\': \'Bearer YOUR_API_KEY\'\n}\n\nresponse = requests.get(\'https://api-gl.lingvanex.com/language/translate/v2/languages\', headers=headers)\nprint(response.json())\n```',
    response: '```json\n{\n  "data": {\n    "languages": [\n      {\n        "language": "en",\n        "name": "English"\n      },\n      {\n        "language": "es",\n        "name": "Spanish"\n      }\n    ]\n  }\n}\n```'
  },
  {
    language: 'R',
    request: '```r\nlibrary(httr)\nlibrary(jsonlite)\n\nheaders <- add_headers("Authorization" = "Bearer YOUR_API_KEY")\n\nresponse <- GET("https://api-gl.lingvanex.com/language/translate/v2/languages", headers)\n\nif (status_code(response) == 200) {\n  content <- content(response, "text")\n  result <- fromJSON(content)\n  print(toJSON(result, pretty = TRUE))\n} else {\n  print(paste("Error:", status_code(response)))\n}\n```',
    response: '```json\n{\n  "data": {\n    "languages": [\n      {\n        "language": "en",\n        "name": "English"\n      },\n      {\n        "language": "es",\n        "name": "Spanish"\n      }\n    ]\n  }\n}\n```'
  }
];