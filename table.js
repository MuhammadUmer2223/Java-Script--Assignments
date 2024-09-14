var table = document.querySelector("#table")

var div = document.querySelector("div");

function generate(){
    div.innerHTML = "";
    for(var i = 0; i<=10; i++){
        div.innerHTML += `${table.value} X ${i} = ${table.value*i} <br />`;
    
    }
}