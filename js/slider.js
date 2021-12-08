
// slider
document.addEventListener('DOMContentLoaded', function(){
  var $slideWrap = document.querySelector('.container'),
      $slideContainer = document.querySelector('.slider-container'),
      $slide = document.querySelectorAll('.slide'),
      $navPrev = document.getElementById('prev'),
      $navNext = document.getElementById('next'),
      $timer = undefined, //전역변수로 바꿈
      $slideCount = $slide.length,
      $pagerBtn = document.querySelectorAll('.pager span'),
      $currentIdx = 0;

  // 슬라이드 가로배열
  for(var a = 0; a < $slideCount; a++){
      $slide[a].style.left = a * 100 + '%';
    }

    
    // 슬라이드 이동
  function goToSlide(idx){
    $slideContainer.style.left = -100 * idx + '%';
    $currentIdx = idx;

    // 클릭된 요소 active
    for(var y = 0; y < $pagerBtn.length; y++){
      $pagerBtn[y].classList.remove('active');
    }
    $pagerBtn[idx].classList.add('active');
  }
  goToSlide(0);

  // 다음버튼을 누르면 할일, 이전버튼을 클릭하면 할일
  $navPrev.addEventListener('click',function(){
    goToSlide($currentIdx - 1);

    if($currentIdx == 0){
        goToSlide($slideCount -1);
    } else {
        goToSlide($currentIdx - 1);
    }
  });
  $navNext.addEventListener('click',function(){
    goToSlide($currentIdx + 1);

    if($currentIdx == $slideCount -1){
        goToSlide(0);
    } else {
        goToSlide($currentIdx + 1);
    }
  });

  // 자동슬라이드 함수
  function startAutoSlide(){
    $timer = setInterval(function(){
      var nextIdx = ($currentIdx+1) % $slideCount;
      goToSlide(nextIdx);
    }, 4000);
  }

  startAutoSlide();

  function stopAutoSlide(){
    clearInterval($timer);
  }

  // 마우스오버시 멈춤
  $slideWrap.addEventListener('mouseenter',function(){
    stopAutoSlide();
  });
  $slideWrap.addEventListener('mouseleave',function(){
    startAutoSlide();
  });

  // pager로 슬라이드 이동
  for (var x = 0; x < $pagerBtn.length; x++){
    $pagerBtn[x].addEventListener('click', function(event){
      var pagerNum = event.target.innerText - 1;
      goToSlide(pagerNum);
      
    });
  }


});
