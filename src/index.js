import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";

import AppLayout from "./pages/AppLayout";
import WineSearch from "./pages/WineSearch";
import ProductView from "./pages/ProductView";
import ErrorPage from "./pages/ErrorPage";

import "./index.css";
import "./css/GlobalStyles.css";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<AppLayout />}>
                    <Route index element={<WineSearch />} />
                    <Route path="product/:lotCode" element={<ProductView />} />
                    <Route path="*" element={<ErrorPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

ReactDOM.render(
    (
        <App />
    ),
    document.getElementById('react-app')
);