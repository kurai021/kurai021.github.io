<template lang="html">
  <div class="wrapper">

    <img id="bg" src="assets/images/layer2.png" alt="">
    <div class="ten columns u-full-width v-middle-parent">
      <div class="v-middle">
        <h4>{{ greetings }}</h4>
        <h1>
          <span :data-typedtext="title"></span>
          <span class='cursor'>|</span>
        </h1>
        <h3>{{ subtitle }}</h3>
        <ul class="social">
          <li v-for="item in social">
            <a v-bind:href="item.link" :class="item.color" target="_blank">
              <i v-bind:class="item.icon"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      picture: "assets/images/me.png",
      greetings: "Hi there!",
      title: "My name is Richard",
      subtitle: "I'm a Web/UX Designer",
      contact: "Contact me!",
      social: [{
          icon: "fab fa-twitter fa-2x",
          color: "button twitter",
          link: "https://twitter.com/kurai021"
        },
        {
          icon: "fab fa-linkedin fa-2x",
          color: "button linkedin",
          link: "https://www.linkedin.com/in/richard-alexander-armuelles-zeballos-2277b63b/"
        },
        {
          icon: "fab fa-dribbble fa-2x",
          color: "button dribbble",
          link: "https://dribbble.com/kurai021"
        },
        {
          icon: "fab fa-github fa-2x",
          color: "button github",
          link: "https://github.com/kurai021"
        },
        {
          icon: "fa fa-envelope fa-2x",
          color: "button email",
          link: "mailto:alexanderarmuelles@riseup.net"
        }
      ],
      speed: 100
    }
  },
  methods: {
    playing: function(elements, elementIndex, textIndex) {
      if (elementIndex == elements.length) {
        return;
      }
      var element = elements[elementIndex];
      if (textIndex == element.dataset.typedtext.length) {
        setTimeout(this.playing, this.speed, elements, elementIndex + 1, 0);
      } else {
        element.textContent += element.dataset.typedtext[textIndex];
        setTimeout(this.playing, this.speed, elements, elementIndex, textIndex + 1);
      }
    },
    playSequential: function(elements) {
      this.playing(elements, 0, 0);
    },
    playParallel: function(elements) {
      for (var i = 0; i < elements.length; ++i) {
        this.playing([elements[i]], 0, 0);
      }
    }
  },
  mounted() {
    const bg = document.getElementById("bg")
    this.$move.layer(bg);

    var spans = this.$el.querySelectorAll("span[data-typedtext]");
    this.playSequential(spans);
  }
}
</script>

<style>
.cursor {
  font-weight: 100;
  font-size: 6.5em;
  -webkit-animation: 1s blink step-end infinite;
  -moz-animation: 1s blink step-end infinite;
  -ms-animation: 1s blink step-end infinite;
  -o-animation: 1s blink step-end infinite;
  animation: 1s blink step-end infinite;
}

.title-mov {
  color: transparent !important;
  background: url("assets/images/test.png") repeat;
  background-position: 40% 50%;
  -webkit-background-clip: text;
}

.social {
  margin-left: auto;
  margin-right: auto;
}

.social li {
  display: inline-block;
  margin: 0 10px;
}

.social li a {
  box-shadow: none;
  padding: 20px;
  width: 5em;
  height: 5em;
  border: none;
}

.social li .twitter {
  background-color: #1dcaff;
}

.social li .linkedin {
  background-color: #0077B5;
}

.social li .dribbble {
  background-color: #ea4c89;
}

.social li .github {
  background-color: #333333;
}

.social li .phone {
  background-color: #92cf14;
}

.social li .email {
  background-color: #f0951d;
}

@keyframes "blink" {
  from,
  to {
    color: transparent;
  }
  50% {
    color: black;
  }
}

@-moz-keyframes blink {
  from,
  to {
    color: transparent;
  }
  50% {
    color: black;
  }
}

@-webkit-keyframes "blink" {
  from,
  to {
    color: transparent;
  }
  50% {
    color: black;
  }
}

@-ms-keyframes "blink" {
  from,
  to {
    color: transparent;
  }
  50% {
    color: black;
  }
}

@-o-keyframes "blink" {
  from,
  to {
    color: transparent;
  }
  50% {
    color: black;
  }
}

@media screen and (min-width: 1000px) {
  .v-middle-parent {
    position: relative;
  }

  .v-middle {
    position: absolute;
    top: 50%;
    transform: translateY(50%);
  }
}

@media screen and (max-width: 500px) {
  .social li a {
    width: 6em;
    height: 6em;
    padding: 25px;
  }
}
</style>
