// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'

import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'

import VueAwesomeSwiper from 'vue-awesome-swiper'

Vue.use(MuseUI)
Vue.use(VueAwesomeSwiper)

Vue.config.productionTip = false

Vue.prototype.$http=axios

Vue.filter('time', function(value) {
    value=value*1000
    let date = new Date(value)
    let m = date.getMonth() + 1
    let d = date.getDate()
    let h = date.getHours()
    let i = date.getMinutes()
    let s = date.getSeconds()
    if (m < 10) {
        m = '0' + m
    }
    if (d < 10) {
        d = '0' + d
    }
    if (h < 10) {
        h = '0' + h
    }
    if (i < 10) {
        i = '0' + i
    }
    if (s < 10) {
        s = '0' + s
    }
    var t =m+'-'+d+' '+h+':'+i+':'+s
    return t
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
