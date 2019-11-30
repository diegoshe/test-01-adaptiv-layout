import React from 'react';
import s from './Menu.module.css';


export function Menu (props) {
	return (
		<div className={s.container}>
			<ul>
				<li><a href="#top">Главная</a></li>
				<li><a href="#top">Каталог</a></li>
				<li><a href="#top">Проекты</a></li>
				<li><a href="#top">О компании</a></li>
				<li><a href="#top">Контакты</a></li>
			</ul>
		</div>
	)
}
