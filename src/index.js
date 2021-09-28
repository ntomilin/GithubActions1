const app = require('express')();

app.listen(3003,() => {
    console.log("Application is running on port");
});

app.get('/1', (req, res) => {
   res.send('OK');
});
