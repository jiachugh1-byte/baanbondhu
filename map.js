// BAANBONDHU - Guwahati Exact Map - No API Key - Names stay on zoom
var map = L.map('map').setView([26.1445, 91.7362], 14);

var osmFr = L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
  maxZoom:19,
  attribution:'OSM France HOT - No API Key - Guwahati'
}).addTo(map);

osmFr.on('tileerror', function(){
  map.removeLayer(osmFr);
  L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', {maxZoom:19}).addTo(map);
  L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}', {maxZoom:19}).addTo(map);
  document.getElementById('loc').innerText='ESRI Fallback - No API Key';
});

map.on('zoomend', function(){
  var z=map.getZoom();
  document.getElementById('loc').innerText='Zoom: '+z+' - Street names visible at 16-18';
});

var userLL=[26.1445,91.7362];
function log(m,c){document.getElementById('log').innerHTML='<div style="border-left:4px solid '+c+';padding:5px;margin:3px;background:white">'+new Date().toLocaleTimeString()+' - '+m+'</div>'+document.getElementById('log').innerHTML;}