import React, { useState, useEffect } from 'react';
import Header from './Header';
import PostCard from './PostCard';
import Loader from './Loader';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../redux/actions/PostActions';
import Paginate from './Paginate';

const Posts = () => {

	const [search, setSearch] = useState('');
	const dispatch = useDispatch();
	const { posts, loading } = useSelector((state) => state.PostReducers);
	const [currentPage, setCurrentPage] = useState(1);

	const handleChangeSearch = (e) => {
		if(e.target.value.length > 0) {
			setCurrentPage(1);
		}
		setSearch(e.target.value);
	}

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
			<Header search={search} setSearch={setSearch} onChange={handleChangeSearch} />
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
