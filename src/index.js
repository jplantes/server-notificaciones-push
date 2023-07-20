require('dotenv').config()
const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const app = express()

const port = process.env.PORT || 3000


// Middlewares
app.use(cors())
app.use(morgan('dev'))
app.use(express.urlencoded({extended: false}))
app.use(express.json())


// Rutas
app.use( require('./routers/index') )


app.listen( port, () => {
  console.log(`Corriendo en el puerto ${ port }`)
})