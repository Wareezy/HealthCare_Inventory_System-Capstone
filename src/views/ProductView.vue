<template>
    <div>
    <h2 class="static-heading">Product Details</h2>
    <div v-if="item in $store.state.inventory" :key="item.id" class="row align-items-center justify-content-center">
      <div class="col-md-4 text-center">
        <img :src="item.imgUrl" class="img-fluid" alt="Product Image">
      </div>
      <div class="col-md-4">
        <div>
          <h3 class="product-title">{{ item.productName}}</h3>
          <p class="product-info">
            {{ item.quantity }} Kits Available
            <br>
            <br>
            {{ item.category }}
            <br>
            <button class="btn btn-primary">
              <p class="money"> R{{ item.pricePerProduct}}</p>
            </button>
          </p>
        </div>
      </div>
    </div>
    <div v-else>
      <spinnerComponent></spinnerComponent>
    </div>

    </div>
</template>
<script>
export default {
data(){
    return {
        productName: '',
          quantity: '',
          category: '',          
          imgUrl: '',
          pricePerProduct: '',
          expenses: '',
          income: ''
    }
}
,
    computed:{
getUser(id){
this.$store.dispatch('getUser',id)
    }
    },

    mounted(){
        this.getUser
    }
    
}
</script>
<style>
    
</style>