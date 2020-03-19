function checkWord() {
    if(document.getElementById("checkWord").checked) {
        document.getElementById("deleteWord").disabled = false;
    }
    else {
        document.getElementById("deleteWord").disabled = true;
        document.getElementById("word").style.border = "1px solid #ccc";
    }
}

function saveWord() {
    if(document.getElementById("checkWord").checked) {
        document.getElementById("word").style.border = "2px solid black";
    }
    else {
        document.getElementById("word").style.border = "1px solid #ccc";
    }
}
function deleteWord() {
    document.getElementById("checkWord").checked = false; 
    document.getElementById("deleteWord").disabled = true;
}