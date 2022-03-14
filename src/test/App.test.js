import { shallow } from "enzyme";
import App from "../App";

describe('Pruebas sobre el cmponente principal <App />', () => {

	test('Debe mostrar el componente <App /> correctamente', () => {
		const wrapper = shallow(<App />);

		expect(wrapper).toMatchSnapshot();
	});
	test('Debe mostrar la lista de categorias', () => {
		const categories = ['One Punch', 'Dragon Ball'];
		const wrapper = shallow(<App defaultCat={categories} />);

		expect(wrapper.find('GifGrid').length).toBe(categories.length);
	});
});
