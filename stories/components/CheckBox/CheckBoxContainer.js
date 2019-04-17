import React from 'react';

class CheckBoxContainer extends React.Component {
  constructor() {
    super()
    this.state = {
      checked: true
    }
  }

  onPress = () => this.setState({ checked: !this.state.checked })

  render() {
    return (this.props.children(this.state.checked, this.onPress))
  }
}

export default CheckBoxContainer;
