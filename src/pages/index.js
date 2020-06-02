import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Row, Col, Button, Container } from 'reactstrap';
import SEO from "../components/seo"
import Layout from "../components/layout"
import Post from '../components/post'
import HomeBanner from '../components/homeBanner'
import InfoSection from '../components/infoSection'

const IndexPage = () => {

  const data = useStaticQuery(graphql`
  query {
    allContentfulPost (sort: {
      fields: date,
      order: DESC,
    }, limit: 3) {
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

  return(
    <Layout>
    <SEO title="Home" keywords={['gopi', 'inspires', 'blog', 'motivational', 'love', 'inspirational']}/>
    <Container>
      <Row>
        <HomeBanner />
      </Row>

      <Row>
        <InfoSection />
      </Row>
        <Row>
      <Col md="12">
        <h2 className="text-center mb-4 mt-4">Recent Posts</h2>

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
      <div className="w-100 d-flex justify-content-center mb-4"><Button href="/blog-posts" style={{margin: '0 auto'}}>View All Posts</Button></div>
      </Col>
      {/* <Col md="4">
        <Sidebar />
      </Col> */}
    </Row>
    </Container>
    </Layout>
  )

}

export default IndexPage