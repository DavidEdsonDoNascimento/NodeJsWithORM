const { Router } = require('express')
const RegistrationsController = require('./../controllers/RegistrationsController')

const router = Router()

router.get('/registrations', RegistrationsController.list)
router.get('/registrations/:id', RegistrationsController.findById)
router.post('/registrations', RegistrationsController.insert)
router.patch('/registrations/:id', RegistrationsController.update)
router.delete('/registrations/:id', RegistrationsController.delete)

module.exports = router;