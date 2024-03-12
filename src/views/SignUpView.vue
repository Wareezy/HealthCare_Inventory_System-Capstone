<template lang="">
<div class="container mt-5">
    <div id="cardbody" class="card p-3 rounded-lg shadow">
        <h1 id="loginHeader" class="text-center mb-2">Register</h1>
        <div id="registerUser" class="input-container">
            <input type="text"
                   placeholder="First Name"
                   name="firstName"
                   required
                   v-model="firstName"
                   class="form-control mb-3 glowing-input"
            >

            <input type="text"
                   placeholder="Last Name"
                   name="lastName"
                   required
                   v-model="lastName"
                   class="form-control mb-3 glowing-input"
            >

            <select name="userRole" v-model="userRole" class="form-control mb-3 glowing-input">
                <option value="" disabled selected>Select User Role</option>
                <option value="admin">admin</option>
                <option value="user">user</option>
            </select>

            <input type="email"
                   placeholder="Email"
                   name="email"
                   required
                   v-model="email"
                   class="form-control mb-3 glowing-input"
            >

            <input type="password"
                   placeholder="Password"
                   name="password"
                   required
                   v-model="password"
                   class="form-control mb-3 glowing-input"
            >
        </div>

        <button @click="addUser" id="buttonRegister" class="btn btn-primary btn-block">Register</button>
    </div>
</div>

</template>
<script>
import Swal from 'sweetalert2'
export default {
    data(){
        return{
            firstName:'',
            lastName:'',
            userRole:'',
            email:'',
            password:''


        }
    },

    computed:{

     addUser(){
        
        this.$store.dispatch('addUser',this.$data)
        
    }
    


    }
      
     }
    


</script>
<style>
  #registerUser {
  margin-top: 50px;
  margin-left: 90px !important;
}

  .glowing-input {
    animation: glow 1s ease-in-out infinite alternate;
}

@keyframes glow {
    0% {
        box-shadow: 0 0 5px rgba(81, 203, 238, 0.8);
    }
    100% {
        box-shadow: 0 0 20px rgba(81, 203, 238, 0.8);
    }
}


#cardbody{
  max-width: 400px; 
  margin: 0 auto;
  max-height:700px;
}

#buttonRegister {
  background-color: rgb(204, 204, 255);
  color: black;
  font-weight: bold !important;  
  padding: 10px 20px;
  border: none;
  margin-top: 100px;
  margin-left: 120px;
  font-size: 21px;
  width: 130px;
  border-radius: 20px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

#buttonRegister:hover {
  background-color: rgb(3, 168, 158);
  color: white;
}

.input-container {
  margin-top: 100px;
  margin-left: 200px !important;
}

.input-container2 {
  margin-top: 100px;
  margin-left: 120px; 
  padding: 10px !important;
  display: flex;
}

.input-container2 input {
  width: 150px !important;
  margin-right: 10px; 
}

.input-container input {
  margin-right: 10px; 
}

.form-control {
  width: 200px !important;
}

input[type="text"],
input[type="number"] {
  padding: 8px;
  border-radius: 5px;
  border: 1px solid #ccc !important;
  width: 200px;
}
</style>