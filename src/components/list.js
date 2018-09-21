angular.module('todo-app')
  .component('todoList', {
    bindings: {
      deleteTodo: '<',
      todoList: '<',
    },
    templateUrl: 'src/templates/list.html'
  });
