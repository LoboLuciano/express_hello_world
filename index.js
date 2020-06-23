const express = require("express");
const app = express();


// Port
const port = process.env.PORT || 3000;

app.use(express.static('public'));

// Mensaje
app.get('/', (req, res) => {
    res.send('Hello world'); 
})  

//Listening   
app.listen(port);
