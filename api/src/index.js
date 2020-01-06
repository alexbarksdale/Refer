const express = require('express');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use(passport.initialize());

require('./config/passport')(passport);

// Connect to Mongo
const mongoUri = process.env.MONGO_URI;
mongoose.connect(mongoUri, { useNewUrlParser: true, useCreateIndex: true });
const { connection } = mongoose;
connection.once('open', () => {
    console.log('Established connection to MongoDB');
});

// Routers
const userRouter = require('./routes/user');
const announcementRouter = require('./routes/announcement');

app.use('/user', userRouter);
app.use('/announce', announcementRouter);


app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});