const mongoose = require('mongoose');

const numXSchema = new mongoose.Schema({
    nameOfNumber: {type: String, unique: true, trim : true, required: [true, 'Need a number !']},
    value: {type: Number, trim : true, required: [true, 'Need a number !']}
}, {timestamps:true});

const NumX = mongoose.model('NumX',numXSchema);

module.exports = NumX;