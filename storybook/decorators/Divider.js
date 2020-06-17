/* eslint-disable react/prefer-stateless-function */
import { Divider } from "react-native-elements"
import PaddedView from "./PaddedView"
import React from "react"

export default class DividerWrapper extends React.Component {
	render() {
		return (
			<PaddedView>
				<Divider />
			</PaddedView>
		)
	}
}
