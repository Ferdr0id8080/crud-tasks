const express       = require('express')
const cors          = require('cors')
const mongoose      = require('mongoose')
const logger        = require('morgan')
const dotenv        = require('dotenv')

dotenv.config()

const app           = express()

mongoose.connect(`mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}?authSource=${process.env.DB_AUTHSOURCE}`, {useNewUrlParser: true})
    .then(db => console.log('Database is connected'))
    .catch(err => console.log('Error connecting to the database'))


const indexRouter = require('./routes/index')


app.set('port', process.env.API_PORT)

app.use(logger('dev'))
app.use(cors())
app.set(express.urlencoded({extended: false}))
app.use(express.json())

app.use('/', indexRouter)


app.listen(app.get('port'), () => {
    console.log(`API running on port ${app.get('port')}`)
})