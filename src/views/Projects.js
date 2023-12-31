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
import AddProject from "../components/modals/AddProject";
import { GetProjects } from "Functions/Functions";

const Projects = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [projects, setprojects] = useState("")
  useEffect(() => {
  if(!projects){
    GetProjects()
    .then(doc=>{
    setprojects(doc)
    })
    .catch(err=>console.log(err))
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
                    <h2 className="modal-title mb-0">Projects</h2>
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
                    <th scope="col">ID</th>
                    <th scope="col">Project</th>
                    <th scope="col">Coordinator</th>
                    <th scope="col">Coordinator Contact</th>
                    {/* <th scope="col">Added By</th>
                    <th scope="col">Added On</th> */}
                  </tr>
                </thead>
                <tbody>
                {
                    projects &&
                    projects.map(doc=>(
                      <tr key={doc.project_id}>
                        <td>{doc.project_id}</td>
                        <td>{doc.project_name}</td>
                        <td>{doc.coordinator_name}</td>
                        <td>{doc.coordinator_contact}</td>
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
        <AddProject isOpen={isOpen} setIsOpen={setIsOpen} />
      </Container>
    </>
  );
};

export default Projects;
