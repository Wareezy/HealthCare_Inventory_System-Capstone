<template>
  <div>
    <h1 id="avai">Available Stock</h1>
    
    <!-- Search input -->
    <input type="text" v-model="searchQuery" placeholder="Search by product name" class="form-control mb-3 search-input">
    
    <!-- Category filter button -->
    <button class="btn btn-success mb-3 mr-3" @click="toggleFilter">{{ filterButtonText }}</button>
    
    <!-- Sort button -->
    <button class="btn btn-info mb-3" @click="toggleSort">{{ sortButtonText }}</button>
    
    <div class="row justify-content-center">
      <div class="col-md-4" v-for="item in filteredInventory" :key="item.id">
        <router-link :to="{ name: 'product', params: { id: item.id } }" class="router-link">
          <div class="card my-4 mx-3">
            <img id="cardImg" :src="item.imgUrl" class="card-img-top" alt="Product Image">
            <div class="card-body">
              <h5 class="card-title">{{ item.productName }}</h5>
              <p class="card-text">Available: {{ item.quantity }}</p>
              <p class="card-text">R{{ item.pricePerProduct }}</p>
              <p class="card-text">Category: {{ item.category }}</p>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: '', // Data property to store the search query
      filterType: 'All', // Data property to store the selected category filter
      sortAsc: true // Data property to store the sorting order
    };
  },
  computed: {
    // Get inventory from the store
    inventory() {
      return this.$store.state.inventory;
    },
    // Filtered and sorted inventory based on search query, category filter, and sorting order
    filteredInventory() {
      let filtered = this.inventory;
      
      // Apply search filter
      if (this.searchQuery) {
        filtered = filtered.filter(item => {
          return item.productName.toLowerCase().includes(this.searchQuery.toLowerCase());
        });
      }
      
      // Apply category filter
      if (this.filterType !== 'All') {
        filtered = filtered.filter(item => {
          return item.category.toLowerCase() === this.filterType.toLowerCase();
        });
      }
      
      // Apply sorting
      const sorted = filtered.slice().sort((a, b) => {
        if (this.sortAsc) {
          return a.pricePerProduct - b.pricePerProduct;
        } else {
          return b.pricePerProduct - a.pricePerProduct;
        }
      });
      
      return sorted;
    },
    // Button text based on category filter
    filterButtonText() {
      if (this.filterType === 'All') {
        return 'All';
      } else {
        return this.filterType;
      }
    },
    // Button text based on sorting order
    sortButtonText() {
      return this.sortAsc ? 'Sort by Price Ascending' : 'Sort by Price Descending';
    }
  },
  methods: {
    // Toggle category filter
    toggleFilter() {
      if (this.filterType === 'All') {
        this.filterType = 'antibiotics';
      } else if (this.filterType === 'antibiotics') {
        this.filterType = 'pain';
      } else if (this.filterType === 'pain'){
        this.filterType = 'cardiovascular';
      } else {
        this.filterType = 'All';
      }
    },
    // Toggle sorting order
    toggleSort() {
      this.sortAsc = !this.sortAsc;
    },
    // Fetch inventory when the component is mounted
    getInventories() {
      this.$store.dispatch('getInventories');
    },
  },
  mounted() {
    this.getInventories(); // Fetch initial inventory data
  }
};
</script>

<style scoped>
/* Your existing styles */
.search-input {
  width: 200px; /* Adjust width as needed */
}
.router-link {
    text-decoration: none; /* Remove underline from router-link */
}

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

#avai {
    margin-top: 100px;
    margin-bottom: 100px;
}
</style>
