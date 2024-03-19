let passwordBox=document.getElementById("password");
let length=12;

let upperCase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerCase="abcdefghijklmnopqrstuvwxyz";
let numbers="0123456789"
let symbols="@!$%*=-/#&"
 let allCharacters=upperCase+lowerCase+numbers+symbols;

 function createPassword(){
let password=""
password+=upperCase[Math.floor(Math.random()*upperCase.length)]
password+=lowerCase[Math.floor(Math.random()*lowerCase.length)]
password+=numbers[Math.floor(Math.random()*numbers.length)]
password+=symbols[Math.floor(Math.random()*symbols.length)]

while(length>password.length){
    password+=allCharacters[Math.floor(Math.random()*allCharacters.length)]
}
passwordBox.value=password
 }

 function copyPassword(){
    passwordBox.select()
    document.execCommand("copy")
 }