import React from "react";
import { Text, View } from "react-native";

import Swipeout from "react-native-swipeout";

export default function render(baseStyle) {

  const localStyle = {
    row: {
      marginBottom: 0,
      marginLeft: 0,
      marginRight: 0,
    },
    container: {
      marginBottom: 20,
    },
  };

  const buttons = [{
    text: 'Done',
    backgroundColor: '#05A5D1',
    underlayColor: '#273539',
    onPress: this.onDonePressed.bind(this)
  }];

  return (
    <View>
      <Swipeout
        backgroundColor="#fff"
        right={buttons}
      >
        <View style={[baseStyle.container, localStyle.row]}>
          <Text style={baseStyle.label}>
            >ios: {this.props.todo.task}
          </Text>
        </View>
      </Swipeout>
    </View>
  )
}