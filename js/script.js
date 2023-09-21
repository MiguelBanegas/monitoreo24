  // Datos de temperatura
  var temperaturas = [
    18,
    20,
    22,
    24,
    26,
    28,
    30,
    32,
    34,
    36
  ];

  // Datos de humedad
  var humedades = [
    60,
    65,
    70,
    75,
    80,
    85,
    90,
    95,
    100,
    105
  ];

  // Gráfico de temperatura
  var ctx = document.getElementById("canvas-temperatura").getContext("2d");
  var chart = new Chart(ctx, {
    type: "line",
    data: {
      labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
      datasets: [
        {
          label: "Temperatura",
          data: temperaturas,
          backgroundColor: "rgba(255, 0, 0, 0.2)",
          borderColor: "red",
          borderWidth: 1
        }
      ]
    },
    options: {
      responsive: false,
      maintainAspectRatio: false,
      title: {
        text: "Gráfico de Temperatura"
      },
      scales: {
        /* yAxes: [
          {
            ticks: {
              beginAtZero: true
            }
          }
        ] */
      }
    }
  });

  // Gráfico de humedad
  var ctx = document.getElementById("canvas-humedad").getContext("2d");
  var chart = new Chart(ctx, {
    type: "line",
    data: {
      labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
      datasets: [
        {
          label: "Humedad",
          data: humedades,
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
       /*  yAxes: [
          {
            ticks: {
              beginAtZero: true
            }
          }
        ] */
      }
    }
  });