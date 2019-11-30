import React from 'react'
import s from './PageMenu.module.css'

export function PageMenu({closeIco, handleUnShowMenu}) {
	return (
		<div className={s.container}>
				<div className={s.closeWrapper} >
					<img onClick={handleUnShowMenu} src={closeIco} alt=""/>
				</div>

				<div className={s.sectionWrapper}>
					<div className={s.section}>главная</div>
					<div className={s.section}>каталог</div>
					<div className={s.section}>проекты</div>
					<div className={s.section}>о компании</div>
					<div className={s.section}>контакты</div>
				</div>
		</div>

	)
}
