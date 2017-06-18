/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';
import {
  Navigator
} from 'react-native-deprecated-custom-components';

import TaskList from './src/components/task-list';
import TaskForm from './src/components/task-form';

export default class todo extends Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      todos: [
        {
          task: 'Learn React Native',
        },
        {
          task: 'Learn React Native',
        },
      ]
    };
    this.onAddStarted = this.onAddStarted.bind(this);
    this.onCancel = this.onCancel.bind(this);
    this.onAdd = this.onAdd.bind(this);
  }

  onAddStarted() {
    this.nav.push({
      name: 'taskform'
    });
  }

  onCancel() {
    console.log('cancelled!');
    this.nav.pop();
  }

  onAdd(task) {
    console.log('a task was added: ', task);
    this.state.todos.push({
      task: task,
    });
    this.setState({
      todos: this.state.todos
    });
    this.nav.pop();
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
            onAddStarted={this.onAddStarted}
            todos={this.state.todos}
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

AppRegistry.registerComponent('todo', () => todo);
