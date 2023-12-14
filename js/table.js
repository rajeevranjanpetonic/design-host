// add more row under Setting Parameters
                                    

function addRow() {
    var newRow = document.getElementById('addMoreRowsParameters').insertRow();
    var cells = [];

    // Array of custom classes for each cell
    var cellClasses = ['class1', 'enter-value', 'description', 'flex-switch-check', 'enter-value'];

    for (var i = 0; i < 5; i++) {
        cells[i] = newRow.insertCell(i);
        cells[i].classList.add(cellClasses[i]); // Add a different custom class to each <td>
    }

    cells[0].innerHTML = '<td class="your-custom-class"><input type="text" class="form-control"></td>';
    cells[1].innerHTML = '<td class="your-custom-class"><input type="number" class="form-control cost-value" placeholder="10"></td>';
    cells[2].innerHTML = '<td class="your-custom-class"><textarea class="form-control">Your description here</textarea></td>';
    cells[3].innerHTML = '<td class="your-custom-class"><div class="form-check form-switch"><input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" onchange="settingParameters(this);"><label class="form-check-label" for="flexSwitchCheckChecked"></label></div></td>';
    cells[4].innerHTML = '<td class="your-custom-class"><div class="form-group"><input type="number" class="form-control" placeholder="Value" max="100" required=""></div></td>';
}


// table 2

function addRow2() {
    var newRow = document.getElementById('addKeyFactors').insertRow();
    var cells = [];

    // Array of custom classes for each cell
    var cellClasses = ['class1', 'key-factor', 'description', 'flex-switch-check',];

    for (var i = 0; i < 4; i++) {
        cells[i] = newRow.insertCell(i);
        cells[i].classList.add(cellClasses[i]); // Add a different custom class to each <td>
    }

    cells[0].innerHTML = '<td class="your-custom-class"><input type="text" class="form-control"></td>';
    cells[1].innerHTML = '<td class="key-factor"><input type="number" class="form-control cost-value" placeholder="Add New Key Facter"></td>';
    cells[2].innerHTML = '<td class="your-custom-class"><textarea class="form-control">   Your description here</textarea></td>';
    cells[3].innerHTML = '<td class="your-custom-class"><div class="form-check form-switch"><input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked"><label class="form-check-label" for="flexSwitchCheckChecked"></label></div></td>';
    //cells[4].innerHTML = '<td class="your-custom-class"><div class="form-group"><input type="number" class="form-control" placeholder="Value" max="100" required=""></div></td>';
}

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

$(document).on('click', '.clickable', function () {   
   // $('#challenges-box').hide();
    // Hide all table data
    //$(".table-data").hide();
  
    // Get the target ID from the data attribute
    // var targetId = $(this).data("target");
    // $("#" + targetId).show();
   // $(".idea-box").hide();
  $('#challenges-box').hide(); 
    $(".title-befor-content-load").hide();
    $("#business-scenerio").hide();
    $('#revlent-parmeter').show();
 
    
  });



//   /**
//    * Shows or hides a modal based on the state of a checkbox.
//    * 
//    * When the checkbox is checked, shows the modal. 
//    * When unchecked, hides the modal.
//    * 
//    * @param {HTMLInputElement} checkbox - The checkbox input element 
//    * @param {BootstrapModal} modal - The modal instance
//   */
//     function handleCheckboxChange() {
//     // Get the checkbox element
//     var checkbox = document.getElementById('flexSwitchCheck1');
//     // Get the modal element
//     var modal = new bootstrap.Modal(document.getElementById('relevantQuestions'));

//     // If the checkbox is checked, show the modal; otherwise, hide it
//     if (checkbox.checked) {
//         modal.show();
//     } else {
//       modal.hide();
//     }
//   }


 /**
   * Shows or hides a modal based on the state of a checkbox.
   * 
   * When the checkbox is checked, shows the modal. 
   * When unchecked, hides the modal.
   * 
   * @param {HTMLInputElement} checkbox - The checkbox input element 
   * @param {string} modalId - The ID of the modal
   */
//  document.querySelectorAll('.moveToNext').disabled = true;
//  function handleCheckboxChange(checkbox, modalId) {
   
//     // Get the modal element
//     var modal = new bootstrap.Modal(document.getElementById(modalId));

//     // If the checkbox is checked, show the modal; otherwise, hide it
//     if (checkbox.checked) {
//       modal.show();
//       document.querySelector('.moveToNext').disabled = false;    
//     } else {
//       modal.hide();
//       document.querySelector('.moveToNext').disabled = true;     
     
//     }
//   }


/**
 * Disables all elements with class 'moveToNext'.
 * Used to disable next/submit buttons when checkboxes are unchecked.
 */
document.querySelectorAll('.moveToNext').forEach(function (moveBtn) {
    moveBtn.disabled = true;
});

function handleCheckboxChange(checkbox, modalId) {
    var modal = new bootstrap.Modal(document.getElementById(modalId));

    if (checkbox.checked) {
      modal.show();
      document.querySelectorAll('.moveToNext').forEach(function(moveBtn) {
        moveBtn.disabled = false;
      });
    } else {
      modal.hide();
      document.querySelectorAll('.moveToNext').forEach(function(moveBtn) {
        moveBtn.disabled = true;
      });
    }
  }



 

//


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
        console.log(tables);
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

    function settingParameters(checkboxsetting) {
        alert("settingParameters");

        if (checkboxsetting.checked) {
            document.querySelectorAll('.moveToNext').forEach(function(moveBtn) {
                moveBtn.disabled = false;
            });
        } else {
            document.querySelectorAll('.moveToNext').forEach(function(moveBtn) {
                moveBtn.disabled = true;
            });
        }
    }

 
      
    
       
      
    document.addEventListener("DOMContentLoaded", function () {
        const yourButton = document.querySelector('.nextMoveButton');
        // Disable the button by default
        yourButton.disabled = true;
      
        function impactArea(checkboxfinance) {
          alert("settingParameters");
      
          // Check if checkboxfinance is defined
          if (checkboxfinance && checkboxfinance.checked === true) {
            // If checkbox is checked, enable the button
            yourButton.disabled = false;
          } else {
            // If checkbox is unchecked or undefined, disable the button
            yourButton.disabled = true;
          }
        }
      
        // Attach the impactArea function to the change event of the checkbox
        const checkboxfinance = document.getElementById('flexCheckChecked');
        if (checkboxfinance) {
          checkboxfinance.addEventListener('change', function () {
            impactArea(checkboxfinance);
          });
        }
      });
      
        
      
        
       