import express from 'express'
import dotenv from 'dotenv'
import mongoose, { mongo } from 'mongoose'
import authRoute from './routes/auth.js'
import usersRoute from './routes/users.js'
import hotelsRoute from './routes/hotels.js'
import roomsRoute from './routes/rooms.js'

const app = express()

dotenv.config()

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO)
    console.log('Connected to mongoDB.')
  } catch (error) {
    throw error
  }
}

mongoose.connection.on('disconnected', () => {
  console.log('MongoDb Disconnected')
})

app.use(express.json())

//middleware
app.use('/api/auth', authRoute)
app.use('/api/users', usersRoute)
app.use('/api/hotels', hotelsRoute)
app.use('/api/rooms', roomsRoute)

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500
  const errorMessage = err.message || 'Something went wrong!'
  return res
    .status(500)
    .json({
      success: false,
      status: errorStatus,
      message: errorMessage,
      stack: err.stack,
    })
})

app.get('/', (req, res) => {
  res.send('Hello Request!')
})
app.listen(8800, () => {
  connect()
  console.log('Connected to backend.')
})
