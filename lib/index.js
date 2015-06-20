'use strict'

var express = require('express')
var bodyParser = require('body-parser')
var cors = require('cors')
var jade = require("jade")
var router = require('./router')
var path = require('path')

var Todo = function(config){
	config = config || {}

	this.app = express()
  this.app.use(cors())
  this.app.use(bodyParser.json())
  this.app.use(express.static(path.join(__dirname, '..', 'static')))

  this.app.set("views", path.join(__dirname, "..", "views"))
  this.app.set("view engine", "jade")

	//router
	new router(this.app)
}


module.exports = Todo
