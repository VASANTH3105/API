const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: "Handling get request to /products"
    });
});

router.post('/', (req, res, next) => {
    res.status(200).json({
        message: "Handling POST response for ./products"
    });
});



router.get('/:productId', (req, res, next) => {
    const id = req.params.productId;
    if(id == 'V') {
        res.status(200).json({
            message: 'You are so precious',
            id: id
        });
    } else {
        res.status(200).json({
            message: "You are not considered"
        });
    }
});

router.patch('/:productId', (req, res, next) => {
    const id = req.params.productId;
        res.status(200).json({
            message: 'You are so precious',
            id: id
        });
   
});



router.delete('/:productId', (req, res, next) => {
    const id = req.params.productId;
    res.status(200).json({
        message: "Item Deleted successfully",
        id: id
    });
});

module.exports = router;