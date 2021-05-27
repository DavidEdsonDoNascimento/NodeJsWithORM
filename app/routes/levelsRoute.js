const { Router } = require('express')
const LevelsController = require('./../controllers/LevelsController')
const router = Router()

router.get('/levels', LevelsController.list)
router.get('/levels/:id', LevelsController.findById)
router.post('/levels', LevelsController.insert)
router.patch('/levels/:id', LevelsController.update)
router.delete('/levels/:id', LevelsController.delete)


module.exports = router;