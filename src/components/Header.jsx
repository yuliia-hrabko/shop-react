import React from "react";

const Header = ({ title }) => {
    return (
        <header className="bg-dark py-5">
            <div className="container px-4 px-lg-5 my-5">
                <div className="text-center text-white">
                    <h1 className="display-4 fw-bolder">{title}</h1>
                </div>
            </div>
        </header>
    );
};

export default Header;
