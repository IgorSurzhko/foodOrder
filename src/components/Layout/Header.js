import React from 'react';
import HeaderCartButton from './HeaderCartButton';
import classes from './Header.module.css';

import mealsImage from '../../assets/meals.jpg';

const Header = props => {
	return (
		<>
			<header className={classes.header}>
				<h1>Meals you prefer</h1>
				<HeaderCartButton onClick={props.onShowCart} />
			</header>
			<div className={classes['main-image']}>
				<img src={mealsImage} alt="meals" />
			</div>
		</>
	);
};

export default Header;
