  // Datos de temperatura
  let temperaturas = [
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
  let humedades = [
    60,
    65,
    70,
    75,
    80,
    85,
    90,
    95,
    100
  ];
  let semana=["domingo", "lunes","martes","miercoles", "jueves","viernes","sabado"]
  let medioDia=  ["0","1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"]
  let diaEntero= ["0","1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12","13","14","15","16","17","18","19","20","21","22","23","24"]
  var label = document.querySelector("label[for='check1']");
  // Gráfico de temperatura
  var ctx = document.getElementById("canvas-temperatura").getContext("2d");
  var tempChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: medioDia,
      datasets: [
        {
          label: "Temperatura de 12 hs",
          data: temperaturas,
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
          }
          
          //suggestedMax: 50
        }
      }
    }
  });

  // Gráfico de humedad
  var ctx = document.getElementById("canvas-humedad").getContext("2d");
  var humedadChart = new Chart(ctx, {
    type: "bar",
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

 /*  document.querySelector("#select").addEventListener("change", () => {
    var select = this;
    var option = select.options[select.selectedIndex];

    console.log(option);

    if (option===1 ){
      console.log(option.value);
      tempChart.data.datasets[0].label="temperatura de 12 hs"
    } else if (option===2){
      tempChart.data.datasets[0].label="temperatura de 24 hs"
    } else if (option===3) {
      tempChart.data.labels= semana
      tempChart.data.datasets[0].label="temperatura de la semana"
    }

   /*  if (document.querySelector("#check1").checked) {
      
      tempChart.data.labels= medioDia
      tempChart.data.datasets[0].label="temperatura de 6 hs"
      
      check1.style.backgroundColor = "red";
      label.textContent = "Mediodia";
    } else {
      tempChart.data.labels= semana
      tempChart.data.datasets[0].label="temperatura de la semana"
      
      label.textContent = "semana";
      
    }
    console.log(tempChart.data.labels) */
   // tempChart.update();
   
  //
  document.querySelector("#select").addEventListener("change", function() {
    var select = this;
    var option = select.options[select.selectedIndex];

    // Usamos la opción seleccionada en una función de JavaScript
    console.log(option.value);
    if (option.value==1 ){
      console.log(option.value);
      tempChart.data.labels= medioDia
      tempChart.data.datasets[0].label="Temperatura de 12 hs"
    } else if (option.value==2){
      tempChart.data.labels= diaEntero
      tempChart.data.datasets[0].label="Temperatura de 24 hs"
    } else if (option.value==3) {
      tempChart.data.labels= semana
      tempChart.data.datasets[0].label="Temperatura diaria de la semana"
    }
    tempChart.update()
  });