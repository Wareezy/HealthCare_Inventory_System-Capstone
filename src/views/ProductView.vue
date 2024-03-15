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
            {{ inventory[0].quantity }} Kits Available
            <br>
            <br>
            {{ inventory[0].category }}
            <br>
            <button class="btn btn-primary">
              <p class="money"> R{{ inventory[0].pricePerProduct }}</p>
            </button>
          </p>
        </div>
      </div>
    </div>
    <div v-else>
      <h1>No product selected</h1>
    </div>  </div>
</template>

<script>
export default {
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
.product-details-container {
  background-color: white; /* Set the background color to white */
  padding: 20px; 
}
</style>
