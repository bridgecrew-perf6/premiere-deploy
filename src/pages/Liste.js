import React from "react";
import { Button, Container, Row } from "react-bootstrap";
import { FaBars } from "react-icons/fa";



function Liste() {


    return (
        <>
        <Button id="sidebarCollapse" type="button" className="btn btn-light bg-white rounded-pill shadow-sm px-4 mb-4"><FaBars className=" mx-2" /><small className="text-uppercase font-weight-bold">Toggle</small></Button>

              <section className="jumbotron text-center" >
                <Container className="my-5">
                    <Row>
                        <h2 className="display-4 text-white">Liste</h2>
                        <ul className="list-group">
                            <li className="list-group-item">Item1</li>
                            <li className="list-group-item">Item2</li>
                            <li className="list-group-item">Item3</li>
                            <li className="list-group-item">Item4</li>
                            <li className="list-group-item">Item5</li>
                        </ul>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Liste;