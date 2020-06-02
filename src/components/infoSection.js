import React, { useState } from 'react'
import { Jumbotron, Container, Row, Col } from 'reactstrap';
import InfoTemplate from './infoTemplate'
import { faRocket, faCheckCircle, faCogs } from '@fortawesome/free-solid-svg-icons'
import CollapseSection from './collapse'
import { useStaticQuery, graphql } from "gatsby"

const InfoSection = () => {

    var pics = ["90056827_234988054302777_4073744733303927026_n.jpg", 
    "Athens.jpg", 
    "87616755_207473843834651_420092613384570535_n.jpg"]

    let data = useStaticQuery(graphql`
    query {
        allContentfulAsset {
            edges {
              node {
                fluid {
                  src
                }
                file {
                  fileName
                }
              }
            }
          }
      }
    `)
   
    let filteredData = data.allContentfulAsset.edges.filter(item => {
      // console.log(item.node.file.fileName)
        return pics.indexOf(item.node.file.fileName) >= 0; 
    })

    const [tabOneOpen, setTabOneOpen] = useState(false);
    const [tabTwoOpen, setTabTwoOpen] = useState(false);
    const [tabThreeOpen, setTabThreeOpen] = useState(false);

    const toggle1 = () => {
        // console.log(data)
        setTabOneOpen(!tabOneOpen)
        setTabTwoOpen(false)
        setTabThreeOpen(false)
      };
    const toggle2 = () => {
        
        setTabTwoOpen(!tabTwoOpen)
        setTabOneOpen(false)
        setTabThreeOpen(false)
      };

      const toggle3 = () => {
        setTabThreeOpen(!tabThreeOpen)
        setTabOneOpen(false)
        setTabTwoOpen(false)
      };
      

    return (
    <Jumbotron fluid style={{ padding: 0 }} className="w-100 m-auto text-center">
        <Container fluid>
        <Row>

        <Col className="border" xs="12" sm="4" onClick={toggle1}>
            <InfoTemplate title="Our Beginning" 
                          icon={faRocket}/>
        </Col>


        <Col  className="border" xs="12" sm="4" onClick={toggle2}>
        <InfoTemplate title="Our Focus"
                      icon={faCheckCircle}/>
        </Col>

        <Col  className="border" xs="12" sm="4" onClick={toggle3}>
        <InfoTemplate title="Our Process"
                      icon={faCogs}
                      />
        </Col>
        
      </Row>
        </Container>


   <CollapseSection img={filteredData[0].node.fluid.src} isOpen={tabOneOpen} header="Our Beginning" text="Level Construction &amp; Design was originally developed as a labor company for quality installations of natural stone, tile and hardwood flooring. This solid foundation and high rate of customer satisfaction has led Level Construction and Design to expandits business model futher. Today, Level Construction &amp; Design has increased it's capacity of business to include remodeling and additions." link="https://www.google.com"/>
   <CollapseSection img={filteredData[1].node.fluid.src} isOpen={tabTwoOpen} header="Our Focus" text="Our focus is to give the customer the highest end look at the lowest prices. Our in house staff consists of degreed designers and a project management team with many years of experience. On the outside, we employ a highly skilled labor team for all jobs, big or small. Our team understands how important your home is to you. We work hard to leave your home more beautful than it was when we walked in. Level Construction &amp; Design incorporates talented design with the latest products to transform your space into tomorrows dream." link="https://www.google.com"/>
   <CollapseSection img={filteredData[2].node.fluid.src} isOpen={tabThreeOpen} header="Our Process" text="There is no other businness that people take quite so personal as that of the construction industry." link="https://www.google.com"/>


    </Jumbotron>
    )
}

export default InfoSection