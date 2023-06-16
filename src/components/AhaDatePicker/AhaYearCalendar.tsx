import type { ReactElement } from 'react'
import { useCallback, useMemo, useState } from 'react'
import { PickersArrowSwitcher } from '@mui/x-date-pickers/internals'
import type { DateView, DateViewRendererProps } from '@mui/x-date-pickers'
import { renderDateViewCalendar } from '@mui/x-date-pickers'
import type { Dayjs } from 'dayjs'
import dayjs from 'dayjs'
import {
	slotPropsNextIconButtonSx,
	slotPropsPreviousIconButtonSx,
	yearPickersArrowSwitcherStyle,
	yearViewSx
} from './stylesYearPicker'
import {
	calculatePageAttribute,
	calculateWhichPageShouldDisplay,
	yearToDayjsInput
} from './utils'

const ONE = 1 // XXX: although this looks unnecessary, we need this to prevent 'no-magic-number' eslint rule

/**
 * Aha Style Year Picker
 *
 * This component need to customize the year scroll behavior,
 * in MUI-X DatePicker, it use a scrollbar to select all years,
 * but in Aha Style, it use arrow switcher to change the page of different years,
 * so we need to paginate the years by ourselves :
 * 1. create a function to calculate the page number and insert "min year" and "max year" to make every page
 * 2. create a new ArrowSwitcher component to control next page and previous page
 *
 * @param minDate
 * @param maxDate
 * @param value
 * @param props
 */
export default function AhaYearCalendar({
	minDate,
	maxDate,
	value,
	...props
}: DateViewRendererProps<Dayjs, DateView>): ReactElement {
	const [page, setPage] = useState(
		calculateWhichPageShouldDisplay({
			valueYear: value?.year(),
			todayYear: dayjs().year(),
			minYear: minDate?.year(),
			maxYear: maxDate?.year()
		})
	)
	const currentPageAttribute = useMemo(
		() =>
			calculatePageAttribute({
				page,
				minYear: minDate?.year(),
				maxYear: maxDate?.year()
			}),
		[page, minDate, maxDate]
	)

	const handleGoToNext = useCallback((): void => {
		setPage(p => p + ONE)
	}, [])
	const handleGoToPrevious = useCallback((): void => {
		setPage(p => p - ONE)
	}, [])

	return (
		<div>
			<PickersArrowSwitcher
				// meet style
				slotProps={{
					nextIconButton: {
						sx: slotPropsNextIconButtonSx
					},
					previousIconButton: {
						sx: slotPropsPreviousIconButtonSx
					}
				}}
				nextLabel='next'
				previousLabel='previous'
				style={yearPickersArrowSwitcherStyle}
				//
				// handle pagination
				isNextDisabled={currentPageAttribute.isNextDisabled}
				isPreviousDisabled={currentPageAttribute.isPreviousDisabled}
				onGoToNext={handleGoToNext}
				onGoToPrevious={handleGoToPrevious}
			>
				{/* HACK: the original header does not provide customize year label, so we insert one here, use opacity:0 to hide MuiPickersCalendarHeader-labelContainer */}
				<div style={{ marginTop: '18px' }}>{value?.year()}</div>
			</PickersArrowSwitcher>
			{
				/**
				 * renderDateViewCalendar function comes from the mui-x source code where they used to render yearCalendar
				 * (https://github.com/mui/mui-x/blob/master/packages/x-date-pickers/src/MobileDateTimePicker/MobileDateTimePicker.tsx)
				 */
				renderDateViewCalendar({
					minDate: dayjs(yearToDayjsInput(currentPageAttribute.startYear)),
					maxDate: dayjs(yearToDayjsInput(currentPageAttribute.endYear)),
					value,
					sx: yearViewSx,
					...props
				})
			}
		</div>
	)
}
