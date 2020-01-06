const mongoose = require('mongoose');

const { Schema } = mongoose;

const announcementSchema = new Schema({
    message: {
        type: String,
        required: true
    }
});

const Announcement = mongoose.model('Announcement', announcementSchema);

module.exports = Announcement;
