<template>
    <h1 id="avai">Available Stock</h1>
    <div class="row justify-content-center">
      <div class="col-md-4" v-for="item in $store.state.inventory" :key="item.id">
        <div class="card my-4 mx-3"> <!-- Added "mx-3" class for horizontal margin -->
          <img id="cardImg" :src="item.imgUrl" class="card-img-top" alt="Product Image">
          <div class="card-body">
            <h5 class="card-title">{{ item.productName }}</h5>
            <p class="card-text">Available:{{ item.quantity }}</p>
            <p class="card-text">R{{ item.pricePerProduct }}</p>
            <p class="card-text">category: {{ item.category }}</p>
            <!-- <router-link :to="{ name: 'productDetails', params: { id: product.hubID } }">
              <button class="btn btn-primary btn-block">View more</button>
            </router-link> -->
          </div>
        </div>
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
        return this.$store.dispatch('getInventories');
      }
    },
  
    mounted() {
      this.getInventories;
    }
  }
  </script>
  
  <style scoped>
  .card {
    transition: transform 0.3s;
  }

  .card:hover {
    transform: scale(1.05);
  }
  #cardImg {
    height: 300px;
    width: 300px;
    margin: 0 auto; /* Center the image horizontally */
  }

  #avai{
    margin-top:100px;
    margin-bottom:100px;
  }
  </style>
  
  