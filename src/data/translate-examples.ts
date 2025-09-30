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
  }
];
