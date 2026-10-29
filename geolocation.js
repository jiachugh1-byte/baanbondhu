// Live GPS - Blue dot - Guwahati
function getLocation(){
 document.getElementById('loc').innerText='Fetching exact GPS...';
 navigator.geolocation.getCurrentPosition(function(pos){
   var lat=pos.coords.latitude, lng=pos.coords.longitude;
   userLL=[lat,lng];
   document.getElementById('loc').innerHTML='✅ LIVE: '+lat.toFixed(6)+', '+lng.toFixed(6)+' | '+pos.coords.accuracy.toFixed(0)+'m';
   L.marker([lat,lng]).addTo(map).bindPopup('📍 YOU HERE<br>'+lat.toFixed(5)+', '+lng.toFixed(5)).openPopup();
   L.circle([lat,lng], {radius:pos.coords.accuracy, color:'#4285F4', fillOpacity:0.1}).addTo(map);
   map.setView([lat,lng], 17);
   log('📍 LIVE GPS Guwahati: '+lat.toFixed(5)+', '+lng.toFixed(5),'blue');
 }, function(e){alert('Allow Location!')}, {enableHighAccuracy:true});
}
setTimeout(getLocation, 1000);