const initialState = {
    savedJobs: [],
  };
  
  const savedJobsReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SAVE_JOB':
        return {
          ...state,
          savedJobs: [...state.savedJobs, action.payload],
        };
        case 'REMOVE_SAVED_JOB':
      const updatedJobs = state.savedJobs.filter((_, index) => index !== action.payload);
      return { ...state, savedJobs: updatedJobs };


      // Add other cases for your reducers
      default:
        return state;
    }
  };
  
  export default savedJobsReducer;