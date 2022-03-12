import { useState } from 'react';

import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

function App() {
	const [categories, setCategories] = useState(['One Punch']);

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
