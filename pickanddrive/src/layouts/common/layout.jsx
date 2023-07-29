import { Outlet, useLocation } from "react-router-dom";
import { Header, Footer } from "../../components";
import { useEffect } from "react";

const CommonLayout = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <>
            <Header />
            <Outlet />{" "}
            {/* <Outlet /> is a placeholder for child routes to render */}
            <Footer />
        </>
    );
};

export default CommonLayout;
