---
layout: default-en
lang: en
---

<div class='container'>
     <div class="row">
	      
		<div class="col-md-12">


<p style="margin-bottom:0px;"><span class='dropcap'>T</span>his website features transcriptions and translations of manuscripts in Nahuatl from the Princeton University Library’s Garrett-Gates, Garrett, and Mesoamerican Collection. The collections include pictorial manuscripts, maps, histories, catechisms, and land documents written in Mesoamerican languages (such as Mayan languages, Otomí, and Nahuatl), Spanish, and Latin and it is one of the most important repositories in the US that documents the Indigenous heritage and colonial culture of Mexico and Central America. The majority of the documents were collected by William Gates and Robert Garrett who dedicated their lives to compile this rich corpus in order to further scholarship about linguistic and cultural aspects of Indigenous peoples from Latin America. The purpose of this site is to make the collection legible to those who might not know Indigenous languages, to promote the study of Mesoamerican cultures, and to provide contextual and linguistic information of the most prominent manuscripts in Nahuatl from the collection.</p>


<div class='blurb'>

<h3>Note about the translators:</h3>

<p>The work of translating these manuscripts is a process that is continuously being reviewed and amended. However, I want to acknowledge the great work done by Humberto Iglesias Tepec, who provided the initial version of all the Spanish translations and some of the English ones. Alanna Radlo-Dzur has also made significant contributions with her English translations. Similarly, Catalina Cruz de la Cruz completed the initial version of most of the transcriptions. Daniel Dominguez and Alex Hue also collaborated on the transcriptions of several legal documents for the project.</p>
<p style='text-align:right'>-Nadia Cervantes Pérez</p>
</div>


		</div>
	</div> <!-- /.row -->
	
	
     <div class="row" style='margin-top:2em;'>
	      
		<div class="col-md-12">
		
		  <div>
		   <h2 class="section-title">History</h2>
		  </div>

		      <div class="gallery">
			{% for manifest in site.data.manifests %}
			
			   {% if manifest.type == 'History' %}
				<a href="{{ manifest.identifier }}.html" class="gallery-item">
				  <div class='gallery-item-img' style='background-image:url({{ manifest.thumbnail }});background-position: center;background-size: cover;'></div>
				  <div class='gallery-item-content'>
					  <h3>{{ manifest.title }}</h3>
					  <p style="text-decoration:none;color:black;border-bottom:none;">{{ manifest.description }}</p>

				  </div>
				</a>
			   {% endif %} 
			{% endfor %}
 
		     </div>
		     
		     <hr />
		     
		   <h2 class="section-title">Legal / Land Tenure</h2>

		      <div class="gallery">
			{% for manifest in site.data.manifests %}
			
			   {% if manifest.type == 'Legal' or manifest.type == 'Legal / Land tenure' %}
				<a href="{{ manifest.identifier }}.html" class="gallery-item">
				  <div class='gallery-item-img' style='background-image:url({{ manifest.thumbnail }});background-position: center;background-size: cover;'></div>
				  <div class='gallery-item-content'>
					  <h3>{{ manifest.title }}</h3>
					  <p style="text-decoration:none;color:black;border-bottom:none;">{{ manifest.description }}</p>

				  </div>
				</a>
			   {% endif %} 
			{% endfor %}
 
		     </div>
		     
		     
		     <hr />
		     
		   <h2 class="section-title">Maps</h2>

		      <div class="gallery">
			{% for manifest in site.data.manifests %}
			
			   {% if manifest.type == 'Legal / Map' or manifest.type == 'Map' %}
				<a href="{{ manifest.identifier }}.html" class="gallery-item">
				  <div class='gallery-item-img' style='background-image:url({{ manifest.thumbnail }});background-position: center;background-size: cover;'></div>
				  <div class='gallery-item-content'>
					  <h3>{{ manifest.title }}</h3>
					  <p style="text-decoration:none;color:black;border-bottom:none;">{{ manifest.description }}</p>

				  </div>
				</a>
			   {% endif %} 
			{% endfor %}
 
		     </div>
		
		
		     <hr />
		     
		   <h2 class="section-title">Religious</h2>

		      <div class="gallery">
			{% for manifest in site.data.manifests %}
			
			   {% if manifest.type == 'Religious' %}
				<a href="{{ manifest.identifier }}.html" class="gallery-item">
				  <div class='gallery-item-img' style='background-image:url({{ manifest.thumbnail }});background-position: center;background-size: cover;'></div>
				  <div class='gallery-item-content'>
					  <h3>{{ manifest.title }}</h3>
					  <p style="text-decoration:none;color:black;border-bottom:none;">{{ manifest.description }}</p>

				  </div>
				</a>
			   {% endif %} 
			{% endfor %}
 
		     </div>

		</div>
	</div> <!-- /.row -->	
	
     <div class="row">
	      
		<div class="col-md-6">


			<a href="map.html"><h2 class='section-title'>Map</h2></a>
			
			<p><a href="map.html">The map</a> shows the approximate geographical distribution of the places where the manuscripts were composed or the places mentioned in them, most of which are located in the central region of Mexico.</p>


		</div>
		
		<div class="col-md-6">


			<a href="map.html"><h2 class='section-title'>Alphabet</h2></a>
			<p><a href="alphabet.html">This section</a> displays examples of each letter of the alphabet found in the manuscripts with the purpose of facilitating their reading and analysis.</p>

		</div>		
	</div> <!-- /.row -->	
	
</div>




