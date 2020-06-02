import React from 'react'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import { useStaticQuery, graphql } from "gatsby"

const ContactSlider = () => {
    const handleOnDragStart = (e) => e.preventDefault()
    var pics = ["//images.ctfassets.net/mq9pxrzhf3cy/2uoUguzpQUeWJ87WiAFbev/835bf84c19f7f538f8022441aafcff9f/87616755_207473843834651_420092613384570535_n.jpg?w=800&q=50", 
    "//images.ctfassets.net/mq9pxrzhf3cy/3MRV5XtWlUCEZPTJVMKXXm/f3f03d4c4685aa59371b723bf8ea93fb/90056827_234988054302777_4073744733303927026_n.jpg?w=800&q=50", 
    "//images.ctfassets.net/mq9pxrzhf3cy/CcQcXXTmAxqbxqjh7GwJH/d7dbc01fc646b7d3fb236239d1920ac3/Athens.jpg?w=800&q=50"]
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
    `).allContentfulAsset.edges.filter(item => {
        return pics.indexOf(item.node.fluid.src) >= 0; 
    })

    return (
        <AliceCarousel mouseDragEnabled dotsDisabled
        buttonsDisabled={true} fadeOutAnimation={true} autoPlay={true} autoPlayInterval={5000}>
       <img src={data[0].node.fluid.src} onDragStart={handleOnDragStart} alt="level-construction" className="yours-custom-class" />
       <img src={data[1].node.fluid.src} onDragStart={handleOnDragStart} alt="level-construction" className="yours-custom-class" />
       <img src={data[2].node.fluid.src} onDragStart={handleOnDragStart} alt="level-construction" className="yours-custom-class" />


   </AliceCarousel>
    )
    
  }
  


  export default ContactSlider