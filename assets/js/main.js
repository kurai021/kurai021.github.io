var Vue = require('vue')

import move_layer from './plugin/move-layer'
import memphis from './plugin/memphis'

var home = require('../templates/home.vue')
var aboutme = require('../templates/aboutme.vue')
var services = require('../templates/services.vue')
var contact = require('../templates/contact.vue')

Vue.use(move_layer)
Vue.use(memphis)

new Vue({
  el: '#home',
  render: function(createElement) {
    return createElement(home)
  }
})

new Vue({
  el: '#aboutme',
  render: function(createElement) {
    return createElement(aboutme)
  }
})

new Vue({
  el: '#services',
  render: function(createElement) {
    return createElement(services)
  }
})

new Vue({
  el: '#contact',
  render: function(createElement) {
    return createElement(contact)
  }
})
