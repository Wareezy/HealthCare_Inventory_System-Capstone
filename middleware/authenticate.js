import {config} from 'dotenv'
import bcrypt from 'bcrypt'
import cookieParser from 'cookie-parser'
import jwt from 'jsonwebtoken'
import { checkUser } from '../model/users.js'

config()

const auth=async(req,res,next)=>{
    const {password,email}=req.body
    const hashedPassword=await checkUser(email)
    bcrypt.compare(password,hashedPassword,(err,result)=>{

        if(err) throw err
        if(result === true){
            
            const {email}=req.body

            const token=jwt.sign({email:email},process.env.SECRET_KEY,{expiresIn:'1h'})

            res.send({
                token:token,
                msg:'i have logged in!!! YAY!!!'
            })
            next()
        }else{
            res.send({msg:'The email or password is incorrect'})
        }
    })
}



const authenticate=(req,res,next)=>{
    let {cookie}= req.headers
    let tokenInHeader = cookie && cookie.split('=')[1]

    console.log(tokenInHeader);

    if(tokenInHeader===null) res.sendStatus(401)

    jwt.verify(tokenInHeader,process.env.SECRET_KEY,(err,user)=>{


        if(err) console.log(err)
        req.email=user
        next()
    })
}



export{
    auth,authenticate
}