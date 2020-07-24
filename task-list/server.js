const app = require('./src/config/custom-express.js');
const getPort = require('get-port');

(async () => {    
    const porta = await getPort({port: 4000});
    app.listen(porta, ()=>{
        console.log(`Servidor Rodando na porta ${porta}` );
    })
})();
