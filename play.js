const { connect } = require('./client')
const { setupInput, connection } = require('./input')

//connect('Ana', "Yolo")

let input = connect('Ana', 'Yolo', connection)
setupInput(input);
