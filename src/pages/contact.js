import React, {useState} from 'react'
import { Container, Row, Col, Card, CardTitle, CardBody, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import SEO from "../components/seo"
import Layout from "../components/layout"
import ContactSlider from '../components/contactslider'

const Contact = () => {
    const [values, setValues] = useState({
        email: '',
        subject: '',
        text: ''
    })
    const {email, subject, text} = values


    const handleChange = name => event => {
        setValues({...values, [name]: event.target.value})
    }
    return (
        <Layout>
        <SEO title="Contact" keywords={['gopi', 'inspires', 'blog', 'contact', 'inspirational']}/>
        <Container>
               <Card className="text-center">
                
                <ContactSlider />
                <CardTitle className="mt-5"><h1 onClick={() => console.log(values)}>Send Me A Message!</h1></CardTitle>
                <CardBody>
                       <Row xs="2">
                        <Col style={{margin: '0 auto'}}>
                       
                   <Form className="mb-5" name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field"> 
                   <input type="hidden" name="bot-field" />
                        <FormGroup>
                            <Label for="email">Email Address</Label>
                            <Input name="email" onChange={handleChange('email')} value={email} type="email" name="email" id="email" placeholder="" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="Subject">Subject</Label>
                            <Input  name="subject" onChange={handleChange('subject')} value={subject} type="text" name="subject" id="subject" placeholder="" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="exampleText">Text Area</Label>
                            <Input name="text" onChange={handleChange('text')} value={text} type="textarea" name="text" id="text" />
                        </FormGroup>
                        <FormGroup >
                        <Button type="submit">Send</Button>
                     
                    </FormGroup>
                    </Form>
                    </Col>
                   </Row>
                </CardBody>
            </Card>
         
        </Container>
        </Layout>
    )
}



export default Contact