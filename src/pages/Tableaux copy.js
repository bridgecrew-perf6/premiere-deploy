import React, {useState } from "react";
import { Container, Row, Table } from "react-bootstrap";
import { FaPlusCircle } from 'react-icons/fa';
import data from "../mock-data.json"



const Tableaux = () => {

    const [contacts, setContacts] = useState(data);
    const [addFormData, setAddFormData] = useState({
        id: '',
        date: '',
        heure: '',
        cat: '',
        prix: ''
    })

    const handleAddFormChange = (event) => {
        event.preventDefault();

        const fieldName = event.target.getAttribute('name');
        const fieldValue = event.target.value;

        const newFormData = { ...addFormData };
        newFormData[fieldName] = fieldValue;

        setAddFormData(newFormData);
    }

    const handleAddFormSubmit = (event) => {
        event.preventDefault();

        const newContact = {

            lettre : addFormData.lettre,
            date: addFormData.date,
            heure: addFormData.heure,
            cat: addFormData.cat,
            prix: addFormData.prix
        };

        const newContacts = [...contacts, newContact];
        setContacts(newContacts);
    };

    return (
        <>
            <section className="jumbotron text-center">
                <Container className="my-5">
                    <Row>
                        <h1 className="title">Tableaux</h1>
                    </Row>
                    <Row>
                        <Table >
                            <form>
                            <thead>
                                <tr>
                                    <th scope="col"><a href="#/" ><FaPlusCircle /></a></th>
                                    <th scope="col">Date</th>
                                    <th scope="col">Heure</th>
                                    <th scope="col">Catégorie</th>
                                    <th scope="col">Prix</th>
                                </tr>
                            </thead>
                            <tbody>
                                {contacts.map((contact) => (
                                    <tr key={contact.id}>
                                        <td>{contact.lettre}</td>
                                        <td>{contact.date}</td>
                                        <td>{contact.heure}</td>
                                        <td>{contact.cat}</td>
                                        <td>{contact.prix}</td>

                                    </tr>
                                ))}

                            </tbody>
                            </form> 
                            <form onSubmit={handleAddFormSubmit}>
                            <thead >
                               
                                    <tr className="table-primary">
                                        <th scope="row">

                                            <input
                                                type="text"
                                                name="lettre"
                                                onChange={handleAddFormChange}
                                            ></input>
                                        </th>
                                        <td>
                                            <input 
                                            type="text" 
                                            name="date"
                                            onChange={handleAddFormChange}
                                            ></input></td>
                                        <td><input 
                                        type="text" 
                                        name="heure"
                                        onChange={handleAddFormChange}
                                        ></input></td>
                                        <td><input 
                                        type="text" 
                                        name="cat"
                                        onChange={handleAddFormChange}
                                        ></input></td>
                                        <td><input 
                                        type="number" 
                                        name="prix"
                                        onChange={handleAddFormChange}
                                        ></input></td>
                                    </tr>
                                </thead>
                            </form>
                        </Table>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Tableaux;