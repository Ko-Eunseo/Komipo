import urllib.request
client_id = "UGzGF_hY8oUbI_3nYm7E"
client_secret = "YmTrySyGBp"
encText = urllib.parse.quote("한국중부발전")
url = "https://openapi.naver.com/v1/search/news.json?query=" + encText # json 결과

request = urllib.request.Request(url)
request.add_header("X-Naver-Client-Id",client_id)
request.add_header("X-Naver-Client-Secret",client_secret)

response = urllib.request.urlopen(request)
rescode = response.getcode()

if(rescode==200):
    response_body = response.read()
    print(response_body.decode('utf-8'))

else:
    print("Error Code:" + rescode)