import React from 'react';
import s from './Logo.module.css';

export function Logo(props) {
	return (
		<div className={s.container}>
			<img className={s.logo} src={props.logo} alt=""/>
		</div>
	)
}
