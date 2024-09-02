const initialState = {
    companies: [],
  };
  
  const mainReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_FAVOURITE':
        return {
          ...state,
          companies: [...state.companies, action.payload],
        };
  
      case 'REMOVE_FAVOURITE':
        return {
          ...state,
          companies: state.companies.filter(company => company !== action.payload),
        };
  
      default:
        return state;
    }
  };
  
  export default mainReducer;
  