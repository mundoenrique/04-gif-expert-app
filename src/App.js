import { useState } from 'react';

import AddCategory from './components/AddCategory';

function App() {
	const [categories, setCategories] = useState(['One Punch', 'Samurai x', 'Dragon Ball']);

	return (
		<>
			<h2>GifExpertApp</h2>
			<AddCategory setCategories={setCategories} />
			<hr />
			<ol>
				{
					categories.map(category => <li key={category}>{category}</li>)
				}
			</ol>
		</>
	);
}

export default App;
