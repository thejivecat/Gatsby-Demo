import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
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
          }
        }
      }
    }
  `)
  const posts = query.allMarkdownRemark.edges.map(post => 
    <li>
      <h2>{post.node.frontmatter.title}</h2>
      <p>{post.node.frontmatter.date}</p>
      <div dangerouslySetInnerHTML={{__html: post.node.html}}></div>
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