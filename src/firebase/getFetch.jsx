import { getDocs, getDoc, addDoc } from "firebase/firestore";

export const getFetch = (type, dbQuery, setter, order, finalFn) => {
  let getter;
  type === "collection" ? (getter = getDocs(dbQuery)) : type === "item" ? (getter = getDoc(dbQuery)) : (getter = addDoc(dbQuery, order));

  getter
    .then(setter)
    .catch((err) => console.log(err))
    .finally(finalFn);
};
