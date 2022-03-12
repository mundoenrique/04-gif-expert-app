
export const getGifs = async (category) => {
	const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=0217r4ACrFCgiLtHcbgsrd4I3iE8Ndrv`;
	const resp = await fetch(url);
	const { data } = await resp.json();
	const gifs = data.map(imgData => {
		return {
			id: imgData.id,
			title: imgData.title,
			url: imgData.images?.downsized_medium.url
		}
	});

	return gifs
}
