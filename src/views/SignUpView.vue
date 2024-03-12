<template lang="">
 <div>
        <h1>Register an account</h1>

        <input type="firstName"
      placeholder="firstName"
      name="firstName"
      required
      v-model="firstName"
      >

        <input type="lastName"
      placeholder="lastName"
      name="lastName"
      required
      v-model="lastName"
      >
      <input type="userRole"
      placeholder="userRole"
      name="userRole"
      required
      v-model="userRole"
      >
        <input type="email"
      placeholder="email"
      name="email"
      required
      v-model="email"
      >


      <input type="password"
      placeholder="password"
      name="password"
      required
      v-model="password"
      >
      <button @click="registerData" class="action-button">Register</button>
    </div>
</template>
<script>
export default {
    data(){
        return{
            firstName:'',
            lastName:'',
            userRole:'',
            email:'',
            password:''


        }
    },

    computed:{
        registerData(){
            console.log(this.$data.firstName)
            console.log(this.$data.lastName)
            console.log(this.$data.userRole)
            console.log(this.$data.email)
            console.log(this.$data.password)
            this.$store.dispatch('registerData',this.$data)
        }
    }
    
}
</script>
<style lang="">
    
</style>