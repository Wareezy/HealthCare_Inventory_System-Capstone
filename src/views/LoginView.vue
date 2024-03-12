<template>
   <div class="container mt-5">
    <div id="cardbody" class="card p-3 rounded-lg shadow">
        <h1 id="loginHeader" class="text-center mb-2">LOGIN</h1>
        <div id="loginUser">
            <input type="email"
                   placeholder="Email"
                   name="email"
                   required
                   v-model="email"
                   class="form-control mb-3"
            >

            <input type="password"
                   placeholder="Password"
                   name="password"
                   required
                   v-model="password"
                   class="form-control mb-3"
            >
        </div>

        <button @click="loginUser" id="buttonLogin" class="btn btn-primary btn-block">Login</button>
    </div>
</div>


</template>
<script>
export default {
  data(){
    return{
        email:null,
        password:null
    }
  }  ,
  computed:{
    loginUser(){
        console.log('testing')
        this.$store.dispatch('loginUser',this.$data)
    }
  }
}
</script>
<style>

#cardbody{
  max-width: 400px; 
  margin: 0 auto;
}
#buttonLogin {
  background-color: 	rgb(204, 204, 255);
  color: black;
   font-weight: bold !important;  

  padding: 10px 20px;
  border: none;
  margin-top:100px;
  margin-left:120px;
  font-size: 21px;
  width:130px;
  border-radius: 20px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

#buttonLogin:hover {
  background-color: 	rgb(3,168,158);
  color:white;
}
    #loginHeader{
      margin-top:100px;
    }
    #loginUser{
      margin-top:50px;
    margin-left: 80px;
} 


.input-container {
    margin-top: 100px;
    margin-left: 200px !important;

}
.input-container2 {
    margin-top: 100px;
    margin-left: 120px; /* Assuming you wanted no left margin */
    padding: 10px !important;
    display: flex;
}
.input-container2 input {
    width: 150px !important; /* Adjust the width to your desired value */
    margin-right: 10px; /* Adjust the space between input tags */
    /* You can adjust other styles like padding, margin, etc. here */
}
.input-container input {
    margin-right: 10px; /* Adjust spacing between inputs */
}
.form-control {
    width: 200px !important; /* Adjust the width as needed */
}
input[type="text"],
input[type="number"] {
    padding: 8px;
    border-radius: 5px;
    border: 1px solid #ccc !important;
    width: 200px;
}
</style>