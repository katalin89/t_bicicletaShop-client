async function attachHomePage(){
    let container=document.querySelector(".container");

    container.innerHTML=`
    <h1>Biciclete</h1>

    <p><a class="button new-bicicleta">Create New Bicicleta</a><p>

    <table>
        <thead>
            <tr>

            <th class="id">Id</th>
            <th class="marca">Marca</th>
            <th class="model">Model</th>
            <th class="culoare">Culoare</th>
            <th class="pret">Pret</th>

            </tr>

        </thead>
        <tbody class=container-biciclete>

        </tbody>

    </table>
            
    `

    container.addEventListener("click",async(e)=>{
        let data=e.target;

        if(data.classList.contains("pret")){
            let vec=await sortByPrice();
            attachRows(vec);
        }else if(data.classList.contains("marca")){
            let vec=await sortByMarca();
            attachRows();
        }else if(data.classList.contains("model")){
            let vec=await sortByModel();
            attachRows();
        }else if(data.classList.contains("culoare")){
            let vec=await sortByModel();
            attachRows();
        }
    })

    let data=await getAllBiciclete();

    attachRows(data);

    let btnNewBiciclete=document.querySelector(".new-bicicleta");

    btnNewBiciclete.addEventListener("click",(e)=>{
        attachNewBicicletaPage();
    });

    let rowsContainer=document.querySelector(".container-biciclete");

    rowsContainer.addEventListener("click",(e)=>{
        let data=e.target.parentNode;
        console.log(data);

        let bicicletaProperties=data.children;

        const bicicleta={
            bicicletaId:bicicletaProperties[0].innerHTML,
            marca:bicicletaProperties[1].innerHTML,
            model:bicicletaProperties[2].innerHTML,
            culoare:bicicletaProperties[3].innerHTML,
            pret:bicicletaProperties[4].innerHTML

        }

        attachUpdatePage(bicicleta);
    });

}

function update(){
   
    let inp1=document.getElementById('marca');
    let inp2=document.getElementById('model');
    let inp3=document.getElementById('culoare');
    let inp4=document.getElementById('pret');

    const bicicleta={
        marca:inp1.value ,
        model:inp2.value ,
        culoare: inp3.value,
        pret:inp4.value
    }

    update(car);

}

async function attachUpdatePage(bicicleta){
    let container=document.querySelector(".container");

    container.innerHTML=`
    <h1>Update Bicicleta</h1>
    <input name="bicicletaId" class="bicicletaId" type="hidden" value=${bicicleta.id}/>

    <ul class"error">

    </ul>

    <p>
            <label for="marca">marca</label>
            <input name="marca" type="text" class="marca" id="marca" value="${bicicleta.marca}"  disabled>
        </p>
        <p>
            <label for="model">Model</label>
            <input name="model" type="text" class="model" id="model" value="${bicicleta.model}">
        </p>
        <p>
            <label for="culoare">Culoare</label>
            <input name="culoare" type="text"  class="culoare" id="culoare" value="${bicicleta.culoare}">
        </p>
        
        <p>
            <label for="pret">Pret</label>
            <input name="pret" type="text" class="pret" id="pret" value="${bicicleta.pret}">
        </p>
        <div>
            <button class="update">Update bicicleta</button>
            <button class="delete" >Delete bicicleta</button>
            <button class="cancel">Cancel</button>
        </div>
    `

    let btnCancel=document.querySelector(".cancel");
    btnCancel.addEventListener("click",()=>{
        attachHomepage();
    })
}

let btnUpdate=document.querySelector(".update");
btnUpdate.addEventListener("click",async()=>{
    let input1=document.querySelector(".marca");
    let input2=document.querySelector(".model");
    let input3=document.querySelector(".culoare");      
    let input4=document.querySelector(".pret");


    let bicicleta={
        marca:input1.value,
        model:input2.value,
        culoare:input3.value,
        pret:input4.value
    }

    let erors=[];

    if(input2.value==""){
        erors.push("trebuie pusa modelul");

        input2.style.borderColor="red";
    }

    if(input3.value==""){
        erors.push("trebuie pusa culoarea");
        input3.style.borderColor="red";
    }

    if(input4.value==0){
        erors.push("trebuie pusa pretul");
        input4,style.borderColor="red";
    }

    if(erors.length>0){
        let errorContainer=document.querySelector(".error");

        let h1=document.createElement("h1");

        h1.textContent="Oooops";

        errorContainer.appendChild(h1);

        for(let i=0;i<erors.length;i++){
            let li=document.createElement("li");
            li.textContent=erors[i];

            errorContainer.appendChild(li);
        }
    }else{
        let errorContainer=document.querySelector(".error");

        errorContainer.innerHTML="";
    }

    if(erors.length==0){
        let data=await updateBicicleta(bicicleta);

        attachHomepage();
    }
})

let btnDelete=document.querySelector(".delete");

btnDelete.addEventListener("click",async()=>{
    let input=document.querySelector("bicicletaId");

    let bicicletaId=input.value;

    let data=await deleteBicicleta(bicicletaId);

    attachHomepage();
})

function attachNewBicicletaPage(){
    let container=document.querySelector(".container");

    container.innerHTML=`
    <h1>New Bicicleta</h1>

    <ul class="error">
            
    </ul>

        <p>
        <label for="title">Marca</label>
        <input name="title" type="text" id="marca" class="marca">
    </p>
    <p>
        <label for="author">Model</label>
        <input name="author" type="text" id="model" class="model">
    </p>
        <p>
            <label for="culoare">Culoare</label>
            <input name="culoare" type="text" id="culoare" class="culoare">
        </p>
       

        <p>
            <label for="year">pret</label>
            <input name="year" type="text" id="pret" class="pret">
        </p>

        <div class="butoane">
            <button class="add">Add new  Bicicleta</button>
            <button class="cancel">Cancel</button>
            </div
    `

    let btnCancel=document.querySelector(".cancel");
    btnCancel.addEventListener("click",()=>{
        attachHomePage();
    })

    let btnAddNewBicicleta=document.querySelector(".add");
    let inp0=document.getElementById('carId');
    let inp1=document.getElementById('marca');
    let inp2=document.getElementById('model');
    let inp3=document.getElementById('culoare');
    let inp4=document.getElementById('pret');

    btnAddNewBicicleta.addEventListener("click",async()=>{
        let inp1=document.querySelector(".marca");
        let inp2=document.querySelector(".model");
        let inp3=document.querySelector(".culoare");
        let inp4=document.querySelector(".pret");

        
  

    
    let bicicleta={
        marca:inp1.value,
        model:inp2.value,
        culoare:inp3.value,
        pret:inp4.value
    }

    let erors=[];

    if(inp1.value=="" && inp2.value==="" && inp3.value=="" && inp4==0){
        erors.push("Nu ati completat campurile");
    }
    if(inp1.value==""){
        
        erors.push("trebuie pusa marca");
        

        inp1.style.borderColor="red";

        }  
        if(inp1.value==""){
        
            erors.push("trebuie pusa modelul");
            
    
            inp1.style.borderColor="red";
    
            }  

        if(inp1.value==""){
        
            erors.push("trebuie pusa culoarea");
                
        
            inp1.style.borderColor="red";
        
            }  
            if(inp1.value==""){
        
                erors.push("trebuie pusa pret");
                
        
                inp1.style.borderColor="red";
        
            }  

            if (erors.length>0){
        
                let errorContainer=document.querySelector(".error");
    
                errorContainer.innerHTML="";
                let h1=document.createElement("h1");
                h1.textContent="Ooops";
                errorContainer.appendChild(h1);
                
    
    
                for(let i=0;i<erors.length;i++){
    
                    let li=document.createElement("li");
    
                    li.textContent=erors[i];
    
                    errorContainer.appendChild(li);
                }
            }else{
                let data=await addBicicleta(bicicleta);

                attachHomePage();
            }

        })

    
}

function createRow(bicicleta){

    let tr=document.createElement("tr");

    tr.innerHTML=`
    <td>${bicicleta.id}</td>
    <td>${bicicleta.marca}</td>
    <td>${bicicleta.model}</td>
    <td>${bicicleta.culoare}</td>
    <td>${bicicleta.model}</td>
    
    `

    return tr;
}

function attachRows(arr){
    let container=document.querySelector(".container-biciclete");

    container.innerHTML="";

    for(let i=0;i< arr.length;i++){
        container.appendChild(createRow(arr[i]));
    }
}