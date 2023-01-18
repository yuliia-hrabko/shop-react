import React from "react";
import { Container, Image } from "react-bootstrap";

const ModalCartWidthProducts = ({ item }) => {
    return (
        <Container>
            <div className="d-flex justify-content-between">
                <div className="col-8">
                    <Image
                        width="170px"
                        height="auto"
                        src={item.thumbnail}
                        alt={item.title}
                    />
                </div>
                <div className="fs-4 col-4 cursor-pointer">{item.title}</div>
            </div>
            <div className="d-flex justify-content-between align-items-center">
                <div>
                    <span className="text-muted">Quantity:&nbsp;</span>
                    <span className="fw-bold">{item.cartQuantity}</span>
                </div>
                <div>
                    <span className="text-muted text-decoration-line-through mx-1 fs-6">
                        ${item.price * item.cartQuantity}
                    </span>
                    <span className="text-danger d-flex flex-nowrap fs-5">
                        ${Math.round(item.price - item.price * (item.discountPercentage / 100)) * item.cartQuantity}
                    </span>
                </div>
            </div>
        </Container>
    );
};

export default ModalCartWidthProducts;
