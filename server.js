'use strict'

var port = process.env.PORT || 3000
var http = require('http')
var mongoose = require('mongoose')
var todo = require('./lib')

var Todo = new todo({})
var server = http.createServer(Todo.app)

mongoose.connect('mongodb://localhost/todo', onListenDB)

function onListenDB(err){
	if(err) return err.message
	console.log('Connect DB exit')
}

server.listen(port, function(){
	console.log("Server running in http://localhost:" + port)
})

