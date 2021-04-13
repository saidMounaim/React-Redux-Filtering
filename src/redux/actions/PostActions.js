import * as actions from '../constants/PostConstants';
import axios from 'axios';

export const fetchPosts = () => async (dispatch) => {
	dispatch({ type: actions.FETCH_POST_REQUEST });

	try {
		const data = await axios.get('https://jsonplaceholder.typicode.com/posts');
		dispatch({ type: actions.FETCH_POST_SUCCESS, payload: data });
	} catch (error) {
		dispatch({ type: actions.FETCH_POST_FAILED, payload: error.message });
		console.log(error.message);
	}
};
