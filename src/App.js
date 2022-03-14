import { useState } from 'react';

import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

function App({ defaultCat = ['One Punch'] }) {
	const [categories, setCategories] = useState(defaultCat);

	return (
		<>
			<h2>GifExpertApp</h2>
			<AddCategory setCategories={setCategories} />
			<hr />
			{
				categories.map(category => (
					<GifGrid
						key={category}
						category={category}
					/>
				))
			}

		</>
	);
}

export default App;
