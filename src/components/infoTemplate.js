import React from 'react'
import { Container } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const InfoTemplate = (props) => {
    return (
    <Container className="p-4">
        <FontAwesomeIcon style={{fontSize: '2.5em'}} className="m-3" icon={props.icon} />
        <h4>{props.title}</h4>
    </Container>
    )
}

export default InfoTemplate