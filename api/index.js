const express = require('express');
const next = require('next');
const cheerio = require('cheerio');
const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const request = require('request');
const donwnloadMP4 = require("m3u8-to-mp4");
const converter = new donwnloadMP4();
const querySql = require("../sqlquerry");
const TelegramBot = require('node-telegram-bot-api');

const mysql = require('mysql2');
// const connection = mysql.createConnection(`mysql://4e3ydvcarv0p:pscale_pw__YiuQ4muUdpTVOvPO5BwG-jz__50r1jgB4wb0PfQn8Y@qq30jitimhcw.ap-southeast-2.psdb.cloud/firstdemo?ssl={"rejectUnauthorized":true}`)

const server = express();

    server.get('/demosql',(req,res) => {
        querySql?.fnDemo()
    })

    server.get('/demo', (req, res) => {
        const arr = []

        request.get('http://duytheegg.tech', function(err, response, body) {
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
                        arr.map((item) => `<a target="_blank" href="${item}">${item}</a></br>`).join("")
                    );
                }

            }
        });

    });

    server.get('/download*', (req, res) => {
        console.log(req)
    })

    server.get('/api/telegram', (req, res) => {
        // replace the value below with the Telegram token you receive from @BotFather
        const token = process.env.TOKEN_TELEGRAM;

        // Create a bot that uses 'polling' to fetch new updates
        try{
            const bot = new TelegramBot(token, {polling: true,filepath: false,})

            // bot.on('message', (msg) => {
            //     const chatId = msg.chat.id;
        
            //     // send a message to the chat acknowledging receipt of their message
            //     bot.sendMessage(1055939339, msg.chat.id + "---" + req.query?.mes);
            // });

            bot.sendMessage(1055939339,`Message From Ip:${req.ip}
            Messages:${req.query?.mes}
            `).then((res) => {
                res.send(res)
                // res.sendStatus(200);
            }).catch((error) => {
                res.send(error);  // => 'ETELEGRAM'
                // console.log(error.response.body); // => { ok: false, error_code: 400, description: 'Bad Request: chat not found' }
              });



            bot.on('polling_error', (error) => {
                // console.log('sdfasdf',error)
            //   res.send(error);  // => 'EFATAL'
            });

            // res.sendStatus(200);
        }catch(e){
            res.send(e)
        }
    })

    // server.all('*', (req, res) => {
    //     return handle(req, res)
    // })

    // server.listen(port, (err) => {
    //     if (err) throw err
    //     console.log(`> Ready on http://localhost:${port}`)
    // })

    module.exports = server;    