import { Dimensions, Image as RNImage } from "react-native"
import { isEmpty, isObject } from "lodash"
import React from "react"

import { TouchableOpacity } from "../"
import Colors from "styles/colors"

const deviceHeight = Dimensions.get("window").height

const updateSource = props => {
	if (!isObject(props.source) || !isEmpty(props.source)) {
		return { fsource: formatUUID(props.source, props.sourceSize, props.profile_id) }
	} else {
		return { fsource: props.source }
	}
}

export default class QuadioImage extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			fsource: undefined
		}
	}

	componentDidMount() {
		this.setState(updateSource(this.props, {}))
	}

	shouldComponentUpdate(nextProps, nextState) {
		// nextProps.source !== this.props.source ||
		return nextState.fsource !== this.state.fsource
	}

	static getDerivedStateFromProps(props) {
		return updateSource(props)
	}

	render() {
		const {
			source,
			size,
			xSmall,
			small,
			large,
			xLarge,
			xxLarge,
			xxxLarge,
			showcase,
			background,
			opacity,
			blurRadius,
			corners,
			round,
			square,
			outline,
			onPress,
			style,
			align,
			useRNImage,
			...props
		} = this.props
		const dimensions = size
			? size
			: xSmall
				? 35
				: small
					? 43
					: large
						? 75
						: xLarge
							? 100
							: xxLarge
								? 110
								: xxxLarge
									? 180
									: showcase
										? 300
										: background
											? deviceHeight
											: 60
		const imageStyle = {
			height: dimensions,
			width: dimensions,
			borderRadius: round ? dimensions / 2 : square ? 0 : corners ? 0 : 5,
			backgroundColor: background ? "transparent" : Colors.grey5,
			borderWidth: outline ? 1 : 0,
			borderColor: Colors.grey2,
			opacity: opacity || background ? 0.2 : 1,
			alignSelf: align
		}

		const incomingStyle = Array.isArray(style) ? style : [style]

		const src = this.state.fsource ? this.state.fsource : source
		const Img = useRNImage ? RNImage : RNImage // Todo - make webpack replace this import with RNImage

		if (onPress) {
			return (
				<TouchableOpacity onPress={onPress}>
					<Img
						{...props}
						style={[imageStyle, ...incomingStyle]}
						source={src}
						blurRadius={blurRadius} />
				</TouchableOpacity>
			)
		}
		return (
			<Img {...props} style={[imageStyle, ...incomingStyle]} source={src} blurRadius={blurRadius} />
		)
	}
}

const formatUUID = (uuid, size = 600, profile_id) => {
	let uri = "" // `${Config.IMAGES_CDN_LINK}`
	if (!uuid) {
		const defaultSelection = profile_id % 50
		uri += `defaultProfileImages/`
		uri += !profile_id
			? `${Math.floor(Math.random() * 50)}.png`
			: `${defaultSelection === 0 ? 50 : defaultSelection}.png`
	} else {
		uri += `${uuid}/${size}.jpg`
	}
	return { uri }
}

export const getUrlFromUUID = (uuid, size = 600, fallbackType = "album") => {
	const body =
		fallbackType === "profile" && !uuid
			? `defaultProfileImages/${Math.floor(Math.random() * 50)}.png`
			: !uuid
				? `default/${size}.jpg`
				: `${uuid}/${size}.jpg`
	return "" //`${Config.IMAGES_CDN_LINK}${body}`
}
