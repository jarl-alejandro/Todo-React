'use strict'

var Todo = require('./model')

exports.findTodoAll = function(req, res){
	Todo.find({}).exec()
	.then(function(todos){
		var todosFixed = todos.map(function(todo){
			return todo.toJSON()
		})

    res
      .status(200)
      .set('Content-Type', 'application/json')
      .json(todosFixed)

	}, function(err){
		return err.message
	})
}

exports.findTodoOne = function(req, res, next){
  var id = req.params.id

  if(!id){
    return next()
  }

  Todo.findById(id).exec()
  .then(function(post){
    res.
      status(200)
      .set('Content-Type', 'application/json')
      .json(post)

  }, function(err){
    return err.message
  })
}

exports.createNewTodo = function(req, res){

  var todo = new Todo({
    task: req.body.task
  })

  todo.save(function(err, todo){
    if(err)
      return err.message

    res
      .status(201)
      .send(todo)
  })
}
