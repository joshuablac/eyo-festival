const button= document.getElementById("display")
console.log(button)
 function theInputs(input){
    display.value +=input;
 }
 function clearWord(){
   display.value ="";
 }
 function calculateWord(){
   try {
      display.value= eval(display.value);
   } catch (error) {
      display.value=" Error"
   }
      
 }