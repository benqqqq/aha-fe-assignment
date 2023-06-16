import { render, screen } from '@testing-library/react'
import CheckList from '../CheckList'
import { expect } from 'vitest'

describe('CheckList', () => {
	const items = [
		{
			key: 1,
			checked: true,
			label: 'Item 1'
		},
		{
			key: 2,
			checked: false,
			label: 'Item 2'
		},
		{
			key: 3,
			checked: true,
			label: 'Item 3'
		}
	]

	test('should render the correct number of list items', () => {
		render(<CheckList items={items} />)

		const listItems = screen.getAllByRole('listitem')

		expect(listItems).toHaveLength(items.length)
	})

	test('should render the correct labels for checkboxes', () => {
		render(<CheckList items={items} />)

		const listItems = screen.getAllByRole('listitem')

		expect(listItems).toHaveLength(items.length)

		for (const [index, item] of items.entries()) {
			expect(listItems[index]).toHaveTextContent(item.label)
		}
	})

	test('should render checkboxes with correct checked state', () => {
		render(<CheckList items={items} />)

		const listItems = screen.getAllByRole('listitem')

		for (const [index, item] of items.entries()) {
			// eslint-disable-next-line testing-library/no-node-access
			const svgElement = listItems[index].querySelector('svg')
			if (item.checked) {
				expect(svgElement).toHaveClass('fill-primary-light')
			} else {
				expect(svgElement).not.toHaveClass('fill-primary-light')
			}
		}
	})
})
