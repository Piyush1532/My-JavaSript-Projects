let notesContainer=document.querySelector(".notes-container")
let createBtn=document.querySelector(".btn")
let notes=document.querySelectorAll(".inputbox")


function showNotes() {
    notesContainer.innerHTML=localStorage.getItem("notes")
}


showNotes()


function updateStorage() {
    localStorage.setItem("notes",notesContainer.innerHTML)
}
createBtn.addEventListener("click",()=>{
    let inputBox=document.createElement("p");
    let img=document.createElement("img");
    inputBox.className ="inputbox"
    inputBox.setAttribute("contenteditable","true")
    img.src="https://static.vecteezy.com/system/resources/previews/010/366/194/non_2x/bin-icon-transparent-bin-clipart-free-png.png";
    notesContainer.appendChild(inputBox).appendChild(img)
})

notesContainer.addEventListener("click",(e)=>{
if (e.target.tagName === "IMG") {
    e.target.parentElement.remove()
    updateStorage()
}

else if(e.target.tagName ==="P"){
notes=document.querySelectorAll(".inputbox")
notes.forEach(nt=>{
    nt.onkeyup=function () {
        updateStorage()
    }
})
}
})

document.addEventListener("keydown",(evt)=>{
if(evt.key ==="Enter"){
document.execCommand("insertLineBreak")
evt.preventDefault()
}
})