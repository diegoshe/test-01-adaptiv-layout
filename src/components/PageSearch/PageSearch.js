import React from 'react'
import s from './PageSearch.module.css'


export function PageSearch({closeIco, handleUnShowSearch}) {
	return (
		<div className={s.container}>
			<div className={s.closeWrapper} >
				<img onClick={handleUnShowSearch} src={closeIco} alt=""/>
			</div>

			<div className={s.formWrapper}>
				<div className={s.form}>
					<input type="text" name="name" autoComplete="off" required/>
					<label className={s.labelName} for="name" >
						<span className={s.contentName}>Клацни</span>
					</label>
				</div>
			</div>
			<div className={s.footer}>найти</div>
		</div>
	)
}
