import React, { useState } from "react"
import "./App.css"
import {Product} from "./components/Product/Product"
import {Footer} from "./components/Footer/Footer"
import {Menu} from "./components/Menu/Menu"
import {Search} from "./components/Search/Search"
import {Logo} from "./components/Logo/Logo"
import {PageSearch} from "./components/PageSearch/PageSearch";
import {PageMenu} from "./components/PageMenu/PageMenu";
import {FooterMobile} from "./components/Footer/FooterMobile";
import Carousel from "./components/Slider/Carousel";
import logo from "./images/ico/Logo.png"
import catalog from "./images/ico/catalog.png"
import development from "./images/ico/development.png"
import searchIco from "./images/ico/search.png"
import menuIco from "./images/ico/menu.png"
import closeIco from "./images/ico/close.png"
import arrow from "./images/ico/arrow.png"
import powerIco from "./images/ico/power.png"
import batteryIco from "./images/ico/battery.png"
import generatorIco from "./images/ico/generator.png"
import powIco from "./images/ico/pow.png"
import airbIco from "./images/ico/airb.png"
import toolsIco from "./images/ico/tools.png"


function App() {

	const data = [{ico: powerIco, title: 'электроника', section: 'интеграл электрод'},
		{ico: batteryIco, title: 'компьютеры и сети', section: 'acer hp'},
		{ico: generatorIco, title: 'бытовая техника', section: 'samsung'},
		{ico: powIco, title: 'стройка и ремонт', section: 'акрил'},
		{ico: airbIco, title: 'дом и сад', section: 'алмаз bosch'},
		{ico: toolsIco, title: 'авто и мото', section: 'акрил'}]
	const options = [{ img: catalog, align: 'left'}, { img: '', align: ''}, { img: development, align: 'right'}]

	const [handleSearch, setHandleSearch] = useState(false);
	const [handleMenu, setHandleMenu] = useState(false);

	let handleShowSearch= () => {
		setHandleSearch(!handleSearch)
	}
	let handleShowMenu= () => {
		setHandleMenu(!handleMenu)
	}

	let sizeWindow = window.innerWidth
	let draw = sizeWindow < 760 ? true : false

	return (
		<div className="container" id="top">
			{ handleSearch && <PageSearch closeIco={closeIco} handleUnShowSearch={handleShowSearch} />}
			{ handleMenu && <PageMenu  closeIco={closeIco} handleUnShowMenu={handleShowMenu} />}
			<Logo logo={logo} />
			<Menu />
			<Search handleShowMenu={handleShowMenu} handleShowSearch={handleShowSearch} searchIco={searchIco} menuIco={menuIco}/>
			{data.map((d, i) => <Product key={i.toString()} ico={d.ico} title={d.title} section={d.section} />)}
			{options.map((e, i) => <Footer key={i.toString()} img={e.img} align={e.align}   />)}
			{draw && <FooterMobile arrow={arrow} />}
			<Carousel />
		</div>
	);
}

export default App;
