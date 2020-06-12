// next.config.js
// const withSass = require('@zeit/next-sass')
// module.exports = withSass({
//     sassLoaderOptions: { includePaths: ['./styles.scss'] } 
// })

const path = require('path')

module.exports = {
  sassOptions: {
    cssModules: false,
    includePaths: [path.join(__dirname, './styles.scss')],
  },
}