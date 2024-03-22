<template>
  <div class="home">
    <div class="home container">
    <div class="row mt-5">
      <div class="col-md-6 mt-5">
        <div id="homeHeading">
          <div>
            <h1 id="heading2" class="display-1">MEDIMATE</h1>
            <h1 id="heading2" class="display-1">INVENTORY</h1>
            <h1 id="heading2" class="display-1">SYSTEM</h1>
          </div>
          <div>
            <div class="d-flex justify-content-center">
              <router-link to="/login" v-if="!$cookies.get('token')">
                <button id="buttonLogin" class="align-item-center">Login</button>
              </router-link>

              <router-link to="/signup" v-if="!$cookies.get('token')">
                <button id="buttonSignUp" class="align-item-center">SignUp</button>
              </router-link>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6 mt-5">
        <img src="https://i.ibb.co/C5LVkrN/pills-removebg-preview.png" id="homeImg" class="img-fluid">
      </div>
    </div>
  </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  components: { 
  }
}
</script>

<style>
#buttonLogin {
  background-color: 	rgb(204, 204, 255);
  color: black;
   font-weight: bold !important;  

  padding: 10px 20px;
  border: none;
  margin-top:100px;
  font-size: 21px;
  width:130px;
  border-radius: 20px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

#buttonLogin:hover {
  background-color: 	rgb(3,168,158);
  color:white;
}

#buttonSignUp {
  background-color: 	rgb(204, 204, 255);
  color: black;
  font-weight: bold !important;  
  font-size: 21px;
  padding: 10px 20px;
  margin-top:100px;
  margin-left:30px;
  width:130px;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

#buttonSignUp:hover {
  background-color: 	rgb(3,168,158);
  color:white
}

#homeImg {
  width:500px;
  height: 500px;
}

@media (max-width: 768px) {
  #homeImg {
    order: -1;
    margin-top: 20px;
  }
}
</style>