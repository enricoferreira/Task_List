const mongoose = require('../database/database.js');
require('../model/board.js');
const Board = mongoose.model('board');
require('../model/member.js');
const Member = mongoose.model('member');
require('../model/task.js');
const Task = mongoose.model('task');
require('../model/project.js');
const Project = mongoose.model('project');
require('../model/label.js');
const Label = mongoose.model('label');

class BoardController{
    show(){
        return ((req, res) => {            
            Board
            .find()
            .lean()
            .populate(['project', 'task', 'member', 'label'])
            .then(json =>{
                res.send(json);
            })
            .catch(err => {
                res.status(400).send(err);                                
            })                        
        })
    }

    save(){
        return (async (req, res) => {
            try {
                const board = await Board.create(req.body);
                board.save();
                const {project} = req.body;
                const projectModel = await Project.findOne({'_id': project});
                projectModel.board.push(board);
                projectModel.save();
            } catch (error) {
                res.status(400).send('Falha ao salvar Board');
            }
        })
    }

    edit(){
        return ((req, res) => {

        })
    }

    remove(){
        return (async (req, res) => {
            try {
                const id = req.params.id;
                await Board.deleteOne({'_id': id})
                .then(()=>{
                    res.status(200).send('Board removido com sucesso!');
                })
                .catch(err => err)
            } catch (error) {
                res.status(400).send('Erro na deleção!');
            }
        })
    }

    showOne(){
        return ((req, res) => {
            
        })
    }
}

module.exports = BoardController;