const { connect } = require('./client')
const { setupInput, handleUserInput, connection } = require('./input')

connect('Ana', "Yolo")

setupInput(connect(connection));
