import React from 'react'
import Layout from '../components/layout'
import { graphql, Link } from 'gatsby'
import SEO from '../components/seo'
import { Row, Col, Card, CardBody, CardSubtitle, Badge, Container } from 'reactstrap'
import Img from 'gatsby-image'
import {slugify} from '../util/utilityFunctions'
import {DiscussionEmbed} from 'disqus-react'

const SinglePost = ({ data }) => {
    const post = data.contentfulPost
    const baseUrl = 'https://gopiinspires.com/'
    const disqusShortname = "www-gopiinspires-com"
    const disqusConfig = {
        identifier: post.id,
        title: post.title,
        url: baseUrl + post.slug
    }
    return (
        <Layout>
            <SEO title={post.title} />
            <Container>
            <h1 className="mt-5 mb-5" style={{fontSize: '3em'}}>{post.title}</h1>
             <Row>
                 <Col md="12">
                     <Card>
                            <Img className="card-image-top" fluid={post.image.fluid}/>
                            <CardBody>
                                <CardSubtitle className="text-muted mb-3 text-center">
        
    <small><em style={{fontSize: '1.3em'}}>by {post.author}</em> <br/> {post.date}</small>
                                </CardSubtitle>
                                <div className="post-body" style={{fontSize: '20px', lineHeight: '1.6em', paddingBottom: '30px'}} dangerouslySetInnerHTML={{__html: post.childContentfulPostBodyTextNode.childMarkdownRemark.html }}/>
                                    <ul className="post-tags">
                                        {post.tags.map(tag => (
                                            <li key={tag}>
                                                <Link to={`/tag/${slugify(tag)}`}>
                                        <Badge color="secondary">{tag}</Badge>
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                
                            </CardBody>
                     </Card>
                     <h1 className="text-center">
                        Share this post
                     </h1>
                     <div className="text-center social-share-links">
                        <ul>
                            <li>
                                <a href={'https://www.facebook.com/sharer/sharer.php?u=' + baseUrl + post.slug} className="facebook" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-facebook-f fa-2x"></i>
                                </a>
                            </li>
                            <li>
                                <a href={'https://www.twitter.com/share?url=' + baseUrl + post.slug + '&text=' + post.title + '&via' + 'twitterHandle'} className="twitter" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-twitter fa-2x"></i>
                                </a>
                            </li>
                            <li>
                                <a href={'https://www.facebook.com/share?url=' + baseUrl + post.slug} className="google" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-google fa-2x"></i>
                                </a>
                            </li>
                            <li>
                                <a href={'https://www.linkedin.com/shareArticle?url=' + baseUrl + post.slug} className="linkedin" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-linkedin fa-2x"></i>
                                </a>
                            </li>
                        </ul> 
                     </div>
                     <DiscussionEmbed shortname={disqusShortname} config={disqusConfig}/>

                    
                 </Col>
                 
             </Row>
            </Container>
        </Layout>
    )
}

 export const postQuery = graphql`
    query blogPostBySlug($slug: String!) {
        contentfulPost(slug: {eq: $slug}) {
            childContentfulPostBodyTextNode {
                childMarkdownRemark {
                  html
                }
              }
            id
            title
            author
            tags
           
            slug
            date(formatString: "MMMM Do YYYY")
            body {
                body
            }
            image {
                fluid(maxWidth: 1800) {
                  ...GatsbyContentfulFluid
                }
              }
          }
    }
`

export default SinglePost