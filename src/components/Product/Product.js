import React from 'react';
import s from './Product.module.css';


export function Product({ico, title, section}) {

	let sect = section.split(' ')

	return (
		<div className={s.container}>

			<div className={s.wrapper}>

				<div className={s.title}>
					<h4>{title}</h4>
				</div>

				<div className={s.section}>
					{sect.map((e ,i) => <span key={i+Date.now().toString()} className={s.sect}>{e}</span>)}
				</div>
			</div>

			<div className={s.ico}>
				<img alt="img" src={ico}/>
			</div>

		</div>
	)
}
