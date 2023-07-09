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

const AddProject = ({ isOpen, setIsOpen }) => {
  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Modal className="modal-dialog" size="lg" isOpen={isOpen}>
      <div className="modal-body p-0">
        <Card className="bg-secondary shadow border-0">
          <CardHeader className="bg-transparent py-2">
            <Row className={"align-items-center"}>
              <Col>
                <h2 className="modal-title mb-0">Add Project</h2>
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
              <Row className={"form-row align-items-center"}>
                <Col md={4} sm={6}>
                  <FormGroup className="">
                    <label className="form-control-label" htmlFor="name">
                      Project Name
                    </label>
                    <Input
                      className={"form-control-alternative"}
                      type="text"
                      required
                      id={"name"}
                    />
                  </FormGroup>
                </Col>
                <Col md={4} sm={6}>
                  <FormGroup className="">
                    <label className="form-control-label" htmlFor="coordinator">
                      Coordinator Name
                    </label>
                    <Input
                      className={"form-control-alternative"}
                      type="text"
                      required
                      id={"coordinator"}
                    />
                  </FormGroup>
                </Col>
                <Col md={4} sm={6}>
                  <FormGroup className="">
                    <label className="form-control-label" htmlFor="contact">
                      Coordinator Contact
                    </label>
                    <Input
                      className={"form-control-alternative"}
                      type="text"
                      required
                      id={"contact"}
                    />
                  </FormGroup>
                </Col>
              </Row>
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

export default AddProject;
