import { services } from "../";

export const authHeader = () => {
    const token = services.encryptedLocalStorage.getItem("pickanddrivetoken");

    let headers = {};

    if (token) {
        headers = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    }

    return headers;
}