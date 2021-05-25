const { Router } = require('express')
const PessoaController = require('./../controllers/PeopleController')

const router = Router()

router.get('/people', PessoaController.list)
router.post('/people', PessoaController.insert)
router.get('/people/:id', PessoaController.findById)
router.patch('/people/:id', PessoaController.update)
router.delete('/people/:id', PessoaController.delete)

module.exports = router