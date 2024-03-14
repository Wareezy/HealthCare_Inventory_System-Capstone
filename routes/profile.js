import express from 'express'
import controller from '../controller/users.js'

const router = express.Router()

router
        .route('/:email')
          .get(controller.getProfile)


export default router
