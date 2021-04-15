import React, { useState, useEffect } from 'react';
import PostCard from './PostCard';
import Loader from './Loader';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../redux/actions/PostActions';

const Posts = () => {
	const dispatch = useDispatch();
	const [currentPage, setCurrentPage] = useState(1);

	const { posts, loading, error } = useSelector((state) => state.PostReducers);

	useEffect(() => {
		dispatch(fetchPosts());
	}, [dispatch]);

	const postPerPage = 15;
	const totalPosts = posts.length;

	const totalPages = Math.ceil(totalPosts / postPerPage);

	console.log(totalPages);

	return (
		<>
			{loading ? (
				<Loader />
			) : (
				<div className="container">
					<div className="posts">
						{posts.map((post) => (
							<PostCard post={post} />
						))}
					</div>
					<ul class="pagination">
						<li class="page-item disabled">
							<button class="page-link" href="#">
								&laquo;
							</button>
						</li>
						<li class="page-item active">
							<button class="page-link" href="#">
								1
							</button>
						</li>
						<li class="page-item">
							<button class="page-link">&raquo;</button>
						</li>
					</ul>
				</div>
			)}
		</>
	);
};

export default Posts;
