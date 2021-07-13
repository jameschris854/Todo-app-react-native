import {observable, action, makeAutoObservable, makeObservable} from 'mobx';

class TodosList {
  constructor() {
    makeObservable(this);
  }
  @observable
  todos = [{id:200,text:"asdsad",active:true},{id:300,text:"adasd",active:true},{id:283,text:"asdsdsa","active":true},{"id":400,"text":"asdasdas",active:false}];

  @observable
  count = 0;

  @observable
  todoInputState = false;

  @action
  switchInputState = (state) => {
    console.log('inputState', state);
    this.todoInputState = state;
  };

  @action
  addNewTodo = todo => {
    this.todos = [...this.todos, {id: this.count, text: todo, active: true}];
    this.count++;
    this.switchInputState();
  };

  @action
  switchTodoState = id => {
    console.log('id ' + id);
    let data = this.todos;
    let updatedTodos = [];
    for (var i = 0; i < data.length; i++) {
      if (id == data[i].id) {
        data[i].active = !data[i].active;
      }
      updatedTodos.push(data[i]);
    }

    this.todos = updatedTodos;
  
    console.log('after filter' + JSON.stringify(updatedTodos));

  };
  @action
  deleteTodo = id => {
    console.log('id ' + id);
    let data = this.todos;
    let updatedTodos = [];
    for (var i = 0; i< data.length ; i++){
      if(id != data[i].id){
        updatedTodos.push(data[i]);
      }
    }
    console.log('after delete: '+ JSON.stringify(updatedTodos));
    this.todos = updatedTodos;

  }


}

export default new TodosList();