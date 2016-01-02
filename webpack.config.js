var root = __dirname;

module.exports = {
	context: root,
	entry: "./js/main.js",
	output: {
		path: root + "/dist",
		filename: "bundle.js"
	}
};