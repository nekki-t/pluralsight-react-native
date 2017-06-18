import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  Text,
  TextInput,
  View,
  TouchableHighlight
} from 'react-native';

class TaskForm extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      task: '',
    };

    this.onChange = this.onChange.bind(this);
    this.onAddPressed = this.onAddPressed.bind(this);
  }

  onChange(text) {
    this.task = text;
  }

  onAddPressed() {
    this.props.onAddPressed(this.task);
  }

  render() {
    const styles = {
      container: {
        flex: 1,
        justifyContent: 'flex-start',
        paddingTop: 150,
        backgroundColor: '#F7F7F7',
      },
      input: {
        borderWidth: 1,
        borderColor: '#D7D7D7',
        height: 50,
        marginLeft: 10,
        marginRight: 10,
        padding: 15,
        borderRadius: 3,
      },
      buttonText: {
        fontSize: 18,
        fontWeight: '600',
        color: '#FAFAFA'
      },
      button: {
        height: 45,
        alignSelf: 'stretch',
        backgroundColor: '#05A5D1',
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
        alignItems: 'center',
        justifyContent: 'center',
      },
      cancelButton: {
        backgroundColor: '#666',
      },
    };

    return (
      <View style={styles.container}>
        <TextInput
          onChangeText={this.onChange}
          style={styles.input}
        />

        <TouchableHighlight
          style={styles.button}
          onPress={this.onAddPressed}
        >
          <Text
            style={styles.buttonText}
          >
            Add
          </Text>
        </TouchableHighlight>

        <TouchableHighlight
          onPress={this.props.onCancel}
          style={[styles.button, styles.cancelButton]}
        >
          <Text
            style={styles.buttonText}
          >
            Cancel
          </Text>
        </TouchableHighlight>
      </View>
    )
  }
}

TaskForm.propTypes = {
  onCancel: PropTypes.func.isRequired,
  onAddPressed: PropTypes.func.isRequired,
};

export default TaskForm;