const express = require('express')
const app = express();
const port = process.env.PORT || 5000 ;


app.get('/', (req, res) =>{
    res.send('Learning Platform running');
});

app.listen(port, () => {
    console.log("Learning platform server running on port", port);
} )