const app = require('express')();

app.listen(3000,() => {
    console.log("Application is running on port");
});

app.get('/1', (req, res) => {
   res.send('OK');
});

app.get('/2', (req, res) => {
   res.send('OK');
});
