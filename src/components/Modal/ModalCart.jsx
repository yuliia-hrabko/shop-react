import React from "react";
import { useSelector } from "react-redux";
import ModalCartWidthProducts from "./ModalCartWithProducts";
import { Card } from "react-bootstrap";
import { ReactComponent as ArrowLeftIcon } from "../../assets/icons/left-arrow.svg";
import { NavLink } from "react-router-dom";

import "./styles.scss";

const ModalCart = ({ active, setActive }) => {
    const cart = useSelector((state) => state.cart);

    return (
        <div className={active? "modal-cart active" : 'modal-cart'} onClick={() => setActive(false)}>
            <div className="modal-cart__content" onClick={e => e.stopPropagation()}>
                <h2 className=" fw-bolder">Your Cart</h2>
                <p className="text-muted">
                    An overview of your selected products
                </p>
                {cart.cart.length === 0 ? (<div className="alert alert-secondary js-empty-cart">Cart Empty</div>) : 
                (
                    <Card>
                        <Card.Body>
                            {cart.cart?.map((item) => {
                                return (
                                    <div key={item.id}>
                                        <ModalCartWidthProducts item={item} />
                                    </div>
                                );
                            })}
                        </Card.Body>
                    </Card>
                )}
                <NavLink to={"/carts"} className="opacity-50 text-decoration-none d-flex text-reset continue-shoping">
                    <span>
                        <ArrowLeftIcon width={15} height={15} />
                    </span>
                    <span className="fs-5">&nbsp;Go to Cart</span>
                </NavLink>
            </div>
        </div>
    );
};

export default ModalCart;
