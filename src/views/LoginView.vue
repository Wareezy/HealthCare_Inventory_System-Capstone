<template>
    <div>
        <h1>LOGIN</h1>
        <input type="email"
      placeholder="email"
      name="email"
      required
      v-model="email"
      ><br>

      <input type="password"
      placeholder="password"
      name="password"
      required
      v-model="password"
      >
      <button @click="loginUser" class="action-button">Login</button>
    </div>
</template>
<script>
export default {
  data(){
    return{
        email:null,
        password:null
    }
  }  ,
  computed:{
    loginUser(){
        console.log('testing')
        this.$store.dispatch('loginUser',this.$data)
    }
  }
}
</script>
<style lang="">
    
</style>