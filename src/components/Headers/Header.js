// reactstrap components
import { Card, CardBody, CardTitle, Container, Row, Col } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { GetDistricts, GetProjects, GetRegions, GetUsers, isOnline } from "../../Functions/Functions";
import { GetDevices } from './../../Functions/Functions';
const Header = () => {
  const [devices, setdevices] = useState('')
  const [user, setuser] = useState('')
  useEffect(() => {
   if(!user){
    isOnline()
    .then(doc=>setuser(doc))
    .catch(err=>window.location.assign("/"))
   } 
  })
  
  useEffect(() => {
    if(!devices){
      GetDevices()
      .then(doc=>{
        setdevices(doc)
      }).catch(err=>console.log(err))
    }
  })
  const [projects, setprojects] = useState('')
  useEffect(() => {
    if(!projects && devices){
      GetProjects()
      .then(doc=>{
        setprojects(doc)
      }).catch(err=>console.log(err))
    }
  })
  const [users, setusers] = useState('')
  useEffect(() => {
    if(!users){
      GetUsers()
      .then(doc=>{
        setusers(doc)
      }).catch(err=>console.log(err))
    }
  })

  return (
    <>
      <div className="header  pb-8 pt-5 pt-md-8">
        <Container fluid>
          <div className="header-body">
            {/* Card stats */}
            <Row>
              <Col lg="6" xl="4">
                <Card className="card-stats mb-4 mb-xl-0">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h5"
                          className="text-uppercase text-muted mb-0"
                        >
                          Devices
                        </CardTitle>
                        <span className="h1  font-weight-bold mb-0"  style={{color:'#909090'}}>
                          {devices ? devices.length : ''}
                        </span>
                      </div>
                      <Col className="col-auto">
                        <div className="icon icon-shape bg-danger text-white rounded-circle shadow">
                        <i className="fa-solid fa-tablet-screen-button"></i>
                        </div>
                      </Col>
                    </Row>
                    {/* <p className="mt-3 mb-0 text-muted text-sm">
                      <span className="text-success mr-2">
                        <i className="fa fa-arrow-up" /> 3.48%
                      </span>{" "}
                      <span className="text-nowrap">Since last month</span>
                    </p> */}
                  </CardBody>
                </Card>
              </Col>
              <Col lg="6" xl="4">
                <Card className="card-stats mb-4 mb-xl-0">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h5"
                          className="text-uppercase text-muted mb-0"
                        >
                           Users
                        </CardTitle>
                        <span className="h1  font-weight-bold mb-0"  style={{color:'#909090'}}>
                          {users ? users.length : ''}
                          </span>
                      </div>
                      <Col className="col-auto">
                        <div className="icon icon-shape bg-warning text-white rounded-circle shadow">
                          <i className="fas fa-users" />
                        </div>
                      </Col>
                    </Row>
                    {/* <p className="mt-3 mb-0 text-muted text-sm">
                      <span className="text-danger mr-2">
                        <i className="fas fa-arrow-down" /> 3.48%
                      </span>{" "}
                      <span className="text-nowrap">Since last week</span>
                    </p> */}
                  </CardBody>
                </Card>
              </Col>
              <Col lg="6" xl="4">
                <Card className="card-stats mb-4 mb-xl-0">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h5"
                          className="text-uppercase text-muted mb-0"
                        >
                          Projects
                        </CardTitle>
                        <span className="h1  font-weight-bold mb-0"  style={{color:'#909090'}}>
                        {projects ? projects.length : ''}
                        </span>
                      </div>
                      <Col className="col-auto">
                        <div className="icon icon-shape bg-info text-white rounded-circle shadow">
                        <i className="fab fa-buffer"  />
                        </div>
                      </Col>
                    </Row>
                    {/* <p className="mt-3 mb-0 text-muted text-sm">
                      <span className="text-warning mr-2">
                        <i className="fas fa-arrow-down" /> 1.10%
                      </span>{" "}
                      <span className="text-nowrap">Since yesterday</span>
                    </p> */}
                  </CardBody>
                </Card>
              </Col>
              {/* <Col lg="6" xl="3">
                <Card className="card-stats mb-4 mb-xl-0">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h5"
                          className="text-uppercase text-muted mb-0"
                        >
                          Performance
                        </CardTitle>
                        <span className="h1  font-weight-bold mb-0"  style={{color:'#909090'}}>49,65%</span>
                      </div>
                      <Col className="col-auto">
                        <div className="icon icon-shape bg-info text-white rounded-circle shadow">
                          <i className="fas fa-percent" />
                        </div>
                      </Col>
                    </Row>
                    <p className="mt-3 mb-0 text-muted text-sm">
                      <span className="text-success mr-2">
                        <i className="fas fa-arrow-up" /> 12%
                      </span>{" "}
                      <span className="text-nowrap">Since last month</span>
                    </p>
                  </CardBody>
                </Card>
              </Col> */}
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Header;
