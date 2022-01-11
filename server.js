const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDB = require('./config/db');
const app = express();

require('dotenv').config({
    path: './config/config.env'
});
connectDB()


app.use(bodyParser.json())


if (process.env.NODE_ENV === 'development') {
    app.use(cors({
        origin: process.env.CLIENT_URL
    }))
    app.use(morgan('dev'))

}


const authRouter = require('./routes/auth.route')

app.use('/api/', authRouter);



app.use((req, res, next) => {
    res.status(404).json({
        success: false,
        message: "page not found"
    })
});
const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`);
});