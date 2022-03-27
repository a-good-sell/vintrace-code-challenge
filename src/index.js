import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import WineSearch from "./pages/WineSearch";
import ProductView from "./pages/ProductView";
import ErrorPage from "./pages/ErrorPage";

import "./index.css";

ReactDOM.render(
    (
        <BrowserRouter>
            <Routes>
                <Route index element={<WineSearch />} />
                <Route path="product" element={<ProductView />} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </BrowserRouter>
    ),
    document.getElementById('react-app')
);