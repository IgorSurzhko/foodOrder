import React from 'react';
import classes from './Header.module.css';

import mealsImage from '../../assets/meals.jpg';

const Header = props => {
	return (
		<>
			<header className={classes.header}>
				<h1>Everything you prefer to eat</h1>
				<button>Cart</button>
			</header>
			<div className={classes['main-image']}>
				<img src={mealsImage} alt="meals" />
			</div>
		</>
	);
};

export default Header;
