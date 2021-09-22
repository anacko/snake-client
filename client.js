const net = require("net");

// establishes a connection with the game server
const connect = function (name) {
  const conn = net.createConnection({
    host: '135.23.223.133', // IP address here,
    port: 50542 // PORT number here,
  });
  
  // interpret incoming data as text
  conn.setEncoding("utf8");
  
  conn.on("connect", () => {
    console.log("Successful connection. Yay!");
    conn.write(`Name: ${name}`)
    //conn.write("Move: up")
    //setTimeout(() => conn.write("Move: left"), 100);
    //setInterval(() => conn.write("Move: up"), 50)


  })

  
  return conn;
};

console.log("Connecting ...");

module.exports = { connect }