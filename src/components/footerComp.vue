<template lang="">
  <footer id ="footerID" class="text-white py-3 container-fluid rounded">
 <div class="container">
   <div class="row">
     <p class="lead">
       MEDIMATE &copy;
       <span>{{currYear}}</span>
     </p>
   </div>
 </div>
</footer>
</template>
<script>
export default {
   name:'FooterComp',
   data(){
       return{
           currYear:new Date().getFullYear()
       }
   }
}

</script>
<style>
#footerID {
   position: absolute;
 margin-top:250px;
 /* margin-top: 60px; */
   width: 100%; /* Full width */
   background-color: rgb(3,168,158); 
   z-index: 1;
}



</style>