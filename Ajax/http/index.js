const http = require('http');

const getHttp = (letra, callback) => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`;
    return new Promise((resolve, reject) => {
        http.get(url, res => {
            let resultado = '';

            // Formata o dado que vem
            res.on('data', dados => {
                resultado += dados;
            })

            // Roda no fim da request
            res.on('end', () => {
                try {
                    resolve(JSON.parse(resultado));
                } catch (e) {
                    reject(e);
                }
            })
        })
    });
}