let express = require('express');

let app = express();

app.use(express.urlencoded({ extended: false }));

app.get('/', function (req, res) {
    res.send(`
        <form action="/answer" method="POST">
            <p>What color is the sky on a clear and sunny day?</p>
            <input name="skyColor" autocomplete="off" />
            <button>Submit</button>
        </form>
    `)
});

app.post('/answer', function (req, res) {
    if (req.body.skyColor.toUpperCase() == 'BLUE') {
        res.send(`
            <p>Correct.</p>
            <a href="/">Back</a>
        `)
    } else {
        res.send(`
            <p>Sorry. Try again.</p>
            <a href="/">Back</a>
        `)

    }
})

app.get('/answer', function (req, res) {
    res.send('Lost?')
})

app.listen(3000);