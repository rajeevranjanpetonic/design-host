$(document).ready(function () {


  // end  script for tab steps
  // script for tab steps

  // end  script for tab steps

  //$('#business-scenerio').hide();

  $('#goButton').click(function () {
    // $('#business-scenerio').show();
    $(".title-befor-content-load").hide();
    //$('#open-business-scenerio').show();
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



$(document).ready(function () {
  $('#challenges-box').show();
  // Handle click on #addCardsBtn
  // $(document).on('click', '#addCardsBtn', function () {
  //   $('#challenges-box').show();
    
  //   for (let i = 0; i < 3; i++) {
  //     var newCard = `
  //             <div class="card idea-box border-left-primary">
  //                 <div class="card-body">
  //                 <div class="card-radio-btn"> <input name="plan" class="radio" type="radio"  onchange="checkAllRadios()"></div>
  //                     <h5 class="card-title clickable" data-card-id="${i + 1}">New Card ${i + 1}</h5>
  //                     <p class="more" data-full-text="This is some content for the new card. It can be a bit longer to demonstrate the 'Read More' functionality.">This is some content for the new card. It can be a bit longer to demonstrate the 'Read More' functionality.</p>
  //                     <a href="#" class="morelink">Read More</a>
  //                 </div>
  //             </div>
  //         `;

  //     // Append the new card to the card container
  //     $("#addMoreKeyFactors, #ideaGeneration").append(newCard).fadeIn();
  //     //$("#ideaGeneration").append(newCard).fadeIn();
  //   }

  //   // Hide the button after adding cards
  //   $(this).hide();
  // });

  
  $(".table-dropdown-menu").hide();
  //       $(".form-check-input").change(function () {
  //           var dropdownId = $(this).closest(".editableTable").find(".table-dropdown-menu").data("dropdown-id");

  //           // Show/hide the dropdown based on checkbox state
  //           if ($(this).is(":checked")) {
  //               $(this).closest(".editableTable").find(".table-dropdown-menu").show();
  //           } else {
  //               $(this).closest(".editableTable").find(".table-dropdown-menu").hide();
  //           }
  //       });

});


/**
 * Checks all radio buttons on the page and enables/disables the submit button accordingly.
 * 
 * Loops through all elements with class 'radio-button', sets allChecked to true.
 * If any radio is not checked, sets allChecked to false.
 * Disables submitBtn if allChecked is false, enables if true.
*/
// Function to check if any radio button is checked
// 

// Disable ask-question-box and questionTextarea by default


//  function checkAllRadios() {
//   var askQuestionBoxes = document.querySelectorAll('.ask-question-box');
//  var questionTextAreas = document.querySelectorAll('.questionTextarea');
//  var submitBtnsOne = document.querySelectorAll('.submitBtn');
//    var radioButtons = document.querySelectorAll('.radio-button');   
//    var anyChecked = false;

//    radioButtons.forEach(function (radio) {
//      if (radio.checked) {
//         anyChecked = true;
//        askQuestionBoxes.disabled = false;
//        questionTextAreas.disabled = false;
//        submitBtnsOne.disabled = false;
//      } else {
//         //askQuestionBoxes.disabled = true;
//         //questionTextAreas.disabled = true;
//         //submitBtnsOne.disabled = true;
//      }
//    });

//    submitBtnsOne.forEach(function (submitBtn) {
//     submitBtn.disabled = !anyChecked;
// });

//    }


// function checkAllRadios() {
//   var askQuestionBoxes = document.querySelectorAll('.ask-question-box');
//   var questionTextAreas = document.querySelectorAll('.questionTextarea');
//   var submitBtns = document.querySelectorAll('.submitBtn');
//   var radioButtons = document.querySelectorAll('.radio-button');
//   var anyChecked = false;

//   radioButtons.forEach(function (radio, index) {
//     if (radio.checked) {
//       anyChecked = true;
//       askQuestionBoxes[index].disabled = false;
//       questionTextAreas[index].disabled = false;
//       submitBtns[index].disabled = false;
//     } else {
//       askQuestionBoxes[index].disabled = true;
//       questionTextAreas[index].disabled = true;
//       // submitBtns[index].disabled = true; // Uncomment if you want to disable submit buttons when no radio is checked
//     }
//   });

//   // Enable or disable all submit buttons based on the check status
//   submitBtns.forEach(function (submitBtn) {
//     submitBtn.disabled = !anyChecked;
//     console.log(submitBtn.disabled);
//   });
// }

// // Add change event listeners to radio buttons
// document.querySelectorAll('.radio-button').forEach(function (radio) {
//   radio.addEventListener('change', checkAllRadios);
// });




// // Initial check when the page loads
// checkAllRadios();

// Your Business Scenario 
function checkAllRadios() {
  var askQuestionBoxes = document.querySelectorAll('.ask-question-box');
  var questionTextAreas = document.querySelectorAll('.questionTextarea');
  var submitBtns = document.querySelectorAll('.submitBtn');
  var radioButtons = document.querySelectorAll('.radio-button');
  var anyChecked = false;

  radioButtons.forEach(function (radio) {
    if (radio.checked) {
      anyChecked = true;
    }
  });

  askQuestionBoxes.forEach(function (box) {
    box.disabled = !anyChecked;
  });

  questionTextAreas.forEach(function (textarea) {
    textarea.disabled = !anyChecked;
  });

  submitBtns.forEach(function (submitBtn) {
    submitBtn.disabled = !anyChecked;
  });
}

// Add change event listeners to radio buttons
document.querySelectorAll('.radio-button').forEach(function (radio) {
  radio.addEventListener('change', checkAllRadios);
});

$(document).on('click', '#addCardsBtn', function () {
  for (let i = 0; i < 3; i++) {
    var newCard = `
      <div class="card idea-box border-left-primary">
        <div class="card-body">
          <div class="card-radio-btn">
            <input name="plan" class="radio radio-button" type="radio" onchange="checkAllRadios()">
          </div>
          <h5 class="card-title clickable" data-card-id="${i + 1}">New Card ${i + 1}</h5>
          <p class="more" data-full-text="This is some content for the new card. It can be a bit longer to demonstrate the 'Read More' functionality.">This is some content for the new card. It can be a bit longer to demonstrate the 'Read More' functionality.</p>
          <a href="#" class="morelink">Read More</a>
        </div>
      </div>
    `;

    // Append the new card to the card container
    $("#addMoreKeyFactors").append(newCard).fadeIn();
  }

  // Hide the button after adding cards
  $(this).hide();

  // Call checkAllRadios to update the state after adding cards
  checkAllRadios();
});



document.addEventListener('DOMContentLoaded', function () {
  var submitBtns = document.querySelectorAll('.submitBtn');
  var revlentParmeter = document.getElementById('revlent-parmeter');
  var businessScenerioTwo = document.getElementById('business-scenerio');
  const saveAsDraft = document.getElementById('save-as-draft');
  saveAsDraft.disabled = true;
  submitBtns.forEach(function (btn) {
    btn.addEventListener('click', function (event) {
     
      revlentParmeter.style.display = 'block';
      saveAsDraft.disabled = false;
      // Hide businessScenerioTwo
      businessScenerioTwo.style.display = 'none';
    });
  });

  // Initial check when the page loads
  checkAllRadios();
});

// idea genration card checked radio button

/**
 * checkAllRadiosIdeaGeneration enables or disables form elements based on radio button state 
 * Gets all ask question boxes, textareas, radio buttons, submit buttons
 * Loops through radio buttons to check state
 * If any radio button is checked:
 * - Enables corresponding ask box, textarea, submit button
 * - Sets anyCheckedTwo flag
 * Loops through submit buttons to enable/disable based on anyCheckedTwo flag
*/

function checkAllRadiosIdeaGeneration() {
  var askQuestionBoxesTwo = document.querySelectorAll('.ask-question-box-two');
  var questionTextAreasTwo = document.querySelectorAll('.question-textarea-two');
  var radioButtonsTwo = document.querySelectorAll('.radio-button-two');
  var submitBtnsTwo = document.querySelectorAll('.submit-btn-two');
  var anyCheckedTwo = false;

  radioButtonsTwo.forEach(function (radioTwo) {
    if (radioTwo.checked) {
      anyCheckedTwo = true;
    }
  });

  // Enable or disable all submit buttons based on the check status
  askQuestionBoxesTwo.forEach(function (askQuestionBox) {
    askQuestionBox.disabled = !anyCheckedTwo;
  });

  questionTextAreasTwo.forEach(function (questionTextArea) {
    questionTextArea.disabled = !anyCheckedTwo;
  });

  submitBtnsTwo.forEach(function (submitBtnTwo) {
    submitBtnTwo.disabled = !anyCheckedTwo;
  });
}

// Add change event listeners to radio buttons
document.querySelectorAll('.radio-button-two').forEach(function (radioTwo) {
  radioTwo.addEventListener('change', checkAllRadiosIdeaGeneration);
});

// Add click event listener to add cards button
$(document).on('click', '#addCardsBtnIdea', function () {
  for (let i = 0; i < 3; i++) {
    var newCard = `
      <div class="card idea-box border-left-primary">
        <div class="card-body">
          <div class="card-radio-btn">
            <input name="plan" class="radio radio-button radio-button-two" type="radio" onchange="checkAllRadiosIdeaGeneration()">
          </div>
          <h5 class="card-title clickable" data-card-id="${i + 1}">New Card ${i + 1}</h5>
          <p class="more" data-full-text="This is some content for the new card. It can be a bit longer to demonstrate the 'Read More' functionality.">This is some content for the new card. It can be a bit longer to demonstrate the 'Read More' functionality.</p>
          <a href="#" class="morelink">Read More</a>
        </div>
      </div>
    `;

    // Append the new card to the card container
    $("#ideaGeneration").append(newCard).fadeIn();
  }

  // Hide the button after adding cards
  $(this).hide();

  // Call checkAllRadiosIdeaGeneration to update the state after adding cards
  checkAllRadiosIdeaGeneration();
});


/**
 * Enables or disables the save changes button based on 
 * whether any checkboxes are checked.
 * 
 * Gets all checkboxes with class 'inputQuestions'.
 * Checks if any are checked using Array.some().
 * If any are checked, enables the save button.
 * If none are checked, disables the save button.
 * user at list slect one question to save
 */
// var x=0;
// function handleCheckboxChangeQuestions() {
//   console.log("X:>",x);
//   var checkboxes = document.querySelectorAll('.inputQuestions');
//   var saveChangesBtn = document.querySelector('.saveChanges');
//   var moveToNextTabBtn = document.querySelector('.moveToNext');
//   var anyChecked = Array.from(checkboxes).some(function (checkbox) {
//     console.log("anyChecked", checkbox.checked,x);
//   Array.from(checkboxes).filter(function (checkbox) {
//     x++;
//     return checkbox.checked;
//   });
// //return number of query selectors selected
//   console.log(anyChecked.length);

//   if (x < 0) {
//     console.log(x);
//     console.log("Not checked");
//     saveChangesBtn.disabled = true;
//     moveToNextTabBtn.disabled = true;
//   } else {
//     console.log(x);
//     console.log(" checked");
//     saveChangesBtn.disabled = false;
//     moveToNextTabBtn.disabled = false;
//   }
// }

// var x = 0;
// function handleCheckboxChangeQuestions() {
//   // Reset x to 0 before checking checkboxes
//   x = 0;  
//   var checkboxes = document.querySelectorAll('.inputQuestions');
//   var saveChangesBtn = document.querySelector('.saveChanges');
//   var moveToNextTabBtn = document.querySelector('.moveToNext');
//   var checkboxSelector = document.querySelectorAll('.checkbox-selector');

//   var anyChecked = Array.from(checkboxes).some(function (checkbox) {
//     return checkbox.checked;
//   });

//   // Set x to the count of checked checkboxes
//   x = Array.from(checkboxes).filter(function (checkbox) {
//     return checkbox.checked;
//   }).length;

//   // Log the value of x
//   console.log("X:>", x);

//   if (x === 0) {
//     console.log("None checked");
//     saveChangesBtn.disabled = true;
//     moveToNextTabBtn.disabled = true;
//     checkboxSelector.disabled = true;

//   } else {
//     console.log("Checked:", x);
//     saveChangesBtn.disabled = false;
//     moveToNextTabBtn.disabled = false;
//     checkboxSelector.disabled = false;
//   }
// }

var checkedCount = 0;
function handleCheckboxChangeQuestions() {
  // Reset x to 0 before checking checkboxes
  checkedCount = 0;
  var checkboxes = document.querySelectorAll('.inputQuestions');
  var saveChangesBtn = document.querySelector('.saveChanges');
  var moveToNextTabBtn = document.querySelector('.moveToNext');
  var checkboxSelector = document.querySelectorAll('.checkbox-selector');

  // Check if any checkbox with class "inputQuestions" is checked
  var anyCheckedInputQuestions = Array.from(checkboxes).some(function (checkbox) {
    return checkbox.checked;
  });

  // Set x to the total count of checked checkboxes
  checkedCount = Array.from(checkboxes).filter(function (checkbox) {
    return checkbox.checked;
  }).length;

  // Log the value of x
  console.log("checkedCount:>", checkedCount);

  //Uncheck checkboxes with class "checkbox-selector" if no checkboxes with class "inputQuestions" are checked
  if (!anyCheckedInputQuestions) {
    checkboxSelector.forEach(function (checkbox) {
      checkbox.checked = false;
    });
    console.log("Uncheck");
  }
  
  // checkboxSelector.forEach(function (checkbox) {
  //   checkbox.checked = !anyCheckedInputQuestions;
  // });

  // Disable or enable buttons based on the total count of checked checkboxes
  saveChangesBtn.disabled = checkedCount === 0;
  moveToNextTabBtn.disabled = checkedCount === 0;
  //checkboxSelector.disabled = x === 0;
}


// idea genration tab model checkbox change  enent  
var reviewcheckedCount = 0;
function reviewTheParameterChangeQuestions() {  
  // Reset x to 0 before checking checkboxes
  reviewcheckedCount = 0;
  var checkboxes = document.querySelectorAll('.reviewcheckboxes');
  var saveChangesBtnReview = document.getElementById('saveChangesParameter');
  var moveToNextTabBtnReview = document.querySelector('.moveToNextTab');
  var checkboxSelector2 = document.querySelectorAll('.review-parameter');

  // Check if any checkbox with class "inputQuestions" is checked
  var anyCheckedInputQuestionsTwo = Array.from(checkboxes).some(function (checkbox) {
    return checkbox.checked;
  });

  // Set x to the total count of checked checkboxes
  reviewcheckedCount = Array.from(checkboxes).filter(function (checkbox) {
    return checkbox.checked;
  }).length;

  // Log the value of x
  console.log("reviewcheckedCount:>", reviewcheckedCount);

  //Uncheck checkboxes with class "checkbox-selector" if no checkboxes with class "inputQuestions" are checked
  if (!anyCheckedInputQuestionsTwo) {
    checkboxSelector2.forEach(function (checkbox) {
      checkbox.checked = false;
    });
    console.log("Uncheck");
  }

  checkboxSelector2.forEach(function (checkbox) {
    checkbox.checked = false;
  });

  // Disable or enable buttons based on the total count of checked checkboxes
  saveChangesBtnReview.disabled = reviewcheckedCount === 0;
  moveToNextTabBtnReview.disabled = reviewcheckedCount === 0;
  //checkboxSelector2.disabled = x === 0;
}


