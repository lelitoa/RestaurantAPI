const mongoose = require('mongoose');

const ReservationSchema = new mongoose.Schema(
    {
        table: {
            type: String, 
            required: true
        },
        startHour: {
            type: String,
            required: true
        },
        client: {
            type: String,
            required: true
        }
    },
    {timestamps:true}
);

module.exports = mongoose.model('Reservation', ReservationSchema);