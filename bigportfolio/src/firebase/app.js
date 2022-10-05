import Furebase from "firebase/app";
import credentials from "./credentials";

export const App = Firebase.initializeApp(credentials.config);
