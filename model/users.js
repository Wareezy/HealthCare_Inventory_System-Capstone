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

const addUser=async(firstName,lastName,email,password)=>{
    await pool.query(`
    INSERT INTO users (firstName,lastName,email,password) values(?,?,?,?) `,
    [firstName,lastName,email,password])
}

const deleteUser=async(id)=>{
    const [person]=await pool.query(`
    DELETE FROM users WHERE id=?`,[id])
   return getUsers(person.DeleteuserID)
}

const editUser=async(firstName,lastName,email,password,id)=>{
    await pool.query(`
    UPDATE users SET firstName=?, lastName=?, email=?, password=? 
    WHERE id=? `,
     [firstName,lastName,email,password,id])
     return getUsers()
}

export{getUsers, getUser,addUser,deleteUser,editUser}

