import express from 'express'
import controller from '../controller/users.js'

const router = express.Router()

router
    .route('/')
      .get(controller.getUsers)
    //   .post(controller.addUsers)
      .post(controller.creatUser)
    //  .post(controller.loginUser)

router
    .route('/:id')
        .get(controller.getUser)
        .delete(controller.deleteUser)
        .patch(controller.editUser)


export default router