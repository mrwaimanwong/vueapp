// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'

Vue.use(VueResource)

Vue.http.options.root = 'https://staging.rextrophies.com/wp-json'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
//   template: `
//     <div id="app">
//       <ul>
//         <li>router-link to="/">Home></router-link</li>
//           <li>router-link to="About">About></router-link</li>
//       </ul>
//     </div>
//   `,
// }).$mount('app')
