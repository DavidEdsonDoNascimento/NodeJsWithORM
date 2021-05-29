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

        try{

            const result = await db.People.create({
                name: name,
                email: email,
                roles: roles,
                status: true
            })

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

    static async registrationList(req, res)
    {
        const { studentId } = req.params
        
        try {

            const registrations = await db.Registrations.findAll({
                where: { student_id: studentId }
            })

            return res.status(200).json(registrations)
        }
        catch(err){
            return res.status(500).json(err.message)
        }
    }

    static async findRegistrationById(req, res)
    {
        const { studentId, registrationId } = req.params

        try{

            const registration = await db.Registrations.findAll({
                where: { 
                    id: registrationId,
                    student_id: studentId
                }
            })

            return res.status(200).json(registration)
        }
        catch(err){
            return res.status(500).json(err.message)
        }
    }

    static async createRegistration(req, res)
    {
        const { studentId } = req.params
        
        try{

            const registration = await db.Registrations.create({ ...req.body, student_id: studentId })

            return res.status(200).json(registration)
        }
        catch(err){
            return res.status(500).json(err.message)
        }
    }

    static async updateRegistration(req, res)
    {
        const { studentId, registrationId } = req.params
        
        try{

            await db.Registrations.update(req.body, { where: { id: registrationId, student_id: studentId }})
            
            const registration = await db.Registrations.findOne({ where: { id: registrationId } })
            
            return res.status(200).json(registration)
        }
        catch(err){
            return res.status(500).json(err.message)
        }
    }

    static async deleteRegistration(req, res)
    {
        const { studentId, registrationId } = req.params

        try{

            await db.Registrations.destroy({ where: { id: registrationId, student_id: studentId } })
            return res.status(200).json({ message: `Matricula de id ${registrationId} deletada.` })
        }
        catch(err){
            return res.status(500).json(err.message)
        }
    }

}

module.exports = PeopleController