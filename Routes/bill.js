const router = require('express').Router();
const Bill = require('../Models/Bill');
const {verifyJwtToken, verifyTokenAndAuthorization, verifyTokenAndAdmin} = require('./verifyJwtToken');

//GET
router.get('/:id', verifyTokenAndAuthorization , async (req, res) => {
    try {
      const bill = await Bill.findById(req.params.id);
      res.status(200).json(bill);
    } catch (error) {
      res.status(500).json(error);
    }
});

//GET ALL
router.get('/', verifyTokenAndAdmin, async (req, res) => {
    try {
        const bills = await Bill.find();
        res.status(200).json(bills);
    } catch (error) {
        res.status(500).json(error);
    }
});

//GET BY DATE
router.get('/billByDate', verifyTokenAndAdmin, async (req, res) => {
    try {
      const billByDate  = await Bill.find({
        createdAt: {
          $gte:req.query.from, 
          $lte:req.query.to
      }
      }).limit(req.query.limit).sort({createdAt:'desc'});
      res.status(200).json(billByDate);
    } catch (error) {
      res.status(500).json(error);
    }
}); 

//CREATE
router.post('/', verifyJwtToken,  async (req,res) => {
    const newBill= new Bill(req.body)
    try {
        const savedBill = await newBill.save();
        res.status(200).json(savedBill)
    } catch (error) {
        res.status(500).json(error)
    }
});

//UPDATE
router.put('/:id', verifyTokenAndAdmin, async (req, res) => {
    try {
      const updatedBill = await Bill.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedBill);
    } catch (error) {
      res.status(500).json(error);
    }
});

//DELETE
router.delete('/:id', verifyTokenAndAdmin, async (req, res) => {
    try {
      await Bill.findByIdAndDelete(req.params.id);
      res.status(200).json("Dishes in bill has been deleted.");
    } catch (error) {
      res.status(500).json(error);
    }
});

module.exports = router;