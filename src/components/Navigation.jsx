import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { 
    Nav,
    NavDropdown,
    Navbar,
    Row,
    Col,
    Form } from "react-bootstrap";

import {ReactComponent as CartIcon} from '../assets/icons/cart.svg'

import ModalCart from "./Modal/ModalCart";
import './styles.scss'
import '../unils/styles/global.scss'

const Navigation = () => {

    const {cartTotalQuantity} = useSelector((state) => state.cart);
    const [modalActive, setModalActive] = useState(false)

    return (
        <Navbar className="navbar container navbar-expand-lg navbar-light ">
            <Row className="position-relative w-100 align-items-center fixed-top">
                <Col className="d-none d-lg-flex justify-content-start">
                    <Nav className="mrx-auto" navbar>
                        <Nav.Item className="d-flex align-items-center">
                            <NavLink className="font-weight-bold navbar-brand" to={"/"} >
                            Shop
                            </NavLink>
                        </Nav.Item>
                        <Nav.Item className="d-flex align-items-center">
                            <NavLink className="font-weight-bold nav-link active" to={"/"}>
                                Home
                            </NavLink>
                        </Nav.Item>
                        <NavDropdown title="Shop" id="nav-dropdown">
                            <NavDropdown.Item href="/all">All Products</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/smartphones">Smartphones</NavDropdown.Item>
                            <NavDropdown.Item href="/laptops">Laptops</NavDropdown.Item>
                        </NavDropdown>
                </Nav>
                </Col>
                <Col className="d-none d-lg-flex justify-content-end">
                    <Form className="cart  d-flex border border-dark rounded-3 px-3 py-1 ">
                        <button type="button" className="dropdown-item" onClick={() => setModalActive(true)}>
                            <CartIcon className='cart-icon'/>
                            Cart
                            <span className="badge bg-dark text-white ms-1 rounded-pill number-product">
                                {cartTotalQuantity}
                            </span>
                        </button>
                    </Form>
                </Col>
            </Row>
            <ModalCart active={modalActive} setActive={setModalActive}/>
        </Navbar>
    );
};

export default Navigation;