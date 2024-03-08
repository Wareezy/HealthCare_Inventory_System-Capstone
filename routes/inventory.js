import express from 'express'
import controller from '../controller/inventory.js'
const router=express.Router()

router
    .route('/')
        .get(controller.getInvents)
        .post(controller.addInvents)


router
    .route('/:id')
        .get(controller.getInvent)
        .delete(controller.deleteInvent)
        .patch(controller.editInvent)

export default router