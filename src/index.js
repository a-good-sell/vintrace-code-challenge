import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AppLayout from "./pages/AppLayout";
import WineSearch from "./pages/WineSearch";
import ProductView from "./pages/ProductView";
import ErrorPage from "./pages/ErrorPage";

import "./index.css";
import "./css/GlobalStyles.css";

ReactDOM.render(
    (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<AppLayout />}>
                    <Route index element={<WineSearch />} />
                    <Route path="product" element={<ProductView />} />
                    <Route path="*" element={<ErrorPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    ),
    document.getElementById('react-app')
);