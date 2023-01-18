import React from "react";

import Navigation from "../../components/Navigation";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import SectionProducts from "../../components/SectionProducts";

const Smartphones = () => {
    return (
        <>
            <Navigation />
            <Header title="Smartphones" />
            <SectionProducts limit={Infinity} name={'smartphones'}/>
            <Footer />
        </>
    );
};

export default Smartphones;
