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


var paddingSlider = document.getElementById('rangeSlider');

noUiSlider.create(paddingSlider, {
    start: [0, 100],
    tooltips: [false, wNumb({decimals: 1}), true],
    //padding: [10, 15], // Or just 10
    range: {
        'min': 0,
        'max': 100
    }
});

var paddingMin = document.getElementById('slider-padding-value-min');
var paddingMax = document.getElementById('slider-padding-value-max');

paddingSlider.noUiSlider.on('update', function (values, handle) {
    if (handle) {
        paddingMax.innerHTML = values[handle];
    } else {
        paddingMin.innerHTML = values[handle];
    }
});

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
