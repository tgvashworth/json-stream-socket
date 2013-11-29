var tr = require('through');
var websocket = require('websocket-stream')
var ws = websocket('ws://localhost:' + process.argv[2]);
ws.pipe(tr(function (d) { this.queue(d + '\n'); }))
  .pipe(process.stdout);