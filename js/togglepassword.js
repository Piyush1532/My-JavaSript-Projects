let eyeicon=document.getElementById("icon")
let password=document.getElementById("password")

eyeicon.onclick=()=>{
  if(password.type==="password"){
password.type="text"
eyeicon.src="https://toppng.com/uploads/preview/open-eye-with-shine-comments-the-kno-115633844827s7xsm2gsq.png"
  }else{
    password.type="password" 
  }
}