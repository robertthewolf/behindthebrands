const _ = require('lodash')
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')
const loadYaml = require('./loadYaml')

const adminConfig = loadYaml('./static/admin/config.yml')

const adjustImagePath = nodePath => image => {
  if (_.isString(image)) {
    if (image.indexOf(adminConfig.public_folder) === 0) {
      const nextImage = path.relative(
        path.dirname(nodePath),
        path.join(
          __dirname,
          adminConfig.media_folder,
          image.substr(adminConfig.public_folder.length)
        )
      )
      console.log('Adjusted image path', nextImage)
      return nextImage
    }
  }
  return image
}

exports.onCreateNode = ({ node, boundActionCreators, getNode, loadNodeContent, }) => {

  //image sharp
  const { frontmatter } = node
  if (frontmatter) {
    const adjust = adjustImagePath(node.fileAbsolutePath)
    const { image } = frontmatter
    if (image) {
      node.frontmatter.image = adjust(image)
    }
  }

}