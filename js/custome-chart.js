
const pValues = ["Italy", "France"];
const ptValues = [55, 49, 44, 24, 15];
const barBgColors = [
  "#b91d47",
  "#00aba9",
  "#2b5797",
  "#e8c3b9",
  "#1e7145"
];

new Chart("myChart", {
  type: "pie",
  data: {
    labels: pValues,
    datasets: [{
      backgroundColor: barBgColors,
      data: ptValues
    }]
  },
  options: {
    title: {
      display: true,
      //text: "World Wide Wine Production 2018"
    }
  }
});

// returning customer

const rCxValues = [100,200,300,400,500];

new Chart("returningCustomer", {
  type: "line",
  data: {
    labels: rCxValues,
    datasets: [{ 
      data: [860,1140,1060,1060,1070],
      borderColor: "#6f7bd9",
      fill: false
    }, { 
      data: [1600,1700,1700,1900,2000],
      borderColor: "#0ab339",
      fill: false
    }, { 
      data: [300,700,2000,5000,6000],
      borderColor: "blue",
      fill: false
    }]
  },
  options: {
    legend: {display: false}
  }
});

// chart 2


const rCxValues2 = [100,200,300,400,500];

new Chart("returningCustomerv2", {
  type: "line",
  data: {
    labels: rCxValues2,
    datasets: [{ 
      data: [860,1140,1060,1060,1070],
      borderColor: "#6f7bd9",
      fill: false
    }, { 
      data: [1600,1700,1700,1900,2000],
      borderColor: "#0ab339",
      fill: false
    }, { 
      data: [300,700,2000,5000,6000],
      borderColor: "blue",
      fill: false
    }]
  },
  options: {
    legend: {display: false}
  }
});


// line chart 2

const xValues2 = ["July", "Auj", "Sep", "Oct", "Nov"];
const yValues2 = [10000, 20000, 30000, 40000, 50000];
const barColors2 = ["red", "green", "blue", "orange", "brown"];

new Chart("lineChart2", {
    type: "bar",
    data: {
        labels: xValues2,
        datasets: [{
            backgroundColor: barColors2,
            data: yValues2
        }]
    },
    options: {
        legend: { display: false },
        title: {
            display: true,
            text: "Actual Growth in 2023"
        }
    }
});

// line stack 

const scatterPlots = [
  {x:50, y:7},
  {x:60, y:8},
  {x:70, y:8},
  {x:80, y:9},
  {x:90, y:9},
  {x:100, y:9},
  {x:110, y:10},
  {x:120, y:11},
  {x:130, y:14},
  {x:140, y:14},
  {x:150, y:15}
];

new Chart("scatterPlots", {
  type: "scatter",
  data: {
    datasets: [{
      pointRadius: 4,
      pointBackgroundColor: "rgb(0,0,255)",
      data: scatterPlots
    }]
  },
  options: {
    legend: {display: false},
    scales: {
      xAxes: [{ticks: {min: 40, max:160}}],
      yAxes: [{ticks: {min: 6, max:16}}],
    }
  }
});

// pie chart

 
var data = {
  labels: ['InDraft', 'Created', 'In progress', 'Solution Provided', 'Under Review', 'Rejected', 'Approved'],
  datasets: [{
      data: [65, 65, 59, 80, 81, 56, 55],
      backgroundColor: [
          'rgba(108, 117, 125, 1)',
          'rgba(17, 29, 205, 1)',
          'rgba(12, 186, 99, 1)',
          'rgba(37, 151, 174, 1)',
          'rgba(255, 202, 44, 1)',
          'rgba(255, 0, 0, 1)', // corrected RGBA value
          'rgba(25, 135, 84, 1)', // corrected RGBA value
      ],
  }]
};

// Configuration options
var options = {
  responsive: true,
  maintainAspectRatio: false,
  rotation: -0.7 * Math.PI, // Adjust the rotation angle as per your needs
  circumference: 2 * Math.PI, // Adjust the circumference as per your needs
  legend: {
      display: true,
      position: 'bottom' // You can change the position of the legend as well
  }
};

// Get the canvas element
var ctx = document.getElementById('PieChart').getContext('2d');

// Create a new pie chart
var myPieChart = new Chart(ctx, {
  type: 'pie',
  data: data,
  options: options
});
