const bodyParser = require('body-parser')
const peopleRoutes = require('./peopleRoute')

module.exports = app => {
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({ extended: true }))
    app.use(peopleRoutes)

    app.get('/', (req, res) => {
        return res.json({ success: true })
    })

}