import { Outlet } from "react-router-dom";
import { Header, Footer } from "../../components";

const CommonLayout = () => {
    return (
        <>
            <Header />
            <Outlet /> {/* <Outlet /> is a placeholder for child routes to render */}
            <Footer />
        </>
    );
};

export default CommonLayout;
