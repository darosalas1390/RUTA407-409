document.addEventListener("DOMContentLoaded", () => {

    fetch("json/tarifa.json")

        .then(response => response.json())

        .then(data => {

            const tablaTarifa = document.getElementById("tablaTarifa");



            data.tarifas.forEach(tarifa => {

                const row = tablaTarifa.insertRow();



                const rutaCell = row.insertCell();

                rutaCell.textContent = tarifa.ruta;



                const descripcionCell = row.insertCell();

                descripcionCell.textContent = tarifa.descripcion;



                const tarifaAjustadaCell = row.insertCell();

                tarifaAjustadaCell.textContent = tarifa.tarifaAjustada;



                const adultoMayorCell = row.insertCell();

                adultoMayorCell.textContent = tarifa.adultoMayor;

            });

        })

        .catch(error => {

            console.error("Error fetching or processing JSON:", error);

        });

});