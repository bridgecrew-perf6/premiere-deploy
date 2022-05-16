import { Button, ButtonGroup } from "react-bootstrap";
import { FaPenSquare, FaTrash } from "react-icons/fa";

const ReadOnlyRow = ({ contact, handleEditClick, handleDeleteClick }) => {
  return (
    <tr key={contact.id}>
      <td>{contact.fullName}</td>
      <td>{contact.address}</td>
      <td>{contact.phoneNumber}</td>
      <td>{contact.email}</td>
      
      <td>
      <ButtonGroup className="mb-2">
        <Button
        variant="secondary"
        size="sm"
          type="button"
          onClick={(event) => handleEditClick(event, contact)}
        >
        <FaPenSquare />  Editer
        </Button>
        <Button
        variant="danger"
        size="sm"
        type="button" onClick={() => handleDeleteClick(contact.id)}>
        <FaTrash />  Supprimer
        </Button>
       </ButtonGroup> 
      </td>
      
    </tr>
  );
};

export default ReadOnlyRow;