<template>
<div v-if="getProfile">
  <p>First Name: {{ userProfile.firstName }}</p>
  <p>Last Name: {{ userProfile.lastName }}</p>
  <p>User Role: {{ userProfile.userRole }}</p>
  <p>Email: {{ userProfile.email }}</p>
  <p>Password: {{ userProfile.password }}</p>
</div>
<div v-else>
  <p>Loading...</p>
</div>
</template>
<script>
export default {
  data() {
    return {
      firstName: '',
      lastName: '',
      userRole: '',
      email: '',
      password: ''
    }
  },
  computed: {
    getProfile() {
      return this.$store.state.users.length > 0 ? this.$store.state.users[0] : null;
    }
  },
  mounted() {
    // Fetch the logged-in user's profile
    this.$store.dispatch('getProfile', this.$cookies.get('email'));
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
  margin-right: 10px; 
  margin-bottom: 10px; 
}

.input-container {
    margin-top: 100px;
    margin-left: 210px;
    display: flex;
    flex-wrap: wrap; 
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
#table {
    margin-top: 100px;
}

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