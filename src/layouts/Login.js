import React, { useEffect, useState } from "react";
import { Route, useLocation, useNavigate } from "react-router-dom";
import {
  Button,
  Card,
  CardBody,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Row,
} from "reactstrap";
import AuthNavbar from "components/Navbars/AuthNavbar.js";
import homeDecor from "assets/img/theme/home-decor-2.jpg";
import {FunGet} from 'funuicss/js/Fun'
import { AddData } from "Functions/Functions";
import MyAlert from './../components/Fun/MyAlert';
import Loader from "components/Fun/Loader";
import { GetUser } from "../Functions/Functions";
const Login = () => {
  const [loader, setloader] = useState('')
  const [alert, setalert] = useState('')
  const mainContent = React.useRef(null);
  const location = useLocation();
  const navigate = useNavigate();


  
  useEffect(() => {
    setTimeout(() => {
      setalert('')
    }, 3000);
    return () => {
    clearTimeout()
    }
  }, [alert])

  React.useEffect(() => {
    document.body.classList.add("bg-default");
    return () => {
      document.body.classList.remove("bg-default");
    };
  }, []);
  React.useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    mainContent.current.scrollTop = 0;
  }, [location]);

  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.layout === "/auth") {
        return (
          <Route path={prop.path} element={prop.component} key={key} exact />
        );
      } else {
        return null;
      }
    });
  };

  const handleLogin = ()=>{
    const email = FunGet.val("#email")
    const password = FunGet.val("#password")
    if(email && password){
      setloader(true)
      AddData('login' , {email:email , password:password})
      .then(doc=>{
        if(doc){
          // navigate("/admin/index")
          if(doc.error){
            setalert({
              message:doc.error,
              type:'info',
            })
          }else{
            setalert({
              message:"Login Succesfully: wait for redirect",
              type:'success',
            })
            GetUser(doc.user)
            .then(getDoc=>{
            if(getDoc.email){
              new Promise((resolve, reject) => {
                sessionStorage.setItem(
                  'user' , 
                  JSON.stringify(getDoc)
                )
                resolve()
               })
               .then(()=>window.location.assign('/admin/index'))
            }
            })
         
          }
      
        }
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
    <>
            {loader && <Loader />}
    {alert &&<MyAlert message={alert.message} type={alert.type} />}
      <div className="main-content h-100vh" ref={mainContent}>
        <div className="mask-background mask-background-dark tilt" data-tilt="">
          <div
            className="full-background"
            style={{ backgroundImage: "url(" + homeDecor + ")" }}
          />
          <Container className="h-100vh">
            <Row className="justify-content-center align-items-center h-100">
              <Col lg="5" md="7" style={{ zIndex: "2" }}>
                <Card className="bg-secondary shadow border-0">
                  <CardBody className="px-lg-5 py-lg-5">
                    <Form role="form">
                      <FormGroup className="mb-3">
                        <InputGroup className="input-group-alternative">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="ni ni-email-83" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="Email"
                            type="email"
                            autoComplete="new-email"
                            id={"email"}
                          />
                        </InputGroup>
                      </FormGroup>
                      <FormGroup>
                        <InputGroup className="input-group-alternative">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="ni ni-lock-circle-open" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="Password"
                            type="password"
                            autoComplete="new-password"
                            id={"password"}
                          />
                        </InputGroup>
                      </FormGroup>
                      <div className="text-center">
                        <Button
                          className="mt-4 btn-block"
                          color="primary"
                          type="button"
                          onClick={handleLogin}
                        >
                          Sign in
                        </Button>
                      </div>
                    </Form>
                  </CardBody>
                </Card>
                <Row className="mt-3">
                  <Col xs="6">
                    <a
                      className="text-light"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <small>Forgot password?</small>
                    </a>
                  </Col>
                  <Col className="text-right" xs="6">
                    <a
                      className="text-light"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <small>Create new account</small>
                    </a>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </div>
        <AuthNavbar />
      </div>
    </>
  );
};

export default Login;
