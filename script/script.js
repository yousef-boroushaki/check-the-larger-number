
let inputIf1 = document.querySelector(".if-input1");
let inputIf2 = document.querySelector(".if-input2");
let result2 = document.querySelector(".result2");
let btnIf = document.querySelector(".btn-condition");
let btnIfReset = document.querySelector(".btn-condition-reset");

btnIfReset.addEventListener('click' , () =>{
    inputIf1.value = "";
    inputIf2.value = "";
    result2.innerHTML = "";
})

btnIf.addEventListener('click', ()=>{

    if(parseInt(inputIf1.value) > parseInt(inputIf2.value))
        result2.innerHTML = "First number is larger than second number";
    else if(parseInt(inputIf1.value) < parseInt(inputIf2.value))
        result2.innerHTML = "Second number is larger than first number";
    else if(parseInt(inputIf1.value) == parseInt(inputIf2.value))
        result2.innerHTML = "First number is equal to second number";

})