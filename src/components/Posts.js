import React, { useState, useEffect } from 'react';
import PostCard from './PostCard';
import Loader from './Loader';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../redux/actions/PostActions';
import Paginate from './Paginate';

const Posts = () => {
	const dispatch = useDispatch();
	const [currentPage, setCurrentPage] = useState(1);

	const { posts, loading, error } = useSelector((state) => state.PostReducers);

	useEffect(() => {
		dispatch(fetchPosts());
	}, [dispatch]);

	const postPerPage = 15;
	const totalPosts = posts.length;

	const indexOfLastPost = currentPage * postPerPage;
	const indexOfFirstPost = indexOfLastPost - postPerPage;
	const filterPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

	return (
		<>
			{loading ? (
				<Loader />
			) : (
				<div className="container">
					<div className="posts">
						{filterPosts.map((post) => (
							<PostCard post={post} />
						))}
					</div>
					{totalPosts > postPerPage && (
						<Paginate
							currentPage={currentPage}
							setCurrentPage={setCurrentPage}
							totalPosts={totalPosts}
							postPerPage={postPerPage}
						/>
					)}
				</div>
			)}
		</>
	);
};

export default Posts;
