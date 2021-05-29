const bodyParser = require('body-parser')
const moment = require('moment')
const peopleRoutes = require('./peopleRoute')
const levelsRoutes = require('./levelsRoute')
const classroomsRoutes = require('./classroomsRoute')


module.exports = app => {
    
    app.use(bodyParser.json())
    
    app.use(bodyParser.urlencoded({ extended: true }))
    
    app.use(peopleRoutes, levelsRoutes, classroomsRoutes)
    
    app.get('/', (req, res) => {
        const now = moment().format('YYYY-MM-DD HH:mm:ss')
        return res.json({ success: true , current: now })
    })

}