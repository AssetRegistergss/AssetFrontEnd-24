import React from "react";
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

const AddUser = ({ isOpen, setIsOpen }) => {
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
                <h2 className="modal-title mb-0">Add User</h2>
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
                    <label className="form-control-label" htmlFor="first">
                      First Name
                    </label>
                    <Input
                      className={"form-control-alternative"}
                      type="text"
                      required
                      id={"first"}
                    />
                  </FormGroup>
                </Col>
                <Col md={4} sm={6}>
                  <FormGroup className="">
                    <label className="form-control-label" htmlFor="surname">
                      Surname
                    </label>
                    <Input
                      className={"form-control-alternative"}
                      type="text"
                      required
                      id={"surname"}
                    />
                  </FormGroup>
                </Col>
                <Col md={4} sm={6}>
                  <FormGroup className="">
                    <label className="form-control-label" htmlFor="other">
                      Other Name
                    </label>
                    <Input
                      className={"form-control-alternative"}
                      type="text"
                      required
                      id={"other"}
                    />
                  </FormGroup>
                </Col>
                <Col md={6} sm={6}>
                  <FormGroup className="">
                    <label className="form-control-label" htmlFor="email">
                      Email
                    </label>
                    <Input
                      className={"form-control-alternative"}
                      type="email"
                      required
                      id={"email"}
                    />
                  </FormGroup>
                </Col>
                <Col md={6} sm={6}>
                  <FormGroup className="">
                    <label className="form-control-label" htmlFor="password">
                      Password
                    </label>
                    <Input
                      className={"form-control-alternative"}
                      type="text"
                      required
                      id={"password"}
                    />
                  </FormGroup>
                </Col>
                <Col md={4} sm={6}>
                  <FormGroup className="">
                    <label className="form-control-label" htmlFor="role">
                      Role
                    </label>
                    <Input
                      className={"form-control-alternative"}
                      type="select"
                      required
                      id={"role"}
                    >
                      <option value="">Select an option</option>
                    </Input>
                  </FormGroup>
                </Col>
                <Col md={8} sm={6}>
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

export default AddUser;
