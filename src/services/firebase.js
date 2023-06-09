import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  getDoc,
  query,
  where,
  addDoc,
  orderBy,
  writeBatch,
} from "firebase/firestore";
import products from "../data/mobiles";
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

  const q = query(productsCollectionRef, orderBy("index"));
  const productsSnapshot = await getDocs(q);
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

export async function createOrder(data) {
  const ordersCollectionRef = collection(db, "orders");

  const response = await addDoc(ordersCollectionRef, data);
  return response.id;

  /*  addDoc(ordersCollectionRef, data).then((respuesta) => {
    console.log(respuesta);
    console.log("Orden creada", respuesta.id);
  }); */
}

export async function createOrderWithStockUpdate(data) {
  const ordersCollectionRef = collection(db, "orders");
  const batch = writeBatch(db);
  const { items } = data;

  for (let itemInCart of items) {
    const refDoc = doc(db, "products", itemInCart.id);
    const docSnap = await getDoc(refDoc);

    const { stock } = docSnap.data();
    console.log(stock);

    const stockToUpdate = stock - itemInCart.count;
    if (stockToUpdate < 0) {
      throw new Error(`No hay stock suficiente del producto: ${itemInCart.id}`);
    } else {
      const docRef = doc(db, "products", itemInCart.id);
      batch.update(docRef, { stock: stockToUpdate });
    }
  }

  await batch.commit();
  const response = await addDoc(ordersCollectionRef, data);

  return response.id;
}

export async function exportDataWithBatch() {
  const batch = writeBatch(db);

  const collectionRef = collection(db, "products");

  for (let item of products) {
    item.index = item.id;
    delete item.id;

    const docRef = doc(collectionRef);
    batch.set(docRef, item);
  }

  await batch.commit();
  console.log("Items Exportados");
}
