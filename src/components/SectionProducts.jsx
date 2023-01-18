import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { Container, Card, Row } from "react-bootstrap";
import { toast } from "react-toastify";

import { addProductToCart, getTotals } from "../store/slices/cart";
import { useGetAllProductsQuery } from "../store/api/products";
import Loader from "./Loader";

import Star from "./StarRating";
import "./styles.scss";
import "../unils/styles/global.scss";

const SectionProducts = ({ name, limit, filterProducts }) => {
    const { isLoading, isError } = useGetAllProductsQuery({ name, limit });
    const { products } = useSelector((state) => state.products);

    const currentProducts = filterProducts ? filterProducts : products;
    const dispatch = useDispatch();
    const handleAddProductToCart = (product) => {
        dispatch(addProductToCart({ product, quantity: 1 }));
        dispatch(getTotals());
        toast.success(`${product.title} added to cart`, {
            position: "top-center",
        });
    };

    return (
        <section className="py-5">
            <Container className="px-4 px-lg-5 mt-5">
                <Row className="gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                    {isError && <p>Error...</p>}
                    {isLoading && <Loader />}
                    {products &&
                        currentProducts.map((item) => {
                            return (
                                <div key={item.id} className="product-card col mb-5">
                                    <Card className="h-100">
                                        <NavLink to={`/product/${item.id}`} className="link">
                                            <div className="badge bg-dark text-white position-absolute">
                                                Sale
                                            </div>
                                            <Card.Img
                                                variant="top"
                                                height="170"
                                                className=" cursor-pointer"
                                                src={item.thumbnail}
                                                alt="..."
                                            />
                                            <Card.Body className="p-4">
                                                <div className="text-center">
                                                    <Card.Title className="fw-bolder cursor-pointer">
                                                        {item.title}
                                                    </Card.Title>
                                                    <div className="d-flex justify-content-center align-items-center">
                                                        <Star className="rating"
                                                              rating={item.rating}/>
                                                        <div className="mx-3">
                                                            {item.rating}
                                                        </div>
                                                    </div>
                                                    <span className="text-muted text-decoration-line-through mx-1">
                                                        ${item.price}
                                                    </span>
                                                    <span>
                                                        $&nbsp;{Math.round(item.price - item.price * (item.discountPercentage/100))}
                                                    </span>
                                                </div>
                                            </Card.Body>
                                        </NavLink>
                                        <Card.Footer className=" p-4 pt-0 border-top-0 bg-transparent">
                                            <div className="text-center">
                                                <button
                                                    className="btn btn-outline-dark mt-auto"
                                                    onClick={() => handleAddProductToCart(item)}
                                                >
                                                    Add to Cart
                                                </button>
                                            </div>
                                        </Card.Footer>
                                    </Card>
                                </div>
                            );
                        })}
                </Row>
            </Container>
        </section>
    );
};

export default SectionProducts;
