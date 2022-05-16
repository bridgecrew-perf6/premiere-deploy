import React from "react";
import { Container, Row } from "react-bootstrap";

function AddJoueur() {

    return (
        <>
        <Container className='pt-md-5'>
            <section className="jumbotron text-center" >
                <Container>
                    <Row>
                        <h1 className="title">Ajouter un joueur</h1>
                    </Row>
                </Container>
            </section>
        </Container>
    </>
    )


}
export default AddJoueur;