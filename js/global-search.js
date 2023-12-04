$(document).ready(function() {
    $('#business-scenerio').hide();
     // Configure/customize these variables.
    var showChar = 100;  // How many characters are shown by default
    var ellipsestext = "";
    var moretext = "Read More";
    var lesstext = "Read Less";
    

    $('.more').each(function() {
        var content = $(this).html();
 
        if(content.length > showChar) { 
            var c = content.substr(0, showChar);
            var h = content.substr(showChar, content.length - showChar); 
            var html = c + '<span class="moreellipses">' + ellipsestext+ '&nbsp;</span><span class="morecontent"><span>' + h + '</span>&nbsp;&nbsp;<a href="" class="morelink">' + moretext + '</a></span>'; 
            $(this).html(html);
        }
 
    });
 
    $(".morelink").on('click',function(){
        if($(this).hasClass("less")) {
            $(this).removeClass("less");
            $(this).text(moretext);
        } else {
            $(this).addClass("less");
            $(this).text(lesstext);
        }
        $(this).parent().prev().toggle();
        $(this).prev().toggle();
        return false;
    });

// 



$('#Create-Scenario').click(function(){
    $('#business-scenerio').show();
    $(".title-befor-content-load").hide();
});










//

$(".idea-box").click(function(){   
    // Hide all table data
    //$(".table-data").hide();
  
    // Get the target ID from the data attribute
    var targetId = $(this).data("target");

   // $(".idea-box").hide();
   $('#challenges-box').hide();
   
    $(".title-befor-content-load").hide();
    $("#business-scenerio").hide();
    $('#revlent-parmeter').show();
    // Show the corresponding table data
    $("#" + targetId).show();
});

// on click create challenge open nav tab business sceniro

// $('#create-challenge,#createNewChallenge').click(function(){
//     $('#open-business-scenerio').show();
//     $('#create-challenge').hide();
//     $('.step-progressbar-wrap').hide();
// });




$(function($) {
    var path = window.location.href; 
    // because the 'href' property of the DOM element is the absolute path
    $('.nav-item').each(function() {
        // alert('run');
      if (this.href === path) {
        $(this).addClass('active');
      }
    });
  });

// on click next open challenge creation tab



});


//

// Function to show the button when the checkbox is checked
// document.getElementById('checkBox').addEventListener('change', function () {
//     var showButton = document.getElementById('showButton');
//     showButton.style.display = this.checked ? 'block' : 'none';
//   });

  // Function to open the popup
//   function openPopup() {        
//     var popup = document.getElementById('popup');
//     popup.style.display = 'block';
//   }

  // Function to close the popup
//   function closePopup() {
//     var popup = document.getElementById('popup');
//     popup.style.display = 'none';
//   }



  // tab navigation ob create business scenirao 
  function changeTab() {

    $('#challenges-box').show();
    //$('.modal-backdrop').hide();
    // Get the currently active tab
    //
    var activeTab = document.querySelector('.nav-tabs .nav-link.active');

    // Get the target tab id
    var targetTabId = activeTab.getAttribute('data-bs-target');

    // Remove the 'active' class from the current tab and corresponding content
    activeTab.classList.remove('active');
    document.querySelector(targetTabId).classList.remove('show', 'active');

    // Set the next tab as active
    var nextTab = document.getElementById('data2'); // Change this to the desired tab
    nextTab.classList.add('active');

    // Show the corresponding content for the next tab
    var nextTabContent = document.getElementById('challenge-creation'); // Change this to the desired content
    nextTabContent.classList.add('show', 'active');

    $('.modal-backdrop').remove();
  }



//   function redirectToSection() {   
//         // Replace 'https://example.com' with the URL you want to redirect to
//         var url = 'initiator.html#open-business-scenerio';
      
//         // Open a new window or tab with the specified URL
//         var newWindow = window.open(url, '_blank');
      
//         // Ensure that the new window is opened before accessing its content
//         nwindow.open(url, '_blank');
//       }


  // 


