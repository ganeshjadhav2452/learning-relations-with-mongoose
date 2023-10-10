const Right = require('../model/rightModel')

module.exports = rightController = {

    createRight:async(req,res)=>{
        const {staffId , right} = req.body;

        try {
            const rightRes = await Right.create({
                staffId,
                right
            })

            await rightRes.save()
            return res.status(200).json({message:'right created !'})
        } catch (error) {
            console.log(error)            
            res.status(500).json({error:'sorry this right cannot be created'})
        }
    },
    getRightUser:async(req,res)=>{

        try {
            const response = await Right.find({_id:req.body.rightId}).populate('staffId')
            console.log(response)
            res.status(200).json({data:response})
        } catch (error) {
            console.log(error)
            res.status(500).json({error:'sorry cannot get right with user'})
            
        }
    }
}