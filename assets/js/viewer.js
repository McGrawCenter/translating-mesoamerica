
 	jQuery(document).ready(function(){
 	  jQuery.get("{{m.manifest}}", function(data){
 	    var info = data.sequences[0].canvases[4].images[0].resource.service['@id']+"/info.json";

	    var viewer = OpenSeadragon({
	       id: "viewer",
	       prefixUrl: image_prefix,
	       tileSources:[info]
	    });
 	  });
 	});
