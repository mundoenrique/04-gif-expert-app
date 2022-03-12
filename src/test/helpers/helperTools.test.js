import { getGifs } from "../../helpers/helperTools";

describe('Pruebas al helper toolhelper', () => {

	test('debe hacer la consulta y devolver 10 elelementos', async () => {
		const gifs = await getGifs('One Punch');

		expect(gifs.length).toBe(10);
	});

	test('debe hacer la consulta y devolver 0 elelementos', async () => {
		const gifs = await getGifs('');

		expect(gifs.length).toBe(0);
	});


});
