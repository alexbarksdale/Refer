const mongoose = require('mongoose');
const validate = require('mongoose-validator');
const bcrypt = require('bcrypt');

const { Schema } = mongoose;
const saltRounds = 10;
const blockedUsernames = ['login', 'logout', 'signup', 'browsestacks', 'profile'];

const emailValidator = [
    validate({
        validator: 'isEmail',
        message: 'Email address is not valid'
    }),
    validate({
        validator: 'normalizeEmail'
    })
];

const passwordValidator = [
    validate({
        validator: 'isLength',
        arguments: [6, 256],
        message: 'Password must be between {ARGS[0]} and {ARGS[1]} characters'
    })
];

const usernameValidator = [
    validate({
        validator: 'isLength',
        arguments: [3, 50],
        message: 'Username must be between {ARGS[0]} and {ARGS[1]} characters'
    }),
    validate({
        validator: 'matches',
        arguments: ['^[a-zA-Z0-9_]*$'],
        message: 'Usernames may only contain alpha-numeric characters or underscores'
    }),
    validate({
        validator: 'matches',
        arguments: [`^(?!(${blockedUsernames.join('|')})$).*`],
        message: 'That username is blocked'
    })
];

const userSchema = new Schema(
    {
        email: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            lowercase: true,
            validate: emailValidator
        },
        password: {
            type: String,
            required: true,
            validate: passwordValidator
        },
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            validate: usernameValidator
        },
        displayname: {
            type: String,
            required: true,
            trim: true,
            lowercase: true
        },
        dob: {
            type: Date,
            required: true
        },
        location: { type: String },
        platforms: { type: Array }
    },
    { timestamps: true }
);

userSchema.pre('save', function(next) {
    const user = this;

    if (user.isModified('password')) {
        bcrypt.genSalt(saltRounds, (saltErr, salt) => {
            if (saltErr) return next(saltErr);

            bcrypt.hash(user.password, salt, (hashErr, hash) => {
                if (hashErr) return next(hashErr);
                user.password = hash;
                return next();
            });
            return false;
        });
    } else {
        next();
    }
});

userSchema.methods.comparePassword = function(candidatePass, callback) {
    bcrypt.compare(candidatePass, this.password, (err, isMatch) => {
        if (err) return callback(err);
        callback(null, isMatch);
        return false;
    });
};

const User = mongoose.model('User', userSchema);

module.exports = User;
