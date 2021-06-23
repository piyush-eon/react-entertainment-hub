import axios from 'axios';
import React, { useEffect, useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { img_300, noPicture } from '../../config/Config';
import './Carousel.css';

const handleDragStart = (e) => e.preventDefault();

const Carousel = ({ id, media_type }) => {
	const [credits, setCredits] = useState([]);

	const items = credits?.map((c) => (
		<div className="carouselItem">
			<img
				src={c.profile_path ? `${img_300}/${c.profile_path}` : noPicture}
				alt={c.name}
				onDragStart={handleDragStart}
				className="carouselItem__img"
			/>
			<b className="carouselItem__txt">{c?.name}</b>
		</div>
	));

	const responsive = {
		0: { items: 3 },
		512: { items: 4 },
		666: { items: 5 },
		1241: { items: 6 },
		1361: { items: 7 }
	};

	const fetchCredits = async () => {
		const { data } = await axios.get(
			`https://api.themoviedb.org/3/${media_type}/${id}/credits?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
		);
		setCredits(data.cast);
	};

	useEffect(() => {
		fetchCredits();
		// eslint-disable-next-line
	}, []);
	// console.log(credits);
	return (
		<AliceCarousel
			autoPlay={credits.length > 2}
			responsive={responsive}
			disableDotsControls
			disableButtonsControls
			infinite
			mouseTracking
			items={items}
		/>
	);
};

export default Carousel;
