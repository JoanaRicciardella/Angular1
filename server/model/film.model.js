const mongoose = require('mongoose');

var filmSchema = mongoose.Schema({
    title: String,
    affiche: String,
    onAir: String,
    synopsis: String,
    date: String
});

var Film = mongoose.model('Film', filmSchema);
module.exports = Film;