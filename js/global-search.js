$(document).ready(function() {

    $('#business-scenerio').hide();

$('#goButton').click(function(){
    $('#business-scenerio').show();
    $(".title-befor-content-load").hide();
    $('#open-business-scenerio').show();
});

// $(document).on('click', '#submitButton', function(){
//   //alert('run');
//   $('#revlent-parmeter').show();
//   $('#tableIdeagenration').show();
//   $('#business-scenerio').hide();
//   $('#challenges-box').hide();
// });

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



  



document.addEventListener("DOMContentLoaded", function () {
  // Get all collapsible elements
  var collapseElements = document.querySelectorAll('[data-bs-toggle="collapse"]');

  // Add click event listener to each collapsible element
  collapseElements.forEach(function (element) {
      element.addEventListener("click", function () {
          // Toggle the collapse state when a collapsible element is clicked
          var targetSelector = element.getAttribute("data-bs-target");
          var targetElement = document.querySelector(targetSelector);

          if (targetElement.classList.contains("show")) {
              targetElement.classList.remove("show");
          } else {
              // Close other open collapse elements
              var openCollapses = document.querySelectorAll(".collapse.show");
              openCollapses.forEach(function (openCollapse) {
                  if (openCollapse !== targetElement) {
                      openCollapse.classList.remove("show");
                  }
              });

              // Open the clicked collapse element
              targetElement.classList.add("show");
          }
      });
  });

  // On page load, open the Initiator collapse
  var initiatorCollapse = document.querySelector('#initiator');
  if (initiatorCollapse) {
      initiatorCollapse.classList.add('show');
  }
});



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
                  <div class="card-radio-btn"> <input name="plan" class="radio" type="radio"  onchange="checkAllRadios()"></div>
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

  // $(document).on('click', '.clickable', function () {   
  //  // $('#challenges-box').hide();
  //   // Hide all table data
  //   //$(".table-data").hide();
  
  //   // Get the target ID from the data attribute
  //   // var targetId = $(this).data("target");
  //   // $("#" + targetId).show();
  //  // $(".idea-box").hide();
  // $('#challenges-box').hide(); 
  //   $(".title-befor-content-load").hide();
  //   $("#business-scenerio").hide();
  //   $('#revlent-parmeter').show();
  //   // Show the corresponding table data
    
  // });

  // table check box checked show the corresponding dropdown icon
  
  $(".table-dropdown-menu").hide();
        // $(".form-check-input").change(function () {
        //     var dropdownId = $(this).closest(".editableTable").find(".table-dropdown-menu").data("dropdown-id");

        //     // Show/hide the dropdown based on checkbox state
        //     if ($(this).is(":checked")) {
        //         $(this).closest(".editableTable").find(".table-dropdown-menu").show();
        //     } else {
        //         $(this).closest(".editableTable").find(".table-dropdown-menu").hide();
        //     }
        // });

});


/**
 * Checks all radio buttons on the page and enables/disables the submit button accordingly.
 * 
 * Loops through all elements with class 'radio-button', sets allChecked to true.
 * If any radio is not checked, sets allChecked to false.
 * Disables submitBtn if allChecked is false, enables if true.
*/
// Function to check if any radio button is checked
function checkAllRadios() {
  var radioButtons = document.querySelectorAll('.radio-button');
  var submitBtns = document.querySelectorAll('.submitBtn');
  var anyChecked = false;

  radioButtons.forEach(function (radio) {
      if (radio.checked) {
          anyChecked = true;
      }
  });

  // Enable or disable all submit buttons based on the check status
  submitBtns.forEach(function (submitBtn) {
      submitBtn.disabled = !anyChecked;
  });
}






/**
 * Toggles display of a modal dialog when checkbox is checked/unchecked
 * 
 * @param {HTMLInputElement} checkbox - Checkbox element
 */
function handleCheckboxChange(checkbox) {
  var modalId = checkbox.id.replace('flexSwitchCheck', 'relevantQuestionsModal');
  if (checkbox.checked) {
    openModal(modalId);
  } else {
      closeModal(modalId);
  }
}

function openModal(modalId) {
  var modal = new bootstrap.Modal(document.getElementById(modalId));
  modal.show();
}

function closeModal(modalId) {
  var modal = new bootstrap.Modal(document.getElementById(modalId));
  modal.hide();
}   





/**
 * Adds change event listeners to all checkboxes with the .form-check-input class. 
 * On change, enables or disables the corresponding table row and slider based on checkbox checked state.
*/
const checkboxes = document.querySelectorAll('.form-check-input');    
checkboxes.forEach((checkbox, index) => {
    // Add an event listener for each checkbox
    checkbox.addEventListener('change', function () {
        // Get the corresponding row
        const row = this.closest('tr');
        // Get the corresponding slider
        const slider = row.querySelector('.noUi-target');

        // Enable or disable the entire row and slider based on the checkbox state
        if (this.checked) {
            row.classList.remove('disabled-row');
            slider.removeAttribute('disabled');
        } else {
            row.classList.add('disabled-row');
            slider.setAttribute('disabled', 'true');
        }
    });
});