const db = require('./../models')

class RegistrationsController
{
    static async list(req, res)
    {
        try {
            
            const registrations = await db.Registrations.findAll()
            return res.status(200).json(registrations)
        }
        catch (err) {
            return res.status(500).json(err.message)
        }
    }

    static async insert(req, res)
    {
        try{
            
            const registration = await db.Registrations.create(req.body)
            return res.status(201).json(registration)
        }
        catch (err) {
            return res.status(500).json(err.message)
        }
    }

    static async update(req, res)
    {
        const { id } = req.params
        
        try{

            await db.Registrations.update(req.body, { where: { id: id }})

            const registration = await db.Registrations.findOne({ where: { id: id } })
            return res.status(200).json(registration)
        }
        catch (err) {
            return res.status(500).json(err.message)
        }
    }

    static async delete(req, res)
    {
        const { id } = req.params

        try{

            await db.Registrations.update({ status: false }, { where: { id: id } })
            return res.status(200).json({ message: `O Registro de id ${id} foi deletado.` })
        }
        catch (err) {
            return res.status(500).json(err.message)
        }
    }

    static async findById(req, res)
    {
        const { id } = req.params

        try{
            
            const registration = await db.Registrations.findOne({ where: { id: id } })
            return res.status(200).json(registration)
        }
        catch (err) {
            return res.status(500).json(err.message)
        }
    }

}
module.exports = RegistrationsController