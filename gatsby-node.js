// const _ = require('lodash')
// const path = require('path')
// const { createFilePath } = require('gatsby-source-filesystem')

// exports.createPages = ({ boundActionCreators, graphql }) => {
//   const { createPage } = boundActionCreators

//   return graphql(`
//     {
//       allMarkdownRemark(limit: 1000) {
//         edges {
//           node {
//             id
//             fields {
//               slug
//             }
//             frontmatter {
//               tags
//               templateKey
//             }
//           }
//         }
//       }
//     }
//   `).then(result => {
//     if (result.errors) {
//       result.errors.forEach(e => console.error(e.toString()))
//       return Promise.reject(result.errors)
//     }

//   })
// }
