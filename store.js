import {observable, action, makeAutoObservable, makeObservable} from 'mobx';

class TodosList {
  constructor() {
    makeObservable(this);
  }
  @observable
  todos = [];

  @observable
  count = 0;

  @observable
  todoInputState = false;

  @action
  switchInputState = () => {
    console.log('inputState', this.todoInputState);
    this.todoInputState = !this.todoInputState;
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
}

export default new TodosList();
