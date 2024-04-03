let Fullimgbox =document.getElementById("Fullimgbox")
let FullImg =document.getElementById("FullImg")

 function OpenImg(pic){
    Fullimgbox.style.display="flex";
    FullImg.src=pic
 }
 function closeImg() {
    Fullimgbox.style.display="none"
 }