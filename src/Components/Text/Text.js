import { Text } from "react-native"
import { TouchableOpacity } from "../"
import React from "react"

export default class QuadioText extends React.PureComponent {
	render() {
		const {
			center,
			right,
			white,
			color,
			light,
			bold,
			veryBold,
			ultraBold,
			size,
			xSmall,
			small,
			large,
			padH,
			padV,
			lines,
			lineH,
			style,
			...props
		} = this.props

		const incomingStyle = Array.isArray(style) ? style : [style]

		const textStyle = {
			textAlign: center ? "center" : right ? "right" : "left",
			color: color ? color : white ? "#fff" : light ? "#999" : "#fff",
			fontWeight: bold ? "500" : veryBold ? "700" : ultraBold ? "800" : "400",
			fontSize: size ? size : xSmall ? 12 : small ? 14 : large ? 18 : 16,
			paddingHorizontal: padH,
			paddingVertical: padV,
			lineHeight: lineH
		}

		if (typeof props.onPress === "function") {
			const touchStyle = {
				alignSelf: center ? "center" : right ? "flex-end" : "flex-start"
			}
			return (
				<TouchableOpacity onPress={props.onPress} style={touchStyle}>
					<Text style={[textStyle, ...incomingStyle]} numberOfLines={lines} {...props}>
						{props.children}
					</Text>
				</TouchableOpacity>
			)
		}

		return (
			<Text style={[textStyle, ...incomingStyle]} numberOfLines={lines} {...props}>
				{props.children}
			</Text>
		)
	}
}
