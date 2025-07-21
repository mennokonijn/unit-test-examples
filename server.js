const express = require('express');
const app = express();
const port = 8080;

app.get('/', (_, res) => res.send('Hello, ZAP scanner!'));
app.get('/login', (_, res) => res.send('Login page placeholder'));
app.get('/admin', (_, res) => res.status(403).send('Forbidden area'));

app.listen(port, () => {
    console.log(`App running at http://localhost:${port}`);
});
