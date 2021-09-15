const mongoose = require('mongoose');

const LeaderboardSchema = new mongoose.Schema({
    date: {
        type: Date,
        default: Date.now
    },
    score: [{
        username: {
            type: String
        },
        points: {
            type: Number
        },
        _id: false
    }],
    games: {
        type: [String]
    }

});

module.exports = mongoose.model('Leaderboard', LeaderboardSchema)