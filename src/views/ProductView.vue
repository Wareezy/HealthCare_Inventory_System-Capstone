<template>
   <div class="product-details-container">
    <h2 class="static-heading">Product Details</h2>
    <div v-if="inventory" class="row align-items-center justify-content-center">
      <div class="col-md-4 text-center">
        <img :src="inventory[0].imgUrl" class="img-fluid" alt="Product Image">
      </div>
      <div class="col-md-4">
        <div>
          <h3 class="product-title">{{ inventory[0].productName }}</h3>
          <p class="product-info">
            {{ inventory[0].quantity }} products Available
            <br>
            <br>
            {{ inventory[0].category }}
            <br>
            <div >   
              <button class="btn btn-primary" id="buttMove">
              <p class="money"> R{{ inventory[0].pricePerProduct }}</p>
            </button>
            <router-link to="/products">
              <button id ="backButton" class="btn btn-primary">
                  Back
            </button>
          </router-link>
        </div>
         
            

          </p>
        </div>
      </div>
    </div>
    <div v-else>
      <h1><spinner-comp/></h1>
    </div>  </div>
</template>

<script>
import spinnerComp from '@/components/spinnerComp.vue';
export default {
  components:{
    spinnerComp
  }
  ,
  computed: {
    inventory() {
      return this.$store.state.inventory;
    }
  },
  mounted() {
    this.$store.dispatch('getInventory', this.$route.params.id);
  }
}
</script>

<style>
#buttMove{
margin-top:12px !important;
height:55px;
text-align: center !important;
background-color: rgb(3, 168, 158);
transition: box-shadow 0.3s ease; /* Adding transition for smooth effect */

}
#buttMove:hover{
  box-shadow: 0 0 10px 3px rgba(3, 168, 158, 0.7); /* Adjust brightness by changing the rgba alpha value */

}

.product-details-container {
  background-color: white; 
  padding: 20px; 
}
#backButton{
  background-color:rgb(3, 168, 158) ;
  width:100px;
  height:53px;
  margin-left:100px;
  transition: box-shadow 0.3s ease;
}
#backButton:hover{
  box-shadow: 0 0 10px 3px rgba(3, 168, 158, 0.7); /* Adjust brightness by changing the rgba alpha value */

}
</style>
