import{getUsers,getUser,addUser,deleteUser,editUser,checkUser,getProfile} from '../model/users.js'
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
getProfile:async(req,res)=>{
    const {email}=req.body;
    res.send(await getProfile(email))
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
  
    try {
        const [person] = await getUser(+req.params.id);
        let { firstName, lastName, userRole, email, password } = req.body;

        // Update the fields if provided in the request body
        firstName = firstName || person.firstName;
        lastName = lastName || person.lastName;
        userRole = userRole || person.userRole;
        email = email || person.email;

        // Check if password is provided and hash it
        if (password) {
            bcrypt.hash(password, 10, async (err, hash) => {
                if (err) throw err;
                await editUser(firstName, lastName, userRole, email, hash, +req.params.id);
                res.send({ msg: "You have edited your account" });
            });
        } else {
            // If password is not provided, update other fields without hashing the password
            await editUser(firstName, lastName, userRole, email, person.password, +req.params.id);
            res.send({ msg: "You have edited your account" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: "Internal server error" });
    }
 }

 
}











