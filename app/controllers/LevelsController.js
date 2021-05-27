const db = require('./../models')

class LevelsController
{
    static async list(req, res)
    {
        try{

            const levels = await db.Levels.findAll()
            return res.status(200).json(levels)
        }
        catch(err){
            return res.status(500).json(err.message)
        }
    }

    static async insert(req, res)
    {
        try{

            const result = await db.Levels.create(req.body)
            return res.status(200).json(result)
        }
        catch(err){
            return res.status(500).json(err.message)
        }

    }
    
    static async findById(req, res)
    {
        const { id } = req.params

        try{
            
            const level = await db.Levels.findOne({
                where: { id: id }
            })
            
            return res.status(200).json(level)
        }
        catch(err){
            return res.status(500).json(err.message)
        }
    }

    static async update(req, res)
    {
        const { id } = req.params

        try{

            await db.Levels.update(req.body, {
                where: { id: id }
            })

            const level = await db.Levels.findOne({
                where: { id: id }
            })

            return res.status(200).json(level)
        }
        catch(err) {
            return res.status(500).json(err.message)
        }
    }

    static async delete(req, res) {

        const { id } = req.params

        try{

            await db.Levels.destroy({
                where: { id: id }
            })

            return res.status(200).json({ message: `Registro de id ${id} deletado.` })
        }
        catch(err) {
            return res.status(500).json(err.message)
        }
    }
}

module.exports = LevelsController