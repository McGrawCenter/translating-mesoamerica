---
layout: default-es
---

<div class='container'>
     <div class="row">
	      
		<div class="col-md-12">


<p style="margin-bottom:0px;"><span class='dropcap'>E</span>ste sitio web presenta transcripciones y traducciones de manuscritos en náhuatl de la Colección Garrett-Gates, Garrett y Mesoamericana de la Biblioteca de la Universidad de Princeton. Dichas colecciones incluyen manuscritos pictóricos, mapas, historias, catecismos y documentos territoriales escritos en lenguas mesoamericanas (como lenguas mayas, otomí y náhuatl), español y latín, y representan uno de los repositorios más importantes en los Estados Unidos que documenta la herencia indígena y la cultura colonial de México y Centroamérica. La mayoría de los documentos fueron recopilados por William Gates y Robert Garrett, quienes dedicaron su vida a compilar este rico corpus con el fin de ampliar los estudios sobre los aspectos lingüísticos y culturales de los pueblos indígenas de América Latina. El propósito de este sitio es hacer que la colección sea comprensible para aquellos que tal vez no conozcan lenguas indígenas, promover el estudio de las culturas mesoamericanas y proporcionar información contextual y lingüística de los manuscritos en náhuatl más destacados de las colecciones.</p>
<p style="text-align:right;margin:0px;"></p>


<div class='blurb'>
<h3>Nota sobre los traductores:</h3>
<p>El trabajo de traducción es un proceso que está siendo continuamente revisado y enmendado. Sin embargo, quiero reconocer el gran trabajo realizado por Humberto Iglesias Tepec, quien proporcionó la versión inicial de todas las traducciones al español de los manuscritos y algunas al inglés. Alanna Radlo-Dzur ha contribuido también de manera importante con sus traducciones al inglés. Asimismo, Catalina Cruz de la Cruz realizó la versión inicial de la mayoría de las transcripciones. Daniel Dominguez y Alex Hue colaboraron también con las transcripciones de varios de los documentos legales del proyecto.</p>
<p style='text-align:right'>-Nadia Cervantes Pérez</p>
</div>


		</div>
	</div> <!-- /.row -->
	
	
     <div class="row" style='margin-top:2em;'>
	      
		<div class="col-md-12">
		
		  <div>
		   <h2 class="section-title">Historia</h2>
		  </div>

		      <div class="gallery">
			{% for manifest in site.data.manifests %}
			
			   {% if manifest.type == 'History' %}
				<a href="{{ manifest.identifier }}.html" class="gallery-item">
				  <div class='gallery-item-img' style='background-image:url({{ manifest.thumbnail }});background-position: center;background-size: cover;'></div>
				  <div class='gallery-item-content'>
					  <h3>{{ manifest.title_es }}</h3>
					  <p style="text-decoration:none;color:black;border-bottom:none;">{{ manifest.description_es }}</p>

				  </div>
				</a>
			   {% endif %} 
			{% endfor %}
 
		     </div>
		     
		     <hr />
		     
		   <h2 class="section-title">Documentos legales</h2>

		      <div class="gallery">
			{% for manifest in site.data.manifests %}
			
			   {% if manifest.type == 'Legal' or manifest.type == 'Legal / Land tenure' %}
				<a href="{{ manifest.identifier }}.html" class="gallery-item">
				  <div class='gallery-item-img' style='background-image:url({{ manifest.thumbnail }});background-position: center;background-size: cover;'></div>
				  <div class='gallery-item-content'>
					  <h3>{{ manifest.title_es }}</h3>
					  <p style="text-decoration:none;color:black;border-bottom:none;">{{ manifest.description_es }}</p>

				  </div>
				</a>
			   {% endif %} 
			{% endfor %}
 
		     </div>
		     
		     
		     <hr />
		     
		   <h2 class="section-title">Mapas</h2>

		      <div class="gallery">
			{% for manifest in site.data.manifests %}
			
			   {% if manifest.type == 'Legal / Map' or manifest.type == 'Map' %}
				<a href="{{ manifest.identifier }}.html" class="gallery-item">
				  <div class='gallery-item-img' style='background-image:url({{ manifest.thumbnail }});background-position: center;background-size: cover;'></div>
				  <div class='gallery-item-content'>
					  <h3>{{ manifest.title_es }}</h3>
					  <p style="text-decoration:none;color:black;border-bottom:none;">{{ manifest.description_es }}</p>

				  </div>
				</a>
			   {% endif %} 
			{% endfor %}
 
		     </div>
		
		
		     <hr />
		     
		   <h2 class="section-title">Religión</h2>

		      <div class="gallery">
			{% for manifest in site.data.manifests %}
			
			   {% if manifest.type == 'Religious' %}
				<a href="{{ manifest.identifier }}.html" class="gallery-item">
				  <div class='gallery-item-img' style='background-image:url({{ manifest.thumbnail }});background-position: center;background-size: cover;'></div>
				  <div class='gallery-item-content'>
					  <h3>{{ manifest.title_es }}</h3>
					  <p style="text-decoration:none;color:black;border-bottom:none;">{{ manifest.description_es }}</p>

				  </div>
				</a>
			   {% endif %} 
			{% endfor %}
 
		     </div>

		</div>
	</div> <!-- /.row -->	
	
     <div class="row">
	      
		<div class="col-md-6">


			<a href="map.html"><h2 class='section-title'>Mapa</h2></a>
			<p><a href="map.html">El mapa</a> muestra la distribución geográfica aproximada de los lugares en donde se escribieron los manuscritos o los lugares que se mencionan en ellos, la mayoría de ellos ubicados en la zona central de México.</p>

		</div>
		
		<div class="col-md-6">


			<a href="alphabet.html"><h2 class='section-title'>Alfabeto</h2></a>
			
			<p><a href="alphabet.html">En esta sección</a> se muestran ejemplos de cada una de las letras del alfabeto en los manuscritos. Esto tiene como propósito facilitar la lectura de éstos y su análisis.</p>


		</div>		
	</div> <!-- /.row -->	
	
</div>




