const bodyParser = require('body-parser')
const peopleRoutes = require('./peopleRoute')
const levelsRoutes = require('./levelsRoute')
const classroomsRoutes = require('./classroomsRoute')
const moment = require('moment')

module.exports = app => {
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({ extended: true }))
    
    app.use(peopleRoutes)
    app.use(levelsRoutes)
    app.use(classroomsRoutes)
    
    app.get('/', (req, res) => {
        const now = Date(moment().format('YYYY-MM-DD HH:mm:ss'))
        //const now2 = new Date(now)
        return res.json({ success: true , hoje: now })
    })

}