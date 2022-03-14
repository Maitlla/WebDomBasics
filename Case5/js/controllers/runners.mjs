export function dataToHTMLList (array) {
    const HTMLElements = array.map(
        (item) => {
            const row = document.createElement("tr");
            const tdName = document.createElement("td");
            const tdTime = document.createElement("td");
            row.append(tdName, tdTime);
            // llamo a la propiedad name del (parámetro) objeto item y se lo asigno a tdName.innerText para pintar el HTML
            tdName.innerText = item.name;
            // llamo a la propiedad time del (parámetro) objeto item y se lo asigno a tdTime.innerText para pintar el HTML  
            tdTime.innerText = item.time;
            return row;
        }
    )
    document.querySelector("#runnersRows").append(...HTMLElements);
}