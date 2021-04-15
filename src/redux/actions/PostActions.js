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

export const sortPostsAsc = () => (dispatch) => {
	dispatch({ type: actions.SORT_POSTS_ASC });
};

export const sortPostsDesc = () => (dispatch) => {
	dispatch({ type: actions.SORT_POSTS_DESC });
};

export const searchPosts = (query) => (dispatch) => {
	dispatch({ type: actions.SEARCH_POSTS, payload: query });
};
