const express = require('express')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 5000

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use('/api/animal', require('./routes/farmRoutes'))

app.listen(port, () => console.log(`server started on port ${port}`))