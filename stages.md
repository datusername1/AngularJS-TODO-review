Important things to point out
- if you don't bind the functions, they lose reference to 'this'
- pass down as prop => bind => use/pass in html

**Stage 0
Relevant files:
- Explore file structure
- all components + templates

Steps:
- boot up live-server
- Show visuals
- how is app.js hooked up to the html?
- add templateUrls to the components
- angular magic = not relative route

**Stage 1
Relevant files:
- app.js
- app.html

Steps:
- add functionalities (list aka storage, add, remove) with student navigators
- how do we establish this component's state? (add controller to the component);
- build out controller logic with empty functions - console.logs

**Stage 2
Relevant files:
- app.html
- list.js
- list.html

Steps:
- pass down todoList as prop in app.html to list element
- setup binding

**Stage 3
Relevant files:
- list.html
- listItem.js
- listItem.html

Steps:
- ng-repeat + add as prop in list.html to item element (item in todoList)  && item="item"
- setup binding

**Stage 4
Relevant files:
- listItem.html
- app.js
- app.html
- list.js
- list.html
- listItem.js
- listItem.html

Steps:
- add {{ $ctrl.item }}
- pass down remove functino from app to listItem, setting up bindings
- add ng-click to DONE button with function invoked

**Stage 5
Relevant files:
- app.js
- list.html
- listItem.js
- listItem.html

Steps:
- update remove function to include index
- add index to ng-repeat in list.html
- include binding for index in listItem.js
- update remove function to splice out index from our list array
- change function syntax to arrow function so we don't lose reference to "this" inside of the add function

**Stage 6
Relevant files:
- app.js
- app.html
- addItem.js
- addItem.js

Steps:
- update add function
- pass down value and function as prop
- bind
- use