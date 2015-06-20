'use strict'

var express = require('express')
var router = express.Router()
var todo = require('./todo')
var inicio = require('./inicio')

var Router = function(app){

	router.get('/api/todo', todo.findTodoAll)
  router.get('/api/todo/:id', todo.findTodoOne)
  router.post('/api/todo', todo.createNewTodo)

  router.get('/', inicio.index)

	app.use(router)
}

module.exports = Router
