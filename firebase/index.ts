import { initializeApp } from "firebase/app";
import { getStorage, ref, getDownloadURL } from "firebase/storage";

const runtimeConfig = useRuntimeConfig();

// See: https://support.google.com/firebase/answer/7015592
const firebaseConfig = {
  apiKey: runtimeConfig.public.API_KEY,
  authDomain: runtimeConfig.public.AUTH_DOMAIN,
  projectId: runtimeConfig.public.PROJECT_ID,
  storageBucket: runtimeConfig.public.STORAGE_BUCKET,
  messagingSenderId: runtimeConfig.public.MESSAGING_SENDER_ID,
  appId: runtimeConfig.public.APP_ID,
  measurementId: runtimeConfig.public.MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);

export const storage = getStorage();
