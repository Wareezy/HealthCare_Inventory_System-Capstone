import{getUsers, getUser,addUser,deleteUser,editUser,checkUser} from '../model/users.js'
import {auth} from '../middleware/authenticate.js'
import bcrypt from 'bcrypt' 

 export default
 {


getUsers:async(req,res)=>{
    res.send( await getUsers())
},


getUser:async(req,res)=>{
    res.send(await getUser(+req.params.id))
},



// addUsers:async(req,res)=>{
//     const { firstName,lastName,userRole,email,password} = req.body;
//     const post = await addUser(firstName,lastName,userRole,email,password);
//     res.send(await getUsers());  
// },

//this is used to login using users credentials
loginUser: async (req, res) => {
    const {email,password}=req.body;
    await checkUser(email,password)
    // res.send(res.msg)
},


// this is for the signup page
creatUser:async(req,res)=>{
    const {firstName,lastName,userRole,email,password}=req.body
    bcrypt.hash(password,10,async (err,hash)=>{
        if(err) throw err
        await addUser(firstName,lastName,userRole,email,hash)
        res.send({
            msg: "you have created an account"
        })  
     })
},


deleteUser:async(req,res)=>{
    res.send(await deleteUser(req.params.id))
},

editUser:async(req,res)=>{
  
    const [person]=await getUser(+req.params.id)
    let {firstName,lastName,userRole,email,password}=req.body

    firstName ? firstName=firstName: {firstName}=person
    lastName ? lastName=lastName: {lastName}=person
    userRole ? userRole=userRole:{userRole}=person
    email ? email=email: {email}=person
    password ? password=password: {password}=person

    bcrypt.hash(password,10,async (err,hash)=>{
        if(err) throw err
        await editUser(firstName,lastName,userRole,email,hash,+req.params.id)
        res.send({
            msg: "you have edited your account"
        })  
     })
    // res.json(await getUsers())
 }

 
}











