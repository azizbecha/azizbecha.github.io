   
$(document).ready(function (){
    
        $('.js-nav a, .js-connect').click(function(e) {
          e.preventDefault();
          $('body, html').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
          }, 750);
        });
        $(window).scroll(function(){ 
          if ($(this).scrollTop() > 100) { 
              $('#scroll').fadeIn(); 
          } else { 
              $('#scroll').fadeOut(); 
          } 
      }); 
      $('#scroll').click(function(){ 
          $("html, body").animate({ scrollTop: 0 }, 600); 
          return false; 
      }); 
})