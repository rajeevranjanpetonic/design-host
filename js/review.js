
// document.addEventListener('DOMContentLoaded', function () {
//     const rows = document.querySelectorAll('.toggle-row');
//     rows.forEach(row => {
//         row.addEventListener('click', function () {
//             this.classList.toggle('row-hidden', !this.classList.contains('row-hidden'));
//         });
//     });
// });

// document.addEventListener('DOMContentLoaded', function () {
//     const rows = document.querySelectorAll('.toggle-row');
//     const hiddenTable = document.querySelector('.row-hidden');

//     rows.forEach(row => {
//         row.addEventListener('click', function () {
//             hiddenTable.classList.toggle('row-hidden');
//         });
//     });
// });

document.addEventListener('DOMContentLoaded', function () {
    const icons = document.querySelectorAll('.plus-icon, .minus-icon');

    icons.forEach(icon => {
      icon.addEventListener('click', function (event) {
        event.stopPropagation(); // Prevents the row click event
        const row = icon.closest('tr');
        const hiddenRow = row.nextElementSibling;

        hiddenRow.classList.toggle('row-hidden');
        const plusIcon = row.querySelector('.plus-icon');
        const minusIcon = row.querySelector('.minus-icon');
        plusIcon.style.display = hiddenRow.classList.contains('row-hidden') ? 'inline-block' : 'none';
        minusIcon.style.display = hiddenRow.classList.contains('row-hidden') ? 'none' : 'inline-block';
      });
    });
  });


  //

/**
 * Add click event listener to editButton to toggle 
 * contenteditable attribute on all section and td elements.
 * On click, loop through all sections and toggle contenteditable 
 * attribute between true/false based on current state.
 */
// document.addEventListener('DOMContentLoaded', function () {
//     const editButton = document.getElementById('editButton');
//     const sections = document.querySelectorAll('section, td, p, span, div, a, h1, h2, h3, h4, h5, h6');

//     editButton.addEventListener('click', function () {
//         alert("editButton");
//         sections.forEach(section => {
//             const isEditable = section.getAttribute('contenteditable') === 'true';
//             section.setAttribute('contenteditable', !isEditable);
//         });
//     });
// });


// document.addEventListener('DOMContentLoaded', function () {
//     const editButton = document.getElementById('editButton');

//     editButton.addEventListener('click', function () {
//       const editableElements = document.querySelectorAll('.editable-section:not(.expanded-row)');

//       editableElements.forEach(element => {
//         const isEditable = element.getAttribute('contenteditable') === 'true';
//         element.setAttribute('contenteditable', !isEditable);
//       });
//     });
//   });

// document.addEventListener('DOMContentLoaded', function () {
//     const editButton = document.getElementById('editButton');
//     const saveButton = document.getElementById('saveButton');

//     editButton.addEventListener('click', function () {
//       const editableSections = document.querySelectorAll('.editable-section');

//       editableSections.forEach(section => {
//         // Check if the section has the class 'expanded-row'
//         if (!section.classList.contains('expanded-row')) {
//           const isEditable = section.getAttribute('contenteditable') === 'true';
//           section.setAttribute('contenteditable', !isEditable);
//         }

//         // Exclude 'td' elements with class 'no-edit' from being editable
//         const noEditCells = section.querySelectorAll('td.no-edit');
//         noEditCells.forEach(cell => {
//           cell.setAttribute('contenteditable', false);
//         });
//       });
//     });
//   });


/**
 * Adds event listeners for the edit and save buttons to make sections of the page editable. 
 * The edit button toggles the contenteditable attribute on sections with class .editable-section. 
 * The save button logs the innerHTML of each editable section.
*/
document.addEventListener('DOMContentLoaded', function () {
    const editButton = document.getElementById('editButton');
    const saveButton = document.getElementById('saveButton');

    editButton.addEventListener('click', function () {
        const editableSections = document.querySelectorAll('.editable-section');

        editableSections.forEach(section => {
            if (!section.classList.contains('expanded-row')) {
                const isEditable = section.getAttribute('contenteditable') === 'true';
                section.setAttribute('contenteditable', !isEditable);
            }
        });

        // Show the Save button and hide the Edit button
        saveButton.style.display = 'inline-block';
        editButton.style.display = 'inline-block';
    });

    saveButton.addEventListener('click', function () {
        const editableSections = document.querySelectorAll('.editable-section');

        editableSections.forEach(section => {
            // Save the content (you can customize this part based on your requirements)
            const content = section.innerHTML;
            console.log('Saved content:', content);
        });

        // Show the Edit button and hide the Save button
        editButton.style.display = 'inline-block';
        saveButton.style.display = 'inline-block';
    });

    saveButton.addEventListener('click', function () {
        const editableSections = document.querySelectorAll('.editable-section');

        editableSections.forEach(section => {
            // Save the content (you can customize this part based on your requirements)
            const content = section.innerHTML;
            console.log('Saved content:', content);
        });

        // Show the Edit button and hide the Save button
        editButton.style.display = 'inline-block';
        saveButton.style.display = 'inline-block';
    });

});