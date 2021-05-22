const { Router } = require('express')
const PessoaController = require('./../controllers/PeopleController')

const router = Router()

router.get('/people', PessoaController.list)
router.post('/people', PessoaController.insert)

module.exports = router