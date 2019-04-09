$(document).ready(function(){

  $('.mobile-menu').on('click', function(){
    $(this).toggleClass('mobile-menu__open');
    $(this).siblings('.menu').fadeToggle();
  });
  $('.menu li').on('click', function(){
    $('.mobile-menu').toggleClass('mobile-menu__open');
    $('.menu').fadeToggle(0);
  })
   $(document).mouseup(function (e) {
    var container = $(".menu");
    if (container.has(e.target).length === 0){
        container.hide();
        $('.mobile-menu').removeClass('mobile-menu__open');
    }
});

/* ПОИСК */

   $('.search__button').on('click', function(){
      $(this).siblings('.search__row').slideToggle();
      $("input[type='text']").focus();
      return false;
    });

   $(document).click( function(event){
  if( $(event.target).closest(".search__row").length ) 
  return;
  $(".search__row").slideUp("slow");
  event.stopPropagation();
});



	$('.slider').slick({
			autoplay: false,
			arrows: true,
			dots: true,
			prevArrow: '<button type="button" class="arrow prevArrow"><img src="img/left.png"></button>',
			nextArrow: '<button type="button" class="arrow nextArrow"><img src="img/right.png"></button>'
		}); 

  /*swiper slider*/
	 var swiper = new Swiper('.swiper-container', {
        keyboard: {
        enabled: true,
        onlyInViewport: false,
        },
      effect: 'coverflow',
      centeredSlides: true,
      initialSlide: 1,
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      coverflowEffect: {
        rotate: 0,
        stretch: 50,
        depth: 300,
        modifier: 1,
        slideShadows : false,
      },
      loop: true,
      pagination: {
        el: '.swiper-pagination',
      },
      breakpoints: {
        991: {

        } 
      }

    });
/*TABS*/

  $('.tabs__nav a').on('click', function() {
    $(this).parents('.portfolio__tabs').find('.tabs__content').addClass('hide');
    $(this).parent().siblings().removeClass('active');
    var id = $(this).attr('href');
    $(id).removeClass('hide');
    $(this).parent().addClass('active')
    return false
  });

/*VIDEO*/ 
  var $video1 = document.getElementById('video1');
  $(".video__layer__play").on('click',function(){
    $video1.paused?$video1.play():$video1.pause();
    $('.video__layer').toggleClass('hide');
    $video1.controls = true;
  });

   $video1.onclick = function() {
     $('.video__layer').toggleClass('hide');
    if ($video1.paused) {
     $video1.play();
    } else {
     $video1.pause();
    }
    $video1.controls = true;
   };
/*SLIDER multiple*/
  $('.multiple-items').slick({
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    prevArrow: '<a class="newArrow newPrevArrow"><span class="icon-left"><span class="path1"></span><span class="path2"></span></span></a>',
    nextArrow: '<a class="newArrow newNextArrow"><span class="icon-right1"><span class="path1"></span><span class="path2"></span></span></a>',
     responsive: [{

      breakpoint: 769,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 578,
      settings: {
        slidesToShow: 1,
      }
    }
    ]
  });

  $('.twitter').each(function() {
          var handle = $(this).text().slice(1);
      var handleUrl = "<span class='twitter'><a href='https://www.twitter.com/"+handle+"'>"+$(this).text()+"</a></span>";
             $(this).replaceWith(handleUrl); 
  });

   $('.twitter__hashtag').each(function() {
          var handle = $(this).text().slice(1);
      var handleUrl = "<span class='twitter__hashtag'><a href='https://www.twitter.com/hashtag/"+handle+"'>"+$(this).text()+"</a></span>";
             $(this).replaceWith(handleUrl); 
  });
   /*ПРОКРУТКА СТРАНИЦЫ */
   $("#menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top - 50;
        $('body,html').animate({scrollTop: top}, 1200);
    });

   /**/
  
});