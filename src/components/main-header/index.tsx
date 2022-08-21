import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import CartIcon from "../cart-icon";

import String from '../../utils/String';

import classes from "./style.module.scss";
import { NavLink } from "react-router-dom";

const MainHeader: React.FC = () => {
  return (
    <Navbar bg="light" expand="md">
      <Container fluid>
        <Navbar.Brand className={classes.navbarBrand} href="#">
          didihala
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <NavLink className='nav-link' to='home'>{String.home}</NavLink>
            <NavLink className='nav-link' to='product-list'>{String.productList}</NavLink>
            <NavDropdown title="دسته‌بندی‌ها" id="navbarScrollingDropdown">
              <NavDropdown.Item href="mobile-phone">گوشی موبایل</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="vehicle">
                وسایل نقلیه
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="clothes">
                مد و پوشاک
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="جستجو"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">جستجو</Button>
            <CartIcon />
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MainHeader;
