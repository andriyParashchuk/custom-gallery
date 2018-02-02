import {combineReducers} from 'redux';
import {fetchData, fetchHasErrored, fetchIsLoading} from './fetchData';

export default combineReducers({
    fetchData,
    fetchHasErrored,
    fetchIsLoading
});