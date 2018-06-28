const express = require('express');
const app = express();

app.get('/', (req,res) => {
    res.send({hi: 'there'}); 
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, "0.0.0.0", function() {
    console.log("Listening on Port 3000");
});