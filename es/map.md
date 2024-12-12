---
layout: default-es
---
  <!-- Leaflet -->
   <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
     integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
     crossorigin=""/>
   <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"
     integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo="
     crossorigin=""></script>
     
   <style>
   #mapmenu {background: white; font-size:0.8em;padding:0 1em 1em 1em;min-width:200px;}
   #mapmenu ul { margin:0px; padding:0px; }
   #mapmenu ul li { list-style-type:none;; }
   .colorsquare { 
     background-color: #700;
     width: 1rem;
     height: 1rem;
     display: block;
     left: -0.5rem;
     top: 0.3rem;
     position: relative;
     border-radius: 1rem;
     border: 1px solid #FFFFFF;
     display:inline-block;
     margin-right:0.2em;
    }
   .icon {  
     background-color: #EEE;
     width: 2rem;
     height: 2rem;
     display: block;
     left: -1rem;
     top: -1rem;
     position: relative;
     border-radius: 2rem 2rem 0;
     transform: rotate(45deg);
     border: 1px solid #FFFFFF;
     }

    }
   </style>
  
     
     
<div class='container'>
     <div class="row">
	      
		<div class="col-md-12">
<h2>Mapa</h2>

<div class='container'>
  <div class='row'>
    <div class="col-md-8">
    
    
    
    <div id="map" style="width:100%;height:700px;"></div></div>
    <div class="col-md-4"><div id="mapmenu" style="width:100%">
  <ul></ul>
</div></div>
  </div>
</div>

<div id="mapframe" style="display:flex;flex-wrap:nowrap;">


</div>
<script>

jQuery(document).ready(function(){

	const osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
		maxZoom: 19,
		attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
	});

	const map = L.map('map', {
		center: [17.197435967112632, -95.60086982775229],
		zoom: 6,
		layers: [osm]
	});
	
	
	var data = {{ site.data.locations | jsonify }};
	var markers = [];
	
	data.forEach((location, index) => {
	   var myIcon = L.divIcon({className: "my-custom-pin",iconAnchor: [0, 24],labelAnchor: [-6, 0],popupAnchor: [0, -36],html: `<span class='icon' style='background:`+location.Color+`' />`});
	   jQuery("#mapmenu ul").append("<li><span class='colorsquare' style='background:"+location.Color+"'></span><a href='#'class='layer' data-index='"+index+"' data-loc='"+location.Latitude+","+location.Longitude+"'>"+location.Title+"</a></li>");
	   var latlng = [location.Latitude,location.Longitude];
	   var popup = "<h4>"+location.Location+"</h4><br /><a href='{{site.baseurl}}/es/"+location.manifest_identifier+".html'>"+location.Title+"</a>";
	   markers.push(L.marker(latlng, { icon: myIcon }).bindPopup(popup).addTo(map));
	});
	


	jQuery(document).on("click",".layer",function(e){
	  var index = jQuery(this).attr('data-index');
	  //latlng = jQuery(this).attr('data-loc').split(",");
	  var zoom = 14;
	  
	  map.panTo([markers[index]._latlng.lat, markers[index]._latlng.lng]);
	  map.setZoom(zoom);
	  e.preventDefault();
	  console.log();
	  markers[index].openPopup();
	});


});





</script>
  
		</div>
	</div> <!-- /.row -->
</div> <!-- /.container -->


