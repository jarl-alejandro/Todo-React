var mongoose = require('mongoose')
var Schema = mongoose.Schema

var todoSchema = new Schema({
	task: String
})

todoSchema.set('toJSON', {
	transform: function(doc, ret, options){
		ret.id = ret._id
		delete ret._id
		delete ret.__v
	}
})

var Todo = mongoose.model('todo', todoSchema)
module.exports = Todo