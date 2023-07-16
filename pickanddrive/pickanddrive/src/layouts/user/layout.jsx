import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const UserLayout = () => {
    // merkezi state'e git ve isLoggedIn bilgisini al
    // go to central state and get isLoggedIn information
    const { isLoggedIn } = useSelector((state) => state.auth);

    // TODO: isLoggedIn === false ise login sayfasina yonlendir
    // if there is isLoggedIn === false, redirect to login page
    if (isLoggedIn) return <Navigate to={"/login"} />

    return (
        <>
            <Outlet />
        </>
    );
};

export default UserLayout;
