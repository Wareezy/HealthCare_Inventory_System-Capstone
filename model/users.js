import {pool} from '../config/config.js'
import bcrypt from 'bcrypt' 

// get all users data
   const getUsers=async()=>{
    const [person]=await pool.query('SELECT * FROM users')
    return person
}

//get unique user data
// const getUser=async(id)=>{
//     const[person]=await pool.query(
//         'SELECT * FROM users WHERE id=?',
//         [id]
//     )
//     return person
// }

const getProfile=async(email)=>{
    const[[person]]=await pool.query(
        'SELECT * FROM users WHERE email=?',
        [email]
    )
    return person
}
// console.log(await getProfile('warrenjaftha16@gmail.com'))

//add user into the user table
const addUser=async(firstName,lastName,userRole,email,password)=>{
    await pool.query(`
    INSERT INTO users (firstName,lastName,userRole,email,password) values(?,?,?,?,?) `,
    [firstName,lastName,userRole,email,password])
}


//delete a user
const deleteUser=async(id)=>{
    const [person]=await pool.query(`
    DELETE FROM users WHERE id=?`,[id])
   return getUsers(person.DeleteuserID)
} 


//edit a user in the table
const editUser=async(firstName,lastName,userRole,email,password,id)=>{
    await pool.query(`
    UPDATE users SET firstName=?, lastName=?, userRole=?,email=?, password=? 
    WHERE id=? `,
     [firstName,lastName,userRole,email,password,id])
     return getUsers()
}

//check if email matches password
const checkUser=async (email)=>{
    const [[{password}]]=await pool.query(
        `SELECT password FROM users WHERE email=?`,[email]
    )
    return password
}


export{getUsers,addUser,deleteUser,editUser,checkUser,getProfile}


