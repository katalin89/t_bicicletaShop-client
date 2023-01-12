fetch("http://localhost:8080/api/v1/biciclete").then(data=>{
    return data.json();
}).then(data=>{
    attachRows(data);
})