function api(path,method,body=null){
    const url="http://localhost:8080/api/v1/"+path;

    const options={
        method,
        headers:{
            'Content-Type':'application/json;charset=utf-8',
        },
        mode:"cors"
    };

    if(body!==null){
        options.body=JSON.stringify(body);
    }
    return fetch(url,options);
}

async function getAllBicyles(){
    let data=await api("biciclete",'GET');

    data =await data.json();

    return data;
}


async function addBicicleta(bicicleta){

    let data=await api("add",'POST',car);

    return data.json();
}

async function getAllMarci(){
    let data=await api("biciclete/marci",'GET');
    data=await data.json();

    return data;
}


async function getAllBicylesByMarca(marca){
    let data=await api(`biciclete/${marca}`,'GET');

    data=await data.json();

    return data;
}

async function deleteBicicleta(bicicletaId){
    let data=await api(`delete/${bicicletaId}`,'DELETE');
}

async function updateBicicleta(bicicleta){
    let data=await api(`update`,'PUT',bicicleta);

    return data;
}

async function sortByPrice(){
    let data=await api(`sortByPrice`,'GET');

    data= await data.json();

    return data;
}

async function sortByColor(){

    let data=await api(`sortByColor`,'GET');

    data=await data.json();

    console.log(data);

    return data;
}

async function sortByMarca(){
    let data=await api(`sortByMarca`,'GET');

    data-await data.json();

    return data;
}

async function sortByModel(){
    let data=await api('sortByModel','GET');

    data=await data.json();

    return data;
}


