function reject() {
    // Enable the Submit button
    document.getElementById('submitButton').removeAttribute('disabled');
    
    // Display the rejection alert message
    alert('Successfully rejected');
  }

  function approved() {
    // Enable the Submit button
    document.getElementById('submitButton').removeAttribute('disabled');
    
    // Display the approval alert message
    alert('Successfully approved');
  }

  function submitForm() {
    console.log('Submitting form...');
    document.getElementById('approvalForm').submit();
}


function openApprovalModal(action) {
    // Set the modal title based on the action (approve/reject)
    var modalTitle = (action === 'approve') ? 'Approve Project' : 'Reject Project';
    $('#approvalModalLabel').text(modalTitle);

    // Open the Bootstrap modal
    $('#approvalModal').modal('show');
  }

  function submitApproval() {
    // Get the comment from the textarea
    var comment = document.getElementById('comment').value;

    // Add your logic to handle the approval/rejection and comment submission here
    // For now, we'll just log the action and comment to the console
    var action = $('#approvalModalLabel').text().toLowerCase();
    console.log(action + ' Comment:', comment);

    // Close the Bootstrap modal
    $('#approvalModal').modal('hide');
  }




// function submitViewList(){
// window.location.href = "view-list-all.html";

// }

/**
 * Validates the comments textarea and redirects to the view list page if valid.
 * Displays an alert if comments textarea is blank.
 */
function submitViewList() {  
  var commentsValue = document.getElementById('comments').value.trim();
  if (commentsValue === '') {
    // Show an alert if either is blank
    alert('User text and comments cannot be blank!');
  } else {
    // Close the modal
    $('#rejectModal').modal('hide');
    // Redirect to "view-list-all.html" or perform other actions
    window.location.href = "view-list-all.html";
    // You can add more logic here or redirect to another page
  }
}