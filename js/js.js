const labels = [
  'Uno',
  'Dos',
  'Tres',
  'Cuatro',
  'Cinco',
  'Seis',
  'Siete',
  'Ochoo',
  'Nueve',
  'Diez'
];
const datasets = [{
  label: 'Diagrama',
  backgroundColor: 'rgb(0, 51, 255)',
  borderColor: 'rgb(0, 255, 4)',
  data: [0, 10, 5, 2, 20, 30, 45, 45, 45, 45, 45],
}];

var myLineChart;

const data = {
  labels: labels,
  datasets: datasets
};

let config = {
  type: 'line',
  data: data,
  options: {}
};

myLineChart = new Chart(
  document.getElementById('myChart'),
  config
);

let btn_rango = document.querySelectorAll("input");

var datos = [0, 10, 5, 2, 20, 30, 45, 45, 45, 45, 45];

for (var i = 0; i < btn_rango.length; i++) {
  btn_rango[i].value = datos[i];
}

for (var i = 0; i < btn_rango.length; i++) {

  btn_rango[i].addEventListener("change",
    function() {
      let indice;
      for (var j = 0; j < btn_rango.length; j++) {
        if (this == btn_rango[j]) {
          indice = j;
        }
      }

      myLineChart.data.datasets[0].data[indice] = this.value; // Would update the first dataset's value of 'March' to be 50
      //console.log(myLineChart.data.datasets[0].data[indice])
      //console.log(myLineChart.data.datasets[0].data[1])
      myLineChart.update();
      
    });
}
document.querySelector("#check1").addEventListener("change", () => {
    
  if (document.querySelector("#check1").checked) {
    //myLineChart.options.title.text= "cambiado"
    //myLineChart.config.type="bar"
    
    
  } else {
    //myLineChart.options.title.text= "sin cambios"
  }
  console.log(myLineChart.data.datasets[0].data[1])
  myLineChart.update();
  
});