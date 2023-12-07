// const allRanges = document.querySelectorAll(".range-wrap");
// allRanges.forEach(wrap => {
//   const range = wrap.querySelector(".range");
//   const bubble = wrap.querySelector(".bubble");

//   range.addEventListener("input", () => {
//     setBubble(range, bubble);
//   });
//   setBubble(range, bubble);
// });

// function setBubble(range, bubble) {
//   const val = range.value;
//   const min = range.min ? range.min : 0;
//   const max = range.max ? range.max : 100;
//   const newVal = Number(((val - min) * 100) / (max - min));
//   bubble.innerHTML = val;

//   // Sorta magic numbers based on size of the native UI thumb
//   bubble.style.left = `calc(${newVal}% + (${8 - newVal * 0.15}px))`;
// }


// document.addEventListener('DOMContentLoaded', function () {
//   const slider = document.getElementById('dual-slider');
//   const values = document.querySelectorAll('span[id^="value"]');

//   // Set initial values
//   values.forEach((value, index) => {
//       value.textContent = slider.value.split(',')[index];
//   });

//   slider.addEventListener('input', function () {
//       const sliderValues = this.value.split(',');
//       values.forEach((value, index) => {
//           value.textContent = sliderValues[index];
//       });
//   });
// });

// document.addEventListener('DOMContentLoaded', function () {
//   var slider = document.getElementById('rangeSlider');

//   noUiSlider.create(slider, {
//       start: [25, 75],
//       connect: true,
//       range: {
//           'min': 0,
//           'max': 100
//       }
//   });

//   var values = [document.getElementById('value1'), document.getElementById('value2')];

//   slider.noUiSlider.on('update', function (values) {
//       values.forEach(function (value, index) {
//           values[index].textContent = 'Value ' + (index + 1) + ': ' + value;
//       });
//   });
// });


// var paddingSlider = document.getElementById('rangeSlider');
// var tooltips = [true, true]; 

// noUiSlider.create(paddingSlider, {
//     start: [0, 100],
//     connect: true,
//         tooltips: tooltips,
//         hover: true,
//     //tooltips: [false, wNumb({decimals: 1}), true],
//     //padding: [10, 15], // Or just 10
//     range: {
//         'min': 0,
//         'max': 100
//     }
// });

// document.addEventListener('DOMContentLoaded', function () {
//   var slider = document.getElementById('rangeSlider');
//   var tooltips = [true, true]; // Show tooltips for both handles

//   noUiSlider.create(slider, {
//       start: [25, 75],
//       connect: true,
//       tooltips: tooltips,
//       range: {
//           'min': 0,
//           'max': 100
//       }
//   });

  
// });

// document.addEventListener('DOMContentLoaded', function () {
//   var slider = document.getElementById('rangeSlider');

//   noUiSlider.create(slider, {
//       start: [25, 75],
//       connect: true,
//       range: {
//           'min': 0,
//           'max': 100
//       },
//       format: {
//           to: function (value) {
//               return Math.round(value);
//           },
//           from: function (value) {
//               return value;
//           }
//       },
//       tooltips: [true, true],
//   });

//   var handles = slider.getElementsByClassName('noUi-handle');

//   handles[0].addEventListener('mouseenter', function () {
//       var tooltip = this.nextElementSibling; // Get the associated tooltip
//       tooltip.style.display = 'block';
//   });

//   handles[0].addEventListener('mouseleave', function () {
//       var tooltip = this.nextElementSibling; // Get the associated tooltip
//       tooltip.style.display = 'none';
//   });

//   handles[1].addEventListener('mouseenter', function () {
//       var tooltip = this.nextElementSibling; // Get the associated tooltip
//       tooltip.style.display = 'block';
//   });

//   handles[1].addEventListener('mouseleave', function () {
//       var tooltip = this.nextElementSibling; // Get the associated tooltip
//       tooltip.style.display = 'none';
//   });
// });


// document.addEventListener('DOMContentLoaded', function () {
//   var slider = document.getElementById('rangeSlider');

//   noUiSlider.create(slider, {
//       start: [25, 75],
//       connect: true,
//       range: {
//           'min': 0,
//           'max': 100
//       },
//       format: {
//           to: function (value) {
//               return Math.round(value);
//           },
//           from: function (value) {
//               return value;
//           }
//       },
//       tooltips: [true, true], // Show tooltip only for the second handle
//   });

//   var handles = slider.getElementsByClassName('noUi-handle');
//   var tooltips = slider.getElementsByClassName('noUi-tooltip');

//   handles[0].addEventListener('mouseenter', function () {
//     tooltips[0].style.display = 'block';
//     tooltips[1].style.display = 'block';
//   });

//   handles[0].addEventListener('mouseleave', function () {
//       tooltips[0].style.display = 'none';
//       tooltips[1].style.display = 'none';
//   });

//   handles[1].addEventListener('mouseenter', function () {
//       tooltips[0].style.display = 'block';
//       tooltips[1].style.display = 'block';
//   });

//   handles[1].addEventListener('mouseleave', function () {
//     tooltips[0].style.display = 'none';
//     tooltips[1].style.display = 'none';
//   });
// });



// var paddingMin = document.getElementById('slider-padding-value-min');
// var paddingMax = document.getElementById('slider-padding-value-max');

// paddingSlider.noUiSlider.on('update', function (values, handle) {
//     if (handle) {
//         paddingMax.innerHTML = values[handle];
//     } else {
//         paddingMin.innerHTML = values[handle];
//     }
// });

// vdocument.addEventListener('DOMContentLoaded', function () {
//   var slider = document.getElementById('rangeSlider');

//   noUiSlider.create(slider, {
//       start: [25, 75],
//       connect: true,
//       range: {
//           'min': 0,
//           'max': 100
//       }
//   });
// });

// demo2

document.addEventListener('DOMContentLoaded', function () {
  var numberOfSliders = 10; // Change this to the number of sliders you want

  for (var i = 1; i <= numberOfSliders; i++) {
      createSlider('rangeSlider' + i);
  }

  function createSlider(sliderId) {
      var slider = document.getElementById(sliderId);

      noUiSlider.create(slider, {
          start: [25, 75],
          connect: true,
          range: {
              'min': 0,
              'max': 100
          },
          format: {
              to: function (value) {
                  return Math.round(value);
              },
              from: function (value) {
                  return value;
              }
          },
          tooltips: [true, true], // Show tooltip only for the second handle
      });

      var handles = slider.getElementsByClassName('noUi-handle');
      var tooltips = slider.getElementsByClassName('noUi-tooltip');

      handles[0].addEventListener('mouseenter', function () {
        tooltips[0].style.display = 'block';
        tooltips[1].style.display = 'block';
      });

      handles[0].addEventListener('mouseleave', function () {
          tooltips[0].style.display = 'none';
          tooltips[1].style.display = 'none';
      });

      handles[1].addEventListener('mouseenter', function () {
        tooltips[0].style.display = 'block';
        tooltips[1].style.display = 'block';
      });

      handles[1].addEventListener('mouseleave', function () {
          tooltips[0].style.display = 'none';
          tooltips[1].style.display = 'none';
      });
  }
});

