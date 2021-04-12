const initialState = {
	posts: [],
};

export const PostReducers = (state = initialState, action) => {
	switch (action.type) {
		case 'FETCH_POSTS':
			return {
				...state,
				posts: [{ id: 1, body: 'Test 1' }],
			};
		default:
			return state;
	}
};
