import { createStore } from 'vuex'
import axios from 'axios'
import router from '@/router'
import Swal from 'sweetalert2'
import sweet from 'sweetalert'
const BASE_URL="https://healthcare-inventory-system-capstone.onrender.com"
axios.defaults.withCredentials=true
export default createStore({
  state: {
    inventory:[],
    users:[]
  },
  getters: {
  },
  mutations: {
    setInventory(state,data){
      state.inventory=data
    },
    setUsers(state,data){
      state.users=data
    }
  },
  actions: {

    // inventory data
    async getInventories({commit}){
      try
      {
        let {data}=await axios.get(BASE_URL + '/inventory');
      console.log(data);
      commit('setInventory',data);
    }
    catch(error){
   console.error('Cannot add products',error)
    }
      
    },
    async addInventory({commit},newInventory){
      try{  
      let {data}=await axios.post(BASE_URL + '/inventory',newInventory);
      console.log(data);
      commit("setInventory",data)
    }
    catch(error)
    
    {
      console.error('Cannot add the item',error)
       } 
       window.location.reload()
    
    },
    async getInventory({commit},id){
      try{
        await axios.get(BASE_URL + '/inventory/' + id)
      }
      catch(error){
        console.error('Cannot get the single product',error)
      }
      window.location.reload()
    },

    async delInventory({commit},id){
      try{
            await axios.delete(BASE_URL + '/inventory/' + id)
      }
      catch(error){
        console.error('Cannot delete a product',error)

      }
      window.location.reload()
    },
    async updateInventory({commit},update){
      try{
        await axios.patch(BASE_URL + '/inventory/' + update.id,update)
      }
      catch(error)
      {
        console.error('Cannot update the product',error)

      }
      window.location.reload()
    },


    // users data
async getUsers({commit})
{

  try{
      let {data}=await axios.get(BASE_URL + '/users')
  console.log(data);
  commit('setUsers',data);
  }
  catch(error){
    console.error('Cannot get users',error)
  }

},

async addUser({commit},newUser){
  try{
    let {data}=await axios.post(BASE_URL + '/users' , newUser);
    console.log(data);
    commit('setUsers',data);
    Swal.fire({
          title: 'Added Successful',
          text: 'User has been added successfully!',
          icon: 'success',
          timer: 3000,
          showConfirmButton: false
        });

        setTimeout(() => {
          window.location.reload();
        }, 3000);
  }
  catch(error)
  {
    Swal.fire({
      title: 'Error',
      text: 'Failed to add user',
      icon: 'error',
      timer: 3000
    });
    
    setTimeout(() => {
      window.location.reload();
    }, 3000);

  }
  // window.location.reload()
},

async delUser({commit},id){
  try{
    await axios.delete(BASE_URL + '/users/' + id)
  }
  catch(error){
    console.error('Cannot delete a single user',error)

  }
}

,

async updateUser({commit},update){
  try{
    await axios.patch(BASE_URL + '/users/' + update.id,update)

  }

  catch(error)
{

  console.error('cannot update a single user',error)
}

},

// async registerData({commit},register){

//   // console.log(addUser);
//   let {data}= await axios.post(BASE_URL + '/users',register)
//   alert(data.msg)

//   window.location.reload()

// }

async loginUser({ commit }, currentUser) {
  try {
    let { data } = await axios.post(BASE_URL + '/login', currentUser);

    if (data.token) {
      $cookies.set('jwt', data.token);
      // alert(data.msg);
      await router.push('/admin');
      Swal.fire({
        title: 'Login Successful',
        text: 'User has logged in successfully!',
        icon: 'success',
        timer: 2000,
        showConfirmButton: false
      });

      setTimeout(() => {
        window.location.reload();
      }, 3000);
      // window.location.reload();
    } else {
      Swal.fire({
        title: 'Error',
        text: 'Failed to login',
        icon: 'error',
        timer: 2000
      });
      
      setTimeout(() => {
         window.location.reload();
      }, 3000);

    }
  } catch (error) {
    console.error('Cannot login', error);
    $cookies.remove('jwt');
  }
}

,

async logOut(context){
  let cookies=$cookies.keys()
  console.log(cookies)
  $cookies.remove('jwt')
  await router.push('/login')  
  
  Swal.fire({
    title: 'Logout Successful',
    text: 'User has logged out successfully!',
    icon: 'success',
    timer: 2000,
    showConfirmButton: false
  });

  setTimeout(() => {
    window.location.reload();
  }, 3000);
  // window.location.reload()
}
  },
  modules: {
  }
})
