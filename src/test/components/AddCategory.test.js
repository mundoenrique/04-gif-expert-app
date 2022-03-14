import { shallow } from "enzyme";
import AddCategory from "../../components/AddCategory";

describe('Pruebas para el componente <AddCategory />', () => {
	const setCategories = jest.fn();
	let wrapper = shallow(<AddCategory setCategories={setCategories} />);

	beforeEach(() => {
		jest.clearAllMocks();
		wrapper = shallow(<AddCategory setCategories={setCategories} />);
	});

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

	test('No debe llamar al submit', () => {
		wrapper.find('form').simulate('submit', { preventDefault() { } });


		expect(setCategories).not.toHaveBeenCalled();
	});

	test('Debe hacer el llamado al setCategories', () => {
		const value = 'samurai x';

		wrapper.find('input').simulate('change', { target: { value } });
		wrapper.find('form').simulate('submit', { preventDefault() { } });

		expect(setCategories).toHaveBeenCalled();
		expect(setCategories).toHaveBeenCalledTimes(1);
		expect(setCategories).toHaveBeenCalledWith(expect.any(Function));

		const inputValue = wrapper.find('input');

		expect(inputValue.prop('value')).toBe('');
	});
});
