import type { ReactElement, ReactNode } from 'react'
import { useCallback, useState } from 'react'
import type { DateView, DateViewRendererProps } from '@mui/x-date-pickers'
import { DatePicker } from '@mui/x-date-pickers'
import type { Dayjs } from 'dayjs'
import AhaYearCalendar from './AhaYearCalendar'
import {
	slotPropsActionBarSx,
	slotPropsInputAdornmentSx,
	slotPropsPopperSx,
	slotPropsTextFieldSx
} from './stylesDatePicker'
import type { DatePickerProps } from '@mui/x-date-pickers/DatePicker/DatePicker.types'

const dayOfWeekFormatter = (d: string): string => d

const renderYearViewCalendar = (
	args: DateViewRendererProps<Dayjs, DateView>
): ReactNode => <AhaYearCalendar {...args} />

/**
 * Aha Style Date Picker
 *
 * A MuiDatePicker use following structure
 * (reference: https://mui.com/x/react-date-pickers/custom-layout/)
 *
 * Following diagram demo where we customize (*)
 *
 * ---------------------------------    DatePicker
 * | 06 / 23 / 2023                |			Picker
 * --------------------------------          Field
 *                                             TextField
 *                                                 input		(* hide inputAdornment)
 * -------------------------------        Popper
 * | SELECT DATE                 |          Toolbar
 * | Jun, 2023                   |          								(* change format)
 * | <        June 2023       >  |          Header					(* change arrow position)
 * |														 |						Switcher
 * | Su  Mo  Tu  We  Th  Fr  Sa  |
 * | 28  29  30  31  1  2  3  4  |					Day							(* change style)
 * | 5  6  7  8  9  10  11  12   |
 * | ....                        |
 * |            Cancel     OK    |					ActionBar				(* change style)
 * -------------------------------
 *
 */
export default function AhaDatePicker({
	viewRenderers,
	slotProps,
	...props
}: DatePickerProps<Dayjs> & React.RefAttributes<HTMLDivElement>): ReactElement {
	// extract following props in case user pass them in
	const {
		popper: slotPropsPopper,
		textField: slotPropsTextField,
		inputAdornment: slotPropsInputAdornment,
		toolbar: slotPropsToolbar,
		actionBar: slotPropsActionBar,
		...restSlotProps
	} = slotProps ?? {}

	const [isOpen, setIsOpen] = useState(false)

	const handlePopperClose = useCallback(() => {
		setIsOpen(false)
	}, [])

	const handleTextFieldClick = useCallback(() => {
		setIsOpen(true)
	}, [])

	return (
		<DatePicker
			// meet style
			showDaysOutsideCurrentMonth
			dayOfWeekFormatter={dayOfWeekFormatter}
			closeOnSelect={false}
			//
			// customized year calendar
			viewRenderers={{
				year: renderYearViewCalendar,
				...viewRenderers
			}}
			//
			// customize open behavior by focusing on TextField
			open={isOpen}
			onClose={handlePopperClose}
			//
			// customize children
			slotProps={{
				popper: {
					sx: slotPropsPopperSx,
					...slotPropsPopper
				},
				textField: {
					sx: slotPropsTextFieldSx,
					onClick: handleTextFieldClick, // XXX: we might need to support user pass textField.onClick prop in
					...slotPropsTextField
				},
				inputAdornment: {
					sx: slotPropsInputAdornmentSx,
					...slotPropsInputAdornment
				},
				toolbar: {
					hidden: false, // in MUI default setting, toolbar only appear in mobile view
					toolbarFormat: 'MMM, YYYY',
					...slotPropsToolbar
				},
				actionBar: {
					actions: ['cancel', 'accept'],
					sx: slotPropsActionBarSx,
					...slotPropsActionBar
				},
				...restSlotProps
			}}
			{...props}
		/>
	)
}
