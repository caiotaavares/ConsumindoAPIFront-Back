const cors = require('cors');
const express = require('express');
const app = express();
// axios == fetch
const axios = require('axios');

app.use(cors());

app.get('/', async(req, res) => {

    try {
        // A resposta do axios chama-se response
        // MAS eu tiro o data de dentro do response
        const { data } = await axios('https://jsonplaceholder.typicode.com/users');
        console.log(data);
    
        return res.json(data)
        
    } catch (error) {
        console.error(error);
    }

});

app.listen('4567');