<template lang="html">
  <div class="wrapper">
    <img class="layer_memphis" src="assets/images/particles/1.png" alt="">
    <img class="layer_memphis" src="assets/images/particles/2.png" alt="">
    <img class="layer_memphis" src="assets/images/particles/3.png" alt="">
    <img class="layer_memphis" src="assets/images/particles/4.png" alt="">
    <img class="layer_memphis" src="assets/images/particles/5.png" alt="">
    <img class="layer_memphis" src="assets/images/particles/6.png" alt="">
    <img class="layer_memphis" src="assets/images/particles/7.png" alt="">
    <img class="layer_memphis" src="assets/images/particles/8.png" alt="">
    <img class="layer_memphis" src="assets/images/particles/9.png" alt="">
    <img class="layer_memphis" src="assets/images/particles/10.png" alt="">
    <img class="layer_memphis" src="assets/images/particles/11.png" alt="">
    <img class="layer_memphis" src="assets/images/particles/12.png" alt="">
    <img class="layer_memphis" src="assets/images/particles/13.png" alt="">
    <img class="layer_memphis" src="assets/images/particles/14.png" alt="">
    <img class="layer_memphis" src="assets/images/particles/15.png" alt="">
    <img class="layer_memphis" src="assets/images/particles/16.png" alt="">
    <img class="layer_memphis" src="assets/images/particles/17.png" alt="">
    <img class="layer_memphis" src="assets/images/particles/18.png" alt="">

    <h2>{{title}}</h2>
    <p>{{paragraph}}</p>

    <div class="six columns u-full-width">
      <div id="map"></div>
    </div>

    <div class="six columns u-full-width transparent">

<div id="mc_embed_signup">
<form action="https://rhcloud.us9.list-manage.com/subscribe/post?u=24d457aa0b64091c1e98f7e57&amp;id=498aac46f5" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
    <div id="mc_embed_signup_scroll">
<div class="indicates-required"><span class="asterisk">*</span> indicates required</div>
<div class="mc-field-group">
	<label for="mce-EMAIL">Email Address  <span class="asterisk">*</span>
</label>
	<input type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL">
</div>
<div class="mc-field-group">
	<label for="mce-FNAME">First Name </label>
	<input type="text" value="" name="FNAME" class="" id="mce-FNAME">
</div>
<div class="mc-field-group">
	<label for="mce-LNAME">Last Name </label>
	<input type="text" value="" name="LNAME" class="" id="mce-LNAME">
</div>
<div class="mc-field-group size1of2">
	<label for="mce-MMERGE3">Phone Number </label>
	<input type="text" name="MMERGE3" class="" value="" id="mce-MMERGE3">
</div>
<div class="mc-field-group size1of2">
	<label for="mce-MMERGE4">Service Requested </label>
	<select name="MMERGE4" class="" id="mce-MMERGE4">
	<option value="Static web design">Static web design</option>
<option value="CMS based web development">CMS based web development</option>
<option value="Backend">Backend</option>
<option value="Web Hosting">Web Hosting</option>

	</select>
</div>
<div class="mc-field-group">
	<label for="mce-MMERGE5">Message</label>
	<textarea name="MMERGE5" class="boxsizingBorder" id="mce-MMERGE5" rows="8" cols="80"></textarea>
</div>
	<div id="mce-responses" class="clear">
		<div class="response" id="mce-error-response" style="display:none"></div>
		<div class="response" id="mce-success-response" style="display:none"></div>
	</div>    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
    <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_24d457aa0b64091c1e98f7e57_498aac46f5" tabindex="-1" value=""></div>
    <div class="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button"></div>
    </div>
</form>
</div>


    </div>
  </div>
</template>

<script>
import mapboxgl from '../../node_modules/mapbox-gl/dist/mapbox-gl.js'
export default {
  data() {
    return {
      title: "Contact me!",
      paragraph: "If you think that I'm suitable for you project, feel free to get in touch."
    }
  },
  methods: {
    mapboxInit() {
      mapboxgl.accessToken = 'pk.eyJ1Ijoia3VyYWkwMjEiLCJhIjoiY2ptbTRnMWsxMDBkeTN2cXhlaWM2aXJ0OSJ9.KI3udYVSC-oXgNueokCw0g';
      var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/navigation-preview-day-v4',
        center: [-81.0151318, 8.1183],
        zoom: 14,
        pitch: 45,
        bearing: -17.6,
        // causes pan & zoom handlers not to be applied, similar to
        // .dragging.disable() and other handler .disable() funtions in Leaflet.
        interactive: false
      });

      var geojson = {
        type: 'FeatureCollection',
        features: [{
          type: 'Feature',
          geometry: {
            type: 'Point',
            coordinates: [-81.0151318, 8.1183]
          },
          properties: {
            title: 'My Address',
            description: 'Los Algarrobos, Santiago'
          }
        }]
      };

      geojson.features.forEach(function(marker) {

        // create a HTML element for each feature
        var el = document.createElement('div');
        el.className = 'marker';

        // make a marker for each feature and add to the map

        new mapboxgl.Marker(el)
          .setLngLat(marker.geometry.coordinates)
          .setPopup(new mapboxgl.Popup({
              offset: 25
            }) // add popups
            .setHTML('<h3>' + marker.properties.title + '</h3><p>' + marker.properties.description + '</p>'))
          .addTo(map);
      });

      map.on('load', function() {
        // Insert the layer beneath any symbol layer.
        var layers = map.getStyle().layers;

        var labelLayerId;
        for (var i = 0; i < layers.length; i++) {
          if (layers[i].type === 'symbol' && layers[i].layout['text-field']) {
            labelLayerId = layers[i].id;
            break;
          }
        }

        map.addLayer({
          'id': '3d-buildings',
          'source': 'composite',
          'source-layer': 'building',
          'filter': ['==', 'extrude', 'true'],
          'type': 'fill-extrusion',
          'minzoom': 15,
          'paint': {
            'fill-extrusion-color': '#aaa',

            // use an 'interpolate' expression to add a smooth transition effect to the
            // buildings as the user zooms in
            'fill-extrusion-height': [
              "interpolate", ["linear"],
              ["zoom"],
              15, 0,
              15.05, ["get", "height"]
            ],
            'fill-extrusion-base': [
              "interpolate", ["linear"],
              ["zoom"],
              15, 0,
              15.05, ["get", "min_height"]
            ],
            'fill-extrusion-opacity': .6
          }
        }, labelLayerId);
      });


    }
  },
  mounted() {
    this.mapboxInit()
    const particles = document.querySelectorAll('.layer_memphis')
    this.$memphis.particles(particles);
  }
}
</script>

<style>
#map {
  z-index: 0;
  position: initial;
  width: 100%;
  height: 600px;
}

.marker {
  background-image: url('assets/images/point.png');
  background-size: cover;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;
  z-index: 0;
}

.mapboxgl-popup {
  max-width: 200px;
}

.mapboxgl-popup-content {
  text-align: center;
}

.u-full {
  width: 100%;
}

#mc_embed_signup .mc-field-group {
  padding-bottom: 1.5%;
}

#mc_embed_signup .mc-field-group textarea {
  width: 100%;
  resize: none;
}

@media screen and (min-width:550px) {
  .margin-fix {
    margin-left: 4%;
  }
}
</style>
