import { EncryptStorage } from "encrypt-storage";

export const encryptedLocalStorage = new EncryptStorage(import.meta.env.VITE_APP_ENCRYPTION_KEY);