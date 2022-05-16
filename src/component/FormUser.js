import React from "react";
import { Form, Button, Container, Row, ModalTitle, ModalBody } from 'react-bootstrap';


function FormUser(props) {
    return (

        <Container fluid >
            <Row>
                <ModalBody>
                    <ModalTitle>{props.title}</ModalTitle>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Adresse email *</Form.Label>
                            <Form.Control required type="email" placeholder="Entrer un email" />
                            <Form.Text className="text-muted">
                            champs obligatoire

                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password *</Form.Label>
                            <Form.Control required type="password" placeholder="Mot de passe" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </ModalBody>
            </Row>
        </Container>
    )

}
export default FormUser;
