
var style1 =document.createElement("link");
function checkMap() {
    if(document.getElementById('checkMap').checked) {
        document.getElementById('aside').style.display = 'block';
        style1.remove();
    }
    else {
        document.getElementById('aside').style.display = 'none';

        style1.setAttribute("href","styleCheckMap.css");
        style1.setAttribute("rel","stylesheet");
        style1.setAttribute("type","text/css");
        document.head.appendChild(style1);
    }
}

