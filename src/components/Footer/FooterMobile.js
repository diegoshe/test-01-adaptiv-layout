import React from 'react';
import s from './Footer.module.css';

export function FooterMobile({arrow}) {
	return (
		<div className={s.mobFooter}>
			<a className={s.goUp} href="#top">
				<div><img src={arrow} alt=""/></div>
				<div>наверх</div>
			</a>
			<div className={s.copyright}>
				<div>Каталог &copy;</div>
				<div>Разработка сайта</div>
			</div>
		</div>
	)
}
