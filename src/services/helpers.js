import products from "../data/mobiles";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

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

export async function exportData() {
  const productsCollectionRef = collection(db, "products");

  for (let item of products) {
    item.index = item.id;
    delete item.id;
    const res = await addDoc(productsCollectionRef, item);
    console.log("Documento creado:", res.id);
  }
}
