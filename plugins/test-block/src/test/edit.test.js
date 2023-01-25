import Edit from '../edit'

describe('Edit', () => {
	test('should render a paragraph', () => {
		const result = Edit()
		expect(result).toMatchSnapshot()
	})
})
