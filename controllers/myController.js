
const NumX = require('../models/NumX');

exports.createOneNumber = async (req,res,next) => {
    try {
        //req.body: numX
        const numX = await NumX.create(req.body);
        res.status(200).json({
            status: 'success !!!',
            data: {numX}
        })
    } catch (error) {
        res.json(error);
    }  
}


exports.findOneNumber = async (req,res,next) => {
    try {
        //req.body: numX
        const id = req.params.id
        const numX = await NumX.findById(id);
        res.status(200).json({
            status: 'success !!!',
            data: {numX}
        })
    } catch (error) {
        res.json(error);
    }  
}


exports.updateOneNumber = async (req,res,next) => {
    try {
        //req.body: numX
        const id = req.params.id
        const numX = await NumX.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        res.send({ message: "value was updated successfully." });
    } catch (error) {
        res.json(error);
    }  
}