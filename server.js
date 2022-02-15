const express = require('express');
const next = require('next');
const cheerio = require('cheerio');
const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const request = require('request');

app.prepare().then(() => {
    const server = express();

    server.get('/demo', (req, res) => {
        const arr = []

        request.get('http://demo.automationtesting.in/Frames.html', function(err, response, body) {
            if (!err && response.statusCode == 200) {

                const $ = cheerio.load(body);
                $('iframe').each(function(index, element) {
                    var url = $(element).attr('src'); // --> Get the URL of the iframe
                    arr.push(url)
                    console.log(url)
                        // Do something with the URL of the iframe here
                });

                if (arr.length === 0) {
                    return res.send("Non sign of iframe" + body)
                } else {
                    return res.send(
                        arr.map((item) => `<a target="_blank" href="//${item}">${item}</a></br>`).join("")
                    );
                }

            }
        });

    });

    server.all('*', (req, res) => {
        return handle(req, res)
    })

    server.listen(port, (err) => {
        if (err) throw err
        console.log(`> Ready on http://localhost:${port}`)
    })
})