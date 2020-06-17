import { View } from "react-native"
import PropTypes from "prop-types"
import React from "react"
import style from "./style"

export default function CenterView({ children }) {
	return <View style={style.main}>{children}</View>
}

CenterView.defaultProps = {
	children: null
}

CenterView.propTypes = {
	children: PropTypes.node
}
