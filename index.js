const liveServer = require('live-server');

const params = {
    port: 8000,
    host: "localhost",
    root: "./src/public/",
    file: "index.html",
    open: false,
    wait: 1000
}

liveServer.start(params);