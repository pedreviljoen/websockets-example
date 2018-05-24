// Simple express server and websocket example
// node dependancies
const express = require('express')
const ws = require('ws')
const PORT = process.env.PORT || 3000

const app = express()

// kickup express server

const server = app.use((req, res) => res.send({'working': true})).listen(PORT, () => console.log('Listening on ' + PORT))
const wss = new ws.Server({ server })

wss.on('connection', (ws) => {
  // add a simple event
  ws.on('message', (message) => {
    if(message == 'bye'){
      
      ws.send('You can not say bye, this is a websocket')
    } else {
      ws.send('Hello, you have sent ' + message)
    }
  })
  //send immediate feedback to incoming connection
  ws.send('Hi there I am a WebSocket')
})

