  let temperaturas = []
  let humedades = [ ]
  let hora=[]
  let medioDia=  []
  let diaEntero= []
    for (var i = 0; i < 61; i++) { // cargo los arrays para las divisiones del eje x
      hora.push(i); 
      if (i<13){
        medioDia.push(i)
      }
      if (i<24){
        diaEntero.push(i)
      }
    }
  
  let semana=["domingo", "lunes","martes","miercoles", "jueves","viernes","sabado"]

  var label = document.querySelector("label[for='check1']");
  // Gráfico de temperatura
  var ctx = document.getElementById("canvas-temperatura").getContext("2d");
  var tempChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: hora,
      datasets: [
        {
          label: "Temperatura de 1 hs",
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
            text: 'hora'
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
  });

  // Gráfico de humedad
  var ctx = document.getElementById("canvas-humedad").getContext("2d");
  var humedadChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: hora,
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
        y: {
          ticks: {
            beginAtZero: true
          },
          max: 110
        }
      }
    }
  });
       
  let opcionPeriodotemperatura=1
  document.querySelector("#select").addEventListener("change", function() {
      var select = this;
      let option = select.options[select.selectedIndex];
      opcionPeriodotemperatura = option.value
      // Usamos la opción seleccionada en una función de JavaScript
      console.log(option.value);
        if (option.value==1 ){
          console.log(option.value);
          tempChart.data.labels= hora
          tempChart.data.datasets[0].label="Temperatura de 1 hs"
        } else if(option.value==2 ){
          tempChart.data.labels= medioDia
          tempChart.data.datasets[0].label="Temperatura de 12 hs"
        } else if (option.value==3){
          tempChart.data.labels= diaEntero
          tempChart.data.datasets[0].label="Temperatura de 24 hs"
        } else if (option.value==4) {
          tempChart.data.labels= semana
          tempChart.data.datasets[0].label="Temperatura diaria de la semana"
        }
      escalaEnX(opcionPeriodotemperatura)
      tempChart.update()
  });

  let opcionPeriodoHumedad=1 //del select del grafico humedad
  document.querySelector("#selectHumedad").addEventListener("change", function() {
      var select = this;
      let option = select.options[select.selectedIndex];
      opcionPeriodoHumedad = option.value
     
        if (option.value==1 ){
          console.log(option.value);
          humedadChart.data.labels= hora
          humedadChart.data.datasets[0].label="Humedad de 1 hs"
        } else if(option.value==2 ){
          humedadChart.data.labels= medioDia
          humedadChart.data.datasets[0].label="Humedad de 12 hs"
        } else if (option.value==3){
          humedadChart.data.labels= diaEntero
          humedadChart.data.datasets[0].label="Humedad de 24 hs"
        } else if (option.value==4) {
          humedadChart.data.labels= semana
          humedadChart.data.datasets[0].label="Humedad diaria de la semana"
        }
      escalaEnXhumedad(opcionPeriodoHumedad)
      humedadChart.update()
  });

  var datos = [
    {Id:1, Nombre: 'Dispositivo A' , Estado: 'Activo', Descripcion: 'sensores zona A' },
    {Id:2, Nombre: 'Dispositivo B' , Estado: 'No Activo', Descripcion: 'sensores zona B' },
    {Id:3, Nombre: 'Dispositivo C' , Estado: 'Activo',  Descripcion: 'central alarma C' },
    // Puedes agregar más objetos de datos aquí
  ];
  var eventos = [
    {Id: 3, evento:"1 Entrada", fecha:"2023/10/10 10:20:00"},
    {Id: 3, evento:"1 Entrada", fecha:"2023/10/10 10:10:05"},
    {Id: 3, evento:"5 Hall", fecha:"2023/10/10 10:00:00"},
    {Id: 3, evento:"2 Patio trasero", fecha:"2023/10/10 09:20:00"},
    {Id: 3, evento:"4 perimetral fondo", fecha:"2023/10/10 09:03:00"},
    {Id: 3, evento:"10 Sabotaje ", fecha:"2023/10/10 09:00:00"},
  ]
  
  // Función para crear filas de la tabla
  function crearFila(datos) {
    var fila = "<tr>";    
    fila += "<td>" + datos.Id + "</td>";
    fila += "<td>" + datos.Nombre + "</td>";
    fila += "<td>" + datos.Estado + "</td>";
    fila += "<td>" + datos.Descripcion + "</td>";
    fila += "</tr>";
    return fila;
  }
  
  // Obtener la tabla
  var tabla1 = document.getElementById("miTabla");
  var tbody = tabla1.querySelector("tbody");
  
  // Llenar la tabla con datos del array
  for (var i = 0; i < datos.length; i++) {
    var filaHTML = crearFila(datos[i]);
    tbody.innerHTML += filaHTML;
  }

// cargo las celdas de la primer columna de la tabla
  var celdasPrimeraColumna = document.querySelectorAll("#miTabla tbody td:first-child");

  celdasPrimeraColumna.forEach(function(celda) {
      celda.addEventListener('mouseover', () => {
      
        // Cambiar el puntero del mouse
        celda.style.cursor = 'pointer';
    
      });


      celda.addEventListener("click", function() {
        var textoCelda = this.textContent;

          celdasPrimeraColumna.forEach(function(otraCelda) {
            otraCelda.classList.remove("resaltado");// cambio el background de la celda 
          });
          this.classList.add("resaltado");
    
        const parrafo = document.querySelector("#titGraficos");
        parrafo.textContent = `Dispositivo: ${textoCelda}`; 

        const temp = document.getElementById("canvas-temperatura");        
        const sel = document.getElementById("select");        
        const hum = document.getElementById("canvas-humedad");        
        const selHum = document.getElementById("selectHumedad");
        const contEventos = document.getElementById("contEventos")
        

        if (textoCelda==3) {                  
          
          temp.style.display = "none";        
          sel.style.display = "none";       
          hum.style.display = "none";        
          selHum.style.display = "none";

          cargarTablaEventos(eventos)
          // tablaEvent.setAttribute("hidden", false);
          contEventos.style.display="block"

        } else {
          contEventos.style.display="none"
          temp.style.display = "block";        
          sel.style.display = "block";       
          hum.style.display = "block";        
          selHum.style.display = "block";
         
          temperaturas = []
          humedades=[]
          
          tempChart.data.datasets[0].data = escalaEnX(opcionPeriodotemperatura);
          tempChart.update()
          humedadChart.data.datasets[0].data = escalaEnXhumedad(opcionPeriodoHumedad);
          humedadChart.update()
        }

        
      });
  });

  let periodo=0
  function escalaEnX(opcionPeriodotemperatura){
     periodo=0 
     temperaturas=[]
       if (opcionPeriodotemperatura==1){
          periodo=60
       } else if (opcionPeriodotemperatura==2){
        periodo=60*12 //minutos de 12hs
       } else if (opcionPeriodotemperatura==3){
        periodo=60*12*2 //minutos de 24hs
       } else if (opcionPeriodotemperatura==4){
        periodo=60*12*2*7 //minutos de una semana
       }
          for (var i = 0; i < periodo; i++) {
            temperaturas.push(Math.random() * 110 - 10); // Genera valores aleatorios entre -10 y 100
          }
       return temperaturas
  }
  function escalaEnXhumedad(opcionPeriodoHumedad){
    periodo=0 
    humedades=[]
      if (opcionPeriodoHumedad==1){
         periodo=60
      } else if (opcionPeriodoHumedad==2){
       periodo=60*12 //minutos de 12hs
      } else if (opcionPeriodoHumedad==3){
       periodo=60*12*2 //minutos de 24hs
      } else if (opcionPeriodoHumedad==4){
       periodo=60*12*2*7 //minutos de una semana
      }
         for (var i = 0; i < periodo; i++) {
          humedades.push(Math.random() * 110 - 0); // Genera valores aleatorios entre -10 y 100
         }
      return humedades
 }
 function cargarTablaEventos(datos) {
 

  function crearFilaEventos(datos) {
    var fila = "<tr>";    
    fila += "<td>" + datos.Id + "</td>";
    fila += "<td>" + datos.evento + "</td>";
    fila += "<td>" + datos.fecha + "</td>";
    fila += "</tr>";
    return fila;
  }
  
  // Obtener la tabla
  const tabla = document.getElementById("tablaEventos");
  var tbody = tabla.querySelector("tbody");
  tbody.innerHTML = "";
  
  // Llenar la tabla con datos del array
  for (var i = 0; i < datos.length; i++) {
    var filaHTML = crearFilaEventos(datos[i]);
    tbody.innerHTML += filaHTML;
  }
}

/* function traerJsonDePaginaFetch(url) {
  // Realiza la solicitud HTTP
  return fetch(url).then(response => response.json())
}
// Obtiene el JSON de la página web
const json = traerJsonDePaginaFetch("https://electroia.piem.ar/movimientos.php?id_esp=1&accion=leer_mediciones_temp_hum")

// Imprime el JSON
// console.log(json)
json.then(datos => {
  // Los datos se han cargado correctamente
  //console.log(datos);
  const datosJson = JSON.parse(json)

console.log(datosJson)
})
 */
const json = fetch("https://electroia.piem.ar/movimientos.php?id_esp=1&accion=leer_mediciones_temp_hum")
  .then(response => response.json());

json.then(datos => {
  
  const primeraMedicion = datos[0];

  // Obtiene el valor de la propiedad 'id_esp' de la primera medición
  const idEsp = primeraMedicion["id_esp"];

  // Imprime el valor de la propiedad 'id_esp'
  console.log(datos[0].temp);
});