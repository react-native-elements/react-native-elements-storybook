import { ActivityIndicator } from "react-native"
import { Text, TouchableOpacity, View } from "../"
import React from "react"

export default class QuadioButton extends React.PureComponent {
	render() {
		const {
			style,
			containerStyle,
			color = "#fff",
			borderColor,
			background,
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
			<TouchableOpacity
				style={[containerDefaultStyle, containerStyle]}
				onPress={onPress}
				disabled={disabled || isLoading}>
				{isLoading ? (
					<View>
						<ActivityIndicator size={"small"} color={"#eee"} />
						{isLoadingLabel && (
							<Text veryBold style={{ fontSize: 8 }}>
								{isLoadingLabel}
							</Text>
						)}
					</View>
				) : (
					<Text center style={[textStyle, ...incomingStyle]} {...props}>
						{props.children}
					</Text>
				)}
			</TouchableOpacity>
		)
	}
}
