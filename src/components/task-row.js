import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableHighlight } from 'react-native';

import Render from './render';

const styles = {
  container: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#E7E7E7',
    padding: 20,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    marginLeft: 20,
    marginRight: 20,
  },
  label: {
    fontSize: 20,
    fontWeight: "300",
  },
  doneButton: {
    borderRadius: 5,
    backgroundColor: '#EAEAEA',
    padding: 5,
  },
};

class TaskRow extends Component {
  onDonePressed() {
    this.props.onDone(this.props.todo);
  }

  render() {
    return Render.bind(this)(styles);
  }
}

TaskRow.PropTypes = {
  todo: PropTypes.shape({
    task: PropTypes.string.isRequired,
  }).isRequired,
  onDone: PropTypes.func.isRequired,
};

export default TaskRow;