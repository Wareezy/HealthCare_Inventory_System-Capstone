<template>
  <!-- Profile display -->
  <div>
     <h1 id="avai">User</h1>
     <div class="row justify-content-center">
       <div class="col-md-4">
         <div class="card my-4 mx-3" v-if="user">
           <div class="card-body">
             <h5 class="card-title">{{ user.firstName }}</h5>
             <p class="card-text">{{ user.lastName }}</p>
             <p class="card-text">{{ user.userRole }}</p>
             <p class="card-text">{{ user.email }}</p>
             <!-- Do not display the password -->
           </div>
         </div>
         <div v-else>
           <p>No user found</p>
         </div>
       </div>
     </div>
  </div>
 </template>
 
 <script>
 export default {
  computed: {
     user() {
       // Assuming the user data is stored in the first element of the users array
       // Adjust this logic based on how your Vuex store is structured
       return this.$store.state.users[19];
     }
  },
  mounted() {
     // Dispatch the getProfile action when the component is mounted
     // Make sure to pass the correct email parameter
     this.$store.dispatch('getProfile', '');
  }
 }
 </script>
 
 <style>
 /* Your styles */
 </style>