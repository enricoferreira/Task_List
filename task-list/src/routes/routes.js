const Project = require('../controllers/Project.js');
const project = new Project();

module.exports = app =>{
    app
    .route('/')
    .get(project.show())
    .post(project.save())
}