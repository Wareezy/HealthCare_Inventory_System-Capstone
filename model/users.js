import {pool} from '../config/config.js'

// inventory
   // users data
   const getUsers=async()=>{
    const [person]=await pool.query('SELECT * FROM users')
    return person
}

const getUser=async(id)=>{
    const[person]=await pool.query(
        'SELECT * FROM users WHERE id=?',
        [id]
    )
    return person
}

const addUser=async(firstName,lastName,userRole,email,password)=>{
    await pool.query(`
    INSERT INTO users (firstName,lastName,userRole,email,password) values(?,?,?,?,?) `,
    [firstName,lastName,userRole,email,password])
}

const deleteUser=async(id)=>{
    const [person]=await pool.query(`
    DELETE FROM users WHERE id=?`,[id])
   return getUsers(person.DeleteuserID)
} 

const editUser=async(firstName,lastName,userRole,email,password,id)=>{
    await pool.query(`
    UPDATE users SET firstName=?, lastName=?, userRole=?,email=?, password=? 
    WHERE id=? `,
     [firstName,lastName,userRole,email,password,id])
     return getUsers()
}

const checkUser=async (email)=>{
    const [[{password}]]=await pool.query(
        `SELECT password FROM users WHERE email=?`,[email]
    )
    return password
}

export{getUsers, getUser,addUser,deleteUser,editUser,checkUser}

