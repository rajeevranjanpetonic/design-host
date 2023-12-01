$(document).ready(function() {

    $('#business-scenerio').hide();

$('#goButton').click(function(){
    $('#business-scenerio').show();
    $(".title-befor-content-load").hide();
    $('#open-business-scenerio').show();
});

$(document).on('click', '#submitButton', function(){
  //alert('run');
  $('#revlent-parmeter').show();
  $('#tableIdeagenration').show();
  $('#business-scenerio').hide();
  $('#challenges-box').hide();
});

//

// $(".clickable").click(function(){   
//     // Hide all table data
//     //$(".table-data").hide();
  
//     // Get the target ID from the data attribute
//     var targetId = $(this).data("target");

//    // $(".idea-box").hide();
//    $('#challenges-box').hide();
   
//     $(".title-befor-content-load").hide();
//     $("#business-scenerio").hide();
//     $('#revlent-parmeter').show();
//     // Show the corresponding table data
//     $("#" + targetId).show();
// });



  





// $(function($) {
//   var path = window.location.href; 

//   //Open the parent collapse on page load based on stored state
//   $('.nav-link').each(function() {         
//       if (this.href === path) {
//           $(this).addClass('active');

//           // Check if the parent is a collapse element and open it
//           var parentCollapse = $(this).closest('.collapse');
//           if (parentCollapse.length > 0) {
//               var isCollapsed = localStorage.getItem('collapseState') !== 'open';
//               if (!isCollapsed) {
//                   parentCollapse.addClass('show');
//               }
//           }
//       }
//   });
// });




// on click next open challenge creation tab






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



});



$(document).ready(function() {
  $('#challenges-box').show();
  // Handle click on #addCardsBtn
  $(document).on('click', '#addCardsBtn', function () {
    $('#challenges-box').show(); 
      // Create the final card with a textarea
      // var textareaCard = `
      //     <div class="card idea-box border-left-primary">
      //         <div class="card-body">
      //             <h5 class="card-title clickable" data-card-id="question">Your Business Scenario</h5>
      //             <p class="more" id="questionContent" data-full-text="Write your question here...">Write your question here...</p>
      //             <textarea class="form-control" rows="3" id="questionTextarea" placeholder="Write your question here..."></textarea>
      //             <button class="btn btn-success mt-3" id="submitButton">Submit</button>
      //         </div>
      //     </div>
      // `;

      // Append the textarea card to the card container
     // $("#addMoreKeyFactors").append(textareaCard).fadeIn();

      // Create two new card elements
      for (let i = 0; i < 3; i++) {
          var newCard = `
              <div class="card idea-box border-left-primary">
                  <div class="card-body">
                      <h5 class="card-title clickable" data-card-id="${i + 1}">New Card ${i + 1}</h5>
                      <p class="more" data-full-text="This is some content for the new card. It can be a bit longer to demonstrate the 'Read More' functionality.">This is some content for the new card. It can be a bit longer to demonstrate the 'Read More' functionality.</p>
                      <a href="#" class="morelink">Read More</a>
                  </div>
              </div>
          `;

          // Append the new card to the card container
          $("#addMoreKeyFactors, #ideaGeneration").append(newCard).fadeIn();
          //$("#ideaGeneration").append(newCard).fadeIn();
      }

      // Hide the button after adding cards
      $(this).hide();
  });

  // Handle click on .morelink (existing cards)
//   $("#addMoreKeyFactors").on('click', '.morelink', function() {
//     var $cardBody = $(this).closest('.card-body');
//             var $content = $cardBody.find('.more');
//             var fullText = $content.data('full-text');

//             // Toggle "Read More" and "Read Less" text for the clicked card only
//             var isLess = $content.hasClass("less");
//             $content.toggleClass("less", !isLess);
//             $content.text(isLess ? fullText.substring(0, 100) + "..." : fullText);

//             // Optionally, you can toggle a class on the card body for additional styling
//             $cardBody.toggleClass('expanded', !isLess);
//     return false;
// });

  // Handle click on #submitButton
  // $("#addMoreKeyFactors").on('click', '#submitButton', function() {
  //     // Implement the desired action when the submit button is clicked
  //     var questionText = $("#questionTextarea").val();
  //     alert("Question submitted: " + questionText);
  // });

  $(document).on('click', '.clickable', function () {   
    $('#challenges-box').hide();
    // Hide all table data
    //$(".table-data").hide();
  
    // Get the target ID from the data attribute
    var targetId = $(this).data("target");
    $("#" + targetId).show();
   // $(".idea-box").hide();
  //$('#challenges-box').hide(); 
    $(".title-befor-content-load").hide();
    $("#business-scenerio").hide();
    $('#revlent-parmeter').show();
    // Show the corresponding table data
    
  });

  // table check box checked show the corresponding dropdown icon
  
  $(".table-dropdown-menu").hide();
        $(".form-check-input").change(function () {
            var dropdownId = $(this).closest(".editableTable").find(".table-dropdown-menu").data("dropdown-id");

            // Show/hide the dropdown based on checkbox state
            if ($(this).is(":checked")) {
                $(this).closest(".editableTable").find(".table-dropdown-menu").show();
            } else {
                $(this).closest(".editableTable").find(".table-dropdown-menu").hide();
            }
        });

});



