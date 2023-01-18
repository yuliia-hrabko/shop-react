import React from "react";
import Navigation from "../../components/Navigation";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import SectionProducts from "../../components/SectionProducts";

const AllProducts = () => {
    return (
        <>
            <Navigation/>
            <Header title= 'All Products'/>
            <SectionProducts limit={Infinity} name={'products'}/>
            <Footer/>
        </>
    )
}

export default AllProducts;