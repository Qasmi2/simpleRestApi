'use strict';
const mongoose = require('mongoose');
let Task = mongoose.model('Tasks');


// F:1 => list all the tasks functions

exports.list_all_tasks = function(req,res){
    
    Task.find({},function(err,task){
        if(err){
            res.send(err);
        }
        res.json(task);
    });

};

// F:2 => create a task function

exports.create_a_task = function(req,res){
    
    const newTask = new Task(req.body);
    console.log(newTask);
    newTask.save(function(err,task){
        if(err){
            res.send(err);
        }
        res.json(task);
    });

};

// F:3 => Read a task function


exports.read_a_task = function(req,res){
    
    Task.findById(req.params.taskId, function(err,task){
        if(err){
            res.send(err);
        }
        res.json(task);
    });

};

// F:4 => update the task function

exports.update_a_task = function(req,res){

    Task.findOneAndUpdate( {_id : req.params.taskId }, req.body, { new : true }, function(err,task){
        if(err){
            res.send(err);
        }
        res.json(task);
    });

};

// F:5 => delete a task function

exports.delete_a_task = function(req,res){
    Task.remove({_id: req.params.taskId },function(err,task){
        if(err){
            res.send(err);
        }
        res.json( { message: 'Task Successfully deleted'});
    });
};
