const express = require('express')
const router = express.Router();
const Model = require('../models/Database')

router.get('/player', async (req, res) => {
    try {
        const datas = await Model.find();
        res.json(datas);
    } catch (err) {
        console.log("Error in Player", err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.post('/playercreate', async (req, res) => {
    try {
        const { Title, body  } = req.body;
        await Model.create({ Title, body })
            .then(res.json('done'))
            .catch(res.json("not"));

    } catch (error) {
        console.error('Error in Player Creation:', error);
    }
});

router.post('/delete/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await Model.findOneAndDelete({Title:id});
        res.json('deleted');
        console.log("Games deleted successfully");
    } catch (error) {
        console.error('Error in deleting games:', error);
    }
});

router.post('/update/:id', async (req, res) => {
    const { id } = req.params;
    const { Title, body} = req.body;
    const update = await Model.findOneAndUpdate({Title:id},{Title, body})
    res.json('update');
});




module.exports = router;
