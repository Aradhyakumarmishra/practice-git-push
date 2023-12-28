import axios from 'axios';

// Action types
export const FETCH_DATA_REQUEST = 'FETCH_DATA_REQUEST';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';

// Action creators
export const fetchDataRequest = () => ({
    type: FETCH_DATA_REQUEST,
});

export const fetchDataSuccess = (data) => ({
    type: FETCH_DATA_SUCCESS,
    payload: data,
});

export const fetchDataFailure = (error) => ({
    type: FETCH_DATA_FAILURE,
    payload: error,
});

// Async action to fetch data from API
export const fetchData = () => {
    return (dispatch) => {
        dispatch(fetchDataRequest());
        axios
            .get('https://jsonplaceholder.typicode.com/todos/1')
            .then((response) => {
                dispatch(fetchDataSuccess(response.data));
               // console.log(response.data)
                //console.log("hello")
            })
            .catch((error) => {
                dispatch(fetchDataFailure(error.message));
            });
    };
};
