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
import { GetDistricts, GetProjects, GetRegions } from "../../Functions/Functions";
import { GetPurposes } from './../../Functions/Functions';

const AddDevice = ({ isOpen, setIsOpen }) => {
  const [projects, setprojects] = useState('')
  useEffect(() => {
    if(!projects){
      GetProjects()
      .then(doc=>{
        setprojects(doc)
      }).catch(err=>console.log(err))
    }
  })
  const [regions, setregions] = useState('')
  useEffect(() => {
    if(!regions){
      GetRegions()
      .then(doc=>{
        setregions(doc)
      }).catch(err=>console.log(err))
    }
  })
  const [districts, setdistricts] = useState("")
  useEffect(() => {
    if(regions && !districts){
      GetDistricts()
      .then(doc=>{
        setdistricts(doc)
      }).catch(err=>console.log(err))
    }
  })
  const [purposes, setpurposes] = useState("")
  useEffect(() => {
    if(regions && districts && !purposes){
      GetPurposes()
      .then(doc=>{
        setpurposes(doc)
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
    const serial = FunGet.val("#serial")
    const model = FunGet.val("#model")
    const brand = FunGet.val("#brand")
    const imei = FunGet.val("#imei")
    const id = FunGet.val("#deviceID")
    const functionality = FunGet.val("#functionality");
    const touch = FunGet.val("#touch");
    const inspection = FunGet.val("#inspection");
    const status = FunGet.val("#status");
    const project = FunGet.val("#project");
    const region = FunGet.val("#region");
    const purpose = FunGet.val("#purpose");
    const accessories = FunGet.val("#accessories");
    const comment = FunGet.val("#comment");
    const district = FunGet.val("#district");
    // const accessories = FunGet.val("#accessories");

    let doc = {
      serial_number:serial,
      model:model,
      brand:brand,
      imei:imei,
      device_id:id,
      functionality:functionality,
      touch_screen:touch,
      accessories:accessories,
      physical_inspection:inspection,
      status:status,
      comment:comment,
      project_id:project,
      purpose_id:purpose,
      region_id:region,
      district_id:district
    }

    if(
      serial && model && brand &&
      imei && id && functionality &&
      touch  && inspection && 
      status && project && purpose && 
      region && district 
      ){ 
      setloader(true)
      AddData('machine-details' , doc)
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

  };
  return (
    <div>
         {loader && <Loader />}
         {alert &&
      <MyAlert message={alert.message} type={alert.type} />}
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
            <Form role="form" onSubmit={(e)=>e.preventDefault()}>
              <Row className={"form-row align-items-center"}>
                <Col md={12} sm={12}>
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
                      <option value="operating">Operating</option>
                      <option value="not operating">Not Operating</option>
                    </Input>
                  </FormGroup>
                </Col>
                <Col md={3} sm={6}>
                <FormGroup className="">
                    <label className="form-control-label" htmlFor="inspection">
                      Touch
                    </label>
                    <Input
                      className={"form-control-alternative"}
                      type="select"
                      required
                      id={"touch"}
                    >
                      <option value="">Select an option</option>
                      <option value={"true"}>Yes</option>
                      <option value={"false"}>No</option>
                    </Input>
                  </FormGroup>
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
                      <option value="well functioning">Well Functioning</option>
                      <option value="Broken">Broken</option>
                      <option value="Faulty">Faulty</option>
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
                      {
                        projects &&
                        projects.map(doc=>(
                          <option value={doc.project_id} key={doc.id}>{doc.project_name}</option>
                        ))
                      }
                    </Input>
                  </FormGroup>
                </Col>
                <Col md={3} sm={6}>
                  <FormGroup className="">
                    <label className="form-control-label" htmlFor="location">
                      Region
                    </label>
                    <Input
                      className={"form-control-alternative"}
                      type="select"
                      required
                      id={"region"}
                    >
                      <option value="">Select an option</option>
                      {
                        regions &&
                        regions.map(doc=>(
                          <option value={doc.id} key={doc.id}>{doc.region_name}</option>
                        ))
                      }
                    </Input>
                  </FormGroup>
                </Col>
                <Col md={3} sm={6}>
                  <FormGroup className="">
                    <label className="form-control-label" htmlFor="location">
                      District
                    </label>
                    <Input
                      className={"form-control-alternative"}
                      type="select"
                      required
                      id={"district"}
                    >
                      <option value="">Select an option</option>
                      {
                        districts &&
                        districts.map(doc=>(
                          <option value={doc.id} key={doc.id}>{doc.district_name}</option>
                        ))
                      }
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
                      {
                        purposes &&
                        purposes.map(doc=>(
                          <option value={doc.purpose_id} key={doc.id}>{doc.purpose}</option>
                        ))
                      }
                    </Input>
                  </FormGroup>
                </Col>
                <Col md={12} lg='6'>
                  <FormGroup className="">
                    <label className="form-control-label" htmlFor="accessories">
                      Comment
                    </label>
                    <Input
                      className="form-control-alternative"
                      placeholder="Write any Other comment here"
                      rows="3"
                      required
                      type="textarea"
                      id={"comment"}
                    />
                  </FormGroup>
                </Col>
                <Col md={12} lg="6">
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

export default AddDevice;
