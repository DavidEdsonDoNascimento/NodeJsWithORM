const { Router } = require('express')
const ClassroomsController = require('./../controllers/ClassroomsController')

const router = Router()

router.get('/classrooms', ClassroomsController.list)
router.get('/classrooms/:id', ClassroomsController.findById)
router.post('/classrooms', ClassroomsController.insert)
router.patch('/classrooms/:id', ClassroomsController.update)
router.delete('/classrooms/:id', ClassroomsController.delete)

module.exports = router