const JWTStrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;
const User = require('../models/user.model');

const opts = {};
opts.jwtFromRequest = ExtractJWT.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.JWT_SECRET;

module.exports = passport => {
    passport.use(
        new JWTStrategy(opts, (payload, done) => {
            User.findById(payload.id).then(user => {
                if (user) return done(null, user);
                return done(null, false);
            }).catch(err => console.log(err));
        })
    );
};