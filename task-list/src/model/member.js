const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Member = new Schema({
    nome: {
        type: String,
        required: true
    },
    data_nascimento: {
        type: Date,
        required: true        
    },
    cargo: {
        type: String,
        required: true        
    },
    senioridade: {
        type: String,
        required: true
    },
    project: [{
        type: Schema.Types.ObjectId,
        ref: 'project'
    }],
    task: [{
        type: Schema.Types.ObjectId,
        ref: 'task'
    }],
    label: [{
        type: Schema.Types.ObjectId,
        ref: 'label'
    }]
})
mongoose.model('member', Member);