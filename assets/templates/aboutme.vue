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

    <div class="six columns u-full-width transparent">
      <h2>{{title}}</h2>
      <p v-for="item in paragraph" v-html="item.text"></p>
      <p class="center">
        <a class="button contactpage">Contact me!</a>
      </p>
    </div>

    <div class="six columns u-full-width facts-container">

      <div v-for="item in facts" class="six columns u-full-width-big counter fact" v-bind:id="item.color">

        <i v-bind:class="item.figure"></i><br>
        <ICountUp
        :startVal="item.startVal"
        :endVal="item.endVal"
        :decimals="item.decimals"
        :duration="item.duration"
        :options="item.options"
        @ready="onReady"
      />
        <h4>{{item.title}}</h4>

      </div>
    </div>

  </div>
</template>

<script>
import ICountUp from '../../node_modules/vue-countup-v2/dist/vue-countup.js';
export default {
  components: {
    ICountUp
  },
  data() {
    return {
      title: "About me",
      paragraph: [{
          text: "I am a UI / UX designer and web developer with <strong>more than 5 years of experience</strong> creating friendly interfaces and new experiences both on desktop and mobile. I am a person who likes to experiment with new technology, from virtual reality to electronic, always using the web as the medium."
        },
        {
          text: "During my professional experience I have also done conventional projects such as <strong>corporate web design</strong> for different local and international brands, from static webs with Jekyll to more complex corporate pages using Wordpress."
        },
        {
          text: "I have also participated as a volunteer for different projects related to the web such as <strong>Tor, DuckDuckGo and Mozilla</strong>, the latter with a more marked presence and in which occasionally I am still collaborating."
        },
        {
          text: "I am currently embarking on a new path as a freelance, I am interested in working for individuals or companies, I am also open to work in web agencies."
        },
        {
          text: "If you want <strong>an incredible design that stands out from others</strong> or your idea requires a web application available for different platforms, I am the right person for your project."
        }
      ],
      facts: [{
          startVal: 0,
          endVal: 10000,
          decimals: 0,
          duration: 5.0,
          options: {
            useEasing: true,
            useGrouping: true,
            separator: ',',
            decimal: '.',
            prefix: '',
            suffix: '+'
          },
          color: "purple",
          figure: "far fa-clock fa-3x",
          title: "Work hours"
        },
        {
          startVal: 0,
          endVal: 30,
          decimals: 0,
          duration: 5.0,
          options: {
            useEasing: true,
            useGrouping: true,
            separator: ',',
            decimal: '.',
            prefix: '',
            suffix: '+'
          },
          color: "pink",
          figure: "fas fa-laptop-code fa-3x",
          title: "Completed projects"
        },
        {
          startVal: 0,
          endVal: 4000,
          decimals: 0,
          duration: 5.0,
          options: {
            useEasing: true,
            useGrouping: true,
            separator: ',',
            decimal: '.',
            prefix: '',
            suffix: '+'
          },
          color: "yellow",
          figure: "fas fa-coffee fa-3x",
          title: "Coffee cups"
        },
        {
          startVal: 0,
          endVal: 3,
          decimals: 0,
          duration: 5.0,
          options: {
            useEasing: true,
            useGrouping: true,
            separator: '',
            decimal: '.',
            prefix: '',
            suffix: '+'
          },
          color: "green",
          figure: "fas fa-award fa-3x",
          title: "Awards"
        }

      ]
    }
  },
  methods: {
    onReady: function(instance, CountUp) {
      const that = this;
      instance.update(that.endVal + 100);
    }
  },
  mounted(){
    const particles = document.querySelectorAll('.layer_memphis')
    this.$memphis.particles(particles);
  }
}
</script>

<style>
.center {
  text-align: center !important;
}

.transparent {
  background-color: rgba(250, 247, 247, 0.7)
}

.facts-container {
  display: table;
  padding: 30px;
}

.facts-container .fact {
  color: #ffff;
  display: table-cell;
  max-height: 20em;
  text-align: center;
  padding: 100px 0px;
  margin: 5px;
}

.facts-container #purple {
  background-color: #41228e;
}

.facts-container #pink {
  background-color: #f23a97;
}

.facts-container #yellow {
  background-color: #ffc843;
}

.facts-container #green {
  background-color: #22c1b5;
}

.facts-container .fact span {
  font-size: 1.5rem;
  font-weight: 700;
  padding: 5px 0;
  position: relative;
  display: block;
}

.facts-container .fact h4 {
  color: #fff;
  font-weight: 900;
}
</style>
