import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

import Layout from '../components/layout'
import blogStyles from './blog.module.scss';

const BlogPage = () => {
  const query = useStaticQuery(graphql`
    query {
      allContentfulBlogPost (
        sort: {
          fields: publishedDate,
          order: DESC
        }
      ) {
        edges {
          node {
            title
            publishedDate (formatString: "MMMM Do, YYYY")
            slug
          }
        }
      }
    }
  `)
  const posts = query.allContentfulBlogPost.edges.map(post => 
    <li className={blogStyles.post}>
      <Link to={`/blog/${post.node.slug}`}>
      <h2>
        {post.node.title}
      </h2>
      <p>{post.node.publishedDate}</p>
      </Link>
    </li>
  );
  return (
    <Layout>
      <h2>Blog</h2>
      <ol className={blogStyles.posts}>
        {posts}
      </ol>
    </Layout>
  )
}

export default BlogPage

//can navigate to locahost:8000/blog to see page (name of file.js)