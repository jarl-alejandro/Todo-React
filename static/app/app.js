'use strict'

var React = require('react')

var ReactRouter = require('react-router')
var Route = ReactRouter.Route
var Link = ReactRouter.Link
var RouteHandler = ReactRouter.RouteHandler

var Todo = require('./components/Todo')
var TodoOne = require('./components/TodoOne')
var TodoAdd = require('./components/TodoAdd')

var App = React.createClass({
  render: function(){
    return(
      <div>
        <p>
          <Link to="app">Home</Link>
        </p>
        <p>
          <Link to="todo">Todo</Link>
        </p>
        <p>
          <Link to="add">Add</Link>
        </p>
        <RouteHandler/>
      </div>
    )
  }
})

var routes = (
  <Route name="app" path="/" handler={App}>
    <Route name="todo" path="/todo" handler={Todo}/>
    <Route name="add" path="/add" handler={TodoAdd}/>
  </Route>
)

ReactRouter.run(routes, function (Handler) {
  React.render(<Handler/>, document.getElementById("app"));
});
