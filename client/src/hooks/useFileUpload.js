
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "../config/firebase";

const useFileUpload = () => {

    const uploadImage = (imageFile) => {

        return new Promise((resolve, reject) => {
            const imageName = new Date().getTime() + imageFile.name
            const storageRef = ref(storage, imageName)
            const uploadTask = uploadBytesResumable(storageRef, imageFile);

            uploadTask.on('state_changed',
                (snapshot) => {
                },
                (error) => {
                    reject(error)
                },

                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                        resolve(downloadURL)
                    });
                }
            );
        })
    }

    return { uploadImage }
}

export default useFileUpload