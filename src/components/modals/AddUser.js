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
import {FunGet} from 'funuicss/js/Fun'
import { AddData } from "Functions/Functions";
import Loader from "components/Fun/Loader";
import { useState , useEffect } from "react";
import MyAlert from "../Fun/MyAlert";
import { GetProjects } from "../../Functions/Functions";

const AddUser = ({ isOpen, setIsOpen }) => {
  const [projects, setprojects] = useState('')
  useEffect(() => {
    if(!projects){
      GetProjects()
      .then(doc=>{
        setprojects(doc)
      }).catch(err=>console.log(err))
    }
  })
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
    const email = FunGet.val("#email")
    const password = FunGet.val("#password")
    const fullName = FunGet.val("#fullName")
    const role = FunGet.val("#role")
    const projectId = FunGet.val("#project")


    let doc = {
      email:email, 
      password:password, 
      full_name:fullName, 
      role:role, 
      is_superuser:false, 
      project_id:projectId
    }

    if(email && password && fullName && role && projectId){
      setloader(true)
      AddData('users' , doc)
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
    {alert &&<MyAlert message={alert.message} type={alert.type} />}
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
            <Form  onChange={(e)=>e.preventDefault()}>
              <Row className={"form-row align-items-center"}>
                <Col md={4} sm={6}>
                  <FormGroup className="">
                    <label className="form-control-label" htmlFor="first">
                      fullName Name
                    </label>
                    <Input
                      className={"form-control-alternative"}
                      type="text"
                      required
                      id={"fullName"}
                    />
                  </FormGroup>
                </Col>
          
                <Col md={4} sm={12}>
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
                <Col md={4} sm={12}>
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
                      // required
                      id={"role"}
                    >
                      <option value="">Select an option</option>
                      <option value="admin">Admin</option>
                      <option value="role">Role 2</option>
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
                      // required
                      id={"project"}
                    >
                      <option value="">Select an option</option>
                      {
                        projects &&
                        projects.map(doc=>(
                          <option value={doc.id} key={doc.id}>{doc.project_name}</option>
                        ))
                      }
                    </Input>
                  </FormGroup>
                </Col>
              </Row>
              <div className="text-right">
                <Button
                  className="mt-4 btn-round"
                  color="primary"
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

export default AddUser;
