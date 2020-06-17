module.exports = {
	project: {
		assets: ["./app/assets/fonts"],
		ios: {},
		android: {
			sourceDir: "./android",
			stringsPath: "app/src/main/res/values/strings.xml",
			mainFilePath: "app/src/main/java/com/quadio/MainApplication.java"
		}
	}
}
