const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"]; 
  
let password2 = ""
let password1 = ""
let passwordField1 = document.getElementById("password-1")
let passwordField2 = document.getElementById("password-2")


     function generate(){
     password1 = ""
     password2 = ""
     for(let i =0; i < 10; i++){
         
     let randomNumber = Math.floor( Math.random() * characters.length) 
     password1 += characters[randomNumber]
     
     let randomNumber1 = Math.floor( Math.random() * characters.length) 
     password2 += characters[randomNumber1]
     }
     
   passwordField1.textContent = password1
   passwordField2.textContent = password2
     }
     


















// function generate() {
//     for (let i = 0; i < 15; i++) {  
    
//     }
//     //start, end, condition
// }


// //button ko click karna ha 
// // 2 password generate hon and fill on Divs

// //Random Password charectersArray sa ai.


