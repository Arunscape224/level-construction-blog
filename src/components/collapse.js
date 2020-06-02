import React from 'react'
import { Jumbotron, Container, Button, Row, Col, Collapse, Card, CardHeader, CardBody, CardTitle, CardText } from 'reactstrap';
import Img from "gatsby-image"


const CollapseSection = (props) => {
    return (
        <Collapse isOpen={props.isOpen} className="text-center mb-4">
        <Card className="mt-4" style={{width: '80%', margin: '0 auto'}}>
          <CardHeader>
            <img className="w-100" src={props.img}/>
          </CardHeader>
          <CardBody>
    <CardTitle><h3>{props.header}</h3></CardTitle>
    <CardText><em style={{ lineHeight: '30px' }}>{props.text}</em></CardText>
            <a href={props.link}><Button>Purchase</Button></a>
          </CardBody>
        </Card>
    </Collapse>
    )
}

export default CollapseSection