document.getElementById("deleteLive").style.marginLeft = "23px";
document.getElementById("hrFull4").style.display = 'none';
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


// function saveLive() {

//     var dem = 0;
//     var demCheck = 0;
//     for(var i = 0; i < checkLive.length; i++) {
//         if(document.getElementById(checkLive[i]).checked === true) {
//             dem++;
//             houseLive[i].forEach(x => document.getElementById(x).style.display = "block");
//             hrLive[i].forEach(x => document.getElementById(x).style.display = "block");
//             if(dem > 1){
//                 document.getElementById("liveHouse").innerHTML = `Loại nơi ở. ${dem}`;
//             }else {
//                 document.getElementById("liveHouse").innerHTML = nameHouse[i];
//             }
//         }
//         else {
//             demCheck++;
//             if(demCheck == 4){
//                 var combonator = document.getElementsByClassName("rowhover");
//                 for (var y = 0; y < combonator.length; y++) {
//                     combonator[y].style.display = 'block';
//                 }
//                 var hr = document.getElementsByTagName("hr");
//                 for (var z = 0; z < hr.length; z++) {
//                     hr[z].style.display = 'block';
//                 }
//             }
//             else {
//                 houseLive[i].forEach(x => document.getElementById(x).style.display = "none");
//                 hrLive[i].forEach(x => document.getElementById(x).style.display = "none");
//             }
//         }
//     }
//     if(dem > 0) {
//         document.getElementById("liveHouse").style.border = "2px solid black";
//     }
//     else {
//         document.getElementById("liveHouse").style.border = "1px solid #ccc";
//         document.getElementById("liveHouse").innerHTML = "Loại nơi ở";
//     }
// }

function deleteLive() {
    for(var i = 0; i < checkLive.length; i++) {
        document.getElementById(checkLive[i]).checked = false;
    }
}


//Cach 2
var test = [
    {
        name: 'liveFull1',
        check: 'cbLeftLiveFull',
        hr: 'hrFull1'
    },
    {
        name: 'liveFull2',
        check: 'cbLeftLiveFull',
        hr: 'hrFull2'
    },
    {
        name: 'liveFull3',
        check: 'cbLeftLiveFull',
        hr: 'hrFull3'
    },
    {
        name: 'liveFull4',
        check: 'cbLeftLiveFull',
        hr: 'hrFull4'
    },
    {
        name: 'livePrivate1',
        check: 'cbLeftLivePrivate',
        hr: 'hrPrivate1'
    },
    {
        name: 'livePrivate2',
        check: 'cbLeftLivePrivate',
        hr: 'hrPrivate2'
    },
    {
        name: 'livePrivate3',
        check: 'cbLeftLivePrivate',
        hr: 'hrPrivate3'
    },
    {
        name: 'liveHotel1',
        check: 'cbLeftLiveHotel',
        hr: 'hrHotel1'
    },
    {
        name: 'liveHotel2',
        check: 'cbLeftLiveHotel',
        hr: 'hrHotel2'
    },
    {
        name: 'liveHotel3',
        check: 'cbLeftLiveHotel',
        hr: 'hrHotel3'
    },
    {
        name: 'liveGeneral1',
        check: 'cbLeftLiveGeneral',
        hr: 'hrGeneral1'
    },
    {
        name: 'liveGeneral2',
        check: 'cbLeftLiveGeneral',
        hr: 'hrGeneral2'
    }
];

function saveLive() {
    var demCheck = 0 ;
    var dem =0;
    var checkbox = document.getElementsByName('checkbox');
    for (var i = 0; i < checkbox.length; i++){
        if (checkbox[i].checked === true){
            dem++;
            var checkTrue = test.filter((x) => {
            return x.check === checkbox[i].id;
            });
            testNameBlock(checkTrue);
            if(dem > 1){
                document.getElementById("liveHouse").innerHTML = `Loại nơi ở. ${dem}`;
            }else {
                document.getElementById("liveHouse").innerHTML = nameHouse[i];
            }
        }
        else {
            demCheck++;
            if(demCheck === 4) {
                var combonator = document.getElementsByClassName("rowhover");
                for (var y = 0; y < combonator.length; y++) {
                    combonator[y].style.display = 'block';
                }
                var hr = document.getElementsByTagName("hr");
                for (var z = 0; z < hr.length; z++) {
                    hr[z].style.display = 'block';
                }
                document.getElementById("hrFull4").style.display = 'none';
            }
            else {
                var checkFalse = test.filter((x) => {
                    return x.check === checkbox[i].id;
                });
                testNameNone(checkFalse);
            }
        }
        if(dem > 0) {
            document.getElementById("liveHouse").style.border = "2px solid black";
        }
        else {
            document.getElementById("liveHouse").style.border = "1px solid #ccc";
            document.getElementById("liveHouse").innerHTML = "Loại nơi ở";
        }
    }
}

function testNameNone(callback) {
    return callback.filter((y) => {
        return (document.getElementById(y.name).style.display) = 'none' && (document.getElementById(y.hr).style.display = 'none');
    });
}

function testNameBlock(callback) {
    return callback.filter((y) => {
        return (document.getElementById(y.name).style.display = 'block') && (document.getElementById(y.hr).style.display = 'block');
    });
}