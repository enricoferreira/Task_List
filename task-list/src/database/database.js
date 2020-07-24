const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/task_list', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=>{
    console.log('Conectado com o banco de TaskList');    
})
.catch(err => console.log(err))

module.exports = mongoose