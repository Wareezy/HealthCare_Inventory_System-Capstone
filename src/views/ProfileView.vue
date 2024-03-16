<template>
  <h1 id="avai">User</h1>
    <div class="row justify-content-center">
        <div class="col-md-4">
            <div class="card my-4 mx-3" v-if="user">
                <div class="card-body">
                    <h5 class="card-title">{{ user.firstName }}</h5>
                    <p class="card-text">{{ user.lastName }}</p>
                    <p class="card-text">{{ user.userRole }}</p>
                    <p class="card-text">{{ user.email }}</p>
                    <p class="card-text">{{ user.password }}</p>
                </div>
            </div>
            <div v-else>
                <p>No user found</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      user: null
    }
  },
  methods: {
    async fetchProfile() {
      try {
        await this.$store.dispatch('getProfile');
        // Once the action is completed, update the user data
        this.user = this.$store.state.users[0];
      } catch (error) {
        console.error('Failed to fetch profile', error);
      }
    }
  },
  mounted() {
    this.fetchProfile();
  }
}
</script>

<style>
/* Your styles */
</style>