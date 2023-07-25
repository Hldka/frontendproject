import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { constants } from "../../constants";
import { Sidebar } from "../../components";
import "./style.scss";

const { routes } = constants;

const AdminLayout = () => {
    const { user } = useSelector((state) => state.auth);

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
