const express = require('express');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const jwt = require('express-jwt');
const session = require('express-session');

require('dotenv').config();

const app = express();
const port = process.env.PORT;

passport.serializeUser((user, done) => {
    done(null, user);
});

passport.deserializeUser((user, done) => {
    done(null, user);
});

app.use(cors());
app.use(express.json());
app.use(passport.initialize());
app.use(
    jwt({
        secret: process.env.JWT_SECRET,
        credentialsRequired: false
    })
);
app.use(session({ secret: 'keyboard cat', cookie: { maxAge: 60000 } }));

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
const authRouter = require('./routes/auth')(passport);

app.use('/user', userRouter);
app.use('/announce', announcementRouter);
app.use('/auth', authRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
