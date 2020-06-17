import { storiesOf } from "@storybook/react-native"

import React from "react"

import { View } from "../../"
import Icon from "../"

const styles = {
	container: {
		flexWrap: "wrap",
		paddingHorizontal: 16,
		alignItems: "center",
		justifyContent: "center"
	}
}

storiesOf("Icon", module).add("All Icons", () => (
	<View row style={styles.container}>
		<Icon name={"quadio"} size={35} color={"#333"} padH={10} padV={10} />
		<Icon name={"home"} size={35} color={"#333"} padH={10} padV={10} />
		<Icon name={"user"} size={35} color={"#333"} padH={10} padV={10} />
		<Icon name={"users"} size={35} color={"#333"} padH={10} padV={10} />
		<Icon name={"heart-filled"} size={35} color={"#333"} padH={10} padV={10} />
		<Icon name={"heart-outline"} size={35} color={"#333"} padH={10} padV={10} />
		<Icon name={"bell"} size={35} color={"#333"} padH={10} padV={10} />
		<Icon name={"flag"} size={35} color={"#333"} padH={10} padV={10} />
		<Icon name={"signout"} size={35} color={"#333"} padH={10} padV={10} />
		<Icon name={"clock"} size={35} color={"#333"} padH={10} padV={10} />
		<Icon name={"question"} size={35} color={"#333"} padH={10} padV={10} />
		<Icon name={"chat"} size={35} color={"#333"} padH={10} padV={10} />
		<Icon name={"globe"} size={35} color={"#333"} padH={10} padV={10} />
		<Icon name={"share"} size={35} color={"#333"} padH={10} padV={10} />
		<Icon name={"music-note-cloud"} size={35} color={"#333"} padH={10} padV={10} />
		<Icon name={"music-note"} size={35} color={"#333"} padH={10} padV={10} />
		<Icon name={"location"} size={35} color={"#333"} padH={10} padV={10} />
		<Icon name={"search"} size={35} color={"#333"} padH={10} padV={10} />
		<Icon name={"delete"} size={35} color={"#333"} padH={10} padV={10} />
		<Icon name={"edit"} size={35} color={"#333"} padH={10} padV={10} />
		<Icon name={"volume-off"} size={35} color={"#333"} padH={10} padV={10} />
		<Icon name={"volume-up"} size={35} color={"#333"} padH={10} padV={10} />
		<Icon name={"volume-down"} size={35} color={"#333"} padH={10} padV={10} />
		<Icon name={"sort-asc"} size={35} color={"#333"} padH={10} padV={10} />
		<Icon name={"sort-desc"} size={35} color={"#333"} padH={10} padV={10} />
		<Icon name={"sort-az"} size={35} color={"#333"} padH={10} padV={10} />
		<Icon name={"sort-za"} size={35} color={"#333"} padH={10} padV={10} />
		<Icon name={"previous"} size={35} color={"#333"} padH={10} padV={10} />
		<Icon name={"next"} size={35} color={"#333"} padH={10} padV={10} />
		<Icon name={"play"} size={35} color={"#333"} padH={10} padV={10} />
		<Icon name={"pause"} size={35} color={"#333"} padH={10} padV={10} />
		<Icon name={"circle"} size={35} color={"#333"} padH={10} padV={10} />
		<Icon name={"play-circle"} size={35} color={"#333"} padH={10} padV={10} />
		<Icon name={"minus-circle"} size={35} color={"#333"} padH={10} padV={10} />
		<Icon name={"pause-circle"} size={35} color={"#333"} padH={10} padV={10} />
		<Icon name={"plus-circle"} size={35} color={"#333"} padH={10} padV={10} />
		<Icon name={"upload-circle"} size={35} color={"#333"} padH={10} padV={10} />
		<Icon name={"upload-nocircle"} size={35} color={"#333"} padH={10} padV={10} />
		<Icon name={"plus"} size={35} color={"#333"} padH={10} padV={10} />
		<Icon name={"minus"} size={35} color={"#333"} padH={10} padV={10} />
		<Icon name={"check"} size={35} color={"#333"} padH={10} padV={10} />
		<Icon name={"close"} size={35} color={"#333"} padH={10} padV={10} />
		<Icon name={"chevron-down"} size={35} color={"#333"} padH={10} padV={10} />
		<Icon name={"chevron-up"} size={35} color={"#333"} padH={10} padV={10} />
		<Icon name={"more"} size={35} color={"#333"} padH={10} padV={10} />
	</View>
))
