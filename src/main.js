// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import WooCommerceAPI from 'woocommerce-api'

Vue.use(VueResource)
// Vue.use(WooCommerceAPI)

const WooCommerce = new WooCommerceAPI({
  url: 'https://staging.rextrophies.com',
  consumerKey: 'ck_7f3cbd2d927fb455c27fc2efafec0cfb33cf32f3',
  consumerSecret: 'cs_4463daf8e892627a8a95ea1d4a40c77d9f4ec74d',
  wpAPI: true,
  version: 'wc/v2',
  queryStringAuth: true
});
WooCommerce.get('products/categories', function(err, data, res) {
  console.log(res);
});

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
