// recope.js


// Construir la URL de la API con la fecha actual
var apiUrl = "https://api.recope.go.cr/ventas/precio/consumidor"

// Realizar la solicitud HTTP a la API
fetch(apiUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    var precios = data;

    // Obtener la referencia al elemento <div class="precios">
    var preciosDiv = document.querySelector(".precios");

    // Crear una tabla para mostrar los precios
    var table = document.createElement("table");
    var thead = document.createElement("thead");
    var tbody = document.createElement("tbody");

    // Crear la fila de encabezado de la tabla
    var headerRow = document.createElement("tr");
    var headers = ["Producto", " Precio sin Impuesto", "Impuesto", "Precio total"];

    headers.forEach(function (header) {
      var th = document.createElement("th");
      th.textContent = header;
      headerRow.appendChild(th);
    });

    thead.appendChild(headerRow);
    table.appendChild(thead);
    table.appendChild(tbody);

    // Iterar sobre los datos y agregar filas a la tabla
    precios.forEach(function (precio) {
      var row = document.createElement("tr");

      // Agregar celdas a la fila con los datos correspondientes
      var cells = [
        precio.nomprod,
        precio.precsinimp,
        precio.impuesto,
        precio.preciototal
      ];

      cells.forEach(function (cell) {
        var td = document.createElement("td");
        td.textContent = cell;
        row.appendChild(td);
      });

      tbody.appendChild(row);
    });

    // Agregar la tabla al elemento <div class="precios">
    preciosDiv.appendChild(table);
  })
  .catch(function (error) {
    console.log("Error al obtener los precios: " + error);
  });