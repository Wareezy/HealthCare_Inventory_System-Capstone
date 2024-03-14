<template lang="">
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
                    <ul class="navbar-nav mx-auto"> <!-- Updated class to mx-auto to center links -->
                        <li class="nav-item active">
                            <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/about">About</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link"    v-if="!$cookies.get('jwt')"  href="/login">Login</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" v-if="!$cookies.get('jwt')"  href="/signup">SignUp</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/products">Products</a>
                        </li>
                        <li class="nav-item" v-if="$cookies.get('jwt')">
    <a class="nav-link" href="/admin">Admin</a>
</li>
<li class="nav-item" v-if="$cookies.get('jwt')">
    <a class="nav-link" href="/profile">Profile</a>
</li>
                        <li class="nav-item">
                            <a class="nav-link" href="/contact">Contact</a>
                        </li>
                        
                    </ul>
                </div>
            </div>
        </nav>
    </div>
</template>
<script>
export default {
    
}
</script>
<style>
     .navbar-green {
            background-color: rgb(3,168,158); 
            padding-bottom: -20px !important;
        }
    nav a{
         /* font-weight: bold !important;  */
        display: inline-block;
     position: relative;
     color: rgb(240, 255, 255) !important; 
     font-size:25px !important;
     text-decoration: none;
     margin: 0 10px;
     transition: color 0.3s ease-in-out;
      }
    
    nav a.router-link-active {
      color: white;
    }
    
      /* nav a:hover {
        color: orangered; 
      }  */
      nav a::after {
     content: '';
     position: absolute;
     width: 100%;
     height: 2px;
     bottom: 0;
     left: 0;
     background-color: 	rgb(204, 204, 255);
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
    #logo{
      width:50px;
      height:50px;
      animation: pulsate 2s infinite;
    }
    #logoImg1{
      
      width:51px;
      height:47px;
    }
    #logoImg2{
    width:45px;
      height:45px;
      margin-top:-1px;
    }
</style>
