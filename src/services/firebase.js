import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  getDoc,
  query,
  where,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBhzrq6NZMxQk8EhbcDNNgfUDd2XV8Whfg",
  authDomain: "react-coder-deede.firebaseapp.com",
  projectId: "react-coder-deede",
  storageBucket: "react-coder-deede.appspot.com",
  messagingSenderId: "214234342632",
  appId: "1:214234342632:web:88d25164959139735c155d",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
console.log(db);

/* Promise disfrazada de function */
export async function getData() {
  const productsCollectionRef = collection(db, "products");
  const productsSnapshot = await getDocs(productsCollectionRef);
  const arrayDocs = productsSnapshot.docs;

  const dataDocs = arrayDocs.map((doc) => {
    return { ...doc.data(), id: doc.id };
  });

  return dataDocs;
}

/* Promise disfrazada de function */
export async function getItemData(idUrl) {
  const docRef = doc(db, "products", idUrl);
  const docSnap = await getDoc(docRef);
  return { id: docSnap.id, ...docSnap.data() };
}

export async function getCategoryData(idCategory) {
  /* const q = query(collection(db, "cities"), where("capital", "==", true)); */
  const productsCollectionRef = collection(db, "products");
  const q = query(productsCollectionRef, where("category", "==", idCategory));
  const productsSnapshot = await getDocs(q);
  const arrayDocs = productsSnapshot.docs;
  const dataDocs = arrayDocs.map((doc) => {
    return { ...doc.data(), id: doc.id };
  });

  return dataDocs;
}
