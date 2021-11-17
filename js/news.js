// var express = require('express');
// var app = express();
// var client_id = 'UGzGF_hY8oUbI_3nYm7E';
// var client_secret = 'YmTrySyGBp';
// app.get('search/news', function (req, res) {
//   var api_url = 'https://openapi.naver.com/v1/search/news.json?query=한국중부발전' + encodeURI(req.query.query); // json 결과
//   var request = require('request');
//   var options = {
//       url: api_url,
//       headers: {'X-Naver-Client-Id':client_id, 'X-Naver-Client-Secret': client_secret}
//   };
//   request.get(options, function (error, response, body) {
//     if (!error && response.statusCode == 200) {
//       res.writeHead(200, {'Content-Type': 'text/json;charset=utf-8'});
//       res.end(body);
//     } else {
//       res.status(response.statusCode).end();
//       console.log('error = ' + response.statusCode);
//     }
//   });
// });
// app.listen(3000, function () {
//   console.log('http://127.0.0.1:3000/search/news?query=한국중부발전 app listening on port 3000!');
// });

const axios = require('axios');
const cheerio = require('cheerio');

function crawler(){
	const url = 'https://search.daum.net/search?w=news&nil_search=btn&DA=NTB&enc=utf8&cluster=y&cluster_page=1&q=%EC%A4%91%EB%B6%80%EB%B0%9C%EC%A0%84';
	
	//axios로 get 요청 보내기
	axios.get(url)
	  .then(res => {
		
		// console.log(res);
		// console.log(res.status);
		//서버의 응답 확인: 200 //존재하지 않음 404
		if(res.status == 200) {
			//크롤링하는 코드
			let crawledNews = [];
			// [{title: "....", summary: "....", img: "...."}, {}, {}]
			
			//res.data에 있는 tag를 cheerio로 검색하여 변수에 담기
			const $ = cheerio.load(res.data);
			const $newsList = $('#newsColl > div.cont_divider > ul');
			
			$newsList.each(function(i) {
				crawledNews[i] = {
					title: $(this).find('#newsColl > div.cont_divider > ul > li > div.wrap_cont > a').text(),
					summary: $(this).find('#newsColl > div.cont_divider > ul > li > div.wrap_cont > p').text(),
					img: $(this).find('#news_img_0 > a > img').attr('src')


				}
			});
			console.log(crawledNews);
		} else {
			console.log("서버 응답 오류");
		}
		
	})
	
	
}

crawler();