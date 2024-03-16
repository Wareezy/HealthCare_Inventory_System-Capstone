import {config} from 'dotenv'
import bcrypt from 'bcrypt'
import cookieParser from 'cookie-parser'
import jwt from 'jsonwebtoken'
import { checkUser ,getProfile} from '../model/users.js'

config()

const auth=async(req,res,next)=>{
    const {password,email}=req.body
    const hashedPassword=await checkUser(email)
    bcrypt.compare(password,hashedPassword,async(err,result)=>{

        if(err) throw err
        if(result === true){
            let currentUser=await getProfile(email)
            console.log(currentUser)
            // const {email}=req.body

            console.log(email,'This is above the token')
            const token=jwt.sign({currentUser:currentUser},process.env.SECRET_KEY,{expiresIn:'1h'})
            res.cookie('token', token, { httpOnly: false, expiresIn:'1h'})
            res.send({
                token:token,
                msg:'i have logged in!!! YAY!!!',
                user:currentUser
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