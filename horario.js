function cargarHorarios() {
    const xhrLV = new XMLHttpRequest();
    xhrLV.open("GET", "json/horarioLV.json", true);
    xhrLV.onload = function () {
      if (xhrLV.status === 200) {
        const horarioDataLV = JSON.parse(xhrLV.responseText);
        generarTablaLV(horarioDataLV);
      }
    };
    xhrLV.send();
  
    const xhrS = new XMLHttpRequest();
    xhrS.open("GET", "json/horarioS.json", true);
    xhrS.onload = function () {
      if (xhrS.status === 200) {
        const horarioDataS = JSON.parse(xhrS.responseText);
        generarTablaS(horarioDataS);
      }
    };
    xhrS.send();
  
    const xhrD = new XMLHttpRequest();
    xhrD.open("GET", "json/horarioD.json", true);
    xhrD.onload = function () {
      if (xhrD.status === 200) {
        const horarioDataD = JSON.parse(xhrD.responseText);
        generarTablaD(horarioDataD);
      }
    };
    xhrD.send();
  }
  
  function generarTablaLV(data) {
    const tablaBody = document.getElementById("tablaBodyLV");
  
    data.forEach(dataItem => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${dataItem.LunesViernes1}</td>
        <td>${dataItem.LunesViernes2}</td>
        <td>${dataItem.LunesViernes3}</td>
        <td>${dataItem.LunesViernes4}</td>
      `;
      tablaBody.appendChild(row);
    });
  }
  
  function generarTablaS(data) {
    const tablaBody = document.getElementById("tablaBodyS");
  
    data.forEach(dataItem => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${dataItem.Sabados1}</td>
        <td>${dataItem.Sabados2}</td>
        <td>${dataItem.Sabados3}</td>
        <td>${dataItem.Sabados4}</td>
      `;
      tablaBody.appendChild(row);
    });
  }
  
  function generarTablaD(data) {
    const tablaBody = document.getElementById("tablaBodyD");
  
    data.forEach(dataItem => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${dataItem.Domingo1}</td>
        <td>${dataItem.Domingo2}</td>
        <td>${dataItem.Domingo3}</td>
        <td>${dataItem.Domingo4}</td>
      `;
      tablaBody.appendChild(row);
    });
  }
  
  // Cargar los horarios al cargar la página
  window.onload = cargarHorarios;