import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export const HouzzIcon = () => {
    const data = useStaticQuery(graphql`
      query {
        placeholderImage: file(relativePath: { eq: "houzz.png" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `)
  
    return <Img className="mr-3" fluid={data.placeholderImage.childImageSharp.fluid} style={{width: '50px', borderRadius: '50%', border: '5px solid white'}}/>
  }
  
  