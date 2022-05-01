
(function ($){
    "use strict*";

    var navbarCollapse = function(){
        if($("#mainNav").offset().top > 100){
            $("#mainNav").addClass("navbar-shrink");
        }
        else{
            $("#mainNav").removeClass("navbar-shrink");
        }
    };
    navbarCollapse();
    $(window).scroll(navbarCollapse);
})(jQuery);




window.onscroll = () =>{

    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
  
    if(window.scrollY > 60){
      document.querySelector('#scroll-top').classList.add('active');
    }else{
      document.querySelector('#scroll-top').classList.remove('active');
    }
  
  }
  
  function loader(){
    document.querySelector('.loader-container').classList.add('fade-out');
  }
  
  function fadeOut(){
    setInterval(loader, 3000);
  }
  
  window.onload = fadeOut();



  var video = document.querySelectorAll('video')
  video.forEach(play => play.addEventListener('click',() =>{
    play.classList.toggle('active');

  }));