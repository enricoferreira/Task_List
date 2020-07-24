const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Label = new Schema({
    titulo: {
        type: String,
        required: true
    },
    descricao: {
        type: Date,
        required: true
    },
    cor: {
        type: String,
        required: true
    }
})
mongoose.model('label', Label);