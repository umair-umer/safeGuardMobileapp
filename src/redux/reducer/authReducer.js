const init = {
  user: [],
  userRole: false,
  isCompanyRegister: true,
};
const reducer = (state = init, action) => {
  // console.log('action user', action)

  switch (action.type) {
    case 'UPDATE_USER': {
      // console.log('action user', action.user)
      return {
        ...state,
        user: action.user,
      };
    }
    case 'USER_ROLE': {
      // console.log('action USER_ROLE', action.res)
      return {
        ...state,
        userRole: action.res,
      };
    }
    case 'COMPANY_REGISTER': {
      // console.log('action USER_ROLE', action.res)
      return {
        ...state,
        isCompanyRegister: action.res,
      };
    }

    case 'REMOVE_USER': {
      return {...state, user: null};
    }
    default: {
      return state;
    }
  }
};

export default reducer;
