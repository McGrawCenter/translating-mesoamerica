---
layout: default-es
---
<style>
  #alphabet-nav { margin:1em 0 1em 0; padding: 0px; }
  #alphabet-nav a { display:inline-block;padding: 0.2em 0.5em; margin: 0.1em; }
  .alphabet-item { display:flex; flex-direction:row; flex-wrap:nowrap; }
  .alphabet-item-img img { width:120px; margin:0.5em; }
  .alphabet-item-img img { margin:0.5em; }
</style>
     
<div class='container'>
     <div class="row">
	      
       <div class="col-md-12">
		<h2>Alfabeto</h2>

		
		<div id="alphabet-nav">
		    <a href="#" rel="a" class='letter btn btn-primary'>A</a>
		    <a href="#" rel="b" class='letter btn btn-primary'>B</a>
		    <a href="#" rel="c" class='letter btn btn-primary'>C</a>
		    <a href="#" rel="d" class='letter btn btn-primary'>D</a>
		    <a href="#" rel="e" class='letter btn btn-primary'>E</a>
		    <a href="#" rel="f" class='letter btn btn-primary'>F</a>
		    <a href="#" rel="g" class='letter btn btn-primary'>G</a>
		    <a href="#" rel="h" class='letter btn btn-primary'>H</a>
		    <a href="#" rel="i" class='letter btn btn-primary'>I</a>
		    <a href="#" rel="j" class='letter btn btn-primary'>J</a>
		    <a href="#" rel="l" class='letter btn btn-primary'>L</a>
		    <a href="#" rel="m" class='letter btn btn-primary'>M</a>
		    <a href="#" rel="mi" class='letter btn btn-primary'>Mi</a>
		    <a href="#" rel="n" class='letter btn btn-primary'>N</a>
		    <a href="#" rel="o" class='letter btn btn-primary'>O</a>
		    <a href="#" rel="p" class='letter btn btn-primary'>P</a>
		    <a href="#" rel="q" class='letter btn btn-primary'>Q</a>
		    <a href="#" rel="r" class='letter btn btn-primary'>R</a>
		    <a href="#" rel="s" class='letter btn btn-primary'>S</a>
		    <a href="#" rel="t" class='letter btn btn-primary'>T</a>
		    <a href="#" rel="u" class='letter btn btn-primary'>U</a>
		    <a href="#" rel="v" class='letter btn btn-primary'>V</a>
		    <a href="#" rel="w" class='letter btn btn-primary'>W</a>
		    <a href="#" rel="x" class='letter btn btn-primary'>X</a>
		    <a href="#" rel="y" class='letter btn btn-primary'>Y</a>
		    <a href="#" rel="z" class='letter btn btn-primary'>Z</a>
		</div>

		<div ID="alphabet-list">
		
		<!--
			{% for letter in site.data.alphabet %}


			    
			{% endfor %}
		-->
		</div>
		
		
		<script>
		jQuery(document).ready(function(){
		 var list =  {{site.data.alphabet | jsonify }};;


		function loadList(letter) {
		  var html = "";
		  jQuery.each(list, function(i,v){
		    jQuery("#alphabet-list").empty();
		    if(v.letter == letter) {
		       html += "<div class='alphabet-item'><div class='alphabet-item-img'><img src='{{site.baseurl}}/assets/images/alphabet/"+v.image+"'/></div>\
				  <div class='alphabet-item-content'>\
					  <h3>"+v.letter+" "+v.case+"</h3>\
					  <a href='{{site.baseurl}}/"+v.identifier+".html'>"+v.manuscript+"</a>\
				  </div></div>";
		    }
		  });
		  jQuery("#alphabet-list").append(html);
		}
		
		
		 jQuery(".letter").click(function(event){
		   var rel = jQuery(this).attr('rel');
		   loadList(rel)
		   event.preventDefault();
		 });
		 
		 loadList('a')
		 
		});
		
		</script>

  
        </div>
	</div> <!-- /.row -->
</div> <!-- /.container -->


