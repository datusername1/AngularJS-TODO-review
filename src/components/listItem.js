angular.module('todo-app')
  .component('listItem', {
    bindings: {
      deleteTodo: '<',
      index: '<',
      todo: '<',
    },
    templateUrl: 'src/templates/listItem.html'
  });
