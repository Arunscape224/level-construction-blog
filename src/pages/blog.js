import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Row, Col, Container } from 'reactstrap';
import SEO from "../components/seo"
import Layout from "../components/layout"
import Post from '../components/post'


const Blog = () => {
    const data = useStaticQuery(graphql`
    query {
      allContentfulPost (sort: {
        fields: date,
        order: DESC,
      }) {
        edges {
          
          node {
            childContentfulPostBodyTextNode {
              childMarkdownRemark {
                excerpt
              }
            }
            id
            title
            author
            tags
            slug
            image {
              fluid(maxWidth: 1800) {
                ...GatsbyContentfulFluid
              }
            }
            date(formatString: "MMMM Do YYYY")
            
          }
          
          
        }
        
        
      }
      
    }
    `)
return (
    <Layout>
         <SEO title="Blog Posts" keywords={['gopi', 'inspires', 'blog', 'inspirational', 'M.Gopinathan Nair', 'nair', 'gopi nair']}/>
        <Container fluid="sm" className="mt-4">
          <Row>
            <Col>
              <h1>Blog Posts</h1>

              <div className="text-center pl-5 pr-5 pb-5">Here is a collection of posts I have created over the years. I hope that you will interpret these messages in a way that will help you grow as an individual. <u>Scroll down</u> to view previews of the posts.</div>
            </Col>
          </Row>
        <Row>
            <Col>
            {data.allContentfulPost.edges.map(({node}) => (
        <Post
        key={node.id}
        title={node.title}
        slug={node.slug}
        tags={node.tags}
        fluid={node.image.fluid}
        body={node.childContentfulPostBodyTextNode.childMarkdownRemark.excerpt}
        author={node.author}
        date={node.date}
        />
      ))}
            </Col>
        </Row>
        </Container>
    </Layout>
)
}

export default Blog