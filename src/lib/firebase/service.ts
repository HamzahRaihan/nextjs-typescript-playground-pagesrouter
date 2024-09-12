import { addDoc, collection, doc, getDoc, getDocs, getFirestore, query, where } from 'firebase/firestore';
import app from './init';
import bcrypt from 'bcrypt';

const firestore = getFirestore(app);
export async function retrieveData(collectionName: string) {
  const snapshot = await getDocs(collection(firestore, collectionName));
  const data = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  return data;
}

export async function retrieveDataByID(collectionName: string, id: string) {
  const snapshot = await getDoc(doc(firestore, collectionName, id));
  const data = snapshot.data();
  return data;
}

export async function signIn(userData: { email: string }) {
  const findUsers = query(collection(firestore, 'users'), where('email', '==', userData.email));

  const snapshot = await getDocs(findUsers);
  const data = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  if (data) {
    return data[0];
  } else {
    return null;
  }
}

export async function signUp(
  userData: {
    email: string;
    password: string;
    fullname: string;
    role: string;
  },
  callback: Function
) {
  const findUsers = query(collection(firestore, 'users'), where('email', '==', userData.email));
  const snapshot = await getDocs(findUsers);
  const data = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  console.log('🚀 ~ data ~ data:', data);
  if (data.length > 0) {
    callback({ status: 'failed', message: 'email already exist' });
  } else {
    userData.password = await bcrypt.hash(userData.password, 10);
    userData.role = 'customer';
    await addDoc(collection(firestore, 'users'), userData)
      .then(() => {
        callback({ status: 'success', message: 'Registered successfully' });
      })
      .catch((error) => callback({ status: 'failed', message: error.message }));
  }
}
