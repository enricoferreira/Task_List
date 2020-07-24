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
        return (async (req, res)=>{
            try {
                const id = req.params.id;
                await Project.findOneAndUpdate({'_id': id},req.body, {new: true});
                res.status(200).send('Atualizado com sucesso!')
            } catch (error) {
                res.status(400).send('Erro ao atualizar Projeto!');
            }
        })
    }

    remove(){
        return (async (req, res) => {
            try {
                const id = req.params.id;
                await Project.deleteOne({'_id': id})
                .then(()=>{
                    res.status(200).send('Projeto removido com sucesso!');
                })
                .catch(err => err)
            } catch (error) {
                res.status(400).send('Erro na deleção!');
            }
        })
    }

    showOne(){
        return (async (req, res) => {
            try {
                const id = req.params.id;
                const project = await Project.findById({'_id': id});
                res.json(project);            
            } catch (error) {
                console.log(error);                
            }
        })
    }
}
module.exports = ProjectController