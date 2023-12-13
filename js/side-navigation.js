
// $(document).ready(function() {
//   // Add 'active' class to the corresponding navigation link based on the current path
//   var currentPath = location.pathname;
//   $('.navbar-nav a.nav-link').each(function() {
//       var href = $(this).attr('href');
//       if (currentPath.includes(href)) {
//           $(this).addClass('active');
//           // Open the collapse menu
//           $(this).parents('.collapse').addClass('show');
//       }
//   });

//   // Handle click event for navigation links
//   $('.navbar-nav a.nav-link').click(function() {
//       // Remove 'active' class from all navigation links
//       $('.navbar-nav a.nav-link').removeClass('active');
//       // Add 'active' class to the clicked link
//       $(this).addClass('active');
      
//       // Close all collapse menus
//       $('.navbar-nav .collapse').removeClass('show');

//       // Open the collapse menu associated with the clicked link
//       $(this).parents('.collapse').addClass('show');
//   });
// });

$(document).ready(function() {
  // Add 'active' class to the corresponding navigation link based on the current path
  var currentPath = location.pathname;
  $('.navbar-nav a.nav-link').each(function() {
      var href = $(this).attr('href');
      if (currentPath.includes(href)) {
          $(this).addClass('active');
          // Open the collapse menu
          $(this).parents('.collapse').addClass('show');
      }
  });

  // Handle click event for navigation links
  $('.navbar-nav a.nav-link').click(function() {
      // Remove 'active' class from all navigation links
      $('.navbar-nav a.nav-link').removeClass('active');
      // Add 'active' class to the clicked link
      $(this).addClass('active');
      
      // Close all collapse menus
      $('.navbar-nav .collapse').removeClass('show');

      // Open the collapse menu associated with the clicked link
      $(this).parents('.collapse').addClass('show');
  });
  
  // Close all collapse menus when clicking outside of the navbar
  $(document).click(function(event) {
      if (!$(event.target).closest('.navbar-nav').length) {
          $('.navbar-nav .collapse').removeClass('show');
      }
  });
});


// $(document).ready(function() {
//     // Add 'active' class to the corresponding navigation link based on the current path
//     var currentPath = location.pathname;
//     $('.navbar-nav a.nav-link').each(function() {
//         var href = $(this).attr('href');
//         if (currentPath.includes(href)) {
//             $(this).addClass('active');
//             // Open the collapse menu if href is not empty
//             if (href) {
//                 $(this).parents('.collapse').addClass('show');
//             }else{
//               $(this).parents('.collapse').removeClass('show');
//             }
//         }
//     });
  
//     // Handle click event for navigation links
//     $('.navbar-nav a.nav-link').click(function() {
//         // Remove 'active' class from all navigation links
//         $('.navbar-nav a.nav-link').removeClass('active');
//         // Add 'active' class to the clicked link
//         $(this).addClass('active');
        
//         // Close all collapse menus
//         $('.navbar-nav .collapse').removeClass('show');
  
//         // Open the collapse menu associated with the clicked link if href is not empty
//         var href = $(this).attr('href');
//         if (href) {
//             $(this).parents('.collapse').addClass('show');
//         }
//     });
    
//     // Close all collapse menus when clicking outside of the navbar
//     $(document).click(function(event) {
//         if (!$(event.target).closest('.navbar-nav').length) {
//             $('.navbar-nav .collapse').removeClass('show');
//         }
//     });
  
//     // Close all collapse menus when clicking on a collapsed link
//     $('.navbar-nav .nav-link').click(function(event) {
//         if ($(event.target).closest('.navbar-nav').length) {
//             $('.navbar-nav .collapse').removeClass('show');
//         }
//     });
//   });