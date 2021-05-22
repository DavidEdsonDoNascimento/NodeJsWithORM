const db = require('../models')
const moment = require('moment')
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

    static async insert(req, res)
    {
        const { name, email, roles } = req.body

        try{

            const result = await db.People.create({
                name: name,
                email: email,
                roles: roles,
                status: 1,
                createdAt: new Date(),
                updatedAt: moment().format('YYYY-MM-DD HH:mm:ss')
            })

            return res.status(201).json(result);

        } catch(err){
            return res.status(500).json(err.message)
        }
    }
}

module.exports = PeopleController