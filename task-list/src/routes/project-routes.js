const Project = require('../controllers/Project.js');
const project = new Project();

module.exports = app => {
    app
    .route('/project')
    .get(project.show())
    .post(project.save())
    
    app
    .route('/project/:id')
    .get(project.showOne())
    .put(project.edit())
    .delete(project.remove())
}