import express from 'express'
import {config} from 'dotenv'
import cors from 'cors'
import { authenticate } from './middleware/authenticate.js'
import { errorHandling } from './middleware/errorHandling.js'
import { auth } from './middleware/authenticate.js'
import inventoryRouter from './routes/inventory.js'
import userRouter from './routes/users.js'
import jwt from 'jsonwebtoken'
import loginRouter from './routes/login.js'
import cookieParser from 'cookie-parser'
config()

const PORT=process.env.PORT || 3306

const app=express()

app.use(cors({
    origin:'',
    credentials:true
}))

app.use(express.json())
app.use(cookieParser())
app.use(express.static('views'))

// app.use(cookieParser())

app.use('/inventory',inventoryRouter)
app.use('/users',userRouter)
app.use('/login',auth,loginRouter)
// app.use(authenticate)
// app.use(errorHandling)
// app.use(auth)

app.listen(PORT,()=>{
    console.log(`This is running on http://localhost:${PORT}`);
})



