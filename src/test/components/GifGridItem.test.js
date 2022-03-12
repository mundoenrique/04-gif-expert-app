import { shallow } from 'enzyme';
import GifGridItem from '../../components/GifGridItem';

describe('Pruebas en <GifGridItem />', () => {
	const title = 'Un título';
	const url = 'https://localhost/algo.jpg';
	const wrapper = shallow(<GifGridItem title={title} url={url} />);

	test('Debe mostrar el componente correctamente', () => {

		expect(wrapper).toMatchSnapshot();
	});

	test('Debe tener un párrafo con el título', () => {
		const p = wrapper.find('p');

		expect(p.text().trim()).toBe(title);
	});

	test('Debe tener el src={url} y el alt={title}', () => {
		const img = wrapper.find('img');

		expect(img.prop('src')).toBe(url);
		expect(img.prop('alt')).toBe(title);
	});

	test('Debe tener la clase css animate__fadeIn', () => {
		const div = wrapper.find('div');
		const CssClass = div.prop('className');

		expect(CssClass.includes('animate__fadeIn')).toBe(true);
	});
});
