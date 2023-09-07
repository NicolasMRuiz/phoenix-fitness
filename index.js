import express from 'express'
import dotenv from 'dotenv'
import httpStatus from './helpers/httpStatus.js'

dotenv.config()

const PORT = process.env.PORT || 3000

const app = express()

app.use(express.json())

app.get('*', (_, res) => {
  return res.status(httpStatus.OK).send('Phoenix Fitness: El santuario de tu transformación')
})

app.listen(PORT, () => {
  console.log(`Gym listening on port ${PORT}`)
})
