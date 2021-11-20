let express = require('express');
let app = express();

app.get('/', inicio);

function inicio(peticion, resultado)
{
    resultado.send('Este es el <strong>home</strong>');
}

app.listen(8989);