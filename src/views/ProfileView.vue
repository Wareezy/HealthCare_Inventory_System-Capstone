<template>
  <div>
     <h1 id="avai">User</h1>
     <div class="row justify-content-center">
       <div class="col-md-4">
         <div class="card my-4 mx-3" v-if="userProfile"  :key="userProfile.currentUser.id">
           <div class="card-body">
             <h5 class="card-title">FIRSTNAME:{{ userProfile.currentUser.firstName }}</h5>
             <h5 class="card-text">LASTNAME:{{ userProfile.currentUser.lastName }}</h5>
             <h5 class="card-text">YOUR ROLE IS A:{{ userProfile.currentUser.userRole }}</h5>
             <h5 class="card-text">EMAIL:{{ userProfile.currentUser.email }}</h5>
             <!-- Do not display the password -->
             <button id="buttonDel" @click="delUser(userProfile.currentUser.id)">Delete</button>
             <button id="buttonEdit" @click="updateUser(userProfile.currentUser.id)">Edit</button>
           </div>
         </div>
         <div v-else>
           <p>No user found</p>
         </div>
       </div>
     </div>
     <div id="inputUser" class="input-container">
      <input type="text" placeholder="first Name" v-model="firstName" class="form-control mb-3">
      <input type="text" placeholder="last Name " v-model="lastName" class="form-control mb-3">
      <input type="text" placeholder="user Role" v-model="userRole" class="form-control mb-3">
      <input type="text" placeholder="email" v-model="email" class="form-control mb-3">
      <input type="text" placeholder="password" v-model="password" class="form-control mb-3">
  </div>
  </div>
 </template>
 
 <script>
 export default {
  components: {
      // spinnerComponent
    },
    // Computed property to access currentUser state from Vuex store
    computed: {
      userProfile() {
        return this.$store.state.currentUser;
      },
    },
    // decode token and set user info on component 
    mounted() {
      this.decodeTokenAndSetUserInfo();
    
    },
    // Method to decode JWT token and set user info in Vuex store
    methods: {
      decodeTokenAndSetUserInfo() {
        // Retrieve token from cookies
        let encode = $cookies.get('token');
        if (encode) {
          // Extract payload from JWT token
          encode = encode.split('.')[1];
          // Decode payload JSON
          const decodedToken = JSON.parse(window.atob(encode));
          console.log(decodedToken);
          // Commit decoded token to Vuex store
          this.$store.commit('setCurrentUser', decodedToken); 
        }
      },

      delUser(id){
        this.$store.dispatch('delUser',id) 
        $cookies.remove('token'); 
        this.$router.push('/login'); 
      },

  updateUser(id){
    let change={
        id:id,
        firstName:this.firstName,
        lastName:this.lastName,
        userRole:this.userRole,
        email:this.email,
        password:this.password
    }
    this.$store.dispatch('updateUser',change);
    this.$router.push('/login'); 
}
},
 };
</script>
 
<style>

#downButton{
    margin-top:120px;
}

@media (max-width: 768px) {
    #inputInventory input {
        width: calc(100% - 20px) !important; 
        margin: 0 10px 10px 0 !important; 
        display: block; 
    }
    #inputUser input{
        width: calc(100% - 20px) !important; 
        margin: 0 10px 10px 0 !important; 
        display: block; 
    }
}
#inputInventory {
    margin-left: 30px;
}
#inputUser{
    /* position: absolute !important; */
    margin-left: 340px !important;
}
#head {
    background-color: rgb(3, 168, 158) !important ;
}
#adminH {
    margin-top: 50px;
}
#adminProd {
    margin-top: 110px;
}
#adminUser {
    margin-top: 110px;
    
}
#addButton {
    margin-top: 100px;
    border-radius: 12px;
}
#logoutButton {
    background-color:red;
    margin-top: 60px;
    margin-right:-1350px;
    border-radius: 12px;
}
#addButton2 {
    margin-top: 100px;
    border-radius: 12px;
}
.input-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.input-container input,
.input-container select {
  margin-right: 10px; /* Adjust the spacing between input fields */
  margin-bottom: 10px; /* Adjust the vertical spacing between input fields */
}

.input-container {
    margin-top: 100px;
    margin-left: 210px;
    display: flex;
    flex-wrap: wrap; /* Allow input fields to wrap */
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
#table {
    margin-top: 100px;
}
/* Style for the buttons */
button {
    background-color: rgb(3, 168, 158);
    color: white;
    padding: 10px 20px;
    border: none;
    cursor: pointer;
    border-radius: 5px;
    margin-right: 5px;
}
button:hover {
    background-color: rgb(3, 168, 158);
}
input[type="text"],
input[type="number"] {
    padding: 8px;
    border-radius: 5px;
    border: 1px solid #ccc !important;
    width: 200px;
}
#pics {
    width: 300px;
    height: 300px;
}
#buttonDel {
  background-color: rgb(3, 168, 158);
    margin-top: 100px;
    border-radius: 12px;
}
#buttonEdit {
  background-color: rgb(3, 168, 158);
    margin-top: 120px;
    border-radius: 12px;
    width: 80px;
}
 </style>