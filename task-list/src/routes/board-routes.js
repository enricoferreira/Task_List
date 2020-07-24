const Board = require('../controllers/Board.js');
const board = new Board();

module.exports = app => {

    app
    .route('/board')
    .get(board.show())
    .post(board.save())

    app
    .route('/board/:id')
    .get(board.showOne())
    .delete(board.remove())
}