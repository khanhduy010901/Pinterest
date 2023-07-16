const express = require('express')
const app = express()
const port = process.env.PORT || 8000
require('dotenv').config()
import cors from 'cors'
import initRouters from './src/routers'
import connectDatabase from './src/config/connectDatabase'

app.use(cors({
  origin: process.env.CLIENT_URL,
  methods:["POST", "GET", "PUT", "DELETE"]
}))
app.use(express.json())
app.use(express.urlencoded({extended:true}))

initRouters(app)
connectDatabase()

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
