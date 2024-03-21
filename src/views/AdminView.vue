<template>
    <button v-if="$cookies.get('token')" id="logoutButton" @click="logOut" class="btn btn-danger btn-block mt-3">Log Out</button> 
  <h1 id="adminH">WELCOME TO ADMIN</h1>

  <div id="inputInventory" class="input-container">
      <input type="text" placeholder="product.." v-model="productName" class="form-control mb-3">
      <input type="number" placeholder="quantity.. " v-model="quantity" class="form-control mb-3">
      <select name="" v-model="category" class="form-control mb-3 glowing-input">
        <option value="" disabled selected>SELECT CATEGORY</option>
        <option value="cardiovascular">Cardiovascular</option>
        <option value="pain">Pain</option>
        <option value="antibiotics">Antibiotics</option>
</select>
      <input type="text" placeholder="imageUrl.." v-model="imgUrl" class="form-control mb-3">
      <input type="text" placeholder="price for product.." v-model="pricePerProduct" class="form-control mb-3">
      <input type="text" placeholder="expenses.." v-model="expenses" class="form-control mb-3">
      <input type="text" placeholder="income.." v-model="income" class="form-control mb-3">
  </div>

  <button id="addButton" @click="addInventory">Add products</button>

  <spinnerComp v-if="loadingInventory"></spinnerComp>
  <div class="container">     
     <div class="input-container">
      </div>
      <h2 id="adminProd">Products Table</h2>
      <div class="table-responsive" >
          <table class="table ">
              <thead id="head">
                  <tr>
                      <th>ID</th>
                      <th>PRODUCT</th>
                      <th>QUANTITY</th>
                      <th>CATEGORY</th>
                      <th>PRICE PER PRODUCT</th>
                      <th>EXPENSES</th>
                      <th>INCOME</th>
                      <th>IMAGES</th>
                      <th></th>
                      <th></th>
                  </tr>
              </thead>
              <tbody>
                  <tr v-for="item in $store.state.inventory" :key="item.id">
                      <td>{{ item.id }}</td>
                      <td>{{ item.productName }}</td>
                      <td>{{ item.quantity }}</td>
                      <td>{{ item.category }}</td>
                      <td>R{{ item.pricePerProduct }}</td>
                      <td>R{{ item.expenses }}</td>
                      <td>R{{ item.income }}</td>
                      <td><img id="pics" :src="item.imgUrl" alt=""></td>
                      <td><button id="buttonDel" @click="delInventory(item.id)">delete</button></td>
                      <td><button id="buttonEdit" @click="updateInventory(item.id)">edit</button></td>
                  </tr>
              </tbody>
          </table>
      </div>
  </div>



  <div id="inputUser" class="input-container">
      <input type="text" placeholder="first Name" v-model="firstName" class="form-control mb-3">
      <input type="text" placeholder="last Name " v-model="lastName" class="form-control mb-3">
      <select name="userRole" v-model="userRole" class="form-control mb-3 glowing-input">
                <option value="" disabled selected>Select User Role</option>
                <option value="admin">admin</option>
                <option value="user">user</option>
            </select>
      <input type="text" placeholder="email" v-model="email" class="form-control mb-3">
      <input type="text" placeholder="password" v-model="password" class="form-control mb-3">
  </div>

  <button id="addButton" @click="addUser">Add User</button>




  <spinnerComp v-if="loadingUsers"></spinnerComp>
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
                      <td><button id="buttonDel" @click="delUser(person.id)">delete</button></td>
                      <td><button id="buttonEdit" @click="updateUser(person.id)">edit</button></td>
                  </tr>
              </tbody>
          </table>
      </div>
  </div>

<div id="downSection"> 
    <h1 id="downButton">
      Download Business Report
    </h1>
    <a href="https://apricot-estel-29.tiiny.site/">
    <button>
        DOWNLOAD
    </button>
</a>
</div>
 
</template>

<script>
import spinnerComp from '@/components/spinnerComp.vue';

export default {
components:{
    spinnerComp
  
},
  data() {
      return {
          productName: null,
          quantity: null,
          category: null,          
          imgUrl: null,
          pricePerProduct: null,
          expenses: null,
          income: null,
          loadingInventory: false

      }
  },
  data(){
    return{
        firstName:null,
        lastName:null,
        userRole:null,
        email:null,
        password:null,
        loadingUsers: false
    }
  },
computed: {
      getInventories()
    {
        this.loadingInventory = true; 

          return this.$store.dispatch('getInventories').then(()=>{
            this.loadingInventory = false; 
        })

          

      },
      getUsers()
      {

this.loadingUsers = true; 
        return this.$store.dispatch('getUsers').then(() => {
            this.loadingUsers = false; 
        })
      },
addInventory()
{
    this.$store.dispatch('addInventory',this.$data)

},
addUser()
{
this.$store.dispatch('addUser',this.$data)
},

      logOut(){
        this.$store.dispatch('logOut')
      }
  },

  methods:{

    delInventory(id){
        this.$store.dispatch('delInventory',id)
    },
    delUser(id){
        this.$store.dispatch('delUser',id)

    },
    updateInventory(id){
    let edit={
        id:id,
        productName:this.productName,
        quantity:this.quantity,
        category:this.category,
        imgUrl:this.imgUrl,
        pricePerProduct:this.pricePerProduct,
        expenses:this.expenses,
        income:this.income
    }
    this.$store.dispatch('updateInventory',edit)
}
,
updateUser(id){
        let change={
        id:id,
        firstName:this.firstName,
        lastName:this.lastName,
        userRole:this.userRole,
        email:this.email,
        password:this.password
    }
    this.$store.dispatch('updateUser',change)
}
  },



  mounted() {
      this.getInventories
      this.getUsers
  }
}
</script>


<style scoped>
#inputUser {
    margin-left: auto; 
    margin-right: auto; 
    width: 80%;
    text-align: center; 
}

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
        display: block !important; 
    }
}
@media (max-width: 768px) {
    #inputUser input {
        display: block !important; 
        width: calc(100% - 20px) !important; 
        margin: 0 10px 10px 0 !important; 
    }
}

@media (max-width: 768px) {
    #inputUser {
        margin-left: 10px; 
        margin-right: 10px; 
    }
}

#inputInventory {
    margin-left: 30px;
}
  

#head {
    background-color: rgb(3, 168, 158) !important ;
}
#adminH {
    margin-top: 200px;
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
    background-color: red;
    border-radius: 12px;
    margin-top: 60px !important;
    margin-left: 1300px !important;
    margin-right: auto !important;
    transition: margin-left 0.3s ease; 
}

@media (max-width: 1300px) {
    #logoutButton {
        margin-left: auto !important; 
        margin-right: auto !important;
    }
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



