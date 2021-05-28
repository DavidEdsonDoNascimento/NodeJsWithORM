const db = require('./../models')

class ClassroomsController
{
    static async list(req, res)
    {
        try{
            const result = await db.Classrooms.findAll()
            return res.status(200).json(result)
        }
        catch(err){
            return res.status(500).json(err.message)
        }
    }

    static async insert(req, res)
    {
        
        try{
            const result = await db.Classrooms.create(req.body)
            return res.status(201).json(result)
        }
        catch(err){
            return res.status(500).json(err.message)
        }
    }

    static async update(req, res)
    {
        const  { id } = req.params

        try{
            await db.Classrooms.update(req.body, {
                where: { id: id }
            })

            const classroom = await db.Classrooms.findOne({
                where: { id: id }
            })

            return res.status(200).json(classroom)
        }
        catch(err){
            return res.status(500).json(err.message)
        }
    }

    static async delete(req, res)
    {
        const { id } = req.params
        
        try{
            
            await db.Classrooms.update({ status: false }, { where: { id: id }})    
            return res.status(200).json({ message: `O registro de id ${id} foi deletado.`})
        }
        catch(err){
            return res.status(500).json(err.message)
        }
    }

    static async findById(req, res)
    {
        const { id } = req.params

        try{
            
            const classroom = await db.Classrooms.findOne({ where: { id: id } })
            return res.status(200).json(classroom)
        }
        catch(err){
            return res.status(500).json(err.message)
        }
    }

}
module.exports = ClassroomsController