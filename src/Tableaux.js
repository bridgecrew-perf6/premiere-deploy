import React, { useState, Fragment } from "react";
import { nanoid } from "nanoid";
import data from "./mock-data.json";
import ReadOnlyRow from "./component/ReadOnlyRow";
import EditableRow from "./component/EditableRow";
import { Button, InputGroup, Table } from "react-bootstrap";
import { Input } from "reactstrap";
import { FaPlusCircle } from "react-icons/fa";

const App = () => {
  const [contacts, setContacts] = useState(data);
  const [addFormData, setAddFormData] = useState({
    fullName: "",
    address: "",
    phoneNumber: "",
    email: "",
  });

  const [editFormData, setEditFormData] = useState({
    fullName: "",
    address: "",
    phoneNumber: "",
    email: "",
  });

  const [editContactId, setEditContactId] = useState(null);

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newContact = {
      id: nanoid(),
      fullName: addFormData.fullName,
      address: addFormData.address,
      phoneNumber: addFormData.phoneNumber,
      email: addFormData.email,
    };

    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedContact = {
      id: editContactId,
      fullName: editFormData.fullName,
      address: editFormData.address,
      phoneNumber: editFormData.phoneNumber,
      email: editFormData.email,
    };

    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === editContactId);

    newContacts[index] = editedContact;

    setContacts(newContacts);
    setEditContactId(null);
  };

  const handleEditClick = (event, contact) => {
    event.preventDefault();
    setEditContactId(contact.id);

    const formValues = {
      fullName: contact.fullName,
      address: contact.address,
      phoneNumber: contact.phoneNumber,
      email: contact.email,
    };

    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditContactId(null);
  };

  const handleDeleteClick = (contactId) => {
    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === contactId);

    newContacts.splice(index, 1);

    setContacts(newContacts);
  };

  return (
    <div className="tab-pane fade show active" role="tabpanel">
      <form onSubmit={handleEditFormSubmit}>
        <Table striped hover>
          <thead>
            <tr>
              <th scope="col">Nom</th>
              <th scope="col">Addresse</th>
              <th scope="col">Téléphone</th>
              <th scope="col">Email</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <Fragment key={contact.id}>
                {editContactId === contact.id ? (
                  <EditableRow scope="col"
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelClick={handleCancelClick}
                  />
                ) : (
                  <ReadOnlyRow
                    contact={contact}
                    handleEditClick={handleEditClick}
                    handleDeleteClick={handleDeleteClick}
                  />
                )}
              </Fragment>
            ))}
          </tbody>
        </Table>
      </form>

      <h2>Ajouter un contact</h2>
      <form onSubmit={handleAddFormSubmit}>
        <InputGroup className="mb-3">
          <Input
            type="text"
            name="fullName"
            required="required"
            placeholder="Entrer un nom..."
            onChange={handleAddFormChange}
          />

          <Input
            type="text"
            name="address"
            required="required"
            placeholder="Entrer une addresse..."
            onChange={handleAddFormChange}
          />

          <Input
            type="text"
            name="phoneNumber"
            required="required"
            placeholder="Entrer un numéro..."
            onChange={handleAddFormChange}
          />

          <Input
            type="email"
            name="email"
            required="required"
            placeholder="Entrer un email..."
            onChange={handleAddFormChange}
          />
          <Button size="sm" variant="outline-secondary" type="submit"><FaPlusCircle /> Ajouter</Button>
        </InputGroup>
      </form>
    </div>
  );
};

export default App;