import React from "react"
import Text from "../Text"

export default class H1 extends React.PureComponent {
	render() {
		return (
			<Text size={22} druk {...this.props}>
				{this.props.children}
			</Text>
		)
	}
}
