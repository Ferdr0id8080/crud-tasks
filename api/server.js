const express       = require('express')
const cors          = require('cors')
const mongoose      = require('mongoose')
const logger        = require('morgan')

const app           = express()

mongoose.connect('mongodb://ferdroid:elpassword@151.80.59.231:27017/crud-task-react?authSource=admin', {useNewUrlParser: true})
    .then(db => console.log('Database is connected'))
    .catch(err => console.log('Error connecting to the database'))


const indexRouter = require('./routes/index')


app.set('port', process.env.API_PORT || 3131)

app.use(logger('dev'))
app.use(cors())
app.set(express.urlencoded({extended: false}))
app.use(express.json())

app.use('/', indexRouter)


app.listen(app.get('port'), () => {
    console.log(`API running on port ${app.get('port')}`)
})