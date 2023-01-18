import React from "react";
import { Card } from "react-bootstrap";

const CartEmpty = () => {
    return (
        <div className="col-lg-8 mb-lg-0 mb-3 mt-lg-4">
            <Card className="p-1">
                <Card.Body>
                    <Card.Title className="card-title">Your order</Card.Title>
                    <div
                        className="alert alert-secondary js-empty-cart"
                        role="alert"
                    >
                        Cart is empty
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default CartEmpty;
