import React from "react";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";

import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import SectionProducts from "../../components/SectionProducts";
import Product from "./Product";

import "./styles.scss";

const ProductPage = () => {
    const params = useParams();
    const prodId = params.id;

    const { products } = useSelector((state) => state.products);
    const findCategory = products.find(
        (product) => product.id === Number(prodId)
    );
  
    const filterProducts = products
        .filter((product) => product.category === findCategory.category)
        .filter((product) => product.id !== Number(prodId))
        .splice(0, 3);

    return (
        <>
            <Navigation />
            <Product id={prodId} />
                <section className="py-5 bg-light">
                    <Container className="px-4 px-lg-5 mt-5">
                        <h2 className="fw-bolder mb-4">Related products</h2>
                        <SectionProducts
                            name={"products"}
                            filterProducts={filterProducts}
                        />
                    </Container>
                </section>
            <Footer />
        </>
    );
};

export default ProductPage;
