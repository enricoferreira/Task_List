const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Project = new Schema({
    titulo:{
        type: String,
        required: true
    },
    descricao:{
        type: String,
        required: false
    },
    data_criacao:{
        type: Date,
        default: Date.now(),
        required: true
    },
    data_prevista_conclusao:{
        type: Date,
        default: Date.now() + 30,        
    },
    status:{
        type: String,        
        default: 'Unknown'
    },
    member:[{
        type: Schema.Types.ObjectId,
        ref: 'member'
    }],
    task: [{
        type: Schema.Types.ObjectId,
        ref: 'task'
    }]    
})

mongoose.model('project', Project);