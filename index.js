const express = require('express');
const app = express();
const path = require('path');


// Port
const port = process.env.PORT || 3000;

// HTML
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'Public/index.html'));
})



//Listening   
app.listen(port);
