import type { CSSProperties } from 'react'

export const slotPropsNextIconButtonSx = {
	marginTop: '10px'
}

export const slotPropsPreviousIconButtonSx = {
	marginTop: '10px'
}

// make arrow left and right on each side (default is on the right side)
export const yearPickersArrowSwitcherStyle: CSSProperties = {
	position: 'absolute',
	left: '0',
	width: '100%',
	display: 'flex',
	justifyContent: 'space-between',
	paddingLeft: '5px',
	paddingRight: '5px'
}

export const yearViewSx = {
	'.MuiYearCalendar-root': {
		padding: '0 20px'
	},
	'.MuiPickersCalendarHeader-labelContainer': {
		opacity: 0
	},
	'.MuiPickersYear-yearButton': {
		borderRadius: '2px',
		height: '32px',
		width: '65px'
	},
	'.MuiPickersYear-yearButton:hover': {
		backgroundColor: '#FFFFFF',
		color: '#1B1B1B'
	}
}
