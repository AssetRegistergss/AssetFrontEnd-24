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
import { AddData } from "Functions/Functions";
import Alert from 'funuicss/component/Alert'
import { FunGet } from 'funuicss/js/Fun';
const AddProject = ({ isOpen, setIsOpen }) => {
  const onSubmit = (e) => {
    e.preventDefault();
    const pName = FunGet.val("#name")
    const coordinator = FunGet.val("#coordinator")
    const contact = FunGet.val("#contact")

    let doc = {
      project_name:pName,
      coordinator_name:coordinator,
      coordinator_contact:contact
    }

    if(pName && coordinator && contact){
      AddData('project-details' , doc)
      .then(doc=>doc ? console.log(doc) : alert("success"))
      .catch(err=>console.log(err))
    }else{

    }

  };

  return (
    <div>
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
            <Form role="form" onSubmit={(e)=>e.preventDefault()}>
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
                  onClick={onSubmit}
                >
                  <FontAwesomeIcon icon={faCheck} className={"mr-1"} /> Add project
                </Button>
              </div>
            </Form>
          </CardBody>
        </Card>
      </div>
    </Modal>
    </div>

  );
};

export default AddProject;
