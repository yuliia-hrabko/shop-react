import React from "react";
import Navigation from "../../components/Navigation";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import SectionProducts from "../../components/SectionProducts";

const Shop = () => {
    return (
        <>
            <Navigation />
            <Header title="Shop in style" />
            <SectionProducts name={"products"} limit={"9"} />
            <Footer />
        </>
    );
};

export default Shop;
