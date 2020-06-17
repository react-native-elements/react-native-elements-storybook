import { ActivityIndicator } from "react-native"
import { Button } from "react-native-elements"
import React from "react"

export default class QuadioButton extends React.PureComponent {
	render() {
		const {
			style,
			containerStyle,
			color = "#fff",
			borderColor,
			background,
			title = "Press Me",
			small,
			medium,
			large,
			full,
			width,
			height,
			rounded,
			outline,
			opaque,
			onPress,
			disabled,
			isLoading,
			isLoadingLabel,
			...props
		} = this.props

		const buttonWidth = width
			? width
			: large
			? 140
			: medium
			? 120
			: small
			? 70
			: full
			? "100%"
			: 110
		const buttonHeight = height ? height : large ? 40 : medium ? 30 : small ? 23 : full ? 40 : 27

		const containerDefaultStyle = {
			justifyContent: "center",
			alignItems: "center",
			width: buttonWidth,
			height: buttonHeight,
			borderWidth: outline ? 1 : 0,
			borderColor: borderColor || color,
			borderRadius: rounded ? buttonHeight / 2 : 5,
			backgroundColor: background ? background : opaque ? "rgba(255, 255, 255, 0.1)" : "transparent"
		}

		const textStyle = {
			color,
			fontSize: large || full ? 16 : medium ? 14 : 13
			// fontFamily: "sans-serif"
		}

		const incomingStyle = Array.isArray(style) ? style : [style]

		return (
			<Button
				buttonStyle={[containerDefaultStyle, containerStyle]}
				onPress={onPress}
				disabled={disabled || isLoading}
				loading={isLoading}
				title={isLoading ? isLoadingLabel : title}
			/>
		)
	}
}
