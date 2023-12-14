// const dropdown1 = document.getElementById('dropdown1');
// const dropdown2Container = document.getElementById('dropdown2Container');
// const dropdown2 = document.getElementById('dropdown2');
// const dropdown3Container = document.getElementById('dropdown3Container');
// const dropdown3 = document.getElementById('dropdown3');
// const goButton = document.getElementById('goButton');

// dropdown1.addEventListener('change', () => {
//   const selectedValue = dropdown1.value;

//   if (selectedValue !== '') {
//     dropdown2Container.style.display = 'block';
//   } else {
//     dropdown2Container.style.display = 'block';
//     dropdown2.value = '';
//     dropdown3Container.style.display = 'block';
//     dropdown3.value = '';
//     //goButton.classList.add('d-none');
//   }
// });

// dropdown2.addEventListener('change', () => {
//   const selectedValue2 = dropdown2.value;

//   if (selectedValue2 !== '') {
//     dropdown3Container.style.display = 'block';
//   } else {
//     dropdown3Container.style.display = 'block';
//     dropdown3.value = '';
//     //goButton.classList.add('d-none');
//   }
// });

// dropdown3.addEventListener('change', () => {
//   const selectedValue3 = dropdown3.value;

//   if (selectedValue3 !== '') {
//     goButton.classList.remove('d-none');
//    goButtonWrapper.style.display = 'block';
//   }
// });

// const dropdown1 = document.getElementById('dropdown1');
// const dropdown2Container = document.getElementById('dropdown2Container');
// const dropdown2 = document.getElementById('dropdown2');
// const dropdown3Container = document.getElementById('dropdown3Container');
// const dropdown3 = document.getElementById('dropdown3');
// const goButton = document.getElementById('goButton');
// const goButtonWrapper = document.getElementById('goButtonWrapper');

// dropdown1.addEventListener('change', () => {
//   const selectedValue = dropdown1.value;

//   if (selectedValue !== '') {
//     dropdown2Container.style.display = 'block';
//     dropdown2.disabled = false;
//   } else {
//     dropdown2Container.style.display = 'none';
//     dropdown2.value = '';
//     dropdown2.disabled = true;
//     dropdown3Container.style.display = 'none';
//     dropdown3.value = '';
//     dropdown3.disabled = true;
//     goButton.classList.add('d-none');
//     goButtonWrapper.style.display = 'none';
//   }
// });

// dropdown2.addEventListener('change', () => {
//   const selectedValue2 = dropdown2.value;

//   if (selectedValue2 !== '') {
//     dropdown3Container.style.display = 'block';
//     dropdown3.disabled = false;
//   } else {
//     dropdown3Container.style.display = 'none';
//     dropdown3.value = '';
//     dropdown3.disabled = true;
//     goButton.classList.add('d-none');
//     goButtonWrapper.style.display = 'none';
//   }
// });

// dropdown3.addEventListener('change', () => {
//   const selectedValue3 = dropdown3.value;

//   if (selectedValue3 !== '') {
//     goButton.classList.remove('d-none');
//     goButtonWrapper.style.display = 'block';
//     dropdown3.disabled = false;
//   } else {
//     goButton.classList.add('d-none');
//     goButtonWrapper.style.display = 'none';
//   }
// });




/**
 * Get DOM elements for the dropdowns and Go button.
 * Add event listeners to handle enabling/disabling dropdowns 
 * and showing/hiding the Go button based on selections.
 */
const dropdown1 = document.getElementById('dropdown1');
const dropdown2Container = document.getElementById('dropdown2Container');
const dropdown2 = document.getElementById('dropdown2');
const dropdown3Container = document.getElementById('dropdown3Container');
const dropdown3 = document.getElementById('dropdown3');
const goButton = document.getElementById('goButton');
const goButtonWrapper = document.getElementById('goButtonWrapper');
const businessScenerio = document.getElementById('business-scenerio');


 function enableGoButton() {
  const selectedValue1 = dropdown1.value;
  const selectedValue2 = dropdown2.value;
  const selectedValue3 = dropdown3.value;
  

  // if (selectedValue1 !== 'dropdown1' && selectedValue2 !== 'dropdown2' && selectedValue3 !== 'dropdown3') {
  //   goButton.disabled = false;
  // } else {
  //   goButton.disabled = true;
  // }
 }

/**********************************************************
 * disableDropdowns disables all dropdowns on the page. * 
 * It first selects all dropdowns using querySelectorAll. 
 * Then it loops through each dropdown and sets the disabled property to true.
 * 
 * This can be used to disable all dropdowns before submitting a form,
 * or when certain conditions are met in the UI.
 ***********************************************************/

 function confirmAndDisable() {
  alert
  let text = "Do you want to generate a business scenario using GEN Ai? It costs to the company.";
  if (confirm(text)) {
    // User clicked "Yes"
    var dropdowns = document.querySelectorAll('.select-dropdown');

    dropdowns.forEach(function (dropdown) {
      dropdown.disabled = true;
    });

    goButton.disabled = true;

    businessScenerio.classList.remove('hidden');
    //otherDiv.classList.add('hidden');
  } else {
    // User clicked "No" or closed the dialog
    businessScenerio.classList.add('hidden');
    //otherDiv.classList.remove('hidden');
  }
}

goButton.addEventListener('click', confirmAndDisable);

dropdown1.addEventListener('change', () => {
  
  const selectedValue = dropdown1.value;  
  if (selectedValue !== '') {
    dropdown2Container.style.display = 'block';
    dropdown2.disabled = false;
  } else {
    dropdown2Container.style.display = 'none';
    dropdown2.value = '';
    dropdown2.disabled = true;
    dropdown3Container.style.display = 'none';
    dropdown3.value = '';
    dropdown3.disabled = true;
    goButton.classList.add('d-none');
    goButtonWrapper.style.display = 'none';
    goButton.disabled = true; // Disable Go button when dropdown1 is cleared
  }

 // enableGoButton();
});

dropdown2.addEventListener('change', () => {
  const selectedValue2 = dropdown2.value;

  if (selectedValue2 !== '') {
    dropdown3Container.style.display = 'block';
    dropdown3.disabled = false;
  } else {
    dropdown3Container.style.display = 'none';
    dropdown3.value = '';
    dropdown3.disabled = true;
    goButton.classList.add('d-none');
    goButtonWrapper.style.display = 'none';
    goButton.disabled = true; // Disable Go button when dropdown2 is cleared
  }

  //enableGoButton();
});

dropdown3.addEventListener('change', () => {
  const selectedValue3 = dropdown3.value;

  if (selectedValue3 !== '') {
    
    goButton.classList.remove('d-none');
    goButtonWrapper.style.display = 'block';
    goButton.disabled = false; //Enable Go button when dropdown3 is cleared
  } else {
    goButton.classList.add('d-none');
    goButtonWrapper.style.display = 'none';
    
  }

 // enableGoButton();
});



/**
 * disableDropdowns disables all dropdowns on the page. * 
 * It first selects all dropdowns using querySelectorAll. 
 * Then it loops through each dropdown and sets the disabled property to true.
 * 
 * This can be used to disable all dropdowns before submitting a form,
 * or when certain conditions are met in the UI.
 */
// function disableDropdowns() {

//   let text = "Do you want to gerate business senario using GEN Ai? it cost to company.";
//   if (confirm(text) == true, text == no) {
//     text = "You pressed Yes!";
//   } else {
//     text = "You NO!";
//   }
//   //document.getElementById("demo").innerHTML = text;
  
 
//   // Get all dropdowns
//   var dropdowns = document.querySelectorAll('.form-select');

//   // Disable each dropdown
//   dropdowns.forEach(function (dropdown) {
//     dropdown.disabled = true;
//   });

//   document.getElementById('goButton').disabled = true;
//   // Optional: You can add logic to perform other actions after disabling dropdowns
//   // For example, hide the "GO" button or perform other operations.
// }

/**
 * Disables all dropdown elements on the page.
 *
 * Prompts user to confirm disabling dropdowns. If confirmed,
 * finds all dropdowns using querySelectorAll and disables them by 
 * setting the disabled property to true.
 * Also disables the submit button with ID 'goButton'.
 */
// const businessScenerio = document.querySelector('.business-scenerio');
// function disableDropdowns() {
//   let text = "Do you want to generate business scenario using GEN Ai? It costs to the company.";
//   if (confirm(text)) {
//     // User clicked "Yes"
//     // Get all dropdowns
//     var dropdowns = document.querySelectorAll('.select-dropdown');
   
//     // Disable each dropdown
//     dropdowns.forEach(function (dropdown) {
//       dropdown.disabled = true;
//     });

//     document.getElementById('goButton').disabled = true;
//     businessScenerio.classList.remove('hidden');
//     console.log(businessScenerio)
//   } else {   
//     console.log('no')
//     businessScenerio.classList.add('hidden');
//     // User clicked "No" or closed the dialog
//     // You can add any additional logic here based on user's response
//   }
// }