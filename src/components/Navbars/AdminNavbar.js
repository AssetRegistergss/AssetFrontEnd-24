import { Link } from "react-router-dom";
// reactstrap components
import {
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Form,
  FormGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  InputGroup,
  Navbar,
  Nav,
  Container,
  Media,
} from "reactstrap";
import { SignOut, isOnline } from "../../Functions/Functions";
import { useEffect, useState } from "react";

const AdminNavbar = (props) => {
  const [user, setuser] = useState('')
  useEffect(() => {
   if(!user){
    isOnline()
    .then(doc=>setuser(doc))
    .catch(err=>window.location.assign("/"))
   } 
  })
  return (
  <div>
    {
      user ? 
      <>
      <Navbar className="navbar-top navbar-dark" expand="md" id="navbar-main">
        <Container fluid>
          <Link
            className="h4 mb-0 text-white text-uppercase d-none d-lg-inline-block"
            to="/"
          >
            {props.brandText}
          </Link>
          <Nav className="align-items-center d-none d-md-flex" navbar>
            <UncontrolledDropdown nav>
              <DropdownToggle className="pr-0" nav>
                <Media className="align-items-center">
                  <span className="avatar avatar-sm rounded-circle">
                    {user.full_name.slice(0 , 1)} 
                    {' '} 
                    {user.full_name.slice(user.full_name.indexOf(" ") , user.full_name.indexOf(" ") + 2)}
                  </span> 
                  <Media className="ml-2 d-none d-lg-block">
                    <span className="mb-0 text-sm " style={{color:'#909090'}}>
                     {user.full_name}
                    </span>
                  </Media>
                </Media>
              </DropdownToggle>
              <DropdownMenu className="dropdown-menu-arrow" right>
                <DropdownItem to="/admin/user-profile" tag={Link}>
                  <i className="ni ni-single-02" />
                  <span>My profile</span>
                </DropdownItem>
                <DropdownItem href="#pablo" onClick={(e) =>{
                  e.preventDefault();
                  SignOut()
                }}>
                  <i className="ni ni-user-run" />
                  <span>Logout</span>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Container>
      </Navbar>
    </>
    :''
    }
  </div>
  );
};

export default AdminNavbar;
