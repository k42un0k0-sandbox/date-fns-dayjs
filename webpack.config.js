const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
    entry: "./index.js",
    plugins: [
        new BundleAnalyzerPlugin({ analyzerMode: 'static' })
    ]
}