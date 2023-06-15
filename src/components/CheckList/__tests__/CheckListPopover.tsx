import { render, screen } from '@testing-library/react'
import { describe, expect } from 'vitest'
import CheckListPopover from '../CheckListPopover'
import type { ReactNode, Ref } from 'react'

describe('CheckListPopover', () => {
	const items = [
		{ key: 1, label: 'Item 1', checked: true },
		{ key: 2, label: 'Item 2', checked: false }
	]

	test('should render the correct number of list items', () => {
		render(
			<CheckListPopover items={items} open>
				{(ref): ReactNode => <input ref={ref as Ref<HTMLInputElement>} />}
			</CheckListPopover>
		)
		expect(screen.getAllByRole('listitem')).toHaveLength(items.length)
	})

	test('should not render the list items when open is false', () => {
		render(
			<CheckListPopover items={items} open={false}>
				{(ref): ReactNode => <input ref={ref as Ref<HTMLInputElement>} />}
			</CheckListPopover>
		)
		expect(screen.queryAllByRole('listitem')).toHaveLength(0)
	})
})
