import React from 'react';
import logo from '../assets/triviaLogo.png';

export const Logo = () => {
	console.log(logo)
	return (
		<div>
			<img src={logo} alt="logo" />
		</div>
	)
}
