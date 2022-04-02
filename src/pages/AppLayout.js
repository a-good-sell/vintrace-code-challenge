import { Outlet } from "react-router-dom";

import "../css/AppLayout.css";

export default function AppLayout() {
    return (
        <div className="appLayoutWrapper">
            <div className="appLayout">
                <Outlet />
            </div>
        </div>
    );
}