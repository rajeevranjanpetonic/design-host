(function($) {
  "use strict"; // Start of use strict

  // Toggle the side navigation
  $("#sidebarToggle, #sidebarToggleTop").on('click', function(e) {
    $("body").toggleClass("sidebar-toggled");
    $(".sidebar").toggleClass("toggled");
   
    if ($(".sidebar").hasClass("toggled")) {
      $(".hamburger").addClass("is-active");
      $('.sidebar .collapse').collapse('hide');
      // Adjust main content margin when sidebar is toggled
      $("#content-wrapper").css("margin-left", "0");
      $('.page-heading').css("width", "100%");
    }else{
      $("#content-wrapper").css("margin-left", "225px");
      $('.page-heading').css("width", 'calc(100% - 18%)');
      $(".hamburger").removeClass("is-active");
    }
  });

  // Close any open menu accordions when window is resized below 768px
  $(window).resize(function() {
    if ($(window).width() < 768) {
      $('.sidebar .collapse').collapse('hide');
    };
    
    // Toggle the side navigation when window is resized below 480px
    if ($(window).width() < 480 && !$(".sidebar").hasClass("toggled")) {
      $("body").addClass("sidebar-toggled");
      $(".sidebar").addClass("toggled");
      $('.sidebar .collapse').collapse('hide');
    };
  });

  // Prevent the content wrapper from scrolling when the fixed side navigation hovered over
  $('body.fixed-nav .sidebar').on('mousewheel DOMMouseScroll wheel', function(e) {
    if ($(window).width() > 768) {
      var e0 = e.originalEvent,
        delta = e0.wheelDelta || -e0.detail;
      this.scrollTop += (delta < 0 ? 1 : -1) * 30;
      e.preventDefault();
    }
  });

  // Scroll to top button appear
  $(document).on('scroll', function() {
    var scrollDistance = $(this).scrollTop();
    if (scrollDistance > 100) {
      $('.scroll-to-top').fadeIn();
    } else {
      $('.scroll-to-top').fadeOut();
    }
  });

  // Smooth scrolling using jQuery easing
  $(document).on('click', 'a.scroll-to-top', function(e) {
    var $anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: ($($anchor.attr('href')).offset().top)
    }, 1000, 'easeInOutExpo');
    e.preventDefault();
  });




})(jQuery); // End of use strict

$(document).ready(function() {


  $('[data-bs-toggle="tooltip"]').tooltip();
  // $('.nav-item').click(function(){
  //   // alert('run');
  //   $('.nav-item').removeClass("active");
  //   $(this).addClass("active");

  // });

  const burgAnimation = () =>{
    var burger = document.querySelector('.svgburg')
     var path1 = document.querySelector('.path1')
     var path2 = document.querySelector('.path2')
     var mline = document.querySelector('.mline')
     burger.addEventListener('click',() =>{     
         path1.classList.toggle('cross');
         path2.classList.toggle('cross');
         mline.classList.toggle('hide');
        }
      )
  
  }
 burgAnimation();

// Delete Row
$("#myTable").on("click", ".delete", function (event) {
    $(this).closest("tr").remove();
});

// $("#datepicker").datepicker({
//   format: "yyyy",
//   viewMode: "years", 
//   minViewMode: "years"
// });

$("#myInput").on("keyup", function() {
  var value = $(this).val().toLowerCase();
  $("#myTable tr").filter(function() {
    $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
  });
});

});









      

 