// var myCarousel = document.querySelector('#myCarousel')
// var carousel = new bootstrap.Carousel(myCarousel, {
//   interval: 2000,
//   wrap: false
// });

// //nav color change when scroll
$(document).ready(function(){
    $(window).scroll(function(){
        if($(window).scrollTop() > 100){
            $(".navbar").css({"background-color":"#798777"});   
        }
        else{
            $(".navbar").css({"background-color":"transparent"});
        }

    });
});


//services animation
//   $(document).ready(function(){
//       $(".col").hover(function(){
//         $(this).toggleClass("animate__animated  animate__bounceIn ");
//       });
//     });
// buy button
$( ".buynow" ).hover(
    function() {
      $( this ).addClass("animate__animated  animate__tada ");
    }, function() {
      $( this ).removeClass( "animate__animated  animate__tada");
    }
  );

// services
    $( ".col" ).hover( 
        function() {
          $( this ).addClass("animate__animated  animate__bounce animate__infinite");
        }

        , function() {
          $( this ).removeClass( "animate__animated  animate__bounce animate__infinite");
        }
      );



//    
$(document).ready(function() {
    $("[href]").each(function() {
       if (this.href == window.location.href) {
          $(this).addClass("active");
       }
    });
 });

 //team photos animation
 $(document).ready(function(){
    $(window).scroll(function(){
        if($(window).scrollTop() > 1150){
            $(".team1").addClass("animate__animated animate__slideInLeft") ;
        }
        else{
            $(".team1").removeClass("animate__animated animate__slideInLeft") ;
        }

    });
});
//team2
$(document).ready(function(){
    $(window).scroll(function(){
        if($(window).scrollTop() > 1250){
            $(".team2").addClass("animate__animated animate__slideInRight") ;
        }
        else{
            $(".team2").removeClass("animate__animated animate__slideInRight") ;
        }

    });
});



//alert("hh0");$(window).height()
