import { shallow } from "enzyme";
import AddCategory from "../../components/AddCategory";

describe('Pruebas para el componente <AddCategory />', () => {
	const setCategories = () => { }
	const wrapper = shallow(<AddCategory setCategories={setCategories} />);

	test('Debe mostrarse correctamente', () => {

		expect(wrapper).toMatchSnapshot();
	});

	test('Debe cambiar el input', () => {
		const input = wrapper.find('input');
		const value = 'Goku';

		input.simulate('change', { target: { value } });

		const inputValue = wrapper.find('input');

		expect(inputValue.prop('value')).toBe(value)
	});
});
