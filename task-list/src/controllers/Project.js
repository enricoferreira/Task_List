const mongoose = require('../database/database.js');
require('../model/project.js');
const Project = mongoose.model('project');
require('../model/member.js');
const Member = mongoose.model('member');
require('../model/task.js');
const Task = mongoose.model('task');

class ProjectController{
    show(){
        return ((req, res) => {
          Project
          .find()
          .lean()
          .populate(['task', 'member'])
          .then(json => {
              res.json(json);
          })
          .catch(err => {
              res.send(err);
          })
        })
    }

    save(){
        return (async (req, res)=>{
            try {
                const project = await Project.create(req.body);
                project.save();
                res.send("Projeto inserido com sucesso!");
            } catch (error) {
                res.status(400).send(error);
            }
        })
    }

    edit(){

    }

    remove(){

    }

    showOne(){
        
    }
}
module.exports = ProjectController