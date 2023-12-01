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




const dropdown1 = document.getElementById('dropdown1');
const dropdown2Container = document.getElementById('dropdown2Container');
const dropdown2 = document.getElementById('dropdown2');
const dropdown3Container = document.getElementById('dropdown3Container');
const dropdown3 = document.getElementById('dropdown3');
const goButton = document.getElementById('goButton');
const goButtonWrapper = document.getElementById('goButtonWrapper');

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

dropdown1.addEventListener('change', () => {
  
  const selectedValue = dropdown1.value;
  console.log('abcd');
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


