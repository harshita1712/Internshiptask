$(document).ready(function() {

    /**Navbar Shrink **/
    $(window).on("scroll", function(){
      if($(this).scrollTop() > 90){
        $(".navbar").addClass("navbar-shrink");
      }
      else{
        $(".navbar").removeClass("navbar-shrink");
      }
    });
    const videoSrc = $("#players").attr("src");
    $(".videos, .video-popup ").on("click", function(){
       if($(".video-popup").hasClass("open")){
           $(".video-popup").removeClass("open");
           $("#players").attr("src","");
       }
       else{
        $(".video-popup").addClass("open");
        if($("#players").attr("src")=='')
        {
          $("#players").attr("src", videoSrc);
        
        }

    }

    
    });

    /* Owl Caraousel for features */
    $('.features-carousel').owlCarousel({
      loop:true,
      margin:10,
      autoplay:true,
      responsiveClass:true,
      responsive:{
          0:{
              items:1,
             
          },
          600:{
              items:2,
              
          },
          1000:{
              items:3,
          }
      }
  })

  /* Owl carousel for screenshots */
  
   $('.scr-carousel').owlCarousel({
    loop:true,
    margin:10,
    autoplay: true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
           
        },
        600:{
            items:2,
            
        },
        1000:{
            items:4,
        }
    }
})


/* Testimonials carousel */
  
$('.testimonial-carousel').owlCarousel({
    loop:true,
    margin:10,
    autoplay: true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
           
        },
        600:{
            items:2,
            
        },
        1000:{
            items:3,
        }
    }
})

/* Page Scrolling */
$(function(){
    $.scrollIt();
  });

/* Navbar */
$(".nav-link").on("click", function(){

    $(".navbar-collapse").collapse("hide");

});

});


