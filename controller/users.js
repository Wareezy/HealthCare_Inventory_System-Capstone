import{getUsers, getUser,addUser,deleteUser,editUser} from '../model/users.js'
 // users data
 export default
 {
    getUsers:async(req,res)=>{
    res.send( await getUsers())
},
getUser:async(req,res)=>{
    res.send(await getUser(+req.params.id))
},
addUsers:async(req,res)=>{
    const { firstName,lastName,email,password} = req.body;
    const post = await addUser(firstName,lastName,email,password);
    res.send(await getUsers());  
},
deleteUser:async(req,res)=>{
    res.send(await deleteUser(req.params.id))
},
editUser:async(req,res)=>{
    const [person]=await getUser(+req.params.id)

    let {firstName,lastName,email,password}=req.body

    firstName ? firstName=firstName: {firstName}=person
    lastName ? lastName=lastName: {lastName}=person
    email ? email=email: {email}=person
    password ? password=password: {password}=person
    

    await editUser(firstName,lastName,email,password,+req.params.id)

    res.json(await getUsers())

 } 
}
