const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(express.static('.'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Usado para salvar arquivos
const multer = require('multer');

// Seto nome do arquivo e pasta onde salvar o arquivo
const storage = multer.diskStorage({
    destination: function(req, file, callback) {
        // O arquivo vai ser salvo na pasta atual
        callback(null, './upload');
    },
    filename: function(req, file, callback) {
        // O nome do arquivo vai ser timeStamp_nomeDoArquivo
        callback(null, `${Date.now()}_${file.originalname}`);
    }
})

const upload = multer({ storage }).single('archive');

app.post('/upload', (req, res) => {
    upload(req, res, err => {
        if (err) {
            return res.end('Deu pau');
        }

        res.end('Tudo certo patrão');
    })
})

app.listen(8080, () => console.log('Executando...'));