const { Router } = require('express')
const PessoaController = require('./../controllers/PeopleController')

const router = Router()

router
.get('/people', PessoaController.list)
.post('/people', PessoaController.insert)
.get('/people/:id', PessoaController.findById)
.patch('/people/:id', PessoaController.update)
.delete('/people/:id', PessoaController.delete)
.get('/people/:studentId/registrations', PessoaController.registrationList)
.post('/people/:studentId/registrations', PessoaController.createRegistration)
.get('/people/:studentId/registrations/:registrationId', PessoaController.findRegistrationById)
.patch('/people/:studentId/registrations/:registrationId', PessoaController.updateRegistration)
.delete('/people/:studentId/registrations/:registrationId', PessoaController.deleteRegistration)

module.exports = router