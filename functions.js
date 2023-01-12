function createRow(bicicleta){
    let tr=document.createElement("tr");
    
    tr.innerHTML=`
    <td>${bicicleta.id}</td>
    <td>${bicicleta.marca}</td>
    <td>${bicicleta.model}</td>
    <td>${bicicleta.culoare}</td>
    <td>${bicicleta.pret}</td>
    `

    return tr;
}

function attachRows(arr){
    let container=document.querySelector(".container");
    for(let i=0;i<arr.length;i++){
        container.appendChild(createRow(arr[i]));
    }
}