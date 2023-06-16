import type { PickersDayProps } from '@mui/x-date-pickers'
import { PickersDay } from '@mui/x-date-pickers'
import type { Dayjs } from 'dayjs'
import type { ReactElement } from 'react'
import { useEffect, useRef } from 'react'
import { previousSelectedCssClass } from './stylesDatePicker'

export default function AhaPickersDay({
	day,
	className,
	value,
	...props
}: PickersDayProps<Dayjs>): ReactElement {
	const previousValue = useRef<number | undefined>()

	useEffect(() => {
		previousValue.current = value as number | undefined
	}, [value])

	const isPreviousSelected = previousValue.current === day.valueOf()

	return (
		<PickersDay
			day={day}
			className={`${className ?? ''} ${
				isPreviousSelected ? previousSelectedCssClass : ''
			}`}
			{...props}
		/>
	)
}
