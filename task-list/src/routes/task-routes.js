const Task = require('../controllers/Task.js');
const task = new Task();

module.exports = app => {
    app
    .route('/task')
    .get(task.show())
    .post(task.save())

    app
    .route('/task/:id')
    .get(task.showOne())
    .put(task.edit())
    .delete(task.remove())
}