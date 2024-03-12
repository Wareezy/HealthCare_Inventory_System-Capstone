<template>
   <button v-if="$cookies.get('jwt')" id="logoutButton" @click="logOut">Log Out</button> 
  <h1 id="adminH">WELCOME TO ADMIN</h1>

  <div id="inputInventory" class="input-container">
      <input type="text" placeholder="product.." v-model="productName" class="form-control mb-3">
      <input type="number" placeholder="quantity.. " v-model="quantity" class="form-control mb-3">
      <input type="number" placeholder="amount.." v-model="category" class="form-control mb-3">
      <input type="text" placeholder="imageUrl.." v-model="imgUrl" class="form-control mb-3">
      <input type="text" placeholder="price for product.." v-model="pricePerProduct" class="form-control mb-3">
      <input type="text" placeholder="expenses.." v-model="expenses" class="form-control mb-3">
      <input type="text" placeholder="income.." v-model="income" class="form-control mb-3">
  </div>

  <button id="addButton" @click="addInventory">Add products</button>

  <div class="container">
      <!-- Add Product Section -->
      <div class="input-container">
          <!-- Input fields for adding products -->
      </div>
      <!-- Products Table -->
      <h2 id="adminProd">Products Table</h2>
      <div class="table-responsive">
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
                      <td><button id="buttonDel" @click="delProduct(item.prodID)">delete</button></td>
                      <td><button id="buttonEdit" @click="updateProduct(item.prodID)">edit</button></td>
                  </tr>
              </tbody>
          </table>
      </div>
  </div>
</template>

<script>
export default {
  data() {
      return {
          productName: '',
          quantity: '',
          category: '',          
          imgUrl: '',
          pricePerProduct: '',
          expenses: '',
          income: '',
      }
  },

  computed: {
      getInventories() {
          return this.$store.dispatch('getInventories')
      }

      ,
      logOut(){
        this.$store.dispatch('logOut')
      }
  },

  mounted() {
      this.getInventories
  }
}
</script>


<style>
/* Apply different styles for smaller screens */
@media (max-width: 768px) {
    #inputInventory input {
        width: calc(100% - 20px) !important; /* Adjust width and remove margin */
        margin: 0 10px 10px 0 !important; /* Remove margin between input fields */
        display: block; /* Set input fields to display as block elements */
    }
}

#inputInventory {
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



