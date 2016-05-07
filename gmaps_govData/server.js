const express = require('express');
const app = express();

// const lift = require(__dirname + '/public/911.json');

app.use(express.static(__dirname + '/public'));

app.listen(4000, () => console.log('up on 4000'));
