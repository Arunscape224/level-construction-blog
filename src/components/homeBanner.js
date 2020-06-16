import React from 'react';
import { Jumbotron, Container, Row, Col } from 'reactstrap';
// import HomeParallax from './homeparallax'
import SocialIcons from './socialIcons'
import {ProfileImage} from './profileImage'

const HomeBanner = (props) => {
  return (
    <div>
      <Jumbotron fluid style={{ padding: 0 }}>
        <Container fluid>
        <Col>
            <Row xs="1" className="border" style={{ height: '50%' }}>
                {/* <HomeParallax /> */}

                {/* Here is where the carousel is going to go */}
            </Row>
            <Row xs="1" id="home-banner-row-2" className="border" style={{ height: '50%'}}>
            <Col id="avatar-section" className="col-4 border-right" style={{ position: 'relative',  padding: '20px' }}>
            <div className="d-flex flex-column justify-content-center align-items-stretch" style={{ position: 'relative' }}>
            <ProfileImage/>
            <div className="d-flex flex-column justify-content-center align-items-stretch" style={{textAlign: 'center', paddingBottom: '20px'}}>
            <h4 style={{width: '100%', paddingTop: '20px', fontSize: '1.7rem'}}>Greg Starr</h4>
            <em>Owner / Natural Stone Expert</em>
            </div>
           <div>
           <SocialIcons />
           </div>
            </div>
            </Col>
            
            <Col id="text-section" className="col-8 d-flex flex-column justify-content-center align-items-stretch">
              <div style={{padding: '50px'}}>
              <h3 style={{marginBottom: '30px', marginTop: '30px'}}>"The Best Look, With The Best Price!"</h3>
            <em style={{textAlign: "left !important"}}>"Our focus is to give consumers the <u>highest end look</u> at  <u>very competitive prices.</u> Our in house staff consists of degreed designers and a project management team with many years of experience. On the outside we employ a highly skilled labor team for all jobs, big or small."</em>
              </div>
            </Col>
            </Row>
        </Col>
        </Container>
      </Jumbotron>
    </div>
  );
};


export default HomeBanner;