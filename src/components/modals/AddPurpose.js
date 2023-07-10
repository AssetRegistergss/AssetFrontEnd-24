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
import { FunGet } from 'funuicss/js/Fun';
import Loader from "components/Fun/Loader";
import { useState , useEffect } from "react";
import MyAlert from "../Fun/MyAlert";

const AddPurpose = ({ isOpen, setIsOpen }) => {
  const [loader, setloader] = useState(false)
  const [alert, setalert] = useState("")

  useEffect(() => {
    setTimeout(() => {
      setalert('')
    }, 3000);
    return () => {
    clearTimeout()
    }
  }, [alert])
  const onSubmit = (e) => {
    setalert("")
    setIsOpen(false)
    e.preventDefault();
    const purpose = FunGet.val("#purpose")


    let doc = {
      purpose:purpose,
    }

    if(doc.purpose){
      setloader(true)
      AddData('purposes' , doc)
      .then(doc=>{
        // doc ? console.log(doc) : alert("success")
        setalert({
          message:"Submitted successfully",
          type:'success',
        })
        setloader(false)
      })
      .catch(err=>{
        setalert({
          message:err.message,
          type:'info',
        })
        setloader(false)
      })
    }else{

      setalert({
        message:"Make sure to enter all details",
        type:'info',
      })
    }
  }

  return (
    <div>
    {loader && <Loader />}
   {alert &&
<MyAlert message={alert.message} type={alert.type} />}
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
                  onClick={onSubmit}
                >
                  <FontAwesomeIcon icon={faCheck} className={"mr-1"} /> Submit
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

export default AddPurpose;
