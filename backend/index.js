const express = require('express');

const app = new express();

app.get('/', (req, res) => {
    res.json({
        project: 'BeTheHero',
        author: 'Ricardo Silveira'
    });
});

app.listen(3333);