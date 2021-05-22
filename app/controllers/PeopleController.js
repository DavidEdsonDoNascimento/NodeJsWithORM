const db = require('../models')

class PeopleController 
{
    static async list(req, res)
    {
        try{

            const people = await db.People.findAll()
            return res.status(200).json(people)
        } catch(err){
            return res.status(500).json(err.message)
        }
    }
}

module.exports = PeopleController