import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { constants } from "../../constants";
import { Sidebar } from "../../components";
import "./style.scss";
import { useEffect } from "react";

const { routes } = constants;

const AdminLayout = () => {
    const { user } = useSelector((state) => state.auth);
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    if (!user || !user?.roles?.includes("Administrator"))
        return <Navigate to={`${routes.forbidden}`} />;

    return (
        <div className="admin-layout">
            <div className="admin-layout__sidebar">
                <Sidebar />
            </div>
            <div className="admin-layout__content">
                <Outlet />
            </div>
        </div>
    );
};

export default AdminLayout;
