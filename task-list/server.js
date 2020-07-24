const app = require('./src/config/custom-express.js');

app.listen(2000, ()=>{
    console.log('Servidor Rodando na porta 2000');
})