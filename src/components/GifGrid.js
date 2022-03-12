// import { useEffect, useState } from 'react';

import GifGridItem from './GifGridItem';
import useFetchGifts from '../hooks/useFetchGifts';

export default function GifGrid({ category }) {
	const { data: images, loading } = useFetchGifts(category);

	return (
		<>
			<h3>{category}</h3>
			{loading && <p>Cargando...</p>}
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
