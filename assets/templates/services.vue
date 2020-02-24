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

    <div v-for="item in services" v-bind:class="item.class">
      <h4>{{item.title}}</h4>
      <p>{{item.text}}</p>
      <i v-bind:class="item.icon"></i>
    </div>


  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "My Services",
      paragraph: "I offer premium services like web frontend with high quality, web apps development and hosting for your website",
      services: [{
          class: "seven columns u-full-width-big services html5",
          title: "Static web development",
          text: "Jekyll/Gatsby/HTML5/JS/CSS3",
          icon: "fab fa-html5 fa-4x"
        },
        {
          class: "five columns u-full-width-big services node-js",
          title: "Backend and web-apps",
          text: "Node.js/Electron/Vue.js/Svelte.js",
          icon: "fab fa-node-js fa-4x"
        },
        {
          class: "five columns u-full-width-big services wordpress",
          title: "CMS based websites",
          text: "Wordpress/Ghost",
          icon: "fab fa-wordpress fa-4x"
        },
        {
          class: "seven columns u-full-width-big services aws",
          title: "Web Hosting",
          text: "AWS",
          icon: "fab fa-aws fa-4x"
        }
      ]
    }
  },
  mounted(){
    const particles = document.querySelectorAll('.layer_memphis')
    this.$memphis.particles(particles);
  }
}
</script>

<style>
.services {
  margin: 5px;
  padding: 50px;
  color: #ffffff;
}

.services h4 {
  color: #ffffff;
}

.services .fab {
  float: right;
  color: rgba(255, 255, 255, 0.6);
  transition: 0.5s;
  -webkit-transition: 0.5s;
  -moz-transition: 0.5s;
  -o-transition: 0.5s;
}

.services:hover .fab {
  color: #ffffff;
}

.html5 {
  background-color: #e34f26;
}

.node-js {
  background-color: #7fbf3d;
}

.wordpress {
  background-color: #207195;
}

.aws {
  background-color: #ff9900
}
</style>
