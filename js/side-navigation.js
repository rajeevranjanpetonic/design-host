
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
//       //return false;
//   });
  
//   // Close all collapse menus when clicking outside of the navbar
//   $(document).click(function(event) {
//       if (!$(event.target).closest('.navbar-nav').length) {
//           $('.navbar-nav .collapse').removeClass('show');
//       }
//   });
// });


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


// $(document).ready(function() {
//     // prevent page from jumping to top from  # href link
//     $('.menu-parent li.menu-child > a').click(function(e) {       
//      e.preventDefault();
//     });
  
//     // remove link from menu items that have children
//     $(".menu-parent li.menu-child > a").attr("href", "#");
  
//     //  function to open / close menu items
//     $(".menu-parent a").click(function() {       
//       var link = $(this);
//       var closest_ul = link.closest("ul");
//       var parallel_active_links = closest_ul.find(".active")
//       var closest_li = link.closest("li");
//       var link_status = closest_li.hasClass("active");
//       var count = 0;
  
//       closest_ul.find("ul").slideUp(function() {
//         if (++count == closest_ul.find("ul").length)
//         parallel_active_links.removeClass("active");
//       });
  
//       if (!link_status) {
//         closest_li.children("ul").slideDown();
//         closest_li.addClass("active");
//       }
//     })
//   })

$(document).ready(function() {
    // prevent page from jumping to top from #href link
    $('.menu-parent li.menu-child > a').click(function(e) {       
        e.preventDefault();
        e.stopPropagation(); // Stop the event from reaching the parent elements
    });
  
    // remove link from menu items that have children
    $(".menu-parent li.menu-child > a").attr("href", "#");
  
    // function to open / close menu items
    $(".menu-parent a").click(function(e) {
        e.preventDefault();
        e.stopPropagation(); // Stop the event from reaching the parent elements
        
        var link = $(this);
        var closest_ul = link.closest("ul");
        var parallel_active_links = closest_ul.find(".active");
        var closest_li = link.closest("li");
        var link_status = closest_li.hasClass("active");
        var count = 0;

        closest_ul.find("ul").slideUp(function() {
            if (++count == closest_ul.find("ul").length)
                parallel_active_links.removeClass("active");
        });

        if (!link_status) {
            closest_li.children("ul").slideDown();
            closest_li.addClass("active");

            // Update URL hash based on the active side nav
            var newHash = closest_li.children("a").attr("href");
            window.location.hash = newHash;
        }
    });

    // Check the initial hash on page load
    if (window.location.hash) {
        var activeLink = $(".menu-parent li.menu-child > a[href='" + window.location.hash + "']");
        if (activeLink.length) {
            activeLink.closest("li").children("ul").slideDown();
            activeLink.closest("li").addClass("active");
        }
    }
});
