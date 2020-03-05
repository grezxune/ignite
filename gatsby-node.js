const path = require(`path`)

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const eventTemplate = path.resolve(`src/templates/event.js`)

  const result = await graphql(`
    {
      allMarkdownRemark(sort: { order: ASC, fields: [frontmatter___date] }) {
        edges {
          node {
            frontmatter {
              path
              type
            }
          }
        }
      }
    }
  `)

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    console.log("Node:", node)
    if (node.frontmatter.type === "event") {
      createPage({
        path: node.frontmatter.path,
        component: eventTemplate,
        context: {}, // additional data can be passed via context
      })
    }
  })
}
