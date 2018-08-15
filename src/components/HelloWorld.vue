<template>
<div class="hello">

  <div v-for="prod in products">
    <h1>{{ prod.name}}</h1>
  </div>
  <!-- <div v-for="proj in projects">
    <h1>{{ proj.title}}</h1>
  </div> -->
</div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      projects: [],
      products: []
    }
  },
  mounted() {
  },
  created: function() {
    this.$http.get("wc/v2/products/categories?consumer_key=ck_7f3cbd2d927fb455c27fc2efafec0cfb33cf32f3&consumer_secret=cs_4463daf8e892627a8a95ea1d4a40c77d9f4ec74d&per_page=99").then(response => {
      for (let product in response.data) {
        this.products.push(response.data[product]);
      }
    }, error => {
      console.error(error);
    });

    this.$http.get('ww/menu').then(response => {
      for (let project in response.data) {
        this.projects.push(response.data[project]);
      }
    }, error => {
      console.error(error);
    });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
