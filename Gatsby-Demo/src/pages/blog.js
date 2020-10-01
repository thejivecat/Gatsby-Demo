import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import Layout from '../components/layout'

const BlogPage = () => {
  const query = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
            html
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  const posts = query.allMarkdownRemark.edges.map(post => 
    <li>
      <h2>
        <Link to={`/blog/${post.node.fields.slug}`}>
        {post.node.frontmatter.title}
        </Link>
      </h2>
      <p>{post.node.frontmatter.date}</p>
    </li>
  );
  return (
    <Layout>
      <h2>Blog</h2>
      <ol>
        {posts}
      </ol>
    </Layout>
  )
}

export default BlogPage

//can navigate to locahost:8000/blog to see page (name of file.js)