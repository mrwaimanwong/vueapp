<template>
  <div class="hello">

  <div v-for="proj in projects">
    <h1>{{ proj.title}}</h1>
  </div>
</div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      projects: [],
      products: []
    }
  },
  created: function(){
    this.$http.get('ww/menu').then(response => {
      console.log(response);
      for(let project in response.data){
        this.projects.push(response.data[project]);
      }
    }, error => {
      alert(error);
    });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
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
