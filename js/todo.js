const inputBox=document.getElementById("input-Box")
const listContainer=document.getElementById("list-container")

function addTask(){
    if (inputBox.value==='') {
        alert("you must write something")
    }
    else{
        let li=document.createElement("li")
        li.innerHTML=inputBox.value;
        listContainer.appendChild(li);
        let span=document.createElement("span")
        span.innerHTML= "\u00d7";
        li.appendChild(span)
    }
    inputBox.value=''
    savetask()
}

listContainer.addEventListener("click",(evt)=>{
if(evt.target.tagName ==="LI"){
evt.target.classList.toggle("checked")
savetask()
}
else if(evt.target.tagName=== "SPAN"){
evt.target.parentElement.remove()
savetask()
}
},false)

function savetask(){
    localStorage.setItem("data",listContainer.innerHTML)
}
function showtask(){
    listContainer.innerHTML=localStorage.getItem("data")
}
showtask()