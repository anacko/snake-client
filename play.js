const { connect } = require('./client')
const { setupInput, connection } = require('./input')

let input = connect('Ana', 'Yolo', connection)
setupInput(input);
