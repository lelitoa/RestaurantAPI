const router = require('express').Router();
const Reservation = require('../Models/Reservation');
const {verifyJwtToken, verifyTokenAndAuthorization, verifyTokenAndAdmin} = require('./verifyJwtToken');

//GET
router.get('/:id', verifyTokenAndAuthorization , async (req, res) => {
    try {
      const reservation = await Reservation.findById(req.params.id);
      res.status(200).json(reservation);
    } catch (error) {
      res.status(500).json(error);
    }
});

//GET ALL
router.get('/', verifyTokenAndAdmin, async (req, res) => {
    try {
        const reservations = await Reservation.find();
        res.status(200).json(reservations);
    } catch (error) {
        res.status(500).json(error);
    }
});

//CREATE
router.post('/', verifyJwtToken,  async (req,res)=>{
    const newReservation = new Reservation(req.body)
    try {
        const savedReservation = await newReservation.save();
        res.status(200).json(savedReservation)
    } catch (error) {
        res.status(500).json(error)
    }
});

//UPDATE
router.put('/:id', verifyTokenAndAuthorization, async (req, res) => {
    try {
      const updatedReservation = await Reservation.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedReservation);
    } catch (error) {
      res.status(500).json(error);
    }
});

//DELETE
router.delete("/:id", verifyTokenAndAuthorization, async (req, res) => {
  try {
    await Reservation.findByIdAndDelete(req.params.id);
    res.status(200).json("Reservation has been deleted.");
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router; 