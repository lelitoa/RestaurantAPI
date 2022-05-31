const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRoute = require('./Routes/user');
const billRoute = require('./Routes/bill');
const authRoute = require('./Routes/auth');
const dishRoute = require('./Routes/dish');
const orderRoute = require('./Routes/order');
const employeeRoute = require('./Routes/employee');
const reservationRoute = require('./Routes/reservation');

const app = express();
dotenv.config();

app.get('/', (req, res) => {
    res.send('Hello node');
});

mongoose.connect(
    process.env.DB_CONNECTION
    ).then(()=> console.log("Successfully connected to DB!"))
    .catch((err)=>{
        console.log(err)
    });

app.use(express.json());

app.use('/api/user', userRoute);
app.use('/api/bill', billRoute);
app.use('/api/auth', authRoute);
app.use('/api/dish', dishRoute);
app.use('/api/order', orderRoute);
app.use('/api/employee', employeeRoute);
app.use('/api/reservation', reservationRoute);

app.listen(3000, () => {
    console.log("Server is running and listening on port 3000");
});