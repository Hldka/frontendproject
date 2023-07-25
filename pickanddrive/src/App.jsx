import { useEffect, useState } from "react";
import { LoadingPage } from "./pages";
import AppRouter from "./router";
import { services } from "./services";
import { useDispatch } from "react-redux";
import { loginFailure, loginSuccess } from "./store";

const App = () => {
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();

    // NEDEN
    // git localStorage'a bak, token var mi yok mu diye kontrol et, varsa token'i al, endpoint'e git ve kullaniciyi almak icin istek gonder, gelen kullanici bilgisini merkezi state'e yaz

    const loadData = async () => {
        try {
            const token =
                services.encryptedLocalStorage.getItem("pickanddrivetoken");
            if (token) {
                const userData = await services.user.getUser();
                dispatch(loginSuccess(userData));
            }
        } catch (error) {
            dispatch(loginFailure());
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        loadData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return <>{loading ? <LoadingPage /> : <AppRouter />}</>;
};

export default App;
