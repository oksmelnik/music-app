import {FETCH_ALBUMS_PENDING, FETCH_ALBUMS_SUCCESS, FETCH_ALBUMS_ERROR} from '../actions';

const initialState = {
    pending: false,
    albums: [],
    error: null
}

export function albumReducer(state = initialState, action) {
    switch(action.type) {
        case FETCH_ALBUMS_PENDING:
            return {
                ...state,
                pending: true
            }
        case FETCH_ALBUMS_SUCCESS:
            return {
                ...state,
                pending: false,
                albums: action.albums
            }
        case FETCH_ALBUMS_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error
            }
        default:
            return state;
    }
}

