import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { Card, Container, Row } from "react-bootstrap";

import CartEmpty from "./CartEmpty";
import CartWithProducts from "./CartWithProducts";
import Navigation from "../../components/Navigation";

import { ReactComponent as ArrowLeftIcon } from "../../assets/icons/left-arrow.svg";
import { getTotals } from "../../store/slices/cart";

const Cart = () => {
    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTotals());
    }, [cart, dispatch]);
    return (
        <>
            <Navigation />
            <Container>
                <Row>
                    {cart.cart.length === 0 ? <CartEmpty /> : (
                        <div className="col-lg-9 mb-lg-0 mb-3 mt-lg-4">
                            <Card className="p-1">
                                <Card.Body>
                                    {cart.cart?.map((item) => {
                                        return (
                                            <div key={item.id}>
                                                <CartWithProducts item={item} />
                                            </div>
                                        );
                                        })
                                    }
                                </Card.Body>
                            </Card>
                        </div>)
                    }
                    <div className="col-lg-3 mt-lg-4 mb-4 ">
                        <Card>
                            <Card.Body>
                                <div className="col-md-8 w-100">
                                    <div className="border-0">
                                        <span className="h5">Total:</span>
                                        <span className="fs-5">&nbsp;$</span>
                                        <span className="fs-5">
                                            {cart.cartTotalAmount}
                                        </span>
                                    </div>
                                    <button
                                        type="submit"
                                        className="btn btn-lg btn-primary btn-dark mt-4 mb-2">
                                        Procced to checkout
                                    </button>
                                    <NavLink to={"/all>"} className="opacity-50 text-decoration-none d-flex text-reset continue-shoping">
                                        <span>
                                            <ArrowLeftIcon  width={15} height={15}/>
                                        </span>
                                        <span>&nbsp;Continue Shoping</span>
                                    </NavLink>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                </Row>
            </Container>
        </>
    );
};

export default Cart;
