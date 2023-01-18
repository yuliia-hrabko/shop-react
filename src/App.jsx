import React from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import 'react-toastify/dist/ReactToastify.css';
import routes from "./routes/index";

const App = () => {
    return (
       <>
        <ToastContainer/>
        <Routes>
            {routes.map(({ path, element: Element }) => (
                <Route {...{path}} element={<Element />} key={path} />
            ))}
        </Routes>
       </>
    );
};

export default App;
