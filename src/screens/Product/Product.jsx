import React, {  useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { Container, Form, Row } from "react-bootstrap";
import { toast } from "react-toastify";

import { ReactComponent as CartIcon } from "../../assets/icons/cart.svg";
import { useGetOneProductQuery } from "../../store/api/products";
import { addProductToCart, getTotals } from "../../store/slices/cart";


const Product = ({ id }) => {
    const { isLoading, isError } = useGetOneProductQuery({ id }, { refetchOnMountOrArgChange: true });
    const { oneProduct } = useSelector((state) => state.products);
    const { handleSubmit } = useForm();
    const [value, setValue] = useState(1);
    const dispatch = useDispatch();
 
    const changeValueProduct = (event) => {
        setValue(event.target.value);
    };

    const handleAddProductToCart = (product) => {
        if(value <= product.stock){
            dispatch(addProductToCart({ product, quantity: Number(value) }));
            dispatch(getTotals());
            toast.success(`${value} ${product.title} added to cart`, {position: 'top-center'});
        } else {
            toast.info(`You can order maximum ${product.stock} ${product.title}`, {position: 'top-center'});
        }
    };

    return (
        <section className="py-5">
            <Container className="px-4 px-lg-5 my-5">
                {isError && <p>Error...</p>}
                {isLoading && <p>Loading...</p>}
                <Row className="row gx-4 gx-lg-5 align-items-center">
                    <div className="col-md-6">
                        <img
                            className="card-img-top mb-5 mb-md-0"
                            src={oneProduct.thumbnail}
                            alt="{oneProduct.title}"
                        />
                    </div>
                    <div className="col-md-6">
                        <div className="small mb-1">
                            SKU: BST-{oneProduct.id}
                        </div>
                        <h1 className="display-5 fw-bolder">
                            {oneProduct.title}
                        </h1>
                        <div className="fs-5 mb-5">
                            <span className="text-decoration-line-through opacity-50">
                                ${oneProduct.price}
                            </span>
                            <span>
                                &nbsp;$
                                {Math.round(oneProduct.price - oneProduct.price * (oneProduct.discountPercentage / 100))}
                            </span>
                        </div>
                        <p className="lead">{oneProduct.description}</p>
                        <div className="d-flex ">
                            <Form
                                className="input-number text-center me-3"
                                onSubmit={handleSubmit}>
                                <Form.Control
                                    onChange={(event) => changeValueProduct(event)}
                                    type="number"
                                    min="1"
                                    value={value}
                                    max={oneProduct.stock}
                                    limit={oneProduct.stock}
                                />
                            </Form>
                            <button
                                className="btn btn-outline-dark flex-shrink-0"
                                type="button"
                                onClick={() => handleAddProductToCart(oneProduct)}>
                                <CartIcon className="cart-icon"/>
                                Add to cart
                            </button>
                        </div>
                    </div>
                </Row>
            </Container>
        </section>
    );
};

export default Product;
