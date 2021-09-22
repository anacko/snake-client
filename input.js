let connection;

const setupInput = function (conn) {

  connection = conn;
  
  const handleUserInput = function(key) {
    switch (key) {
      case 'w': conn.write('Move: up'); break;
      case 'a': conn.write('Move: left'); break;
      case 's': conn.write('Move: down'); break;
      case 'd': conn.write('Move: right'); break;
      case '\u0003': process.exit();
    }
  }
  
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  
  stdin.on("data", handleUserInput); // listener of user input

  


  return stdin;
};




module.exports = { setupInput, connection };