import React from 'react';
import Slider from "react-slick";
import "./style.css"
import slide_one from "../../images/fon/slaid1.jpg";
import slide_two from "../../images/fon/slaid2.jpg";
import slide_three from "../../images/fon/slaid3.jpg";
import slide_four from "../../images/fon/slaid4.jpg";
import slide_five from "../../images/fon/slaid5.jpg";
import slide_six from "../../images/fon/slaid6.jpg";
import slide_seven from "../../images/fon/slaid7.jpg";

const Carousel = () => {
	const settings = {
		dots: false,
		infinite: true,
		autoplay: true,
		speed: 4000,
		autoplaySpeed: 4000,
		touchMove: false
	};
	return (
		<div className="carrousel_wrapper">
			<Slider {...settings}>
				<div>
					<div	className="carrousel_image"
						style={{background: `url(${slide_two})`}}
					/>
				</div>
				<div>
					<div	className="carrousel_image"
						style={{background: `url(${slide_one})`}}
					/>
				</div>
				<div>
					<div className="carrousel_image"
						style={{background: `url(${slide_three})`}}
					/>
				</div>
				<div>
					<div	className="carrousel_image"
						style={{background: `url(${slide_four})`}}
					/>
				</div>
				<div>
					<div className="carrousel_image"
						style={{background: `url(${slide_five})`	}}
					/>
				</div>
				<div>
					<div	className="carrousel_image"
						style={{background: `url(${slide_six})`}}
					/>
				</div>
				<div>
					<div	className="carrousel_image"
						style={{background: `url(${slide_seven})`}}
					/>
				</div>
			</Slider>
		</div>
	);
};

export default Carousel;
