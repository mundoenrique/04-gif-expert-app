import { renderHook } from "@testing-library/react-hooks";
import useFetchGifs from "../../hooks/useFetchGifs";
// ver https://react-hooks-testing-library.com/
describe('Pruebas sobre el hook <useFetchGifs />', () => {

	test('should Debe retornar el estado inicial', async () => {
		const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('Batman'));
		const { data, loading } = result.current;
		await waitForNextUpdate();

		expect(data).toEqual([]);
		expect(loading).toBe(true);
	});

	test('Debe retrnas un arreglo de imágenes y el lodading en false', async () => {
		const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('Batman'));
		await waitForNextUpdate();
		const { data, loading } = result.current;

		expect(data.length).toBe(10);
		expect(loading).toBe(false);
	});
});
