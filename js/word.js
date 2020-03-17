function checkWord() {
    if(document.getElementById("checkWord").checked) {
        console.log("checked");
        
        document.getElementById("deleteWord").disabled = false;
    }
    else {
        document.getElementById("deleteWord").disabled = true;
    }
}

function deleteWord() {
    document.getElementById("checkWord").checked = false; 
    document.getElementById("deleteWord").disabled = true;
}