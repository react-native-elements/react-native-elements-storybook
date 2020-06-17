import { View } from "react-native"
import React from "react"

import { TouchableOpacity } from "../"

export default class QuadioView extends React.PureComponent {
	render() {
		const { props } = this
		const style = {
			flex: props.flex,
			flexDirection: props.row ? "row" : "column",
			height: props.height,
			width: props.width,
			justifyContent: props.justify || props.justifyContent,
			alignItems: props.align || props.alignItems,
			alignSelf: props.alignSelf,
			paddingHorizontal: props.padH,
			paddingVertical: props.padV,
			backgroundColor: props.content ? "#333333" : props.background
		}

		const incomingStyle = Array.isArray(props.style) ? props.style : [props.style]

		if (props.onPress) {
			return (
				<TouchableOpacity {...props} style={[style, ...incomingStyle]}>
					{this.props.children}
				</TouchableOpacity>
			)
		}

		return (
			<View {...props} style={[style, ...incomingStyle]}>
				{this.props.children}
			</View>
		)
	}
}
