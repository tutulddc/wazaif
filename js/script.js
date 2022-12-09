$('.team-slider').slick({
    arrows: false,
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          // vertical: false,
        }
      }
  
    ]
});
$('.customers-sliders').slick({
    arrows: false,
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 575,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            // vertical: false,
          }
        }
    
      ]
});







let bt_top = document.querySelector('.bt_top')

bt_top.addEventListener('click',function(){

  window.scrollTo({
    top: 0
  });

})

window.addEventListener('scroll',function(){
  let scrolling = window.scrollY;
  console.log(scrolling);

  if(scrolling > 120){
    bt_top.classList.add('active')
  }else{
    bt_top.classList.remove('active')      
  }
})
