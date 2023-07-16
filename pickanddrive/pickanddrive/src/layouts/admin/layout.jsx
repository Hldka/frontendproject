import { Outlet } from "react-router-dom";

const AdminLayout = () => {
    // TODO: kullanici admin rolune sahip mi degil mi kontrolu yap, degilse forbidden (403) - yetkisiz giris sayfasina yonlendir
    return (
        <>
            <Outlet />
        </>
    );
};

export default AdminLayout;
