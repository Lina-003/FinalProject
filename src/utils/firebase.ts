import {initializeApp} from "firebase/app";
import {
    createUserWithEmailAndPassword,
    getAuth,
    signInWithEmailAndPassword,
    setPersistence,
    browserSessionPersistence
} from "firebase/auth";
import {getFirestore, collection, addDoc, getDocs, doc, deleteDoc, onSnapshot} from "firebase/firestore";
import {firebaseConfig} from "./firebase_config";
import {MovieInterface} from "../types/data/movieInterface";

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const registerUser = async ({
                                email,
                                username,
                                password,
                            }: {
    email: string;
    username: string;
    password: string;
}): Promise<boolean> => {
    try {
        const userCredential = await createUserWithEmailAndPassword(
            auth,
            email,
            password
        );
        console.log(userCredential.user);
        return true;
    } catch (error: any) {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        return false;
    }
};

const loginUser = async ({
                             email,
                             password,
                         }: {
    email: string;
    password: string;
}) => {
    return setPersistence(auth, browserSessionPersistence)
        .then(() => {
            return signInWithEmailAndPassword(auth, email, password);
        })
        .catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
        });
};

const db = getFirestore(app);

const addMovie = async (product: Omit<MovieInterface, "id">) => {
    try {
        const where = collection(db, "movies");
        await addDoc(where, product);
        console.log("se añadió con éxito");
    } catch (error) {
        console.error(error);
    }
};

const getMovies = async () => {
    const querySnapshot = await getDocs(collection(db, "movies"));
    const transformed: Array<MovieInterface> = [];

    querySnapshot.forEach((doc) => {
        const data: Omit<MovieInterface, "id"> = doc.data() as any;
        transformed.push({ id: doc.id, ...data });
    });

    return transformed;
};

export default {
    registerUser,
    loginUser,
    addMovie,
    getMovies
};