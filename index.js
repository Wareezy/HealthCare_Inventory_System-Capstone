import express from 'express'
import {config} from 'dotenv'
import cors from 'cors'
import inventoryRouter from './routes/inventory.js'
import userRouter from './routes/users.js'
config()

const PORT=process.env.PORT || 3306

const app=express()

app.use(cors())

app.use(express.json())

app.use(express.static('views'))

// app.use(cookieParser())

app.use('/inventory',inventoryRouter)
app.use('/users',userRouter)

app.listen(PORT,()=>{
    console.log(`This is running on http://localhost:${PORT}`);
})
