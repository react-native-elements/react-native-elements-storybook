import { H3, Icon, View } from "../"
import { TextInput } from "react-native"
import Colors from "styles/colors"
import React from "react"

export default class QuadioInput extends React.PureComponent {
	render() {
		const {
			onChange = () => null,
			style,
			placeholder,
			email,
			password,
			newPassword,
			firstName,
			lastName,
			verificationCode,
			number,
			label,
			help,
			row,
			...props
		} = this.props

		const incomingStyle = Array.isArray(style) ? style : [style]

		const defaults = {
			style: [styles.inputStyle, ...incomingStyle],
			onChange: e => onChange(e.nativeEvent.text),
			autoCorrect: false,
			autoCapitalize: "none",
			placeholderTextColor: Colors.grey4,
			...props
		}

		const Input = () => {
			if (email) {
				return (
					<TextInput
						{...defaults}
						placeholder={placeholder || ".edu"}
						textContentType={"emailAddress"}
						keyboardType={"email-address"} />
				)
			}
			if (password) {
				return (
					<TextInput
						{...defaults}
						secureTextEntry
						placeholder={placeholder || "8+ characters"}
						textContentType={"password"} />
				)
			}
			if (newPassword) {
				return (
					<TextInput
						{...defaults}
						secureTextEntry
						placeholder={placeholder || "8+ characters"}
						textContentType={"newPassword"} />
				)
			}
			if (firstName) {
				return (
					<TextInput
						{...defaults}
						placeholder={placeholder || "Enter Name"}
						textContentType={"givenName"}
						clearTextOnFocus={false} />
				)
			}
			if (lastName) {
				return (
					<TextInput
						{...defaults}
						placeholder={placeholder || "Enter Name"}
						textContentType={"familyName"} />
				)
			}
			if (verificationCode) {
				return (
					<TextInput
						{...defaults}
						placeholder={placeholder || "Verification Code"}
						textContentType={"oneTimeCode"} />
				)
			}
			if (number) {
				return (
					<TextInput
						{...defaults}
						placeholder={placeholder}
						textContentType={"none"}
						keyboardType={"numeric"} />
				)
			}
			return <TextInput {...defaults} placeholder={placeholder} textContentType={"none"} />
		}

		if (label) {
			return (
				<View width={row ? "48%" : null}>
					<View row alignItems={"center"}>
						<H3 white padV={5}>
							{label}
						</H3>
						{help ? (
							<Icon name={"question"} size={16} color={"#fff"} padH={9} onPress={help} />
						) : null}
					</View>
					<Input />
				</View>
			)
		}

		return <Input />
	}
}

const styles = {
	inputStyle: {
		padding: 13,
		marginTop: 5,
		marginBottom: 5,
		borderRadius: 5,
		backgroundColor: Colors.base10,
		color: "white"
	}
}
