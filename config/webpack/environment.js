const { environment } = require('@rails/webpacker')

const webpack = require("webpack");


require("jquery")


environment.plugins.append(
	"Provide",
	new webpack.ProvidePlugin({
		$: "jquery",
		jQuery: "jquery",
		jquery: "jquery",
		"window.jQuery": "jquery",
	})
);

const config = environment.toWebpackConfig();
config.resolve.alias = {
 jquery: "jquery/src/jquery"
};

module.exports = environment
