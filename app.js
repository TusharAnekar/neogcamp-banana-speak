var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

btnTranslate.addEventListener("click", clickHandler)

var serverURL = "https://api.funtranslations.com/translate/minion.json";

function getTranslationURL(text){
    return serverURL + "?" + "text=" +text;
}

function errorHandler(error){
    console.log("Error occured ", error);
    outputDiv.innerText = "Error occured: " + error;
}

function clickHandler() {
        var inputText = txtInput.value;
        fetch(getTranslationURL(inputText))
        .then( Response => Response.json())
        .then( json => {
            var translatedText = json.contents.translated;
            outputDiv.innerText = translatedText;
            })
        .catch(errorHandler)
}