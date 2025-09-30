export const detectLanguagesExamples = [
  {
    language: 'Shell',
    request: '```bash\ncurl --request POST \\\n  --url https://api-gl.lingvanex.com/language/translate/v2/detect \\\n  --header \'Authorization: Bearer YOUR_API_KEY\' \\\n  --header \'Content-Type: application/json\' \\\n  --data \'{\n  "q": "Hello, how are you?"\n}\'\n```',
    response: '```json\n{\n  "result": {\n    "lang": "en"\n  }\n}\n```'
  },
  {
    language: 'Node',
    request: '```javascript\nconst axios = require(\'axios\');\n\nconst options = {\n  method: \'POST\',\n  url: \'https://api-gl.lingvanex.com/language/translate/v2/detect\',\n  headers: {\n    \'Authorization\': \'Bearer YOUR_API_KEY\',\n    \'Content-Type\': \'application/json\'\n  },\n  data: {\n    q: \'Hello, how are you?\'\n  }\n};\n\naxios.request(options).then(function (response) {\n  console.log(response.data);\n}).catch(function (error) {\n  console.error(error);\n});\n```',
    response: '```json\n{\n  "result": {\n    "lang": "en"\n  }\n}\n```'
  },
  {
    language: 'Ruby',
    request: '```ruby\nrequire \'uri\'\nrequire \'net/http\'\nrequire \'json\'\n\nurl = URI("https://api-gl.lingvanex.com/language/translate/v2/detect")\n\nhttp = Net::HTTP.new(url.host, url.port)\nhttp.use_ssl = true\n\nrequest = Net::HTTP::Post.new(url)\nrequest["Authorization"] = \'Bearer YOUR_API_KEY\'\nrequest["Content-Type"] = \'application/json\'\nrequest.body = JSON.dump({\n  "q" => "Hello, how are you?"\n})\n\nresponse = http.request(request)\nputs response.read_body\n```',
    response: '```json\n{\n  "result": {\n    "lang": "en"\n  }\n}\n```'
  },
  {
    language: 'PHP',
    request: '```php\n<?php\n\n$curl = curl_init();\n\ncurl_setopt_array($curl, [\n  CURLOPT_URL => "https://api-gl.lingvanex.com/language/translate/v2/detect",\n  CURLOPT_RETURNTRANSFER => true,\n  CURLOPT_ENCODING => "",\n  CURLOPT_MAXREDIRS => 10,\n  CURLOPT_TIMEOUT => 30,\n  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,\n  CURLOPT_CUSTOMREQUEST => "POST",\n  CURLOPT_POSTFIELDS => json_encode([\n    \'q\' => \'Hello, how are you?\'\n  ]),\n  CURLOPT_HTTPHEADER => [\n    "Authorization: Bearer YOUR_API_KEY",\n    "Content-Type: application/json"\n  ],\n]);\n\n$response = curl_exec($curl);\n$err = curl_error($curl);\n\ncurl_close($curl);\n\nif ($err) {\n  echo "cURL Error #:" . $err;\n} else {\n  echo $response;\n}\n```',
    response: '```json\n{\n  "result": {\n    "lang": "en"\n  }\n}\n```'
  },
  {
    language: 'Swift',
    request: '```swift\nimport Foundation\n\nlet headers = [\n  "Authorization": "Bearer YOUR_API_KEY",\n  "Content-Type": "application/json"\n]\n\nlet parameters = [\n  "q": "Hello, how are you?"\n] as [String : Any]\n\nlet postData = try! JSONSerialization.data(withJSONObject: parameters)\n\nvar request = URLRequest(url: URL(string: "https://api-gl.lingvanex.com/language/translate/v2/detect")!)\nrequest.httpMethod = "POST"\nrequest.allHTTPHeaderFields = headers\nrequest.httpBody = postData\n\nlet session = URLSession.shared\nlet dataTask = session.dataTask(with: request) { (data, response, error) in\n  if let error = error {\n    print(error)\n  } else if let data = data {\n    print(String(data: data, encoding: .utf8)!)\n  }\n}\n\ndataTask.resume()\n```',
    response: '```json\n{\n  "result": {\n    "lang": "en"\n  }\n}\n```'
  },
  {
    language: 'C',
    request: '```c\n#include <stdio.h>\n#include <curl/curl.h>\n\nint main(void) {\n  CURL *curl;\n  CURLcode res;\n\n  curl = curl_easy_init();\n  if(curl) {\n    curl_easy_setopt(curl, CURLOPT_URL, "https://api-gl.lingvanex.com/language/translate/v2/detect");\n    \n    struct curl_slist *headers = NULL;\n    headers = curl_slist_append(headers, "Authorization: Bearer YOUR_API_KEY");\n    headers = curl_slist_append(headers, "Content-Type: application/json");\n    curl_easy_setopt(curl, CURLOPT_HTTPHEADER, headers);\n    \n    const char *data = "{\\"q\\":\\"Hello, how are you?\\"}";\n    curl_easy_setopt(curl, CURLOPT_POSTFIELDS, data);\n\n    res = curl_easy_perform(curl);\n    \n    if(res != CURLE_OK)\n      fprintf(stderr, "curl_easy_perform() failed: %s\\n", curl_easy_strerror(res));\n\n    curl_easy_cleanup(curl);\n  }\n  return 0;\n}\n```',
    response: '```json\n{\n  "result": {\n    "lang": "en"\n  }\n}\n```'
  },
  {
    language: 'C#',
    request: '```csharp\nusing System;\nusing System.Net.Http;\nusing System.Text;\nusing System.Threading.Tasks;\nusing Newtonsoft.Json;\n\nclass Program\n{\n    static async Task Main()\n    {\n        using var client = new HttpClient();\n        \n        client.DefaultRequestHeaders.Add("Authorization", "Bearer YOUR_API_KEY");\n        \n        var requestBody = new\n        {\n            q = "Hello, how are you?"\n        };\n        \n        var json = JsonConvert.SerializeObject(requestBody);\n        var content = new StringContent(json, Encoding.UTF8, "application/json");\n        \n        var response = await client.PostAsync(\n            "https://api-gl.lingvanex.com/language/translate/v2/detect",\n            content\n        );\n        \n        var result = await response.Content.ReadAsStringAsync();\n        Console.WriteLine(result);\n    }\n}\n```',
    response: '```json\n{\n  "result": {\n    "lang": "en"\n  }\n}\n```'
  },
  {
    language: 'C++',
    request: '```cpp\n#include <iostream>\n#include <curl/curl.h>\n#include <string>\n\nint main() {\n    CURL *curl;\n    CURLcode res;\n    \n    curl_global_init(CURL_GLOBAL_DEFAULT);\n    curl = curl_easy_init();\n    \n    if(curl) {\n        curl_easy_setopt(curl, CURLOPT_URL, "https://api-gl.lingvanex.com/language/translate/v2/detect");\n        \n        struct curl_slist *headers = NULL;\n        headers = curl_slist_append(headers, "Authorization: Bearer YOUR_API_KEY");\n        headers = curl_slist_append(headers, "Content-Type: application/json");\n        curl_easy_setopt(curl, CURLOPT_HTTPHEADER, headers);\n        \n        std::string data = "{\\"q\\":\\"Hello, how are you?\\"}";\n        curl_easy_setopt(curl, CURLOPT_POSTFIELDS, data.c_str());\n        \n        res = curl_easy_perform(curl);\n        \n        if(res != CURLE_OK)\n            fprintf(stderr, "curl_easy_perform() failed: %s\\n", curl_easy_strerror(res));\n        \n        curl_easy_cleanup(curl);\n    }\n    \n    curl_global_cleanup();\n    return 0;\n}\n```',
    response: '```json\n{\n  "result": {\n    "lang": "en"\n  }\n}\n```'
  },
  {
    language: 'Clojure',
    request: '```clojure\n(require \'[clj-http.client :as client])\n(require \'[cheshire.core :as json])\n\n(def response\n  (client/post "https://api-gl.lingvanex.com/language/translate/v2/detect"\n    {:headers {"Authorization" "Bearer YOUR_API_KEY"\n               "Content-Type" "application/json"}\n     :body (json/generate-string {:q "Hello, how are you?"})}))\n\n(println (:body response))\n```',
    response: '```json\n{\n  "result": {\n    "lang": "en"\n  }\n}\n```'
  },
  {
    language: 'Go',
    request: '```go\npackage main\n\nimport (\n    "bytes"\n    "encoding/json"\n    "fmt"\n    "io/ioutil"\n    "net/http"\n)\n\nfunc main() {\n    url := "https://api-gl.lingvanex.com/language/translate/v2/detect"\n    \n    payload := map[string]interface{}{\n        "q": "Hello, how are you?",\n    }\n    \n    jsonPayload, _ := json.Marshal(payload)\n    \n    req, _ := http.NewRequest("POST", url, bytes.NewBuffer(jsonPayload))\n    req.Header.Add("Authorization", "Bearer YOUR_API_KEY")\n    req.Header.Add("Content-Type", "application/json")\n    \n    res, _ := http.DefaultClient.Do(req)\n    defer res.Body.Close()\n    \n    body, _ := ioutil.ReadAll(res.Body)\n    fmt.Println(string(body))\n}\n```',
    response: '```json\n{\n  "result": {\n    "lang": "en"\n  }\n}\n```'
  },
  {
    language: 'HTTP',
    request: '```http\nPOST /language/translate/v2/detect HTTP/1.1\nHost: api-gl.lingvanex.com\nAuthorization: Bearer YOUR_API_KEY\nContent-Type: application/json\n\n{\n  "q": "Hello, how are you?"\n}\n```',
    response: '```json\n{\n  "result": {\n    "lang": "en"\n  }\n}\n```'
  },
  {
    language: 'Java',
    request: '```java\nimport java.io.BufferedReader;\nimport java.io.InputStreamReader;\nimport java.io.OutputStream;\nimport java.net.HttpURLConnection;\nimport java.net.URL;\n\npublic class Main {\n    public static void main(String[] args) {\n        try {\n            URL url = new URL("https://api-gl.lingvanex.com/language/translate/v2/detect");\n            HttpURLConnection conn = (HttpURLConnection) url.openConnection();\n            conn.setRequestMethod("POST");\n            conn.setRequestProperty("Authorization", "Bearer YOUR_API_KEY");\n            conn.setRequestProperty("Content-Type", "application/json");\n            conn.setDoOutput(true);\n            \n            String jsonInputString = "{\\"q\\":\\"Hello, how are you?\\"}";\n            \n            try(OutputStream os = conn.getOutputStream()) {\n                byte[] input = jsonInputString.getBytes("utf-8");\n                os.write(input, 0, input.length);\n            }\n            \n            try(BufferedReader br = new BufferedReader(\n                new InputStreamReader(conn.getInputStream(), "utf-8"))) {\n                StringBuilder response = new StringBuilder();\n                String responseLine = null;\n                while ((responseLine = br.readLine()) != null) {\n                    response.append(responseLine.trim());\n                }\n                System.out.println(response.toString());\n            }\n        } catch (Exception e) {\n            e.printStackTrace();\n        }\n    }\n}\n```',
    response: '```json\n{\n  "result": {\n    "lang": "en"\n  }\n}\n```'
  },
  {
    language: 'JavaScript',
    request: '```javascript\nconst options = {\n  method: \'POST\',\n  headers: {\n    \'Authorization\': \'Bearer YOUR_API_KEY\',\n    \'Content-Type\': \'application/json\'\n  },\n  body: JSON.stringify({\n    q: \'Hello, how are you?\'\n  })\n};\n\nfetch(\'https://api-gl.lingvanex.com/language/translate/v2/detect\', options)\n  .then(response => response.json())\n  .then(data => console.log(data))\n  .catch(error => console.error(\'Error:\', error));\n```',
    response: '```json\n{\n  "result": {\n    "lang": "en"\n  }\n}\n```'
  },
  {
    language: 'JSON',
    request: '```json\n{\n  "method": "POST",\n  "url": "https://api-gl.lingvanex.com/language/translate/v2/detect",\n  "headers": {\n    "Authorization": "Bearer YOUR_API_KEY",\n    "Content-Type": "application/json"\n  },\n  "body": {\n    "q": "Hello, how are you?"\n  }\n}\n```',
    response: '```json\n{\n  "result": {\n    "lang": "en"\n  }\n}\n```'
  },
  {
    language: 'Kotlin',
    request: '```kotlin\nimport okhttp3.*\nimport okhttp3.MediaType.Companion.toMediaType\nimport okhttp3.RequestBody.Companion.toRequestBody\n\nfun main() {\n    val client = OkHttpClient()\n    \n    val mediaType = "application/json".toMediaType()\n    val body = """{"q":"Hello, how are you?"}""".toRequestBody(mediaType)\n    \n    val request = Request.Builder()\n        .url("https://api-gl.lingvanex.com/language/translate/v2/detect")\n        .post(body)\n        .addHeader("Authorization", "Bearer YOUR_API_KEY")\n        .addHeader("Content-Type", "application/json")\n        .build()\n    \n    client.newCall(request).execute().use { response ->\n        println(response.body?.string())\n    }\n}\n```',
    response: '```json\n{\n  "result": {\n    "lang": "en"\n  }\n}\n```'
  },
  {
    language: 'Objective-C',
    request: '```objc\n#import <Foundation/Foundation.h>\n\nint main(int argc, const char * argv[]) {\n    @autoreleasepool {\n        NSString *urlString = @"https://api-gl.lingvanex.com/language/translate/v2/detect";\n        NSURL *url = [NSURL URLWithString:urlString];\n        NSMutableURLRequest *request = [NSMutableURLRequest requestWithURL:url];\n        \n        [request setHTTPMethod:@"POST"];\n        [request setValue:@"Bearer YOUR_API_KEY" forHTTPHeaderField:@"Authorization"];\n        [request setValue:@"application/json" forHTTPHeaderField:@"Content-Type"];\n        \n        NSDictionary *bodyDict = @{@"q": @"Hello, how are you?"};\n        NSData *bodyData = [NSJSONSerialization dataWithJSONObject:bodyDict options:0 error:nil];\n        [request setHTTPBody:bodyData];\n        \n        NSURLSession *session = [NSURLSession sharedSession];\n        NSURLSessionDataTask *task = [session dataTaskWithRequest:request\n            completionHandler:^(NSData *data, NSURLResponse *response, NSError *error) {\n                if (error) {\n                    NSLog(@"Error: %@", error);\n                } else {\n                    NSString *result = [[NSString alloc] initWithData:data encoding:NSUTF8StringEncoding];\n                    NSLog(@"%@", result);\n                }\n            }];\n        [task resume];\n        \n        [[NSRunLoop currentRunLoop] run];\n    }\n    return 0;\n}\n```',
    response: '```json\n{\n  "result": {\n    "lang": "en"\n  }\n}\n```'
  },
  {
    language: 'OCaml',
    request: '```ocaml\nopen Lwt\nopen Cohttp\nopen Cohttp_lwt_unix\n\nlet body = \n  `Assoc [\n    ("q", `String "Hello, how are you?")\n  ] |> Yojson.Basic.to_string\n\nlet () =\n  let headers = Header.init ()\n    |> fun h -> Header.add h "Authorization" "Bearer YOUR_API_KEY"\n    |> fun h -> Header.add h "Content-Type" "application/json" in\n  \n  let uri = Uri.of_string "https://api-gl.lingvanex.com/language/translate/v2/detect" in\n  \n  Lwt_main.run (\n    Client.post ~body:(`String body) ~headers uri >>= fun (resp, body) ->\n    body |> Cohttp_lwt.Body.to_string >|= fun body ->\n    print_endline body\n  )\n```',
    response: '```json\n{\n  "result": {\n    "lang": "en"\n  }\n}\n```'
  },
  {
    language: 'PowerShell',
    request: '```powershell\n$headers = @{\n    "Authorization" = "Bearer YOUR_API_KEY"\n    "Content-Type" = "application/json"\n}\n\n$body = @{\n    q = "Hello, how are you?"\n} | ConvertTo-Json\n\n$response = Invoke-RestMethod -Uri "https://api-gl.lingvanex.com/language/translate/v2/detect" `\n    -Method Post `\n    -Headers $headers `\n    -Body $body\n\n$response | ConvertTo-Json\n```',
    response: '```json\n{\n  "result": {\n    "lang": "en"\n  }\n}\n```'
  },
  {
    language: 'Python',
    request: '```python\nimport requests\nimport json\n\nurl = "https://api-gl.lingvanex.com/language/translate/v2/detect"\n\nheaders = {\n    "Authorization": "Bearer YOUR_API_KEY",\n    "Content-Type": "application/json"\n}\n\npayload = {\n    "q": "Hello, how are you?"\n}\n\nresponse = requests.post(url, json=payload, headers=headers)\n\nprint(response.json())\n```',
    response: '```json\n{\n  "result": {\n    "lang": "en"\n  }\n}\n```'
  },
  {
    language: 'R',
    request: '```r\nlibrary(httr)\nlibrary(jsonlite)\n\nurl <- "https://api-gl.lingvanex.com/language/translate/v2/detect"\n\nheaders <- add_headers(\n  Authorization = "Bearer YOUR_API_KEY",\n  `Content-Type` = "application/json"\n)\n\nbody <- list(\n  q = "Hello, how are you?"\n)\n\nresponse <- POST(\n  url,\n  headers,\n  body = toJSON(body, auto_unbox = TRUE),\n  encode = "json"\n)\n\ncontent(response, "text")\n```',
    response: '```json\n{\n  "result": {\n    "lang": "en"\n  }\n}\n```'
  }
];
