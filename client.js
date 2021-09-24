const net = require("net");
const { IP, PORT } = require("./constants");

// establishes a connection with the game server
const connect = function (name, msg, connection) {
  const conn = net.createConnection({
    host: IP, // IP address here,
    port: PORT // PORT number here,
  });
  
  // interpret incoming data as text
  conn.setEncoding("utf8");
  
  conn.on("connect", () => {
    console.log("Successful connection. Yay!");
    conn.write(`Name: ${name}`)
    conn.write(`Say: ${msg}`)
  });

  return conn;
};

console.log("Connecting ...");

module.exports = { connect }