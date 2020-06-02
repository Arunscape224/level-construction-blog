import React from 'react'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import { useStaticQuery, graphql } from "gatsby"

const HomeSlider = () => {
    const handleOnDragStart = (e) => e.preventDefault()
    var pics = ["//images.ctfassets.net/z9c37qswmvk4/5c2P3bRyKHA3vvGEJKcX1u/899dd9b4b47b72e4971f3e6c7d0127fe/001.jpg?w=800&q=50", 
                "//images.ctfassets.net/z9c37qswmvk4/5ZNw1bbePHnHhZT11SrxlR/69955e994076a08548364bc9881b6e1f/002.jpg?w=800&q=50", 
                "//images.ctfassets.net/z9c37qswmvk4/3lbakGURNuBQeQSqGmKJkB/b0f98c0b805880b74a171ebe38acb60a/003.jpg?w=800&q=50"]
    let data = useStaticQuery(graphql`
    query {
        allContentfulAsset {
            edges {
              node {
                fluid {
                  src
                }
              }
            }
          }
      }
    `)

    return (
        <AliceCarousel mouseDragEnabled dotsDisabled
        buttonsDisabled={true} fadeOutAnimation={true} autoPlay={true} autoPlayInterval={5000}>
       <img src={data[0].node.fluid.src} onDragStart={handleOnDragStart} alt="level-construction" className="yours-custom-class" />
       <img src={data[1].node.fluid.src} onDragStart={handleOnDragStart} alt="level-construction" className="yours-custom-class" />
       <img src={data[2].node.fluid.src} onDragStart={handleOnDragStart} alt="level-construction" className="yours-custom-class" />


   </AliceCarousel>
    )
    
  }
  


  export default HomeSlider