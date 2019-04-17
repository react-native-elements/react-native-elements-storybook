import React from 'react';
import { ButtonGroup, Text } from 'react-native-elements';

const component1 = () => <Text>Hello</Text>
const component2 = () => <Text>World</Text>
const component3 = () => <Text>ButtonGroup</Text>

class ButtonGroupComponents extends React.Component {
  constructor() {
    super()
    this.state = {
      selectedIndex: 2
    }
    this.updateIndex = this.updateIndex.bind(this)
  }
  updateIndex(selectedIndex) {
    this.setState({ selectedIndex })
  }

  render() {
    const buttons = [
      { element: component1 },
      { element: component2 },
      { element: component3 }
    ]

    return (
      <ButtonGroup
        onPress={this.updateIndex}
        selectedIndex={this.state.selectedIndex}
        buttons={buttons}
        containerStyle={{ height: 100 }} />
    )
  }
}

export default ButtonGroupComponents;
