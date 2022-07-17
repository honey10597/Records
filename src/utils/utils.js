import AsyncStorage from '@react-native-community/async-storage';

export function setItem(key, data) {
    data = JSON.stringify(data);
    return AsyncStorage.setItem(key, data);
}

export function getItem(key) {
    return new Promise((resolve, reject) => {
        AsyncStorage.getItem(key).then(data => {
            resolve(JSON.parse(data));
        });
    });
}

export async function removeItem(key) {
    return AsyncStorage.removeItem(key)
}