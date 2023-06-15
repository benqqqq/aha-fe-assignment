import type { ReactElement, ReactNode } from 'react'
import { useRef } from 'react'
import { Popover } from '@mui/material'
import CheckList from './CheckList'
import type { ICheckListItem } from './types'

interface ICheckListPopoverProps {
	children: (ref: React.RefObject<HTMLElement>) => ReactNode
	items: ICheckListItem[]
	open: boolean
}

/**
 * A popover component that displays a checklist which can be controlled by items and open property.
 *
 * @component
 * @param {ICheckListPopoverProps} props - The component props.
 * @param {Function} props.children - A function that accepts a ref and returns the target element for the popover.
 * @param {Array<ICheckListItem>} props.items - An array of checklist items.
 * @param {boolean} props.open - A boolean indicating whether the popover is open or not.
 * @returns {React.ReactElement} The rendered component.
 */
export default function CheckListPopover({
	children,
	items,
	open
}: ICheckListPopoverProps): ReactElement {
	const childrenRef = useRef(null)

	return (
		<>
			{children(childrenRef)}
			<Popover
				open={open}
				disableAutoFocus // without this attribute, after popover open, the children element's focus will lose
				anchorEl={childrenRef.current}
				slotProps={{
					paper: {
						sx: {
							marginTop: '75px',
							backgroundImage: 'none' // disabled MuiPaper gradient
						}
					}
				}}
			>
				<CheckList items={items} />
			</Popover>
		</>
	)
}
