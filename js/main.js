//====================
// google map
//====================
// マップ
function initMap() {
  var mapPosition = {lat: 35.017349, lng: 135.756348};

  var mapArea = document.getElementById('maps');
  var mapOptions = {
    center: mapPosition,
    zoom: 18,
    styles: [{
      featureType: 'all',
      elementType: 'all',
      stylers: [{
          hue: '#'
      }, {
          saturation: -90
      }, {
          lightness: 0
      }, {
          gamma: 1
      }]
  }]
    
  };

  var map = new google.maps.Map(mapArea, mapOptions);

  // マーカー
  var markerOptions = {
    map: map,
    position: mapPosition,
    icon: 
    new google.maps.MarkerImage(
      "img/473.png" ,
      new google.maps.Size(90, 90),
      new google.maps.Point(0, 0),
      new google.maps.Point(40, 80),
      new google.maps.Size(90, 90),
    ),
  
  };

  var marker = new google.maps.Marker(markerOptions);
}

//====================
// スライダー
//====================
  $(function(){
    $(window).on('load',function() {
        var mySwiper = new Swiper ('.swiper-container', {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 0,
        centeredSlides : true,
        speed: 3000,
        autoplay: 3500,
        effect: 'fade',
        pagination: '.swiper-pagination',
        
        paginationClickable: false,
        nextButton: '.swiper-button-next',
         prevButton: '.swiper-button-prev',
        autoplayDisableOnInteraction: true //autoplayの有効化
     
        });
    });
 });
 
