import express from 'express'
import { createHotel, deleteHotel, getHotel, getHotels, updateHotel } from '../controllers/hotel.js'
import Hotel from '../models/Hotel.js'

const router = express.Router()

//CREATE
router.post('/', createHotel)

//UPDATE
router.put('/:id',updateHotel )

//DELETE

router.delete('/:id', deleteHotel)

//GET hotel

router.get('/:id',getHotel)

//GET all hotels

router.get('/',getHotels)

export default router
