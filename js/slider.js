let slide=document.getElementById("slide")
let UpArrow=document.getElementById("uparrow")
let DownArrow=document.getElementById("downarrow")

let x=0
UpArrow.onclick=()=>{
    if (x>"-900") {
        x=x-300
        slide.style.top=x+"px"
    }
  
}

DownArrow.onclick=()=>{
    if (x<0) {
        x=x+300
        slide.style.top=x+"px"
    }
}