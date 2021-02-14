import express from 'express'
import Order from "../models/Order";

const router = express.Router()


router.route('/:id')

    .get(async (req, res) => {
        const {id} = req.params
        const orders = await Order.find({customer: id})
        if (orders) {
            res.json({orders})
        }
    })

    .post(async (req, res) => {
        const {id} = req.params
        const order = await Order.create({
            customer:id,
        })
        res.status(200).end()
    })


export default router