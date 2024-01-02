const initialState = {
    token: null,
  };
  
  export const LoginauthReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_Login_TOKEN':
        return {
          ...state,
          token: action.payload,
        };
      default:
        return state;
    }
  };