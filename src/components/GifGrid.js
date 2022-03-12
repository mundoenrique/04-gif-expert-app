import { useEffect, useState } from "react";

import GifGridItem from "./GifGridItem";

export default function GifGrid({ category }) {
	const [images, setImages] = useState([])
	useEffect(() => {
		getGifs()
	}, [])

	const getGifs = async () => {
		const url = `https://api.giphy.com/v1/gifs/search?q=goku&limit=10&api_key=0217r4ACrFCgiLtHcbgsrd4I3iE8Ndrv`;
		const resp = await fetch(url);
		const { data } = await resp.json();
		const gifs = data.map(imgData => {
			return {
				id: imgData.id,
				title: imgData.title,
				url: imgData.images?.downsized_medium.url
			}
		});
		console.log(gifs);
		setImages(gifs);
	}

	return (
		<>
			<h3>{category}</h3>
			<div className="card-grid">
				{
					images.map(img => (
						<GifGridItem
							key={img.id}
							{...img}
						/>
					))
				}
			</div>
		</>
	)
}
