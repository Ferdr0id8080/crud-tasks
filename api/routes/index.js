const express       = require('express')
const router        = express.Router()

const TaskModel     = require('../models/task')


router.get('/', (req, res) => {
    res.send('API para crud-tasks-react')
})


router.get('/tasks', async (req, res) => {
    const tasks = await TaskModel.find({})
    let response = {'success': true}
    if (tasks.length < 1)
        response.success = false
    else 
        response.data = tasks
    res.json(response)
})

router.post('/tasks/create', async (req, res) => {
    const taskModel = new TaskModel()
    taskModel.title = req.body.title
    taskModel.description = req.body.description
    await taskModel.save()
    
    res.json({
        'success': true
    })
})


module.exports = router