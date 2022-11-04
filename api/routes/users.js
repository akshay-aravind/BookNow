import express from 'express'
import { deleteUser, getUser, getUsers, updateUser } from '../controllers/user.js'
import { verifyToken } from '../utils/verifyToken.js'

const router = express.Router()

router.get("/checkauthentication", verifyToken, (req,res,next)=> {
    res.send("hello User,You are Logged In")
})

//UPDATE
router.put('/:id', updateUser)

//DELETE

router.delete('/:id', deleteUser)

//GET User

router.get('/:id', getUser)

//GET all Users

router.get('/', getUsers)

export default router  
