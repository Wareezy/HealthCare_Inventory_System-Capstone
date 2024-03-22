import{getUsers,getUser,addUser,deleteUser,editUser,checkUser,getProfile} from '../model/users.js'
import {auth} from '../middleware/authenticate.js'
import bcrypt from 'bcrypt' 

 export default
 {
    getUsers: async (req, res) => {
        try {
            res.send(await getUsers());
        } catch (error) {
            res.status(500).send({ error: error.message });
        }
    },
    
    getUser: async (req, res) => {
        try {
            res.send(await getUser(+req.params.id));
        } catch (error) {
            res.status(500).send({ error: error.message });
        }
    },
    
    getProfile: async (req, res) => {
        try {
            const { email } = req.body;
            res.send(await getProfile(email));
        } catch (error) {
            res.status(500).send({ error: error.message });
        }
    },
    
    // addUsers: async (req, res) => {
    //     const { firstName, lastName, userRole, email, password } = req.body;
    //     const post = await addUser(firstName, lastName, userRole, email, password);
    //     res.send(await getUsers());
    // },
    
    //this is used to login using users credentials
    loginUser: async (req, res) => {
        try {
            const { email, password } = req.body;
            await checkUser(email, password);
            // res.send(res.msg)
        } catch (error) {
            res.status(500).send({ error: error.message });
        }
    },
    
    // this is for the signup page
    creatUser: async (req, res) => {
        try {
            const { firstName, lastName, userRole, email, password } = req.body;
            bcrypt.hash(password, 10, async (err, hash) => {
                if (err) throw err;
                await addUser(firstName, lastName, userRole, email, hash);
                res.send({
                    msg: "you have created an account"
                });
            });
        } catch (error) {
            res.status(500).send({ error: error.message });
        }
    },
    
    deleteUser: async (req, res) => {
        try {
            res.send(await deleteUser(req.params.id));
        } catch (error) {
            res.status(500).send({ error: error.message });
        }
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











