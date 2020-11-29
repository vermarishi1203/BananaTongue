var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var txtOutput = document.querySelector("#txt-output");
var serverUrl = "https://api.funtranslations.com/translate/minion.json";
function getTranslationUrl(text){
    return serverUrl + "?" + "text=" + text
}
function errorHandler(error){
    console.log("error occured: "+error)
    alert("Sorry, some unexpected error occured. Please try again after sometime.");
}
function clickEventHandler(){
    var inputText = txtInput.value;

    fetch(getTranslationUrl(inputText))
        .then(response => response.json()).then(json => txtOutput.innerText = json.contents.translated)
        .catch(errorHandler)
}
btnTranslate.addEventListener("click",clickEventHandler);