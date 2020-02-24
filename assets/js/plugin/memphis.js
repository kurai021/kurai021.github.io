export default {
  install(Vue){
    Vue.prototype.$memphis = {
      particles: (obj) => {
        for (var i = 0, element; element = obj[i]; i++) {
          element.style.left = Math.random() * (150 - 1) + 1 + "%";
          element.style.top = Math.random() * (50 - 1) + 1 + "%";
        }
        console.log("Memphis is working!");
      }
    }
  }
}
