/*------------------DROPDOWN JS START------------------*/

const toggleBtn = document.querySelector('.toggle-btn')
const toggleBtnIcon = document.querySelector('.toggle-btn i')
const dropDownMenu = document.querySelector('.dropdown-menu')

toggleBtn.onclick = function () {
    dropDownMenu.classList.toggle('open')
    const isOpen = dropDownMenu.classList.contains('open')

    toggleBtnIcon.classList = isOpen
    ? 'fa-solid fa-xmark'
    : 'fa-solid fa-bars fa-fade'

}
/*------------------DROPDOWN JS END------------------*/

/*------------------SLIDER JS START------------------*/

$('.hero-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2500,
    dots: false,
    autoplaySpeed: 2000,
   responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

 
  $('.portfolio-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    speed: 2500,
    dots: false,
    autoplaySpeed: 2000,
   responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  $('.review-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2500,
    dots: false,
    autoplaySpeed: 2000,
   responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 481,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  $('.loop-slider').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 2000,
    pauseOnHover: true,
    cssEase: 'linear',
   responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 481,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
    /*------------------SLIDER JS END------------------*/


   /*----------------------------------------xxxxxxxxxxxxxxxxxxx-----------------------------------*/


  /*------------------LOADER JS START------------------*/

  $(window).on('load', function(){
    $('.preloader').fadeOut();
    if($('.gallery-grid').length){
        var $grid = $('.gallery-grid').isotope({
            itemSelector: '.grid-item',
            percentPosition: true,
            masonry: {
                columnWidth: '.grid-item',
            }
        });
        $('.gallery-grid .zoom-button').simpleLightbox();
    }
    $('.gallery-filter ul li a').on('click', function() {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({
                filter: filterValue
        });
    });
});


  /*------------------LOADER JS END------------------*/




  /*----------------------------------------xxxxxxxxxxxxxxxxxxx-----------------------------------*/





  /*------------------COUNTER JS START------------------*/
  var counted = 0;
  $(window).scroll(function() {
var oTop = $('#counter').offset().top - window.innerHeight;
  if (counted == 0 && $(window).scrollTop() > oTop) {
  $('.count').each(function() {
  var $this = $(this),
  countTo = $this.attr('data-count');
  $({
  countNum: $this.text()
  }).animate({
  countNum: countTo
  },
  {
  duration: 2000,
  easing: 'swing',
  step: function() {
  $this.text(Math.floor(this.countNum));
  },
  complete: function() {
  $this.text(this.countNum);
  //alert('finished');
  }
  });
  });
  counted = 1;
  }
  });

  /*------------------COUNTER JS END------------------*/


  AOS.init();
  /*----------------------------------------xxxxxxxxxxxxxxxxxxx-----------------------------------*/

