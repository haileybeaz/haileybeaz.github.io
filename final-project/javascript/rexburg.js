function init_map(){var myOptions = {zoom:13,center:new google.maps.LatLng(43.8231096,-111.79242369999997),mapTypeId: google.maps.MapTypeId.ROADMAP};map = new google.maps.Map(document.getElementById('gmap_canvas'), myOptions);marker = new google.maps.Marker({map: map,position: new google.maps.LatLng(43.8231096,-111.79242369999997)});infowindow = new google.maps.InfoWindow({content:'Rexburg, Idaho<br>'});google.maps.event.addListener(marker, 'click', function(){infowindow.open(map,marker);});infowindow.open(map,marker);}google.maps.event.addDomListener(window, 'load', init_map);
