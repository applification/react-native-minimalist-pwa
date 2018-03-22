/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// exports.modifyWebpackConfig = ({ config }) => {
//   config._loaders.js.config.exclude[0] = new RegExp(
//     process.cwd() + '/(node_modules|bower_components)'
//   )
// }

// const generateBabelConfig = require('gatsby/dist/utils/babel-config')

// exports.modifyWebpackConfig = ({ config, stage }) => {
//   const program = {
//     directory: __dirname,
//     browserslist: ['> 1%', 'last 2 versions', 'IE >= 9'],
//   }

//   return generateBabelConfig(program, stage).then(babelConfig => {
//     config.removeLoader('js').loader('js', {
//       test: /\.jsx?$/,
//       // exclude: modulePath => {
//       //   return !/node_modules/.test(modulePath)
//       // },
//       loader: 'babel',
//       query: babelConfig,
//     })
//   })
// }
