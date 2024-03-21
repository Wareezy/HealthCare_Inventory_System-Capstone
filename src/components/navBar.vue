<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark navbar-green rounded">
      <div class="container">

        <a class="navbar-brand" href="#">
          <img id="logo" src="https://i.ibb.co/2FJ67Fx/med1-removebg-preview.png" class="d-inline-block align-top" alt="">
        </a>

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon text-white"></span>
        </button>

        <!-- Navbar links -->
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav mx-auto">
            <li class="nav-item active">
              <router-link class="nav-link" to="/">Home <span class="sr-only">(current)</span></router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/about">About</router-link>
            </li>
            <li class="nav-item">
              <router-link v-if="!$cookies.get('token')" class="nav-link" to="/login">Login</router-link>
            </li>
            <li class="nav-item">
              <router-link v-if="!$cookies.get('token')" class="nav-link" to="/signup">SignUp</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/products">Products</router-link>
            </li>
            <li class="nav-item" >
              <router-link  v-if="$cookies.get('token') && isAdmin==='admin'"  class="nav-link" to="/admin">Admin</router-link>
            </li>
            <li class="nav-item" v-if="$cookies.get('token')">
              <router-link class="nav-link" to="/profile">Profile</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/contact">Contact</router-link>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>

export default {
computed:{
  isAdmin(){
    return $cookies.get('userRole')
  }
}
}
</script>

<style scoped>
.navbar-green {
  background-color: rgb(3,168,158);
  padding-bottom: -20px !important;
}
nav a {
  display: inline-block;
  position: relative;
  color: rgb(240, 255, 255) !important;
  font-size: 25px !important;
  text-decoration: none;
  margin: 0 10px;
  transition: color 0.3s ease-in-out;
}
nav a.router-link-active {
  color: white !important;
}
nav a::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: rgb(204, 204, 255);
  transform: scaleX(0);
  transform-origin: bottom right;
  transition: transform 0.25s ease-out;
}
nav a:hover::after {
  transform: scaleX(1);
  transform-origin: bottom left;
}
@keyframes pulsate {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.3);
  }
  100% {
    transform: scale(1);
  }
}
#logo {
  width: 50px;
  height: 50px;
  animation: pulsate 2s infinite;
}
#logoImg1 {
  width: 51px;
  height: 47px;
}
#logoImg2 {
  width: 45px;
  height: 45px;
  margin-top: -1px;
}
</style>
