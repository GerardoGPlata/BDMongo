// express
const express = require('express');
const mongoose = require('mongoose');
require("dotenv").config();
const userRoutes = require('./routes/user');
const app = express();
const port = process.env.PORT || 3000;

// Middlewares
app.use(express.json());
app.use('/api', userRoutes)

// Routes
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// MondgoDB Connection
mongoose.connect(process.env.MONGODB_URI).
then(() => console.log('Conectado a MongoDB')).
catch(err => console.log(err));

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

