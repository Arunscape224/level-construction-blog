import React, {useState, useEffect} from 'react'
import { Link } from 'gatsby'
import {Card, CardTitle, CardText, CardSubtitle, CardBody, Badge} from 'reactstrap'
import Img from 'gatsby-image'
import {slugify} from '../util/utilityFunctions'
import { useMediaQuery } from 'react-responsive'
import { CommentCount } from 'disqus-react';


const Post  = ({ title, id, fluid, body, author, date, slug, tags}) => {
    const baseUrl = 'https://levelconstructionanddesign.com/'
    const disqusShortname = "levelconstructionanddesign"
    const disqusConfig = {
        identifier: id,
        title: title,
        url: baseUrl + slug
    }
    const [size, setSize] = useState(1)
    const handleMediaQueryChange = (matches) => {
        // matches will be true or false based on the value for the media query
        return matches
      }
      const isDesktopOrLaptop = useMediaQuery(
        { minDeviceWidth: 1224 }, undefined,  handleMediaQueryChange
      );

      useEffect(() => {
          isDesktopOrLaptop ? setSize(3) : setSize(1)
      }, [isDesktopOrLaptop])

    
    return (
        <Card>
           <Link to={slug}>
           <Img className="card-image-top" fluid={fluid}/>
           </Link>
            <CardBody>
              <div className="d-flex justify-content-between">
              <CardTitle><h4>{title}</h4></CardTitle> 
                <CommentCount shortname={disqusShortname} config={disqusConfig}/>
              </div>
                <CardSubtitle>
                                  <div className="d-inline font-italic">
                                   <span className="mr-1">by</span>
                                   <span className="text-info">{author}</span>
                                  </div>
                                 <div>
                                 <small className="text-muted font-italic">{date}</small>
                                 </div>
                    </CardSubtitle>

                    
                    <hr/>
                    <CardText>{body}</CardText>
                    <ul className="post-tags float-right">
                        {tags.slice(0, size).map(tag => (
                            <li key={tag}>
                                <Link to={`/tag/${slugify(tag)}`}>
                                    <Badge color="secondary">{tag}</Badge>
                                </Link>
                            </li>
                        ))} . . .
                    </ul>
                    <Link to={slug} className="btn btn-outline-secondary float-left">Read More</Link>
            </CardBody>
        </Card>

    )
}

export default Post