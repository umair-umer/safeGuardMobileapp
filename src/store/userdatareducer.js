const initialState = {
 
    user: {},
  };
  
  const userDataReducer = (state = initialState, action) => {
    switch (action.type) {
   
      case 'SET_USER_DATA':
        return { ...state, user: action.payload };
      // Add other cases if needed
      default:
        return state;
    }
  };
  
  export default userDataReducer;