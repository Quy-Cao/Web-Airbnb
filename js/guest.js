
var nguoiLon = 0;
var treEm = 0;
var emBe = 0;
var sum1 = 0;

function tinh(a,b) {
    if(b) {
        document.getElementById("deleteGuest").disabled = false;
        if(a === 1) {   
            nguoiLon++; 
            document.getElementById(`number${a}`).innerHTML = nguoiLon;
            if(nguoiLon > 15 ){
                document.getElementById(`minus${a}`).disabled = false;
                document.getElementById(`plus${a}`).disabled = true;
            }
            else {
                document.getElementById(`minus${a}`).disabled = false;
            }
        }
        if(a === 2) {
            treEm++;
            document.getElementById(`number${a}`).innerHTML = treEm;
            if(treEm > 4){
                document.getElementById(`minus${a}`).disabled = false;
                document.getElementById(`plus${a}`).disabled = true;
            }
            else {
                document.getElementById(`minus${a}`).disabled = false;
            }
        }
        if(a === 3) {
        emBe++;
        if(nguoiLon === 0) {
            nguoiLon = 1;
            document.getElementById(`number1`).innerHTML = nguoiLon;
            if(nguoiLon === 1) {
                document.getElementById(`minus1`).disabled;
            }else {
                
                document.getElementById(`minus1`).disabled = false;
            }
        }
        else {
            document.getElementById(`number${a}`).innerHTML = nguoiLon;
            }
            document.getElementById(`number${a}`).innerHTML = emBe;
            if(emBe > 4 ){
                document.getElementById(`minus${a}`).disabled = false;
                document.getElementById(`plus${a}`).disabled = true;
            }
            else {
                document.getElementById(`minus${a}`).disabled = false;
            }
        }
    }
    // Nut Minus
    else {
        if(a === 1) {
            nguoiLon--;
            document.getElementById(`number${a}`).innerHTML = nguoiLon;
            
            if(emBe > 0 && nguoiLon === 1) {
                document.getElementById(`minus1`).disabled = true;
            }
            else {
                document.getElementById(`minus1`).disabled = false;
            }
            if(nguoiLon <  1 ){
                document.getElementById(`plus${a}`).disabled = false;
                document.getElementById(`minus${a}`).disabled = true;
            }
            else {
                document.getElementById(`plus${a}`).disabled = false;
            }

        }
        if(a === 2) {
            treEm--;
            document.getElementById(`number${a}`).innerHTML = treEm;
            if(treEm <  1 ){
                document.getElementById(`plus${a}`).disabled = false;
                document.getElementById(`minus${a}`).disabled = true;
                console.log('giam disable');
            }
            else {
                document.getElementById(`plus${a}`).disabled = false;
            }
        }
        if(a === 3) {
            emBe--;
            document.getElementById(`number${a}`).innerHTML = emBe;
            if(emBe <  1 ){
                document.getElementById(`plus${a}`).disabled = false;
                document.getElementById(`minus${a}`).disabled = true;
            }
            else {
                document.getElementById(`plus${a}`).disabled = false;
            }
        }
    }
    sum1 = nguoiLon+treEm;
    if(emBe > 0 && nguoiLon >= 0 && treEm >= 0) {
        
        document.getElementById("guest").innerHTML = `${sum1} người lớn, ${emBe} em bé`;
    }
    else if( nguoiLon > 0) {
        document.getElementById("guest").innerHTML = `${sum1} người lớn`;
    }
    else if( treEm > 0) {
        document.getElementById("guest").innerHTML = `${sum1} người lớn`;
    }
    else if(emBe > 0) {
        document.getElementById("guest").innerHTML = `${emBe} em bé`;
    }
    else {
        document.getElementById("guest").innerHTML = "Khách";
    }
}

//Nut Save
function saveGuest() {
    sum = sum1 + emBe;
    console.log(sum);
    if(sum > 0 ) {
        document.getElementById("guest").style.border = "2px solid black";
    }
}

// Nut Delete Guest
function deleteGuest() {
    sum = 0;
    if(sum > 0 ) {
        document.getElementById("guest").style.border = "2px solid black";
    }
    else {
        document.getElementById("guest").style.border = "1px solid #ccc";
        document.getElementById("guest").style.padding = "0px 17px";
        document.getElementById("guest").innerHTML = "Khách";
    }
    nguoiLon = 0;
    document.getElementById(`number1`).innerHTML = nguoiLon;
    document.getElementById(`minus1`).disabled = true;
    document.getElementById(`plus1`).disabled = false;

    treEm = 0;
    document.getElementById(`number2`).innerHTML = treEm;
    document.getElementById(`minus2`).disabled = true;
    document.getElementById(`plus2`).disabled = false;

    emBe = 0;
    document.getElementById(`number3`).innerHTML = emBe;
    document.getElementById(`minus3`).disabled = true;
    document.getElementById(`plus3`).disabled = false;

    document.getElementById("guest").innerHTML = "Khách";
}
