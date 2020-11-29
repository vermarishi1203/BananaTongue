var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var txtOutput = document.querySelector("#txt-output");
function clickEventHandler(){
    txtOutput.innerText = "your input is "+txtInput.value;
}
btnTranslate.addEventListener("click",clickEventHandler);