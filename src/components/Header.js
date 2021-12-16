import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { sortPostsAsc, sortPostsDesc, searchPosts } from '../redux/actions/PostActions';

const Header = ({ search, setSearch, onChange }) => {
	const dispatch = useDispatch();
	const [sort, setSort] = useState('asc');

	useEffect(() => {
		dispatch(searchPosts(search));
		if (sort === 'desc') {
			dispatch(sortPostsDesc());
		}
		if (sort === 'asc') {
			dispatch(sortPostsAsc());
		}
	}, [search, sort, dispatch]);

	return (
		<header>
			<div className="title">
				<h1>React Redux Filtering</h1>
			</div>
			<div className="filters">
				<div className="search">
					<input
						type="text"
						value={search}
						onChange={onChange}
						placeholder="Search"
					/>
				</div>
				<div className="sort">
					<select onChange={(e) => setSort(e.target.value)}>
						<option value="asc">ASC</option>
						<option value="desc">DESC</option>
					</select>
				</div>
			</div>
		</header>
	);
};

export default Header;
