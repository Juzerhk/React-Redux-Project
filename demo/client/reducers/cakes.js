const initialState = {
    data: null
};

function cakes(state = initialState, action) {
    switch(action.type){
        case 'GET_ALL_CAKES': {
            return {...state,
                data: action.data
            };
        }
        case 'INSERT_COMMENTS': {
            return { ...state,
                data: null
            }
        }
        default:
            return state;
    }
}

export default cakes;