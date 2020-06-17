import { TouchableOpacity } from "react-native"
import React from "react"

export default class QuadioTouchableOpacity extends React.PureComponent {
	render() {
		const { style, onPress, children, ...props } = this.props

		return (
			<TouchableOpacity style={style} activeOpacity={0.7} onPress={onPress} {...props}>
				{children}
			</TouchableOpacity>
		)
	}
}
