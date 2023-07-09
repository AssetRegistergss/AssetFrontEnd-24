import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Form,
  FormGroup,
  Input,
  Modal,
  Row,
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faClose } from "@fortawesome/free-solid-svg-icons";

const AddPurpose = ({ isOpen, setIsOpen }) => {
  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Modal className="modal-dialog" size="md" isOpen={isOpen}>
      <div className="modal-body p-0">
        <Card className="bg-secondary shadow border-0">
          <CardHeader className="bg-transparent py-2">
            <Row className={"align-items-center"}>
              <Col>
                <h2 className="modal-title mb-0">Add Purpose</h2>
              </Col>
              <Col className={"text-right"}>
                <Button
                  className="btn-icon btn-2 btn-round"
                  color="warning"
                  type="button"
                  onClick={() => setIsOpen(false)}
                >
                  <FontAwesomeIcon icon={faClose} />
                </Button>
              </Col>
            </Row>
          </CardHeader>
          <CardBody className="p-3">
            <Form role="form">
              <FormGroup className="">
                <Input
                  className="form-control-alternative"
                  placeholder="Enter purpose here ..."
                  rows="3"
                  required
                  type="textarea"
                  id={"purpose"}
                />
              </FormGroup>
              <div className="text-right">
                <Button
                  className="mt-4 btn-round"
                  color="primary"
                  type="submit"
                  onSubmit={onSubmit}
                >
                  <FontAwesomeIcon icon={faCheck} className={"mr-1"} /> Submit
                </Button>
              </div>
            </Form>
          </CardBody>
        </Card>
      </div>
    </Modal>
  );
};

export default AddPurpose;
