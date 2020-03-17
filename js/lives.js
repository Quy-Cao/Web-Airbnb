document.getElementById("deleteLive").style.marginLeft = "23px";
var houseLive = [
    ["liveFull1", "liveFull2", "liveFull3", "liveFull4"],
    ["livePrivate1", "livePrivate2", "livePrivate3"],
    ["liveHotel1", "liveHotel2", "liveHotel3"],
    ["liveGeneral1", "liveGeneral2"]
];
var hrLive = [
    ["hrFull1", "hrFull2", "hrFull3"],
    ["hrPrivate1", "hrPrivate2", "hrPrivate3"],
    ["hrHotel1", "hrHotel2", "hrHotel3"],
    ["hrGeneral1", "hrGeneral2"]
];
var checkLive = ["cbLeftLiveFull", "cbLeftLivePrivate", "cbLeftLiveHotel", "cbLeftLiveGeneral"];
var nameHouse = ["Toàn bộ nhà", "Phòng riêng", "Phòng khách sạn", "Phong chung"];
document.getElementById("deleteLive").disabled = true;

checkLive.forEach(x => document.getElementById(x).addEventListener("click", function() {
     document.getElementById("deleteLive").disabled = false;
}));


function saveLive() {
    var dem = 0;

    for(var i = 0; i < checkLive.length; i++) {
        if(document.getElementById(checkLive[i]).checked === false) {
            houseLive[i].forEach(x => document.getElementById(x).style.display = "none");
            hrLive[i].forEach(x => document.getElementById(x).style.display = "none");
        }
        else { 
            dem++;
            houseLive[i].forEach(x => document.getElementById(x).style.display = "block");
            hrLive[i].forEach(x => document.getElementById(x).style.display = "block");
            if(dem > 1){
                document.getElementById("liveHouse").innerHTML = `Loại nơi ở. ${i}`;
            }else {
                document.getElementById("liveHouse").innerHTML = nameHouse[i];
            }
        }
    }
}

function deleteLive() {
    for(var i = 0; i < checkLive.length; i++) {
        document.getElementById(checkLive[i]).checked = false;
    }
}


