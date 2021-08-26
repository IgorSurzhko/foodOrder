import React from 'react';
import classes from './Input.module.css';

//with forward-ref we can use it on a custom component
const Input = React.forwardRef((props, ref) => {
	//and in args too
	return (
		<div className={classes.input}>
			<label htmlFor={props.input.id}>{props.label}</label>
			<input ref={ref} {...props.input} /> {/*here ref attribute */}
		</div>
	);
});

export default Input;
