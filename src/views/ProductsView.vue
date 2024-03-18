<template>

    <h1 id="avai">Available Stock</h1>
        <!-- Search input -->
        <div class="container">
  <!-- Search input, Category filter button, and Sort button -->
  <div class="row justify-content-center">
    <div class="col-md-4 col-sm-12">
      <input type="text" v-model="searchQuery" placeholder="Search by product name" class="form-control mb-3 search-input">
    </div>
    <div class="col-md-2 col-sm-6">
      <button id="filterID" class="btn btn-success btn-block mb-3" @click="toggleFilter">{{ filterButtonText }}</button>
    </div>
    <div class="col-md-2 col-sm-6">
      <button id="sortID" class="btn btn-info btn-block mb-3" @click="toggleSort">{{ sortButtonText }}</button>
    </div>
  </div>
</div>
    <!-- Spinner component -->
    <spinner-comp v-if="isLoading"></spinner-comp>
    
    <!-- Product cards -->
    <div v-if="!isLoading" class="row justify-content-center">
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


</template>

<script>
import spinnerComp from '@/components/spinnerComp.vue';
export default {
  components:{
    spinnerComp
  },
  data() {
    return {
      searchQuery: '', // Data property to store the search query
      filterType: 'All', // Data property to store the selected category filter
      sortAsc: true, // Data property to store the sorting order
      isLoading: true // Data property to indicate whether data is loading
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
      this.isLoading = true; // Set isLoading to true before fetching data
      this.$store.dispatch('getInventories')
        .then(() => {
          this.isLoading = false; // Set isLoading to false after data is fetched
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
          this.isLoading = false; // Ensure isLoading is set to false in case of error
        });
    },
  },
  mounted() {
    this.getInventories(); // Fetch initial inventory data
  }
};
</script>

<style scoped>
#inputsChanging{
  /* margin-left:110px; */
}
#filterID{
  background-color: rgb(3,168,158);
  /* margin-left:130px; */
  width:120px;
  /* margin-top:100px */
}

#sortID{

  /* margin-left:10px; */
  background-color: rgb(3,168,158);
  color:white;
  /* margin-top:100px */


}

/* Your existing styles */
.search-input {
  /* position: absolute; */
  width: 200px; 
  margin-left:59px;
  /*margin-top:100px; */
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
