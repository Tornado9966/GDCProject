import firebase from 'firebase/app';
import 'firebase/storage';
import { config } from 'config/firebase-config';

firebase.initializeApp(config);
const storage = firebase.storage();

export function uploadFile(destinationFolder, image) {
    return storage.ref(`${destinationFolder}/${image.name}`)
            .put(image);
}

export function getFileUrl(destinationFolder, imageName) {
    return storage.ref(destinationFolder)
            .child(imageName)
            .getDownloadURL();
}

