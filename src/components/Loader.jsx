import React from "react";

const Loader = () => {
    return (
        <div className="wrapper-preloader d-flex justify-content-center">
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    );
};

export default Loader;
