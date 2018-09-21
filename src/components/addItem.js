angular.module('todo-app')
  .component('addItem', {
    bindings: {
      addTodo: '<'
    },
    controller: 'addItemCtrl',
    templateUrl: 'src/templates/addItem.html'
  })
  .controller('addItemCtrl', function() {
    this.addClicked = () => {
      this.addTodo(this.addInput);
      this.addInput = '';
    };
  });