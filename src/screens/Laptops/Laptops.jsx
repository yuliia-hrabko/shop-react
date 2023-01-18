import React from "react";
import Navigation from "../../components/Navigation";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import SectionProducts from "../../components/SectionProducts";

const Laptops = () => {
    return (
        <>
            <Navigation />
            <Header title="Laptops" />
            <SectionProducts limit={Infinity} name={'laptops'}/>
            <Footer />
        </>
    );
};

export default Laptops;
