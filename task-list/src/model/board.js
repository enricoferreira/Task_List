const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Board = new Schema({
    titulo: {
        type: String,
        required: true,
        unique: true
    },
    descricao: {
        type: String,        
        maxlength: 100
    },
    cor: {
        type: String,
        default: 'dark'
    },
    project: {
        type: Schema.Types.ObjectId,
        ref: 'project',
        required: true
    },
    task: [{
        type: Schema.Types.ObjectId,
        ref: 'task'
    }],
    label: [{
        type: Schema.Types.ObjectId,
        ref: 'label'
    }],
    member: [{
        type: Schema.Types.ObjectId,
        ref: 'member'
    }]

})

mongoose.model('board', Board);