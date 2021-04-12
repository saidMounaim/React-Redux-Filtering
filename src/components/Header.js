import React from 'react';

const Header = () => {
	return (
		<header>
			<div className="title">
				<h1>React Redux Filtering</h1>
			</div>
			<div className="filters">
				<div className="search">
					<input type="text" placeholder="Search" />
				</div>
				<div className="sort">
					<select>
						<option>ASC</option>
						<option>DESC</option>
					</select>
				</div>
			</div>
		</header>
	);
};

export default Header;
