import express from 'express'
import controller from '../controller/users.js'

const router = express.Router()

router
    .route('/')
      .get(controller.getUsers)
      .post(controller.addUsers)

router
    .route('/:id')
        .get(controller.getUser)
        .delete(controller.deleteUser)
        .patch(controller.editUser)

export default router