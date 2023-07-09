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

const AddDevice = ({ isOpen, setIsOpen }) => {
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
                <h2 className="modal-title mb-0">Add Device</h2>
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
                <Col md={3} sm={6}>
                  <FormGroup className="">
                    <label className="form-control-label" htmlFor="serial">
                      Serial Number
                    </label>
                    <Input
                      className={"form-control-alternative"}
                      type="text"
                      required
                      id={"serial"}
                    />
                  </FormGroup>
                </Col>
                <Col md={3} sm={6}>
                  <FormGroup className="">
                    <label className="form-control-label" htmlFor="model">
                      Model
                    </label>
                    <Input
                      className={"form-control-alternative"}
                      type="text"
                      required
                      id={"model"}
                    />
                  </FormGroup>
                </Col>
                <Col md={3} sm={6}>
                  <FormGroup className="">
                    <label className="form-control-label" htmlFor="brand">
                      Brand
                    </label>
                    <Input
                      className={"form-control-alternative"}
                      type="text"
                      required
                      id={"brand"}
                    />
                  </FormGroup>
                </Col>
                <Col md={3} sm={6}>
                  <FormGroup className="">
                    <label className="form-control-label" htmlFor="imei">
                      IMEI
                    </label>
                    <Input
                      className={"form-control-alternative"}
                      type="text"
                      required
                      id={"imei"}
                    />
                  </FormGroup>
                </Col>
                <Col md={3} sm={6}>
                  <FormGroup className="">
                    <label className="form-control-label" htmlFor="deviceID">
                      Device ID
                    </label>
                    <Input
                      className={"form-control-alternative"}
                      type="text"
                      required
                      id={"deviceID"}
                    />
                  </FormGroup>
                </Col>
                <Col md={3} sm={6}>
                  <FormGroup className="">
                    <label
                      className="form-control-label"
                      htmlFor="functionality"
                    >
                      Functionality
                    </label>
                    <Input
                      className={"form-control-alternative"}
                      type="select"
                      required
                      id={"functionality"}
                    >
                      <option value="">Select an option</option>
                    </Input>
                  </FormGroup>
                </Col>
                <Col md={3} sm={6}>
                  <div className="custom-control custom-control-alternative custom-checkbox">
                    <input
                      className="custom-control-input"
                      id="touch"
                      type="checkbox"
                    />
                    <label className="custom-control-label" htmlFor="touch">
                      Touch Screen
                    </label>
                  </div>
                </Col>
                <Col md={3} sm={6}>
                  <FormGroup className="">
                    <label className="form-control-label" htmlFor="inspection">
                      Physical Inspection
                    </label>
                    <Input
                      className={"form-control-alternative"}
                      type="select"
                      required
                      id={"inspection"}
                    >
                      <option value="">Select an option</option>
                    </Input>
                  </FormGroup>
                </Col>
                <Col md={3} sm={6}>
                  <FormGroup className="">
                    <label className="form-control-label" htmlFor="status">
                      Status
                    </label>
                    <Input
                      className={"form-control-alternative"}
                      type="text"
                      required
                      id={"status"}
                    />
                  </FormGroup>
                </Col>
                <Col md={3} sm={6}>
                  <FormGroup className="">
                    <label className="form-control-label" htmlFor="project">
                      Project
                    </label>
                    <Input
                      className={"form-control-alternative"}
                      type="select"
                      required
                      id={"project"}
                    >
                      <option value="">Select an option</option>
                    </Input>
                  </FormGroup>
                </Col>
                <Col md={3} sm={6}>
                  <FormGroup className="">
                    <label className="form-control-label" htmlFor="location">
                      Location
                    </label>
                    <Input
                      className={"form-control-alternative"}
                      type="select"
                      required
                      id={"location"}
                    >
                      <option value="">Select an option</option>
                    </Input>
                  </FormGroup>
                </Col>
                <Col md={3} sm={6}>
                  <FormGroup className="">
                    <label className="form-control-label" htmlFor="purpose">
                      Purpose
                    </label>
                    <Input
                      className={"form-control-alternative"}
                      type="select"
                      required
                      id={"purpose"}
                    >
                      <option value="">Select an option</option>
                    </Input>
                  </FormGroup>
                </Col>
                <Col md={12}>
                  <FormGroup className="">
                    <label className="form-control-label" htmlFor="accessories">
                      Accessories
                    </label>
                    <Input
                      className="form-control-alternative"
                      placeholder="Write the list of accessories here ..."
                      rows="3"
                      required
                      type="textarea"
                      id={"accessories"}
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

export default AddDevice;
