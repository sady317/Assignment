const dreamsCarEl=document.getElementById("dreamsCar")

const modelSecEl=document.getElementById("modelSec")

// const modelsIntEl=document.getElementById("modelsInt")

dreamsCarEl.addEventListener("click",()=>{
    modelSecEl.scrollIntoView({
        behavior:"smooth"
    })
})

// function getdataNamePrice(img){
//    const name = img.dataset.name;
//     const price = img.dataset.price;
//     console.log(name,price)
// }


//2

// const imgElements = document.querySelectorAll(".carImg");
// const modelInfo = document.getElementById("modelInfo");

// imgElements.forEach(img => {
//     img.addEventListener("click", () => {
        
        
//         imgElements.forEach(i => i.style.border = "none");
        
//         // Then add border to clicked one
//         img.style.border = "3px solid black";
        
        
        
//     });
// });


//3
// const firstEl=document.getElementById("first")
// const secondEl=document.getElementById("second")
// const thirdEl=document.getElementById("third")


// function getInputValue(){
    
// const inputEl=Number(document.getElementById("modelsInt").value) //innerText=firstEl
// console.log(inputEl)

//   if (inputEl === 1) {
//     firstEl.style.position = "relative";
//     firstEl.style.width = "500px";
//   } else if (inputEl === 2) {
//     secondEl.style.position = "relative";
//     secondEl.style.width = "500px";
//   } else if (inputEl === 3) {
//     thirdEl.style.position = "relative";
//     thirdEl.style.width = "500px";
//   } 
//   else{
//     alert("Input Invalid")
//   }

// }

//4


const applyBtnEl=document.getElementById("applyBtn")
applyBtnEl.disabled=true;
applyBtnEl.classList.add("opacity-50")
applyBtnEl.style.cursor = "not-allowed";


///ROLL NUMBER 1 OF USE
function getinputData(){
  const emailIntEl=document.getElementById("emailInt").value
  // console.log(emailIntEl)
  if(emailIntEl.length>0){
    applyBtnEl.disabled=false;
applyBtnEl.classList.remove("opacity-50")
applyBtnEl.style.cursor = "pointer";

  }
  else{
    applyBtnEl.disabled=true;
applyBtnEl.classList.add("opacity-50")
applyBtnEl.style.cursor = "not-allowed";
  }

}



///ROLL NUMBER 2 OF USE

// function getinputData(){
//   const emailIntEl=document.getElementById("emailInt").value
//    const emailCheck = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   if(emailCheck.test(value)){
//     applyBtnEl.disabled=false;
// applyBtnEl.classList.remove("opacity-50")
// applyBtnEl.style.cursor = "pointer";

//   }
//   else{
//     applyBtnEl.disabled=true;
// applyBtnEl.classList.add("opacity-50")
// applyBtnEl.style.cursor = "not-allowed";
//   }

// }


///ROLL NUMBER 3 OF USE

// function getinputData(){
//   const value = document.getElementById("emailInt").value.trim();

//   if(value.length > 0){
//     applyBtnEl.disabled = false;
//     applyBtnEl.classList.remove("opacity-50");
//     applyBtnEl.style.cursor = "pointer";
//   } else {
//     applyBtnEl.disabled = true;
//     applyBtnEl.classList.add("opacity-50");
//     applyBtnEl.style.cursor = "not-allowed";
//   }
// }
// document.getElementById("emailInt").addEventListener("input", fotterBar);


 const firstEl=document.getElementById("first")
 const secondEl=document.getElementById("second")
 const thirdEl=document.getElementById("third")

 const modelsIntEl=document.getElementById("modelsInt")
 const nameInputEl=document.getElementById("nameInput")
 const inputSectionEl=document.getElementById("inputSection")

firstEl.addEventListener("click",()=>{
  firstEl.style.position="relative"
  firstEl.style.width="600px"
  modelsIntEl.value=1
  nameInputEl.value="Toyota Supra"
  inputSectionEl.scrollIntoView({
    behavior:"smooth"
  })
})

secondEl.addEventListener("click",()=>{
  secondEl.style.position="relative"
  secondEl.style.width="600px"
  modelsIntEl.value=2
  nameInputEl.value="Audi RS5" 
    inputSectionEl.scrollIntoView({
    behavior:"smooth"
  })

})
thirdEl.addEventListener("click",()=>{
  thirdEl.style.position="relative"
  thirdEl.style.width="600px"
  modelsIntEl.value=3
  nameInputEl.value="BMW M3" 
    inputSectionEl.scrollIntoView({
    behavior:"smooth"
  })

})

const submitBtnEl=document.getElementById("submitBtn")
const footerSecEl=document.getElementById("footerSec")
submitBtnEl.addEventListener("click",()=>{
  footerSecEl.scrollIntoView({
    behavior:"smooth"
  })
})