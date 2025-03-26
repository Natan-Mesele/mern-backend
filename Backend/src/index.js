const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(cors());
app.use(bodyParser.json());

const userRoute = require('./routes/userRoute');
app.use('/auth', userRoute);

const productRoute = require('./routes/productRoute');
app.use('/product', productRoute);

const cartRoute = require('./routes/cartRoute');
app.use('/cart', cartRoute);

module.exports = app;