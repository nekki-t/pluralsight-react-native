import { createStore } from 'redux';

const defaultTodos = [
  {
    task: 'Initial todo in store',
    state: 'pending',
  },
];

const defaultState = {
  todos: defaultTodos,
  allTodos: defaultTodos,
  filter: 'pending',
};

function todoStore(state = defaultState, action) {
  switch(action.type) {
    case 'ADD_TODO':
      const allTodos = state.todos.concat([{
        task: action.task,
        state: 'pending',
      }]);
      return Object.assign({}, state, {
        allTodos,
        todos: allTodos.filter(todo => todo.state === state.filter),
      });
    case 'DONE_TODO':
      return Object.assign({}, state, {
        todos: state.todos.filter(todo => todo != action.todo),
      });
    case 'TOGGLE_STATE':
      const filter = state.filter === 'pending' ? 'done' : 'pending';
      return Object.assign({}, state, {
        filter,
        todos: state.allTodos.filter(todo => todo.state === filter),
      });
    default:
      return state;
  }
}

export default createStore(todoStore);