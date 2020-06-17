import { ButtonGroup } from "react-native-elements"
import React from "react"

class ButtonGroupStrings extends React.Component {
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
		const buttons = ["Hello", "World", "Buttons"]
		const { selectedIndex } = this.state

		return (
			<ButtonGroup
				onPress={this.updateIndex}
				selectedIndex={selectedIndex}
				buttons={buttons}
				containerStyle={{ height: 100 }} />
		)
	}
}

export default ButtonGroupStrings
