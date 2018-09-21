angular.module('todo-app')
  .component('todoApp', {
    controller: 'appCtrl',
    templateUrl: 'src/templates/app.html'
  })
  .controller('appCtrl', function() {
    this.todoList = ['play pokemon', 'learn AI', 'redo all sprints'];

    this.addTodo = (todo) => {
      this.todoList.push(todo);
    };

    this.deleteTodo = (index) => {
      this.todoList.splice(index, 1);
    };
  });