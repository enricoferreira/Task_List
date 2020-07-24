const routesProject = require('./project-routes.js');
const routesMember = require('./member-routes.js');
const routesTask = require('./task-routes.js');
const routesLabel = require('./label-routes.js');
const routesBoard = require('./board-routes.js');

module.exports = app =>{
    routesProject(app);
    routesMember(app);
    routesTask(app);
    routesLabel(app);
    routesBoard(app);
}