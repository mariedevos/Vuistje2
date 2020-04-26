const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(
    `
      {
        allContentfulPost {
          edges {
            node {
              id: contentful_id
              text_1
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    throw result.errors
  }

  result.data.allContentfulPost.edges.forEach(({ node }) => {
    createPage({
      path: node.id,
      component: path.resolve(`./src/templates/vuistje.js`),
      context: {
        id: node.id,
        text: node.text_1,
      },
    })
  })
}
