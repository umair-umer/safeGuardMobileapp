import messaging from '@react-native-firebase/messaging';
import  AsyncStorage  from '@react-native-async-storage/async-storage';

export async function requestUserPermission() {
    try {
        const authStatus = await messaging().requestPermission();
        const enabled =
            authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
            authStatus === messaging.AuthorizationStatus.PROVISIONAL;

        if (enabled) {
            console.log('Authorization status:', authStatus);
            getFcmToken();
        }
    } catch (error) {
        console.log(error, "Error while requesting permission");
    }
}

const getFcmToken = async () => {
    try {
        let fcmToken = await AsyncStorage.getItem("fcmToken");
        console.log(fcmToken, "the old Token");
        if (!fcmToken) {
            const newFcmToken = await messaging().getToken();
            if (newFcmToken) {
                console.log(newFcmToken, "the new generated token");
                await AsyncStorage.setItem("fcmToken", newFcmToken);
            }
        }
    } catch (error) {
        console.log(error, "Error in getFcmToken");
    }
}




// import messaging from '@react-native-firebase/messaging';
// import { AsyncStorage } from "@react-native-async-storage/async-storage"

// export async function requestUserPermission() {
//     const authStatus = await messaging().requestPermission();
//     const enabled =
//         authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
//         authStatus === messaging.AuthorizationStatus.PROVISIONAL;

//     if (enabled) {
//         console.log('Authorization status:', authStatus);
//         getFcmToken();
//     }
// }

// const getFcmToken = async () => {
//     let fcmToken = await AsyncStorage.getItem("fcmToken");
//     console.log(fcmToken, "the old Token");
//     if (!fcmToken) {

//         try {
//             const fcmToken = await messaging().getToken();
//             if (fcmToken) {
//                 console.log(fcmToken, "the new generated token");
//                 await AsyncStorage.setItem(fcmToken, 'fcmToken')
//             }
//         } catch (error) {
//             console.log(error, "erorr raise in fcmtoken");
//         }
//     }
// }