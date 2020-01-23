// importing the server
const server = require('./api/server.js');

// need a port
const port = process.env.PORT || 8000;

// server listening for traffic 
server.listen(port, () =>{
    console.log(`\n****RUNINING ON PORT ${port}***\n`)
})