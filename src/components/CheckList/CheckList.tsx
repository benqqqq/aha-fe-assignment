import type { ReactElement } from 'react'
import CircleCheckbox from './CircleCheckbox'
import type { ICheckListItem } from './types'

/**
 * @component CheckList
 *
 * @description A React component that renders a list of checkboxes with labels.
 *
 * @param {Object} props - The component props.
 * @param {ICheckListItem[]} props.items - An array of objects representing each checkbox item.
 *
 * @returns {ReactElement} The rendered CheckList component.
 *
 * @example
 * import CheckList from './CheckList';
 *
 * const items = [
 *   {
 *     checked: true,
 *     label: 'Item 1'
 *   },
 *   {
 *     checked: false,
 *     label: 'Item 2'
 *   },
 *   {
 *     checked: true,
 *     label: 'Item 3'
 *   }
 * ];
 *
 * function App() {
 *   return (
 *     <div>
 *       <h1>Check List</h1>
 *       <CheckList items={items} />
 *     </div>
 *   );
 * }
 *
 * export default App;
 *
 * @todo Improve the accessibility and responsive of this component.
 */
export default function CheckList({
	items
}: {
	items: ICheckListItem[]
}): ReactElement {
	return (
		<ul className='w-[335px] rounded-[8px] bg-greyscale-800 px-3 py-3 text-sm leading-normal text-white'>
			{items.map(({ checked, label }) => (
				<li
					key={label}
					className='flex min-h-[40px] items-center py-1 tracking-wide'
				>
					<div className='mr-[12px]'>
						<CircleCheckbox checked={checked} />
					</div>
					<span>{label}</span>
				</li>
			))}
		</ul>
	)
}
