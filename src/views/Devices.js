import React, { useEffect, useState } from "react";
import Header from "../components/Headers/Header";
import {
  Button,
  Card,
  CardFooter,
  CardHeader,
  Col,
  Container,
  Pagination,
  PaginationItem,
  PaginationLink,
  Row,
  Table,
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import AddDevice from "../components/modals/AddDevice";
import { GetDevices, GetDistrict, GetDistricts } from "../Functions/Functions";
import Loader from './../components/Fun/Loader';
const Devices = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [Devices, setDevices] = useState('')
  const [districts, setdistricts] = useState('')
  const districtNames = [];


  useEffect(() => {
    if(!Devices){
      GetDevices()
      .then(doc=>{
        setDevices(doc)
      }).catch(err=>console.log(err))
    }
  })
  useEffect(() => {
    if(!districts){
      GetDistricts()
      .then(doc=>{
        setdistricts(doc)
      })
    }
  })

  useEffect(()=>{
    if(districtNames.length < 1 && districts){
              
// Push all district_names into the districtNames array
districts.forEach(district => {
  districtNames.push(district.district_name);
});

// Sort the array in ascending order based on the id
districtNames.sort((a, b) => {
  const districtA = districts.find(district => district.district_name === a);
  const districtB = districts.find(district => district.district_name === b);
  return districtA.id - districtB.id;
});
    }
  })
  
  if(Devices){
  return (
    <>
      <Header />
      <Container className="mt--7" fluid>
        <Row>
          <div className="col">
            <Card className="shadow">
              <CardHeader className="border-0">
                <Row className={"align-items-center"}>
                  <Col>
                    <h2 className="modal-title mb-0">Devices</h2>
                  </Col>
                  <Button
                    className="btn-icon btn-2 btn-round"
                    color="primary"
                    type="button"
                    onClick={() => setIsOpen(true)}
                  >
                    <FontAwesomeIcon icon={faPlus} />
                  </Button>
                </Row>
              </CardHeader>
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                  <th scope="col">Deive ID</th>
                    <th scope="col">Serial Number</th>
                    <th scope="col">Model</th>
                    <th scope="col">Brand</th>
                    <th scope="col">IMEI</th>
                    <th scope="col">Functionality</th>
                    {/* <th scope="col">Added By</th>
                    <th scope="col">Added On</th>
                    <th scope="col" /> */}
                  </tr>
                </thead>
                <tbody>
                  {
                    Devices ? 
                    Devices.map(doc=>(
                      <tr key={doc.id}>
                        <td>{doc.device_id}</td>
                        <td>{doc.serial_number}</td>
                        <td>{doc.model}</td>
                        <td>{doc.brand}</td>
                        <td>{doc.imei}</td>
                        <td>{doc.functionality}</td>
                      </tr>
                    )) : ''
                  }
                </tbody>
              </Table>
              <CardFooter className="py-4">
                <nav aria-label="...">
                  <Pagination
                    className="pagination justify-content-end mb-0"
                    listClassName="justify-content-end mb-0"
                  >
                    <PaginationItem className="disabled">
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                        tabIndex="-1"
                      >
                        <i className="fas fa-angle-left" />
                        <span className="sr-only">Previous</span>
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem className="active">
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        1
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        2 <span className="sr-only">(current)</span>
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        3
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        <i className="fas fa-angle-right" />
                        <span className="sr-only">Next</span>
                      </PaginationLink>
                    </PaginationItem>
                  </Pagination>
                </nav>
              </CardFooter>
            </Card>
          </div>
        </Row>
        <AddDevice isOpen={isOpen} setIsOpen={setIsOpen} />
      </Container>
    </>
  );
}else{
  return <Loader />
}
};


export default Devices;
