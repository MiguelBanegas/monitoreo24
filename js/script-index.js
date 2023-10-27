let temperaturas = []
let humedades = []

var ctx = document.getElementById("canvas-temperatura").getContext("2d");
var tempChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10","11","12"],
    datasets: [
      {
        label: "Temperatura",
        data: ["-2", "5", "21", "42", "31", "60", "34", "80", "9", "25","51","91"],
        backgroundColor: "rgba(50, 0, 0, 1)",
        borderColor: "white",
        borderWidth: 3
      }
    ]
  },
  options: {
    responsive: false,
    maintainAspectRatio: true,
    title: {
      text: "Gráfico de Temperatura"
    },
    scales: {
      x: {
        display: true,
        title: {
          display: true,
          text: 'horas'
        }
      },
      y: {
        display: true,
        title: {
          display: true,
          text: 'grados'
        },
        beginAtZero: true,
        suggestedMin: -10, // Valor mínimo en el eje Y
        suggestedMax: 100, // Valor máximo en el eje Y
        
        //suggestedMax: 50
      }
    }
  }
})

var ctx = document.getElementById("canvas-humedad").getContext("2d");
  var humedadChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10","11","12"],
      datasets: [
        {
          label: "Humedad",
          data: ["52", "45", "21", "62", "71", "80", "84", "90", "75", "95","99","92"],
          backgroundColor: "rgba(0, 255, 0, 0.2)",
          borderColor: "green",
          borderWidth: 1
        }
      ]
    },
    options: {
      responsive: false,
      maintainAspectRatio: false,
      title: {
        text: "Gráfico de humedad"
      },
      scales: {
        x: {
            display: true,
            title: {
              display: true,
              text: 'horas'
            }
          },
        y: {
          ticks: {
            beginAtZero: true
          },
          max: 110
        }
      }
    }
  });