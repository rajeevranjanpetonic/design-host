document.addEventListener('DOMContentLoaded', function() {
    var table = document.getElementById('approverReview');
    var rows = table.getElementsByTagName('tr');

    for (var i = 0; i < rows.length; i++) {
      rows[i].addEventListener('click', function() {
       
        var row = this;
        var pageUrl = row.getAttribute('data-href');
        if (pageUrl) {
          window.location.href = pageUrl;
        }
      });
    }
  });



  //

  document.addEventListener('DOMContentLoaded', function() {
    var table2 = document.getElementById('contributorSolutions');
    var rows2 = table2.getElementsByTagName('tr');

    for (var i = 0; i < rows2.length; i++) {
      rows2[i].addEventListener('click', function() {        
        var row = this;
        var pageUrl = row.getAttribute('data-href');
        if (pageUrl) {
          window.location.href = pageUrl;
        }
      });
    }
  });

// Setting Parameters
document.body.addEventListener('change', function(event) {
    if (event.target.classList.contains('setting-checkbox')) {
        updateButtonState();
    }
});

function updateButtonState() {
    var atLeastOneChecked = document.querySelectorAll('.setting-checkbox:checked').length > 0;

    document.querySelectorAll('.moveToNext').forEach(function(moveBtn) {
        moveBtn.disabled = !atLeastOneChecked;
    });
}

function manageParameters(action) {
    var table = document.getElementById('addMoreRowsParameters');

    if (action === 'add') {
        var newRow = table.insertRow();
        var cells = [];
        var cellClasses = ['class1', 'enter-value', 'description', 'enter-value', 'enter-value', 'flex-switch-check', 'enter-value'];

        for (var i = 0; i < 7; i++) {
            cells[i] = newRow.insertCell(i);
            cells[i].classList.add(cellClasses[i]);
        }

        cells[0].innerHTML = '<td class="your-custom-class"><input type="text" class="form-control"></td>';
        cells[1].innerHTML = '<td class="your-custom-class"><input type="number" class="form-control cost-value" placeholder="10"></td>';
        cells[2].innerHTML = '<td class="your-custom-class"><textarea class="form-control">Your description here</textarea></td>';
        cells[3].innerHTML = '<td class="your-custom-class"><input type="text" class="form-control" placeholder="10"></td>';
        cells[4].innerHTML = '<td class="your-custom-class"><input type="text" class="form-control" placeholder="10"></td>';
        cells[5].innerHTML = '<td class="your-custom-class"><div class="form-check form-switch"><input class="form-check-input setting-checkbox" type="checkbox" id="flexSwitchCheckChecked" onchange="settingParameters(this);"><label class="form-check-label" for="flexSwitchCheckChecked"></label></div></td>';
        cells[6].innerHTML = '<td class="your-custom-class"><div class="form-group"><input type="number" class="form-control" placeholder="Value" max="100" required=""></div></td>';
    } else if (action === 'delete' && table.rows.length > 1) {
        table.deleteRow(table.rows.length - 1);
        updateButtonState(); // Update button state after deleting row
    }
}

// end Setting Parameters


// Business Scenario Select Relevent Key Factors & its corresponding Q & A

function businessScenariokeyFactors(action) {
    var table = document.getElementById('addKeyFactors');
    
    if (action === 'add') {
        var newRow = table.insertRow();
        var cells = [];
        // Array of custom classes for each cell
        var cellClasses = ['class1', 'key-factor', 'description', 'flex-switch-check'];

        for (var i = 0; i < 4; i++) {
            cells[i] = newRow.insertCell(i);
            cells[i].classList.add(cellClasses[i]); // Add a different custom class to each <td>
        }

        cells[0].innerHTML = '<td class="your-custom-class"><input type="text" class="form-control"></td>';
        cells[1].innerHTML = '<td class="key-factor"><input type="number" class="form-control cost-value" placeholder="Add New Key Facter"></td>';
        cells[2].innerHTML = '<td class="your-custom-class"><textarea class="form-control">   Your description here</textarea></td>';
        cells[3].innerHTML = '<td class="your-custom-class"><div class="form-check form-switch"><input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked"><label class="form-check-label" for="flexSwitchCheckChecked"></label></div></td>';
        cells[4].innerHTML = '<td class="your-custom-class"><div class="form-group"><input type="number" class="form-control" placeholder="Value" max="100" required=""></div></td>';
    } else if (action === 'delete') {       
        if (table.rows.length > 1) {
            table.deleteRow(table.rows.length - 1);
        }
    }
}

// function addRow2() {
//     var newRow = document.getElementById('addKeyFactors').insertRow();
//     var cells = [];
//     // Array of custom classes for each cell
//     var cellClasses = ['class1', 'key-factor', 'description', 'flex-switch-check',];

//     for (var i = 0; i < 4; i++) {
//         cells[i] = newRow.insertCell(i);
//         cells[i].classList.add(cellClasses[i]); // Add a different custom class to each <td>
//     }

//     cells[0].innerHTML = '<td class="your-custom-class"><input type="text" class="form-control"></td>';
//     cells[1].innerHTML = '<td class="key-factor"><input type="number" class="form-control cost-value" placeholder="Add New Key Facter"></td>';
//     cells[2].innerHTML = '<td class="your-custom-class"><textarea class="form-control">   Your description here</textarea></td>';
//     cells[3].innerHTML = '<td class="your-custom-class"><div class="form-check form-switch"><input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked"><label class="form-check-label" for="flexSwitchCheckChecked"></label></div></td>';
//     //cells[4].innerHTML = '<td class="your-custom-class"><div class="form-group"><input type="number" class="form-control" placeholder="Value" max="100" required=""></div></td>';
// }

// function deleteRowKeyFactor() {
//     alert('delete row');
//     var table = document.getElementById('addKeyFactors');
//     if (table.rows.length > 1) {
//         table.deleteRow(table.rows.length - 1);
//     }
// }

// table 3 
function addRow3() {
    var newRow = document.getElementById('reviewParameter').insertRow();
    var cells = [];

    // Array of custom classes for each cell
    var cellClasses = ['class1', 'key-factor', 'description', 'flex-switch-check',];

    for (var i = 0; i < 4; i++) {
        cells[i] = newRow.insertCell(i);
        cells[i].classList.add(cellClasses[i]); // Add a different custom class to each <td>
    }

    cells[0].innerHTML = '<td class="your-custom-class"><input type="text" class="form-control"></td>';
    cells[1].innerHTML = '<td class="key-factor"><input type="number" class="form-control cost-value" placeholder="Add New Parameter"></td>';
    cells[2].innerHTML = '<td class="your-custom-class"><textarea class="form-control"> Your Parameter Description here</textarea></td>';
    cells[3].innerHTML = '<td class="your-custom-class"><div class="form-check form-switch"><input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked"><label class="form-check-label" for="flexSwitchCheckChecked"></label></div></td>';
    //cells[4].innerHTML = '<td class="your-custom-class"><div class="form-group"><input type="number" class="form-control" placeholder="Value" max="100" required=""></div></td>';
}

function deleteParameter() {
    
    var table = document.getElementById('reviewParameter');
    if (table.rows.length > 1) {
        table.deleteRow(table.rows.length - 1);
    }
}



// table add row Financial Impacts


/**
 * Adds a new row to the Financial Impacts table.
 * 
 * Creates a new table row, adds cells with custom classes, 
 * and inserts HTML form elements into each cell.
 * 
 * The form elements allow the user to input data for the new row.
*/
function addRowFinancialImpacts() {
    var newRow = document.getElementById('Financial-Impacts').insertRow();
    var cells = [];

    // Array of custom classes for each cell
    var cellClasses = ['checkbox-group', 'key-factor', 'description', 'enter-value', 'enter-value'];

    for (var i = 0; i < 5; i++) {
        cells[i] = newRow.insertCell(i);
        cells[i].classList.add(cellClasses[i]); // Add a different custom class to each <td>
    }

    cells[0].innerHTML = '<td class="your-custom-class"><div class="form-check"><input class="form-check-input" type="checkbox" id="flexCheckChecked"><label class="form-check-label" for="flexCheckChecked"></label></div></td>';
    cells[1].innerHTML = '<td class="key-factor"><input type="number" class="form-control cost-value" placeholder="Add New Parameter"></td>';
    cells[2].innerHTML = '<td class="your-custom-class"><textarea class="form-control">Add Your Impact Area</textarea></td>';
    cells[3].innerHTML = '<td class="your-custom-class"><div class="form-group"><input type="number" class="form-control" placeholder="Value" max="100" required=""></div></td>';
    cells[4].innerHTML = '<td class="your-custom-class"><div class="form-group"><input type="number" class="form-control" placeholder="Value" max="100" required=""></div></td>';
}

// function deleteRow() {
//     var table = document.getElementById('addMoreRowsParameters');
//     if (table.rows.length > 1) {
//         table.deleteRow(-1);
//     }
// }


// add Row Non Financial Impacts

function addRowNonFinancialImpacts() {
    var newRow = document.getElementById('non-financial-impacts').insertRow();
    var cells = [];

    // Array of custom classes for each cell
    var cellClasses = ['checkbox-group', 'key-factor', 'description', 'enter-value', 'enter-value'];

    for (var i = 0; i < 5; i++) {
        cells[i] = newRow.insertCell(i);
        cells[i].classList.add(cellClasses[i]); // Add a different custom class to each <td>
    }

    cells[0].innerHTML = '<td class="your-custom-class"><div class="form-check"><input class="form-check-input" type="checkbox" id="flexCheckChecked"><label class="form-check-label" for="flexCheckChecked"></label></div></td>';
    cells[1].innerHTML = '<td class="key-factor"><input type="number" class="form-control cost-value" placeholder="Add New Parameter"></td>';
    cells[2].innerHTML = '<td class="your-custom-class"><textarea class="form-control">Add Your Impact Area</textarea></td>';
    cells[3].innerHTML = '<td class="your-custom-class"><div class="form-group"><input type="number" class="form-control" placeholder="Value" max="100" required=""></div></td>';
    cells[4].innerHTML = '<td class="your-custom-class"><div class="form-group"><input type="number" class="form-control" placeholder="Value" max="100" required=""></div></td>';
}

// function deleteRow() {
//     var table = document.getElementById('addMoreRowsParameters');
//     if (table.rows.length > 1) {
//         table.deleteRow(-1);
//     }
// }


// 

function solutionWindow () {   
    var newRow = document.getElementById('solutionList').insertRow();
    var cells = [];
    // Array of custom classes for each cell
    var cellClasses = ['checkbox-group', 'key-factor', 'description', 'enter-value', 'enter-value'];
    for (var i = 0; i < 4; i++) {
        cells[i] = newRow.insertCell(i);
        cells[i].classList.add(cellClasses[i]); // Add a different custom class to each <td>
    }
    cells[0].innerHTML = '<td class="your-custom-class"><input type="text" class="form-control" placeholder="Enter parmeters Name"></td>';
    cells[1].innerHTML = '<td class="key-factor"><input type="text" class="form-control" placeholder="Enter parmeters Description"></td>';
    cells[2].innerHTML = '<td class="your-custom-class"><input type="text" class="form-control" placeholder="Enter Actual Value"></td>';
    cells[3].innerHTML = '<td class="your-custom-class"><input type="text" class="form-control" placeholder="Projected Value"></td>';
   // cells[4].innerHTML = '<td class="your-custom-class"><div class="form-group"><input type="number" class="form-control" placeholder="Value" max="100" required=""></div></td>';
}

function deleteRow() {
    var table = document.getElementById('solutionList');
    if (table.rows.length > 1) {
        table.deleteRow(-1);
    }
}


$(document).on('click', '.clickable', function () {    
  $('#challenges-box').hide(); 
    $(".title-befor-content-load").hide();
    $("#business-scenerio").hide();
    $('#revlent-parmeter').show();
    
  });


/**
 * Disables all elements with class 'moveToNext'.
 * Used to disable next/submit buttons when checkboxes are unchecked.
 */
document.querySelectorAll('.moveToNext').forEach(function (moveBtn) {
    moveBtn.disabled = true;
});
var inputQuestions2 = document.querySelectorAll('.inputQuestions');
const saveChanges2 = document.querySelector('.saveChanges');   
saveChanges2.disabled = true;
function handleCheckboxChange(checkbox, modalId) {
    var modal = new bootstrap.Modal(document.getElementById(modalId));
         // Use a valid selector
    if (checkbox.checked) {
      modal.show();
      document.querySelectorAll('.moveToNext').forEach(function(moveBtn) {
        moveBtn.disabled = true;
      });
      inputQuestions2.forEach(function(inputQuestion) {
        inputQuestion.checked = false;
    });
    saveChanges2.disabled = true;
    } else {
      modal.hide();
      document.querySelectorAll('.moveToNext').forEach(function(moveBtn) {
        moveBtn.disabled = true;
      });
      inputQuestions2.forEach(function(inputQuestion) {
        inputQuestion.checked = false;
    });
    saveChanges2.disabled = false;
    }
  }


  document.querySelectorAll('.moveToNext').forEach(function (moveBtn) {
    moveBtn.disabled = true;
});



// idea genration checkbox checked 
moveBtnTwo = document.querySelector('.moveToNextTab');
  // Function to handle checkbox changes
  function handleCheckboxChangeThree(checkboxthree, modalIdTwo) {
    var modalo = new bootstrap.Modal(document.getElementById(modalIdTwo));
   // var inputQuestions2 = document.querySelectorAll('inputQuestions');
    if (checkboxthree.checked) {
        modalo.show();        
        // Enable 'moveToNext' buttons when a checkbox is checked    
        moveBtnTwo.disabled = true; 
        // inputQuestions2.forEach(function(inputQuestion) {
        //     inputQuestion.checked = true;
        //     alert('inputQuestion');
        // });
    } else {
        modalo.hide(); 
       // Disable 'moveToNext' buttons when a checkbox is unchecked    
        moveBtnTwo.disabled = true; 
        // inputQuestions2.forEach(function(inputQuestion) {
        //     inputQuestion.checked = false;
        // });  
    }
  }
  // Event listeners for checkbox changes
  document.querySelectorAll('.review-parameter').forEach(function (checkboxq, index) {
    const modalIdTwo = 'modal' + index; // Assuming your modals have IDs like 'modal0', 'modal1', etc.
    
    checkboxq.addEventListener('change', function () {
        handleCheckboxChangeThree(this, modalIdTwo);
    });
  });


// document.querySelectorAll('.moveToNextTab').forEach(function (moveBtn) {
//     moveBtn.disabled = true;
// });

// function handleCheckboxChangetwo(checkbox, modalId) {
//     alert('run');
//     var modal1 = new bootstrap.Modal(document.getElementById(modalId));

//     if (checkbox.checked) {
//         alert('checked');
//         modal1.show();
//         document.querySelectorAll('.moveToNextTab').forEach(function (moveBtn) {
//             moveBtn.disabled = false;
//         });
//     } else {
//         modal1.hide();
//         document.querySelectorAll('.moveToNextTab').forEach(function (moveBtn) {
//             moveBtn.disabled = true;
//         });
//     }
// }


 


 // table call base on radio button

  /**
   * Shows the table corresponding to the selected radio button, hiding all other tables.
   * 
   * Gets all radio buttons and tables on the page. 
   * Finds the checked radio button.
   * Hides all tables.
   * Gets the ID of the selected table from the radio button value.
   * Shows the selected table by removing the 'hidden' class.
//   */
// function showSelectedTable() {

//     $('#challenges-box').hide();
//     // Get all radio buttons and tables
//     var ideaRadioButtons = document.querySelectorAll('[type="radio"]');
//     var tables = document.querySelectorAll('challengePram');

//     // Find the selected radio button
//     var selectedRadio = Array.from(ideaRadioButtons).find(radio => radio.checked);

//     if (selectedRadio) {
//       // Hide all tables
//       tables.forEach(challengePram => challengePram.classList.add('hidden'));

//       // Show the selected table
//       var selectedTableId = selectedRadio.value;
//       var selectedTable = document.getElementById(selectedTableId);
//       if (selectedTable) {
//         selectedTable.classList.remove('hidden');

//       }
//     }
//   }

function showSelectedTable() {
    // Hide the element with id 'challenges-box'
    $('#challenges-box').hide();

    // Get all radio buttons and tables
    var ideaRadioButtons = document.querySelectorAll('[type="radio"]');
    var tables = document.querySelectorAll('.challengePram'); // Add a dot before 'challengePram' to select by class

    // Find the selected radio button
    var selectedRadio = Array.from(ideaRadioButtons).find(radio => radio.checked);

    if (selectedRadio) {
        // Hide all tables
       // console.log(tables);
        tables.forEach(challengePram => $(challengePram).show()); // Use jQuery show method

        // Show the selected table
        var selectedTableId = selectedRadio.value;
        var selectedTable = document.getElementById(selectedTableId);

        if (selectedTable) {
            // Use jQuery show method to display the selected table
            $(selectedTable).show();
        }
    }
}



// setting parrameters 


   
/**
 * Enables or disables the move to next buttons based on the checkbox setting.
 * 
 * @param {HTMLInputElement} checkboxsetting - The checkbox input element.
 */

    // function settingParameters(checkboxsetting) { 
    //     if (checkboxsetting.checked) {
    //         document.querySelectorAll('.moveToNext').forEach(function(moveBtn) {
    //             moveBtn.disabled = false;
    //         });
    //     } else {
    //         document.querySelectorAll('.moveToNext').forEach(function(moveBtn) {
    //             moveBtn.disabled = true;
    //         });
    //     }
    // }


     // Add an event listener to a common parent element
    //  document.body.addEventListener('change', function(event) {
    //     if (event.target.classList.contains('setting-checkbox')) {
    //         updateButtonState();
    //     }
    // });

    // function updateButtonState() {
    //     var atLeastOneChecked = document.querySelectorAll('.setting-checkbox:checked').length > 0;

    //     document.querySelectorAll('.moveToNext').forEach(function (moveBtn) {
    //         moveBtn.disabled = !atLeastOneChecked;
    //     });
    // }

        // const nextMoveButtonImpactArea = document.querySelector('nextMoveButton').disabled = true;
        // const financialImpactCheckbox = document.querySelectorAll('financial-impact');
      
        // function impactArea() {
        //     alert("impactArea");
        //   if (financialImpactCheckbox.checked) {
        //     // If checkbox is checked, enable the button
        //     nextMoveButtonImpactArea.disabled = false;
        //   } else {
        //     // If checkbox is unchecked, disable the button
        //     nextMoveButtonImpactArea.disabled = true;
        //   }
        // }
      
        // // Initial check to set the button state based on the checkbox
        // impactArea();
      
        // // Attach the impactArea function to the change event of the checkbox
        // financialImpactCheckbox.addEventListener('change', impactArea);
    
      
        // function impactArea(checkbox) {
        //     alert("impactArea");
        //     const rowId = checkbox.getAttribute('data-rowid');
        //     const nextMoveButton = document.querySelectorAll('nextMoveButton');
        
        //     // Check if at least one checkbox in the row is checked
        //     const atLeastOneChecked = document.querySelectorAll(`[data-rowid="${rowId}"].financial-impact:checked`).length > 0;
        
        //     // Enable or disable the "nextMoveButton" based on the check status
        //     nextMoveButton.disabled = !atLeastOneChecked;
        // }


        //
/**
 * Adds event listeners to enable/disable next move buttons based on checkbox state.
 * 
 * On DOM load:
 * - Get checkboxes for financial and non-financial impacts
 * - Get next move buttons
 * - Add change event listeners to checkboxes that call checkCheckboxStatus
 * - Call checkCheckboxStatus to initialize button state
 * 
 * checkCheckboxStatus:
 * - Check if at least one financial and non-financial checkbox is checked
 * - Enable/disable next move buttons accordingly
*/
document.addEventListener('DOMContentLoaded', function () {
    // Get all checkboxes for both classes
    const nonFinancialCheckboxes = document.querySelectorAll('.check-non-financial-impacts-input');
    const financialCheckboxes = document.querySelectorAll('.financial-impact');

    // Get the move button(s)
    const nextMoveButtons = document.querySelectorAll('.nextMoveButton');

    // Function to check if at least one checkbox from each class is checked
    function checkCheckboxStatus() {
        const isNonFinancialChecked = Array.from(nonFinancialCheckboxes).some(checkbox => checkbox.checked);
        const isFinancialChecked = Array.from(financialCheckboxes).some(checkbox => checkbox.checked);

        // Enable or disable the move button(s) based on the check status
        nextMoveButtons.forEach(button => {
            button.disabled = !(isNonFinancialChecked && isFinancialChecked);
        });
    }

    // Attach change event listener to both classes of checkboxes
    nonFinancialCheckboxes.forEach(checkbox => {
        console.log('checkbox1');
        checkbox.addEventListener('change', checkCheckboxStatus);
    });

    financialCheckboxes.forEach(checkbox => {
        console.log('checkbox2');
        checkbox.addEventListener('change', checkCheckboxStatus);
    });

    // Initial check to set button state on page load
    checkCheckboxStatus();
});




