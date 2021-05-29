const { Router } = require('express')
const ClassroomsController = require('./../controllers/ClassroomsController')

const router = Router()

router
.get('/classrooms', ClassroomsController.list)
.get('/classrooms/:id', ClassroomsController.findById)
.post('/classrooms', ClassroomsController.insert)
.patch('/classrooms/:id', ClassroomsController.update)
.delete('/classrooms/:id', ClassroomsController.delete)

module.exports = router