const router = require('express').Router();
const User = require('../models/user.model');
const auth = require('../auth');

module.exports = (passport) => {
    router.route('/steamlogin/:user').get((req, res, next) => {
        req.session.linkUser = req.params.user;
        req.session.save(next);
    }, passport.authenticate('steam'));

    router.route('/steam/return').get((req, res, next) => {
        if (!req.session.linkUser) {
            res.status(400).json({ err: 'User not found' });
        }
        passport.authenticate('steam', (err, user) => {
            if (err) {
                return res.status(400).json(err);
            }
            if (!user) {
                return res.redirect('/');
            }
            console.log(user);
            User.findOne({ email: req.session.linkUser }, (mongoErr, mongoUser) => {
                if (mongoErr) return res.status(400).json(mongoErr);
                mongoUser.platforms.push({
                    id: user.id,
                    name: user.displayName,
                    provider: 'steam',
                    url: user._json.profileurl
                });
                mongoUser.save((saveErr) => {
                    if (saveErr) return res.status(400).json(saveErr);
                    return res.send('Success');
                });
            });
        })(req, res, next);
    });

    router.route('/bnetlogin/:user').get((req, res, next) => {
        req.session.linkUser = req.params.user;
        req.session.save(next);
    }, passport.authenticate('bnet'));

    router.route('/bnet/return').get((req, res, next) => {
        passport.authenticate('bnet', (err, user) => {
            if (err) {
                return res.status(400).json(err);
            }
            if (!user) {
                return res.redirect('/');
            }
            console.log(user);
            console.log(req.session.linkUser);
            User.findOne({ email: req.session.linkUser }, (mongoErr, mongoUser) => {
                if (mongoErr) return res.status(400).json(mongoErr);
                mongoUser.platforms.push({ id: user.sub, name: 'bnet username', provider: 'bnet' });
                mongoUser.save((saveErr) => {
                    if (saveErr) return res.status(400).json(saveErr);
                    return res.send('Success');
                });
            });
        })(req, res, next);
    });

    return router;
};
