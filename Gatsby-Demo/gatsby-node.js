//Gatsby node configuration file, allows us to tap into the Gatsby API
//go to nodejs.org docs and find path basename doc
//using createPages from nodejs

const path = require('path');

module.exports.createPages = async({ graphql, actions }) => { //graphql is a function that returns a promise to perform a query
  const { createPage } = actions;

  // 1. Get path to template
  const blogTemplate = path.resolve('./src/templates/blog.js')
  const response = await graphql(`
    query {
      allContentfulBlogPost {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)
  response.data.allContentfulBlogPost.edges.forEach(edge => {
    createPage({
      component: blogTemplate,
      path: `/blog/${edge.node.slug}`,
      context: {
        slug: edge.node.slug
      }
    })
  })
  // 2. Get markdown data
  // 3. Create new pages
}
