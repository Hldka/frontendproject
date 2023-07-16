import { useState } from "react";
import { LoadingPage } from "./pages";
import AppRouter from "./router";

const App = () => {
    const [loading, setLoading] = useState(false);
    // NEDEN
    // git localStorage'a bak, token var mi yok mu diye kontrol et, varsa token'i al, endpoint'e git ve kullaniciyi almak icin istek gonder, gelen kullanici bilgisini merkezi state'e yaz
    return <>{loading ? <LoadingPage /> : <AppRouter />}</>;
};

export default App;
