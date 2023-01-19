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

function returnMarcile(arr){
    let arrNou;
    for(let i=0;i<arr.length;i++){
        arrNou.appendChild(arr[i].marca);
    }

    return arrNou;
}

function returnBicicleta(data,marca){
    for(let i=0;i<data.length;i++){
        if(data[i].marca=marca){
            return data[i].marca;
        }
    }
    return -1;
}

