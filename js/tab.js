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

function changeTab(direction) {
    $('#challenges-box').show();

    document.querySelectorAll('.moveToNext').forEach(function(moveBtn) {
        moveBtn.disabled = true;
      });
    //$('.hidden').show();
    // Get the currently active tab
    var activeTab = document.querySelector('.nav-tabs .nav-link.active');

    // Get the index of the active tab
    var activeTabIndex = Array.from(activeTab.parentElement.children).indexOf(activeTab);

    // Calculate the index of the next tab
    var nextTabIndex = activeTabIndex + direction;

    // Get the list of all tabs
    var allTabs = document.querySelectorAll('.nav-tabs .nav-link');

    // Ensure the nextTabIndex is within bounds
    if (nextTabIndex >= 0 && nextTabIndex < allTabs.length) {
        // Perform actions based on the current step/tab
        switch (activeTabIndex) {
            case 0:
                // Process or validate data for Tab 1
                //alert("Processing data for Tab 1");
                break;
            case 1:
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

        //$('#submitBtn').prop('disabled', true);
    }
}

//read less read more

// function toggleReadMore(link) {
//     var content = link.previousElementSibling;
//     var fullText = content.getAttribute("data-full-text");

//     if (content.style.display === "none" || content.style.display === "") {
//         content.innerText = fullText;
//         link.innerText = "Read Less";
//     } else {
//         content.innerText = fullText.substring(0, 100) + "...";
//         link.innerText = "Read More";
//     }

//     content.style.display = (content.style.display === "none" || content.style.display === "") ? "block" : "none";
// }

// function toggleReadMore(link) {
//     var content = $(link).prev(".more");
//     var fullText = content.data("full-text");

//     if (content.hasClass("expanded")) {
//         content.removeClass("expanded");
//         content.css({
//             "-webkit-line-clamp": "2", // Number of lines to show
//             "display": "-webkit-box",
//         });
//         $(link).text("Read More");
//     } else {
//         content.addClass("expanded").text(fullText);
//         content.css({
//             "-webkit-line-clamp": "initial",
//             "display": "block",
//         });
//         $(link).text("Read Less");
//     }
// }

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
//2 radio buttons
    // var radioButtons = document.querySelectorAll('.radio-button');


