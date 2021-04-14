import React, { useEffect } from 'react';
import PostCard from './PostCard';
import Loader from './Loader';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../redux/actions/PostActions';

const Posts = () => {
	const dispatch = useDispatch();

	const { posts, loading, error } = useSelector((state) => state.PostReducers);

	useEffect(() => {
		dispatch(fetchPosts());
	}, [dispatch]);

	return (
		<>
			{loading ? (
				<Loader />
			) : (
				<>
					<div className="posts">
						{posts.map((post) => (
							<PostCard post={post} />
						))}
					</div>
				</>
			)}
		</>
	);
};

export default Posts;
