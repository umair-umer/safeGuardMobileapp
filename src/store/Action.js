import AsyncStorage from '@react-native-async-storage/async-storage';
export const saveJob = (job) => {
    return {
      type: 'SAVE_JOB',
      payload: job,
    };
  };
  export const removeSavedJob = (index) => {
    return (dispatch) => {
      dispatch({
        type: 'REMOVE_SAVED_JOB',
        payload: index,
      });
    };
  };
  export const setAuthToken = (token) => {
    return async (dispatch) => {
      try {
        // Save the token to AsyncStorage
        await AsyncStorage.setItem('userToken', token);
        await AsyncStorage.setItem('phone', token)
        // If you want to save the phone, use the correct method
        // await AsyncStorage.setItem('phone', token);
  
        dispatch({
          type: 'SET_AUTH_TOKEN',
          payload: token,
        });
      } catch (error) {
        console.error('Error saving token to AsyncStorage:', error);
      }
    };
  };
  export const setUserData = (userData) => ({
    type: 'SET_USER_DATA',
    payload: userData,
  });
  export const setLoginToken = (token) => ({
    type: 'SET_Login_TOKEN',
    payload: token,
  });