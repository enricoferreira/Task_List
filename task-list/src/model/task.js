const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Task = new Schema({
    titulo: {
        type: String,
        required: true
    },
    descricao: {
        type: String,        
    },
    status: {
        type: String,        
    },
    data_criacao: {
        type: Date,
        default: Date.now(),
        required: true
    },
    data_previsao: {
        type: Date,
        default: Date.now + 7
    },
    data_termino: {
        type: Date        
    },
    label: [{
        type: Schema.Types.ObjectId,
        ref: 'label'            
    }],
    project:{
        type: Schema.Types.ObjectId,
        ref: 'project',
        required: true
    },
    member:{
        type: Schema.Types.ObjectId,
        ref: 'member'
    },
    board: {
        type: Schema.Types.ObjectId,
        ref: 'board'
    }
})

mongoose.model('task', Task);