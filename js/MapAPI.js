var map;
var goldenPlace = {lat: 21.012033, lng: 105.775165};
var keangNam = {lat: 21.017822, lng: 105.783340};
var SongDa = {lat: 21.018487, lng: 105.780691};
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 21.0230775, lng: 105.7861629},
        zoom: 13,
        scrollwheel: true
    });
    var markerGoldenPlace = new google.maps.Marker({position: goldenPlace, map: map});
    var markerKeangNam= new google.maps.Marker({position: keangNam, map: map});
    var markerSongDa= new google.maps.Marker({position: SongDa, map: map});
}
