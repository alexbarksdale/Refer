const JWTStrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;
const BnetStrategy = require('passport-bnet').Strategy;
const SteamStrategy = require('passport-steam').Strategy;
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

    passport.use(
        new BnetStrategy({
            clientID: process.env.BNET_ID,
            clientSecret: process.env.BNET_SECRET,
            callbackURL: 'http://localhost:5000/auth/bnet/return',
            region: 'us'
        }, ((_accessToken, _refreshToken, profile, done) => {
            return done(null, profile);
        }))
    );

    passport.use(
        new SteamStrategy({
            returnURL: 'http://localhost:5000/auth/steam/return',
            realm: 'http://localhost:5000/',
            apiKey: process.env.STEAM_SECRET
        }, ((_identifier, profile, done) => {
            return done(null, profile);
        }))
    );
};