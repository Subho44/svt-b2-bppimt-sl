const Dustbin = require('../models/Dustbin');

//insert dustbin
exports.createDustbin = async (req, res) => {
    try {
        const data = await Dustbin.create(req.body);
        res.status(201).json(data);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
//get all city based dustbin
exports.getallDustbin = async (req, res) => {
    try {
        const { search } = req.query;
        const query = search
            ? {
                $or: [

                    { location: { $regex: search, $options: 'i' } },
                    {status:{$regex:search,$options:'i'}}

                ]
            }
            : {};
        const datas = await Dustbin.find(query);
        res.status(200).json(datas);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
//get singel dustbin data
exports.getsingleDustbin = async (req, res) => {
    try {
        const data = await Dustbin.findById(req.params.id);
        res.status(201).json(data);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
//update
exports.updateDustbin = async (req, res) => {
    try {
        const data = await Dustbin.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(201).json(data);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
//delete
exports.deleteDustbin = async (req, res) => {
    try {
        await Dustbin.findByIdAndDelete(req.params.id);
        res.status(201).json({ message: 'dustbin deleted' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};