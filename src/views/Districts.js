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
import AddDistrict from "../components/modals/AddDistrict";
import { GetDistricts } from "../Functions/Functions";
const Districts = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [districts, setdistricts] = useState("")
  useEffect(() => {
    if(!districts){
      GetDistricts()
      .then(doc=>{
        setdistricts(doc)
      }).catch(err=>console.log(err))
    }
  })
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
                    <h2 className="modal-title mb-0">Districts</h2>
                  </Col>
                  <Button
                    className="btn-icon btn-2 btn-round"
                    color="primary"
                    type="button"
                    onClick={() => setIsOpen(true)}
                  >
                    {/*<span className="btn-inner--icon">
                      <i className="ni ni-atom" />
                    </span>*/}
                    <FontAwesomeIcon icon={faPlus} />
                  </Button>
                </Row>
              </CardHeader>
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">ID</th>
                    <th scope="col">District</th>
                    {/* <th scope="col">Region</th> */}
                    {/* <th scope="col">Devices</th>
                    <th scope="col">Added By</th>
                    <th scope="col">Added On</th> */}
                    <th scope="col" />
                  </tr>
                </thead>
                <tbody>
                {
                     districts &&
                     districts.map(doc=>(
                      <tr key={doc.id}>
                           <td>{doc.id}</td>
                        <td>{doc.district_name}</td>
                     
                        {/* <td>{doc.email}</td>
                        <td>{doc.role}</td> */}
                      </tr>
                    ))
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
        <AddDistrict isOpen={isOpen} setIsOpen={setIsOpen} />
      </Container>
    </>
  );
};

export default Districts;
