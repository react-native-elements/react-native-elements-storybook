// import { IconConfig } from "assets"
import { Platform } from "react-native"

import { TouchableOpacity } from "../"
import { Icon } from 'react-native-elements'
// import { createIconSetFromIcoMoon } from "react-native-vector-icons"
import React from "react"

// const QuadioIcon = createIconSetFromIcoMoon(
// 	...Platform.select({
// 		ios: [IconConfig],
// 		android: [IconConfig, "QuadioIcons", "QuadioIcons.ttf"]
// 	})
// )

export default class QuadioIcon extends React.PureComponent {
	render() {
		const { color = "#fff", size, padH, padV, style, onPress, ...props } = this.props

		const iconStyle = {
			fontSize: size,
			color,
			paddingHorizontal: padH,
			paddingVertical: padV
		}

		const incomingStyle = Array.isArray(style) ? style : [style]

		if (onPress) {
			return (
				<TouchableOpacity onPress={onPress}>
					<Icon style={[iconStyle, ...incomingStyle]} {...props} />
				</TouchableOpacity>
			)
		}

		return <Icon style={[iconStyle, ...incomingStyle]} {...props} />
	}
}
