const mongoose = require('../database/database.js');
require('../model/task.js');
const Task = mongoose.model('task');
require('../model/member.js');
const Member = mongoose.model('member');
require('../model/project.js');
const Project = mongoose.model('project');
require('../model/label.js');
const Label = mongoose.model('label');

class TaskController{
    show(){
        return ((req, res) => {
          Task
          .find()
          .lean()
          .populate(['member', 'label', 'project'])
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
                const task = await Task.create(req.body);
                task.save();
                const {project} = req.body;
                const projectModel = await Project.findOne({'_id': project});
                projectModel.task.push(task);
                projectModel.save();
                res.send("Task inserido com sucesso!");
            } catch (error) {
                res.status(400).send(error);
            }
        })
    }

    edit(){
        return (async (req, res)=>{
            try {
                const id = req.params.id;
                await Task.findOneAndUpdate({'_id': id},req.body, {new: true});
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
                await Task.deleteOne({'_id': id})
                .then(()=>{
                    res.status(200).send('Task removido com sucesso!');
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
                const task = await Task.findById({'_id': id});
                res.json(task);            
            } catch (error) {
                console.log(error);                
            }
        })
    }
}

module.exports = TaskController