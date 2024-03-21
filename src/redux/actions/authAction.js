const updateUser = user => {
  console.log('userrrrrrrrrrrrrr', user);
  return {
    type: 'UPDATE_USER',
    user,
  };
};

const setUserRole = res => {
  // console.log('setUserRole', res);
  return {
    type: 'USER_ROLE',
    res,
  };
};
const setCompanyRegister = res => {
  // console.log('setUserRole', res);
  return {
    type: 'COMPANY_REGISTER',
    res,
  };
};

const removeUser = remove => {
  return {
    type: 'REMOVE_USER',
    user: '',
  };
};

export {updateUser, removeUser, setUserRole, setCompanyRegister};
