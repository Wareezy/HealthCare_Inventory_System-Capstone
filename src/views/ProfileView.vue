<template>
    <div>
        <div id="inputUser" class="input-container">
      <input type="text" placeholder="first Name" v-model="firstName" class="form-control mb-3">
      <input type="text" placeholder="last Name " v-model="lastName" class="form-control mb-3">
      <input type="text" placeholder="user Role" v-model="userRole" class="form-control mb-3">
      <input type="text" placeholder="email" v-model="email" class="form-control mb-3">
      <input type="text" placeholder="password" v-model="password" class="form-control mb-3">
  </div>


  <div class="container">
      <!-- Add Product Section -->
      <div class="input-container">
          <!-- Input fields for adding products -->
      </div>
      <!-- Products Table -->
      <h2 id="adminUser">Users Table</h2>
      <div class="table-responsive">
          <table class="table ">
              <thead id="head">
                  <tr>
                      <th>ID</th>
                      <th>FIRSTNAME</th>
                      <th>LASTNAME</th>
                      <th>USERROLE</th>
                      <th>EMAIL</th>
                      <th>PASSWORD</th>
                      <th></th>
                      <th></th>
                  </tr>
              </thead>
              <tbody>
                  <tr v-for="person in $store.state.users" :key="person.id">
                      <td>{{ person.id }}</td>
                      <td>{{ person.firstName }}</td>
                      <td>{{ person.lastName}}</td>
                      <td>{{ person.userRole }}</td>
                      <td>{{ person.email }}</td>
                      <td>{{ person.password }}</td>
                      <td><button id="buttonEdit" @click="updateUser(person.id)">edit</button></td>
                  </tr>
              </tbody>
          </table>
      </div>
  </div>
    </div>
</template>
<script>
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
    getProfile(){
        return this.$store.dispatch('getProfile',this.email)
    }

},

mounted(){
    this.getProfile
}

}
</script>
<style>
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
    margin-left: 30px;
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
    margin-top: 100px;
    border-radius: 12px;
    width: 80px;
}
</style>