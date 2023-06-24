import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { storage } from "./firebase";

export const fileUpload = async (file) => {
    const storageRef = ref(storage, `${Math.random()}${file.name}`)
    const uploadTask = await uploadBytesResumable(storageRef, file);
    return await getDownloadURL(uploadTask.ref)
}