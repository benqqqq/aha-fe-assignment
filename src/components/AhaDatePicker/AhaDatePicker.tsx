import type { ReactElement } from 'react'
import { useCallback, useState } from 'react'
import type { DateValidationError } from '@mui/x-date-pickers'
import { DatePicker } from '@mui/x-date-pickers'
import type { Dayjs } from 'dayjs'
import {
	slotPropsActionBarSx,
	slotPropsInputAdornmentSx,
	slotPropsPopperSx,
	slotPropsTextFieldSx
} from './stylesDatePicker'
import type { DatePickerProps } from '@mui/x-date-pickers/DatePicker/DatePicker.types'
import AhaPickersDay from './AhaPickersDay'
import type { PickerChangeHandlerContext } from '@mui/x-date-pickers/internals/hooks/usePicker/usePickerValue.types'

const dayOfWeekFormatter = (d: string): string => d

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
	onChange,
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
	const [date, setDate] = useState<Dayjs | null>()

	const handleOnChange = useCallback(
		(
			value: Dayjs | null,
			context: PickerChangeHandlerContext<DateValidationError>
		): void => {
			setDate(value)
			onChange?.(value, context)
		},
		[onChange]
	)

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
			// customize open behavior by focusing on TextField
			open={isOpen}
			onClose={handlePopperClose}
			//
			// to customize the color of previous selected day, we need to use onChange callback to record the value,
			// then pass it into AhaPickersDay component
			onChange={handleOnChange}
			slots={{
				day: AhaPickersDay
			}}
			//
			// customize children
			slotProps={{
				day: {
					value: date?.valueOf()
				},
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
