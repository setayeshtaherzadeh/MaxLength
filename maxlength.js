const inputElem = document.querySelector('input')
const spanElem = document.querySelector('.counter')

//let maxInput = inputElem.maxLength     // chizi ke man neveshtam va eshtebahe 
let maxInput = inputElem.getAttribute('maxlength')

//vaqti 1 char type mikonim length hamon 19 hast chon keydown 1 vahed aqab hast pas baiad az keypress ya keyup estefade konim 


inputElem.addEventListener('keyup',function(){
   // console.log('keydown :)');

   
   //spanElem.innerHTML = this.maxLength - maxInput      //chizi ke man neveshtam va eshtebahe 
spanElem.innerHTML = maxInput - inputElem.value.length

})