const { connect } = require('./client')
const { setupInput, connection } = require('./input')

connect('Ana')
setupInput(connect(connection));
