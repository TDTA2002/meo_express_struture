import express from "express";
const router = express.Router();

import categoryModel from '../models/category.model';

router.use('/', async (req, res) => {
    try {
        let result = await categoryModel.readMany();
        console.log("con phố đã lên đèn", result);
        return res.status(201).json({
            message: 'công việc quá nhiều điều phải chắc chở',
            data: result.data 
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: "đùa à",
            error: error.message
        });
    }
});

module.exports = router;
