// function changeTab(direction) {
//     // Get the currently active tab
//     var activeTab = document.querySelector('.nav-tabs .nav-link.active');

//     // Get the index of the active tab
//     var activeTabIndex = Array.from(activeTab.parentElement.children).indexOf(activeTab);

//     // Calculate the index of the next tab
//     var nextTabIndex = activeTabIndex + direction;

//     // Get the list of all tabs
//     var allTabs = document.querySelectorAll('.nav-tabs .nav-link');

//     // Ensure the nextTabIndex is within bounds
//     if (nextTabIndex >= 0 && nextTabIndex < allTabs.length) {
//         // Display a message based on the direction
//         if (direction === 1) {
//             alert("Moving to the next tab. You can save as draft or continue.");
//         } else if (direction === -1) {
//             alert("Moving to the previous tab.");
//         }

//         // Remove 'active' class from the current tab and corresponding content
//         activeTab.classList.remove('active');
//         document.querySelector(activeTab.getAttribute('data-bs-target')).classList.remove('show', 'active');

//         // Set the next tab as active
//         var nextTab = allTabs[nextTabIndex];
//         nextTab.classList.add('active');

//         // Show the corresponding content for the next tab
//         var nextTabContent = document.querySelector(nextTab.getAttribute('data-bs-target'));
//         nextTabContent.classList.add('show', 'active');
//     }
// }

/**
 * changeTab() handles navigation between tabs in the UI.
 * 
 * It takes a direction parameter that indicates if we should move to the next or previous tab.
 * 
 * It finds the currently active tab, calculates the index of the new tab based on the direction,
 * validates that the new tab index is within bounds, performs any tab-specific actions,
 * updates the active tab classes and visibility to transition between tabs.
 */

// document.addEventListener('DOMContentLoaded', function () {
//     var reviewTab = document.querySelector('[data-bs-target="#review"]');
//     var challengeSubmitButton = document.querySelector('.challengeSubmit');

//     reviewTab.addEventListener('shown.bs.tab', function () {
//       // Check if the "Review" tab is active
//       if (reviewTab.classList.contains('active')) {
//         // If yes, enable the button
//         challengeSubmitButton.disabled = false;
//       } else {
//        console.log('not active');
//         challengeSubmitButton.disabled = true;
//       }
//     });
//   });

/**
 * When the page loads:
 * - Get references to the review tab and submit button
 * - Add click handler to all tab links
 *   - If review tab is active, enable submit button
 *   - Else disable submit button
 */
// document.addEventListener('DOMContentLoaded', function () {
//     var reviewTab = document.querySelector('[data-bs-target="#review"]');
//     //var challengeSubmitButton = document.querySelector('.challengeSubmit');
//     var xheckboxSubmitAppliaction = document.querySelector('.submit-appliaction');

//     document.querySelectorAll('.nav-link').forEach(function (tabLink) {
//         tabLink.addEventListener('click', function () {

//         // Check if the "Review" tab is active
//         if (reviewTab.classList.contains('active')) {
//           // If yes, enable the button
//           //challengeSubmitButton.disabled = false;
//           xheckboxSubmitAppliaction.disabled = false;
          
//         } else {
//           // If not, disable the button
//           //challengeSubmitButton.disabled = true;
//           xheckboxSubmitAppliaction.disabled = true;
//         }
//       });
//     });

//   });




/**
 * Shows a confirmation dialog before submitting a form. 
 * 
 * If the user confirms, redirects to another page and shows a message.
 * If the user cancels, shows a cancellation message.
 */

  function confirmSubmit() {
    // Show a confirmation dialog
    var confirmed = window.confirm('Your Challenge Submitted Successfully');

    if (confirmed) {
      // If the user clicks "OK", you can perform additional actions or submit the form
      window.location.href = "view-list.html";
     
    } else {
      // If the user clicks "Cancel", you can handle that case as needed
      alert('Submission canceled.');
    }
  }



  function SolutionSubmit() {
   //alert('Do you want to Approve this Solution?');
    // Show a confirmation dialog
    var provideSolution = document.getElementById('provideSolution').value.trim();
    var confirmed = window.confirm('Do you want to submit Solution?');

    if (provideSolution === '', confirmed) {
      alert('Comments cannot be blank!');
      // If the user clicks "OK", you can perform additional actions or submit the form
    
      //alert('please wait system is updating your query...');
    } else {
      window.location.href = "view-list.html";
      // If the user clicks "Cancel", you can handle that case as needed
      
    }
  }




/**
 * changeTab handles navigation between tabs in the UI.
 * 
 * It takes a direction parameter that indicates if we should move to the next or previous tab.
 * 
 * It finds the currently active tab, calculates the index of the new tab based on the direction,
 * validates that the new tab index is within bounds, performs any tab-specific actions,
 * and updates the active tab classes and visibility to transition between tabs.
 */
// function changeTab(direction) {
//     $('#challenges-box').show();

//     document.querySelectorAll('.moveToNext').forEach(function (moveBtn) {
//         moveBtn.disabled = true;
//     });
//     //$('.hidden').show();
//     // Get the currently active tab
//     var activeTab = document.querySelector('.nav-tabs .nav-link.active');
    

//     // Get the index of the active tab
//     var activeTabIndex = Array.from(activeTab.parentElement.children).indexOf(activeTab);

//     // Calculate the index of the next tab
//     var nextTabIndex = activeTabIndex + direction;

//     // Get the list of all tabs
//     var allTabs = document.querySelectorAll('.nav-tabs .nav-link');

//     // Ensure the nextTabIndex is within bounds
//     if (nextTabIndex >= 0 && nextTabIndex < allTabs.length) {
//         // Perform actions based on the current step/tab
//         switch (activeTabIndex) {
//             case 0:
//                 // Process or validate data for Tab 1
//                 //alert("Processing data for Tab 1");
//                 break;
//             case 1:
//                 // Process or validate data for Tab 2
//                 //alert("Processing data for Tab 2");
//                 break;
//             // Add more cases for additional tabs as needed
//         }

//         // Remove 'active' class from the current tab and corresponding content
//         activeTab.classList.remove('active');
//         document.querySelector(activeTab.getAttribute('data-bs-target')).classList.remove('show', 'active');

//         // Set the next tab as active
//         var nextTab = allTabs[nextTabIndex];
//         nextTab.classList.add('active');

//         // Show the corresponding content for the next tab
//         var nextTabContent = document.querySelector(nextTab.getAttribute('data-bs-target'));
//         nextTabContent.classList.add('show', 'active');

//         //$('#submitBtn').prop('disabled', true);
//     }
// }



function changeTab(direction) {
     var sumitApplication = document.querySelector('.submit-appliaction');
     sumitApplication.disabled = true;
      var activeTab = document.querySelector('.nav-tabs .nav-link.active');
      var nextTabIndex = Array.from(activeTab.parentElement.children).indexOf(activeTab) + direction;
      var allTabs = document.querySelectorAll('.nav-tabs .nav-link');

      if (nextTabIndex >= 0 && nextTabIndex < allTabs.length) {
        // Add 'visited' class to all previously visited tabs before the active tab
        for (var i = 0; i < nextTabIndex; i++) {
          allTabs[i].classList.add('visited');
        }

        // Perform actions based on the current step/tab
        switch (activeTab.dataset.tabIndex) {
            case '1':
                // Process or validate data for Tab 1
                //alert("Processing data for Tab 1");
                break;
            case '2':
                // Process or validate data for Tab 2
                //alert("Processing data for Tab 2");
                break;
            // Add more cases for additional tabs as needed
        }

        // Remove 'active' class from the current tab and corresponding content
        activeTab.classList.remove('active');
        document.querySelector(activeTab.getAttribute('data-bs-target')).classList.remove('show', 'active');

        // Set the next tab as active
        var nextTab = allTabs[nextTabIndex];
        nextTab.classList.add('active');

        // Show the corresponding content for the next tab
        var nextTabContent = document.querySelector(nextTab.getAttribute('data-bs-target'));
        nextTabContent.classList.add('show', 'active');

            // Check if the next tab is the "Review" tab
        if (nextTab.getAttribute('data-bs-target') === '#review') {
          // Activate the checkbox
          sumitApplication.disabled = false;
      } else {
          // Deactivate the checkbox for other tabs
          sumitApplication.disabled = true;
      }

        //$('#submitBtn').prop('disabled', true);
      }
    }
/**
 * Toggles the expanded/collapsed state of a "Read More" content block.
 * 
 * @param {jQuery} link - The "Read More" link element
 */

function toggleReadMore(link) {
    var clickedContent = $(link).prev(".more");
    var clickedFullText = clickedContent.data("full-text");

    // Toggle the clicked card
    if (clickedContent.hasClass("expanded")) {
        clickedContent.removeClass("expanded");
        clickedContent.css({
            "-webkit-line-clamp": "2",
            "display": "-webkit-box",
        });
        $(link).text("Read More");
    } else {
        clickedContent.addClass("expanded").text(clickedFullText);
        clickedContent.css({
            "-webkit-line-clamp": "initial",
            "display": "block",
        });
        $(link).text("Read Less");

        // Close all other expanded cards
        $(".more.expanded").not(clickedContent).each(function () {
            var otherContent = $(this);
            otherContent.removeClass("expanded");
            otherContent.css({
                "-webkit-line-clamp": "2",
                "display": "-webkit-box",
            });
            otherContent.next(".morelink").text("Read More");
        });
    }
}





// const checkboxsubmitapplication = document.querySelector('.submit-application');
// const challengeSubmitButton = document.querySelectorAll('.challengeSubmit');
// // Function to handle checkbox change
// function submitapplication(sa) {

//   alert('Checkbox state changed');
//   // Check if the checkbox is checked
//   if (sa.checked) {
//     // Enable the submit button
//     challengeSubmitButton.disabled = false;
//   } else {
//     // Disable the submit button
//     challengeSubmitButton.disabled = true;
//   }
// }

// // Add an event listener to the checkbox
// sa.addEventListener('change', submitapplication);


/**
 * Handles enabling/disabling submit buttons based on checkbox state.
 * Gets reference to checkbox and submit buttons. 
 * Defines submitapplication() to handle checkbox change:
 * - Alerts that state changed
 * - If checked, loop through buttons to enable them
 * - If unchecked, loop through to disable them
 * Adds event listener to checkbox to call submitapplication() on change.
 */
const checkboxsubmitapplication = document.querySelector('.submit-application');
const challengeSubmitButtons = document.querySelectorAll('.challengeSubmit');

// Function to handle checkbox change
function submitapplication(sa) {  

  // Check if the checkbox is checked
  if (sa.checked) {
    // Enable each submit button
    challengeSubmitButtons.forEach(button => {
      button.disabled = false;
    });
  } else {
    // Disable each submit button
    challengeSubmitButtons.forEach(button => {
      button.disabled = true;
    });
  }
}

// Add an event listener to the checkbox
checkboxsubmitapplication.addEventListener('change', function () {
  submitapplication(checkboxsubmitapplication);
});
