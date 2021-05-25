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

    static async findById(req, res)
    {
        const { id } = req.params

        try{

            const person = await db.People.findOne({
                where: { id: id }
            })
            
            return res.status(200).json(person)
        } 
        catch(err){
            return res.status(500).json(err.message)
        }

    }

    static async insert(req, res)
    {
        const { name, email, roles } = req.body
        const now = date(moment().format('YYYY-MM-DD HH:mm:ss'))

        try{

            const result = await db.People.create({
                name: name,
                email: email,
                roles: roles,
                status: 1,
                createdAt: now,
                updatedAt: now
            })
            console.log(now)
            return res.status(201).json(result);

        } catch(err){
            return res.status(500).json(err.message)
        }
    }

    static async update(req, res)
    {
        const { id } = req.params

        try{
            
            await db.People.update(req.body, {
                where: { id: id }
            })

            const person = await db.People.findOne({
                where: { id: id}
            })

            return res.status(200).json(person)
        }
        catch(err){
            return res.status(500).json(err.message)
        }
    }

    static async delete(req, res)
    {
        const { id } = req.params

        try{
            
            await db.People.update({ status: false }, { where: { id: id }})
            return res.status(200).json({ message: `Registro de id ${id} deletado.` })
        }
        catch(err){
            return res.status(500).json(err.message)
        }
    }
}

module.exports = PeopleController