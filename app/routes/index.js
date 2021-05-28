const bodyParser = require('body-parser')
const moment = require('moment')
const peopleRoutes = require('./peopleRoute')
const levelsRoutes = require('./levelsRoute')
const classroomsRoutes = require('./classroomsRoute')
const registrationsRoutes = require('./registrationsRoute')


module.exports = app => {
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({ extended: true }))
    
    app.use(peopleRoutes)
    app.use(levelsRoutes)
    app.use(classroomsRoutes)
    app.use(registrationsRoutes)
    
    app.get('/', (req, res) => {
        const now = moment().format('YYYY-MM-DD HH:mm:ss')
        return res.json({ success: true , current: now })
    })

}