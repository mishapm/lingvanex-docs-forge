export const gettingLanguagesExamples = [
  {
    language: 'Shell',
    request: '```bash\ncurl --request GET \\\n  --url https://api-gl.lingvanex.com/language/translate/v2/languages \\\n  --header \'Authorization: Bearer YOUR_API_KEY\'\n```',
    response: '```json\n{\n  "result": [\n    {\n      "full_code": "af_ZA",\n      "code": "af",\n      "englishName": "Afrikaans",\n      "nativeName": "Afrikaans"\n    },\n    {\n      "full_code": "ar_SA",\n      "code": "ar",\n      "englishName": "Arabic",\n      "nativeName": "العربية"\n    }\n  ]\n}\n```'
  },
  {
    language: 'Node',
    request: '```javascript\nconst fetch = require(\'node-fetch\');\n\nconst url = \'https://api-gl.lingvanex.com/language/translate/v2/languages\';\nconst options = {\n  method: \'GET\',\n  headers: {\n    Authorization: \'Bearer YOUR_API_KEY\'\n  }\n};\n\nfetch(url, options)\n  .then(res => res.json())\n  .then(json => console.log(json))\n  .catch(err => console.error(err));\n```',
    response: '```json\n{\n  "result": [\n    {\n      "full_code": "af_ZA",\n      "code": "af",\n      "englishName": "Afrikaans",\n      "nativeName": "Afrikaans"\n    },\n    {\n      "full_code": "ar_SA",\n      "code": "ar",\n      "englishName": "Arabic",\n      "nativeName": "العربية"\n    }\n  ]\n}\n```'
  },
  {
    language: 'Ruby',
    request: '```ruby\nrequire \'uri\'\nrequire \'net/http\'\nrequire \'json\'\n\nurl = URI("https://api-gl.lingvanex.com/language/translate/v2/languages")\n\nhttp = Net::HTTP.new(url.host, url.port)\nhttp.use_ssl = true\n\nrequest = Net::HTTP::Get.new(url)\nrequest["Authorization"] = \'Bearer YOUR_API_KEY\'\n\nresponse = http.request(request)\nputs response.read_body\n```',
    response: '```json\n{\n  "result": [\n    {\n      "full_code": "af_ZA",\n      "code": "af",\n      "englishName": "Afrikaans",\n      "nativeName": "Afrikaans"\n    },\n    {\n      "full_code": "ar_SA",\n      "code": "ar",\n      "englishName": "Arabic",\n      "nativeName": "العربية"\n    }\n  ]\n}\n```'
  },
  {
    language: 'PHP',
    request: '```php\n<?php\n\n$curl = curl_init();\n\ncurl_setopt_array($curl, [\n  CURLOPT_URL => "https://api-gl.lingvanex.com/language/translate/v2/languages",\n  CURLOPT_RETURNTRANSFER => true,\n  CURLOPT_CUSTOMREQUEST => "GET",\n  CURLOPT_HTTPHEADER => [\n    "Authorization: Bearer YOUR_API_KEY"\n  ],\n]);\n\n$response = curl_exec($curl);\n\ncurl_close($curl);\necho $response;\n```',
    response: '```json\n{\n  "result": [\n    {\n      "full_code": "af_ZA",\n      "code": "af",\n      "englishName": "Afrikaans",\n      "nativeName": "Afrikaans"\n    },\n    {\n      "full_code": "ar_SA",\n      "code": "ar",\n      "englishName": "Arabic",\n      "nativeName": "العربية"\n    }\n  ]\n}\n```'
  },
  {
    language: 'Swift',
    request: '```swift\nimport Foundation\n\nlet url = URL(string: "https://api-gl.lingvanex.com/language/translate/v2/languages")!\nvar request = URLRequest(url: url)\nrequest.httpMethod = "GET"\nrequest.setValue("Bearer YOUR_API_KEY", forHTTPHeaderField: "Authorization")\n\nlet task = URLSession.shared.dataTask(with: request) { data, response, error in\n    if let data = data {\n        print(String(data: data, encoding: .utf8) ?? "")\n    }\n}\n\ntask.resume()\n```',
    response: '```json\n{\n  "result": [\n    {\n      "full_code": "af_ZA",\n      "code": "af",\n      "englishName": "Afrikaans",\n      "nativeName": "Afrikaans"\n    },\n    {\n      "full_code": "ar_SA",\n      "code": "ar",\n      "englishName": "Arabic",\n      "nativeName": "العربية"\n    }\n  ]\n}\n```'
  },
  {
    language: 'C',
    request: '```c\n#include <stdio.h>\n#include <curl/curl.h>\n\nint main(void) {\n    CURL *curl;\n    CURLcode res;\n    \n    curl = curl_easy_init();\n    if(curl) {\n        struct curl_slist *headers = NULL;\n        headers = curl_slist_append(headers, "Authorization: Bearer YOUR_API_KEY");\n        \n        curl_easy_setopt(curl, CURLOPT_URL, "https://api-gl.lingvanex.com/language/translate/v2/languages");\n        curl_easy_setopt(curl, CURLOPT_HTTPHEADER, headers);\n        \n        res = curl_easy_perform(curl);\n        curl_easy_cleanup(curl);\n        curl_slist_free_all(headers);\n    }\n    return 0;\n}\n```',
    response: '```json\n{\n  "result": [\n    {\n      "full_code": "af_ZA",\n      "code": "af",\n      "englishName": "Afrikaans",\n      "nativeName": "Afrikaans"\n    },\n    {\n      "full_code": "ar_SA",\n      "code": "ar",\n      "englishName": "Arabic",\n      "nativeName": "العربية"\n    }\n  ]\n}\n```'
  },
  {
    language: 'C#',
    request: '```csharp\nusing System;\nusing System.Net.Http;\nusing System.Threading.Tasks;\n\nclass Program\n{\n    static async Task Main()\n    {\n        using (var client = new HttpClient())\n        {\n            client.DefaultRequestHeaders.Add("Authorization", "Bearer YOUR_API_KEY");\n            \n            var response = await client.GetAsync("https://api-gl.lingvanex.com/language/translate/v2/languages");\n            var content = await response.Content.ReadAsStringAsync();\n            \n            Console.WriteLine(content);\n        }\n    }\n}\n```',
    response: '```json\n{\n  "result": [\n    {\n      "full_code": "af_ZA",\n      "code": "af",\n      "englishName": "Afrikaans",\n      "nativeName": "Afrikaans"\n    },\n    {\n      "full_code": "ar_SA",\n      "code": "ar",\n      "englishName": "Arabic",\n      "nativeName": "العربية"\n    }\n  ]\n}\n```'
  },
  {
    language: 'C++',
    request: '```cpp\n#include <iostream>\n#include <curl/curl.h>\n\nint main() {\n    CURL *curl;\n    CURLcode res;\n    \n    curl = curl_easy_init();\n    if(curl) {\n        struct curl_slist *headers = NULL;\n        headers = curl_slist_append(headers, "Authorization: Bearer YOUR_API_KEY");\n        \n        curl_easy_setopt(curl, CURLOPT_URL, "https://api-gl.lingvanex.com/language/translate/v2/languages");\n        curl_easy_setopt(curl, CURLOPT_HTTPHEADER, headers);\n        \n        res = curl_easy_perform(curl);\n        curl_easy_cleanup(curl);\n        curl_slist_free_all(headers);\n    }\n    return 0;\n}\n```',
    response: '```json\n{\n  "result": [\n    {\n      "full_code": "af_ZA",\n      "code": "af",\n      "englishName": "Afrikaans",\n      "nativeName": "Afrikaans"\n    },\n    {\n      "full_code": "ar_SA",\n      "code": "ar",\n      "englishName": "Arabic",\n      "nativeName": "العربية"\n    }\n  ]\n}\n```'
  },
  {
    language: 'Clojure',
    request: '```clojure\n(require \'[clj-http.client :as client])\n\n(def response\n  (client/get "https://api-gl.lingvanex.com/language/translate/v2/languages"\n    {:headers {"Authorization" "Bearer YOUR_API_KEY"}}))\n\n(println (:body response))\n```',
    response: '```json\n{\n  "result": [\n    {\n      "full_code": "af_ZA",\n      "code": "af",\n      "englishName": "Afrikaans",\n      "nativeName": "Afrikaans"\n    },\n    {\n      "full_code": "ar_SA",\n      "code": "ar",\n      "englishName": "Arabic",\n      "nativeName": "العربية"\n    }\n  ]\n}\n```'
  },
  {
    language: 'Go',
    request: '```go\npackage main\n\nimport (\n    "fmt"\n    "io/ioutil"\n    "net/http"\n)\n\nfunc main() {\n    url := "https://api-gl.lingvanex.com/language/translate/v2/languages"\n    \n    req, _ := http.NewRequest("GET", url, nil)\n    req.Header.Add("Authorization", "Bearer YOUR_API_KEY")\n    \n    res, _ := http.DefaultClient.Do(req)\n    defer res.Body.Close()\n    \n    body, _ := ioutil.ReadAll(res.Body)\n    fmt.Println(string(body))\n}\n```',
    response: '```json\n{\n  "result": [\n    {\n      "full_code": "af_ZA",\n      "code": "af",\n      "englishName": "Afrikaans",\n      "nativeName": "Afrikaans"\n    },\n    {\n      "full_code": "ar_SA",\n      "code": "ar",\n      "englishName": "Arabic",\n      "nativeName": "العربية"\n    }\n  ]\n}\n```'
  },
  {
    language: 'HTTP',
    request: '```http\nGET /language/translate/v2/languages HTTP/1.1\nHost: api-gl.lingvanex.com\nAuthorization: Bearer YOUR_API_KEY\n```',
    response: '```json\n{\n  "result": [\n    {\n      "full_code": "af_ZA",\n      "code": "af",\n      "englishName": "Afrikaans",\n      "nativeName": "Afrikaans"\n    },\n    {\n      "full_code": "ar_SA",\n      "code": "ar",\n      "englishName": "Arabic",\n      "nativeName": "العربية"\n    }\n  ]\n}\n```'
  },
  {
    language: 'Java',
    request: '```java\nimport java.io.IOException;\nimport okhttp3.OkHttpClient;\nimport okhttp3.Request;\nimport okhttp3.Response;\n\npublic class Main {\n    public static void main(String[] args) throws IOException {\n        OkHttpClient client = new OkHttpClient();\n        \n        Request request = new Request.Builder()\n            .url("https://api-gl.lingvanex.com/language/translate/v2/languages")\n            .addHeader("Authorization", "Bearer YOUR_API_KEY")\n            .build();\n        \n        try (Response response = client.newCall(request).execute()) {\n            System.out.println(response.body().string());\n        }\n    }\n}\n```',
    response: '```json\n{\n  "result": [\n    {\n      "full_code": "af_ZA",\n      "code": "af",\n      "englishName": "Afrikaans",\n      "nativeName": "Afrikaans"\n    },\n    {\n      "full_code": "ar_SA",\n      "code": "ar",\n      "englishName": "Arabic",\n      "nativeName": "العربية"\n    }\n  ]\n}\n```'
  },
  {
    language: 'JavaScript',
    request: '```javascript\nconst url = \'https://api-gl.lingvanex.com/language/translate/v2/languages\';\nconst options = {\n  method: \'GET\',\n  headers: {\n    Authorization: \'Bearer YOUR_API_KEY\'\n  }\n};\n\nfetch(url, options)\n  .then(res => res.json())\n  .then(json => console.log(json))\n  .catch(err => console.error(err));\n```',
    response: '```json\n{\n  "result": [\n    {\n      "full_code": "af_ZA",\n      "code": "af",\n      "englishName": "Afrikaans",\n      "nativeName": "Afrikaans"\n    },\n    {\n      "full_code": "ar_SA",\n      "code": "ar",\n      "englishName": "Arabic",\n      "nativeName": "العربية"\n    }\n  ]\n}\n```'
  },
  {
    language: 'JSON',
    request: '```json\n{\n  "method": "GET",\n  "url": "https://api-gl.lingvanex.com/language/translate/v2/languages",\n  "headers": {\n    "Authorization": "Bearer YOUR_API_KEY"\n  }\n}\n```',
    response: '```json\n{\n  "result": [\n    {\n      "full_code": "af_ZA",\n      "code": "af",\n      "englishName": "Afrikaans",\n      "nativeName": "Afrikaans"\n    },\n    {\n      "full_code": "ar_SA",\n      "code": "ar",\n      "englishName": "Arabic",\n      "nativeName": "العربية"\n    }\n  ]\n}\n```'
  },
  {
    language: 'Kotlin',
    request: '```kotlin\nimport okhttp3.OkHttpClient\nimport okhttp3.Request\n\nfun main() {\n    val client = OkHttpClient()\n    \n    val request = Request.Builder()\n        .url("https://api-gl.lingvanex.com/language/translate/v2/languages")\n        .addHeader("Authorization", "Bearer YOUR_API_KEY")\n        .build()\n    \n    client.newCall(request).execute().use { response ->\n        println(response.body?.string())\n    }\n}\n```',
    response: '```json\n{\n  "result": [\n    {\n      "full_code": "af_ZA",\n      "code": "af",\n      "englishName": "Afrikaans",\n      "nativeName": "Afrikaans"\n    },\n    {\n      "full_code": "ar_SA",\n      "code": "ar",\n      "englishName": "Arabic",\n      "nativeName": "العربية"\n    }\n  ]\n}\n```'
  },
  {
    language: 'Objective-C',
    request: '```objc\n#import <Foundation/Foundation.h>\n\nNSMutableURLRequest *request = [NSMutableURLRequest requestWithURL:\n    [NSURL URLWithString:@"https://api-gl.lingvanex.com/language/translate/v2/languages"]];\n\n[request setHTTPMethod:@"GET"];\n[request setValue:@"Bearer YOUR_API_KEY" forHTTPHeaderField:@"Authorization"];\n\nNSURLSession *session = [NSURLSession sharedSession];\nNSURLSessionDataTask *task = [session dataTaskWithRequest:request\n    completionHandler:^(NSData *data, NSURLResponse *response, NSError *error) {\n        if (data) {\n            NSString *result = [[NSString alloc] initWithData:data encoding:NSUTF8StringEncoding];\n            NSLog(@"%@", result);\n        }\n    }];\n\n[task resume];\n```',
    response: '```json\n{\n  "result": [\n    {\n      "full_code": "af_ZA",\n      "code": "af",\n      "englishName": "Afrikaans",\n      "nativeName": "Afrikaans"\n    },\n    {\n      "full_code": "ar_SA",\n      "code": "ar",\n      "englishName": "Arabic",\n      "nativeName": "العربية"\n    }\n  ]\n}\n```'
  },
  {
    language: 'OCaml',
    request: '```ocaml\nopen Lwt\nopen Cohttp\nopen Cohttp_lwt_unix\n\nlet uri = Uri.of_string "https://api-gl.lingvanex.com/language/translate/v2/languages" in\nlet headers = Header.init ()\n  |> fun h -> Header.add h "Authorization" "Bearer YOUR_API_KEY" in\n\nClient.get ~headers uri >>= fun (resp, body) ->\n  body |> Cohttp_lwt.Body.to_string >|= fun body ->\n  print_endline body\n```',
    response: '```json\n{\n  "result": [\n    {\n      "full_code": "af_ZA",\n      "code": "af",\n      "englishName": "Afrikaans",\n      "nativeName": "Afrikaans"\n    },\n    {\n      "full_code": "ar_SA",\n      "code": "ar",\n      "englishName": "Arabic",\n      "nativeName": "العربية"\n    }\n  ]\n}\n```'
  },
  {
    language: 'PowerShell',
    request: '```powershell\n$headers = @{\n    "Authorization" = "Bearer YOUR_API_KEY"\n}\n\n$response = Invoke-RestMethod -Uri "https://api-gl.lingvanex.com/language/translate/v2/languages" `\n    -Method Get `\n    -Headers $headers\n\n$response | ConvertTo-Json\n```',
    response: '```json\n{\n  "result": [\n    {\n      "full_code": "af_ZA",\n      "code": "af",\n      "englishName": "Afrikaans",\n      "nativeName": "Afrikaans"\n    },\n    {\n      "full_code": "ar_SA",\n      "code": "ar",\n      "englishName": "Arabic",\n      "nativeName": "العربية"\n    }\n  ]\n}\n```'
  },
  {
    language: 'Python',
    request: '```python\nimport requests\n\nurl = "https://api-gl.lingvanex.com/language/translate/v2/languages"\n\nheaders = {\n    "Authorization": "Bearer YOUR_API_KEY"\n}\n\nresponse = requests.get(url, headers=headers)\n\nprint(response.json())\n```',
    response: '```json\n{\n  "result": [\n    {\n      "full_code": "af_ZA",\n      "code": "af",\n      "englishName": "Afrikaans",\n      "nativeName": "Afrikaans"\n    },\n    {\n      "full_code": "ar_SA",\n      "code": "ar",\n      "englishName": "Arabic",\n      "nativeName": "العربية"\n    }\n  ]\n}\n```'
  },
  {
    language: 'R',
    request: '```r\nlibrary(httr)\n\nurl <- "https://api-gl.lingvanex.com/language/translate/v2/languages"\n\nresponse <- GET(\n  url,\n  add_headers(Authorization = "Bearer YOUR_API_KEY")\n)\n\ncontent(response, "text")\n```',
    response: '```json\n{\n  "result": [\n    {\n      "full_code": "af_ZA",\n      "code": "af",\n      "englishName": "Afrikaans",\n      "nativeName": "Afrikaans"\n    },\n    {\n      "full_code": "ar_SA",\n      "code": "ar",\n      "englishName": "Arabic",\n      "nativeName": "العربية"\n    }\n  ]\n}\n```'
  }
];
