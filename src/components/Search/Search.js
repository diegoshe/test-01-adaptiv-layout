import React from 'react';
import s from './Search.module.css';
import  "./Search.module.css"

export function Search({searchIco, menuIco, handleShowSearch, handleShowMenu}) {
	return (
		<div className={s.container}>
			<div className={s.wrapper}>
				<div onClick={handleShowSearch}  className={s.search}>
					<img  src={searchIco} alt=""/>
				</div>
				<div onClick={handleShowMenu} className={s.menu}>
					<img  src={menuIco} alt=""/>
				</div>
			</div>
		</div>
	)
}
