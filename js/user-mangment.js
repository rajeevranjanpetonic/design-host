

/**
 * Adds a new user row to the user table. 
 * Gets values from the add user form to populate the new row.
 * Inserts the new row at the end of the table body.
 * Adds action buttons for editing and deleting the new user.
 * Clears the form fields after inserting the new row.
*/
function addUser() {
    var table = document.getElementById("userTable").getElementsByTagName('tbody')[0];
    var form = document.getElementById("addUserForm");
   // var celld = [];
    var cellClasses = ['class1', 'enter-value', 'description', 'enter-value', 'enter-value', 'flex-switch-check', 'dropdown-list'];
    var newRow = table.insertRow(table.rows.length);

    // Assuming cellClasses length is the same as the number of cells you are inserting
    for (var i = 0; i < cellClasses.length; i++) {
        var cell = newRow.insertCell(i);
        cell.classList.add(cellClasses[i]);
        if (i === 5) {
            cell.classList.add('custom-class');
        } else {
            cell.classList.add(cellClasses[i]);
        }
    }

    var firstName = form.elements["firstName"].value;
    var empID = form.elements["empID"].value;
    var lastName = form.elements["lastName"].value;
    var email = form.elements["email"].value;
    var role = form.elements["role"].value;

    if (!firstName || !lastName || !email || !role) {
        alert("Please fill in all required fields.");
        return;
    }

    newRow.cells[0].innerHTML = empID;
    newRow.cells[1].innerHTML = firstName;
    newRow.cells[2].innerHTML = lastName;
    newRow.cells[3].innerHTML = email;
    newRow.cells[4].innerHTML = role;
    newRow.cells[5].innerHTML = '<div class="form-check form-switch"> <input class="form-check-input status-checkbox" type="checkbox" id="flexSwitchCheckChecked"></div>';

    // Action buttons
    newRow.cells[6].innerHTML = '<div class="dropdown"><div class="btn-link" data-bs-toggle="dropdown" aria-expanded="false"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12.4999" cy="3.5" r="2.5" fill="#A5A5A5"></circle><circle cx="12.4999" cy="11.5" r="2.5" fill="#A5A5A5"></circle><circle cx="12.4999" cy="19.5" r="2.5" fill="#A5A5A5"></circle></svg></div><div class="dropdown-menu dropdown-menu-right" style="margin: 0px;"><a class="dropdown-item" href="javascript:void(0)">Save</a><a class="dropdown-item" href="javascript:void(0)">Edit</a></div></div>';

    // Clear the form fields
    form.reset();
}

/**
 * Edits a user row in the user table.
 * Populates the add/edit user form with data from the row to edit.
 * Removes the row from the table after populating the form.
 * 
 * @param {HTMLElement} button - The edit button that was clicked.
 */
// function editUser(button) {
//     var row = button.parentNode.parentNode;
//     var cells = row.getElementsByTagName('td');

//     // Populate form with row data for editing
//     document.getElementById("firstName").value = cells[1].innerHTML;
//     document.getElementById("lastName").value = cells[2].innerHTML;
//     document.getElementById("email").value = cells[3].innerHTML;
//     document.getElementById("role").value = cells[4].innerHTML;

//     // Remove the row
//     row.parentNode.removeChild(row);
// }

/**
 * Deletes a user row from the user table.
 * Prompts the user for confirmation before deleting.
 * @param {HTMLElement} button - The delete button that was clicked.
 */
// function deleteUser(button) {
//     var confirmation = confirm("Are you sure you want to delete this user?");
//     if (confirmation) {
//         var row = button.parentNode.parentNode;
//         row.parentNode.removeChild(row);
//     }
// }