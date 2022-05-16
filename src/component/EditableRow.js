import { Button, ButtonGroup } from "react-bootstrap";
import { FaDoorOpen, FaSave } from "react-icons/fa";
import { Input } from "reactstrap";

const EditableRow = ({
  editFormData,
  handleEditFormChange,
  handleCancelClick,
}) => {
  return (
    <tr key={editFormData.id}>
      <td>
        <Input
          type="text"
          required="required"
          placeholder="Entrer un nom..."
          name="fullName"
          value={editFormData.fullName}
          onChange={handleEditFormChange}
        ></Input>
      </td>
      <td>
        <Input
          type="text"
          required="required"
          placeholder="Entrer une addresse..."
          name="address"
          value={editFormData.address}
          onChange={handleEditFormChange}
        ></Input>
      </td>
      <td>
        <Input
          type="text"
          required="required"
          placeholder="Entrer un numéro..."
          name="phoneNumber"
          value={editFormData.phoneNumber}
          onChange={handleEditFormChange}
        ></Input>
      </td>
      <td>
        <Input
          type="email"
          required="required"
          placeholder="Entrer un email..."
          name="email"
          value={editFormData.email}
          onChange={handleEditFormChange}
        ></Input>
      </td>
      <td>
          <ButtonGroup className="mb-2">
        <Button variant="success" size="sm" type="submit">
        <FaSave />    Sauvegarder</Button>
        <Button variant="warning" size="sm" type="button" onClick={handleCancelClick}>
        <FaDoorOpen /> Annuler
        </Button>
        </ButtonGroup>
      </td>
    </tr>
  );
};

export default EditableRow;