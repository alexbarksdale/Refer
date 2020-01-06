const router = require('express').Router();
const Announcement = require('../models/announcement.model');

router.route('/getAnnouncement').get((req, res) => {
    Announcement.findOne({}, 'message', (err, message) => {
        if (err) return res.status(400).json(err);
        return res.status(200).json(message);
    });
});

module.exports = router;
