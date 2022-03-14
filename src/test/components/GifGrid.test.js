import { shallow } from 'enzyme';
import GifGrid from '../../components/GifGrid';
import useFetchGifs from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');

describe('Pruebas al componene <GifGrid />', () => {
	const category = 'Batman'

	test('Debe mostrar el componente correctamente', () => {
		useFetchGifs.mockReturnValue({
			data: [],
			loading: true
		})
		const wrapper = shallow(<GifGrid category={category} />);

		expect(wrapper).toMatchSnapshot();
	});

	test('Debe mostrar los items cuando se cargan imágenes useFetchGifs', () => {
		const gifs = [{
			id: 'Abecd',
			url: 'https://localhost/image/img.jpg',
			title: 'Un título'
		}];

		useFetchGifs.mockReturnValue({
			data: gifs,
			loading: false
		});

		const wrapper = shallow(<GifGrid category={category} />);

		expect(wrapper).toMatchSnapshot();
	});
});
