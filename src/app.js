import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';
import {
  Navigator
} from 'react-native-deprecated-custom-components';

import TaskList from './components/task-list';
import TaskForm from './components/task-form';
import store from './todoStore';

export default class App extends Component {

  constructor(props, context) {
    super(props, context);

    this.state = store.getState();
    store.subscribe(() => {
      this.setState(store.getState());
    });

    this.onAddStarted = this.onAddStarted.bind(this);
    this.onCancel = this.onCancel.bind(this);
    this.onAdd = this.onAdd.bind(this);
    this.onDone = this.onDone.bind(this);
    this.onToggle = this.onToggle.bind(this);
  }

  onAddStarted() {
    this.nav.push({
      name: 'taskform'
    });
  }

  onDone(todo) {
    console.log('task was completed: ', todo.task);
    store.dispatch({
      type: 'DONE_TODO',
      todo,
    });
  }

  onCancel() {
    console.log('cancelled!');
    this.nav.pop();
  }

  onAdd(task) {
    console.log('a task was added: ', task);
    store.dispatch({
      type: 'ADD_TODO',
      task,
    });
    this.nav.pop();
  }

  onToggle () {
    store.dispatch({
      type: 'TOGGLE_STATE',
    });
  }

  configureScene() {
    return Navigator.SceneConfigs.FloatFromBottom;
  }

  renderScene(route, nav) {
    switch (route.name) {
      case 'taskform':
        return (
          <TaskForm
            onAddPressed={this.onAdd}
            onCancel={this.onCancel}
          />
        );
      default:
        return (
          <TaskList
            filter={this.state.filter}
            onAddStarted={this.onAddStarted}
            onDone={this.onDone}
            todos={this.state.todos}
            onToggle={this.onToggle}
          />
        )
    }
  }

  render() {
    return (
      <Navigator
        configureScene={this.configureScene}
        initialRoute={{name: 'tasklist', index: 0}}
        ref={((nav) => {
          this.nav = nav;
        })}
        renderScene={this.renderScene.bind(this)}
      />
    );
  }
}
