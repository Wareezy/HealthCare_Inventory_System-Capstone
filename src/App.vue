<template>
  <main>
    <navBar/>  
    <router-view/>

   <footerComp/>
  </main>
</template>

<script>
import navBar from './components/navBar.vue';
import footerComp from './components/footerComp.vue'

export default{
  components:{
    navBar,
    footerComp
  }
}
</script>
<style>
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
  font-family: arapey;
}

body{
  background-color:	rgb(	229, 229, 229)!important;
  overflow-x: hidden; /* Add this line to remove horizontal scrolling */
  margin: 0;
    padding: 0;
    }
/* nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
