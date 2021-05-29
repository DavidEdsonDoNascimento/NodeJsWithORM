const { Router } = require('express')
const LevelsController = require('./../controllers/LevelsController')
const router = Router()

router
.get('/levels', LevelsController.list)
.get('/levels/:id', LevelsController.findById)
.post('/levels', LevelsController.insert)
.patch('/levels/:id', LevelsController.update)
.delete('/levels/:id', LevelsController.delete)


module.exports = router;