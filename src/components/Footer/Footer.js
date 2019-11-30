import React from 'react';
import s from './Footer.module.css';


export function Footer({img, align}) {

	return (
		<div className={`${s[align]} ${s.bord}`}>
			{ img && <img  alt="copyright" src={img} />}
		</div>
	)
}
