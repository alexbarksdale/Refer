const router = require('express').Router();
const jwt = require('jsonwebtoken');
const User = require('../models/user.model');

router.route('/signup').post((req, res) => {
    const user = new User({
        email: req.body.email,
        password: req.body.password,
        username: req.body.username,
        displayname: req.body.username,
        dob: req.body.dob
    });

    user.save((err) => {
        if (err) return res.status(400).json(err);
        return res.status(200).json('Created user');
    });
});

router.route('/login').post((req, res) => {
    User.findOne({ email: req.body.email }, (err, user) => {
        if (!user) return res.status(400).json({ message: 'User not found.' });

        user.comparePassword(req.body.password, (compareErr, isMatch) => {
            if (compareErr) throw compareErr;
            if (!isMatch) return res.status(400).json({ message: 'Incorrect password.' });
            jwt.sign({ id: user.id, name: user.username },
                process.env.JWT_SECRET, { expiresIn: 31556926 }, (jwtErr, token) => {
                if (jwtErr) throw jwtErr;
                return res.status(200).json({
                    success: true,
                    token: `Bearer ${token}`
                });
            });
            return false;
        });
        return false;
    });
});

router.route('/update').post((req, res) => {
    User.findOne({ email: req.body.email }, (err, user) => {
        if (!user) return res.status(400).json({ message: 'User not found.' });
        if (!req.body.update) return res.status(400).json({ message: 'No fields to update provided' });

        Object.keys(req.body.update).forEach(key => {
            // eslint-disable-next-line no-param-reassign
            user[key] = req.body.update[key];
        });
        user.save((saveErr) => {
            if (saveErr) return res.status(400).json(saveErr);
            return res.status(200).json('Updated user');
        });
        return false;
    });
});

router.route('/get/:userName').get((req, res) => {
    User.findOne({ username: req.params.userName }, 'username', (err, user) => {
        if (!user) return res.status(400).json({ message: 'User not found.' });
        return res.status(200).json(user);
    });
});

module.exports = router;