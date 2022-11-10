import {
APIKEY,
AUTHDOMAIN,
PROJECTID,
STORAGEBUCKET,
MESSAGINGSENDERID,
APPID
}
from "@env"

import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: APIKEY,
  authDomain: AUTHDOMAIN,
  projectId: PROJECTID,
  storageBucket: STORAGEBUCKET,
  messagingSenderId: MESSAGINGSENDERID,
  appId: APPID,
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);