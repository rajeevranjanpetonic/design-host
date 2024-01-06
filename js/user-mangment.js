

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

    var newRow = table.insertRow(table.rows.length);
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);
    var cell5 = newRow.insertCell(4);
    var cell6 = newRow.insertCell(5);
    var cell7 = newRow.insertCell(6);

    var firstName = form.elements["firstName"].value;
    var empID = form.elements["empID"].value;
    var lastName = form.elements["lastName"].value;
    var email = form.elements["email"].value;
    var role = form.elements["role"].value;

    cell1.innerHTML = '<input type="checkbox">';
    cell2.innerHTML = empID;
    cell3.innerHTML = firstName;
    cell4.innerHTML = lastName;
    cell5.innerHTML = email;
    cell6.innerHTML = role;

    // Action buttons
    cell7.innerHTML = '<button class="edit-btn" onclick="editUser(this)"><i class="fa fa-edit"></i></button>' +
        '<button class="delete-btn" onclick="deleteUser(this)"><i class="fa fa-trash"></i></button>';

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
function editUser(button) {
    var row = button.parentNode.parentNode;
    var cells = row.getElementsByTagName('td');

    // Populate form with row data for editing
    document.getElementById("firstName").value = cells[1].innerHTML;
    document.getElementById("lastName").value = cells[2].innerHTML;
    document.getElementById("email").value = cells[3].innerHTML;
    document.getElementById("role").value = cells[4].innerHTML;

    // Remove the row
    row.parentNode.removeChild(row);
}

/**
 * Deletes a user row from the user table.
 * Prompts the user for confirmation before deleting.
 * @param {HTMLElement} button - The delete button that was clicked.
 */
function deleteUser(button) {
    var confirmation = confirm("Are you sure you want to delete this user?");
    if (confirmation) {
        var row = button.parentNode.parentNode;
        row.parentNode.removeChild(row);
    }
}