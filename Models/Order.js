const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema(
    {
        employeeId: {
            type: String, 
            required: true
        },
        dishes: [{
            dishId: {
                type: String
            },
            quantity: {
                type: Number,
                default: 1,
            }
        }],
        orderStatus:{
            type: String,
            default: 'ordered',
        }
    },
    {timestamps:true}
);

module.exports = mongoose.model('Order', OrderSchema);