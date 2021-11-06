var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
    mapOption = { 
        center: new kakao.maps.LatLng(37.44058601225342, 126.70477848629551), // 지도의 중심좌표, 구글지도에서 위경도 알 수 있음
        level: 3 // 지도의 확대 레벨
    };
// 제이슨.JSON 
// 지도를 표시할 div와  지도 옵션으로  지도를 생성합니다
var map = new kakao.maps.Map(mapContainer, mapOption); 
