import { useState } from 'react';

import AddCategory from './components/AddCategory';

function App() {
	const [categories, setCategories] = useState(['One Punch', 'Samurai x', 'Dragon Ball']);

	const handleAddCat = () => {
		const categoryNew = (Math.random() + 1).toString(36).substring(2);
		setCategories([categoryNew, ...categories]);
		//otra forma
		// setCategories(cats => [categoryNew, ...cats]);
	}

	return (
		<>
			<h2>GifExpertApp</h2>
			<AddCategory />
			<hr />
			<button onClick={handleAddCat}>Agregar</button>
			<ol>
				{
					categories.map(category => <li key={category}>{category}</li>)
				}
			</ol>
		</>
	);
}

export default App;
