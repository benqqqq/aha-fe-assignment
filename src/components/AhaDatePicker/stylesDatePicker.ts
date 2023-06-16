/**
 *  CSS Structure overview
 *
 * ├── div(MuiPaper-root)
 * │   ├── div(MuiPickersPopper-paper)
 * │   │   ├── div(MuiPickersLayout-root)
 * │   │   │   ├── div(MuiPickersLayout-toolbar)
 * │   │   │   │   ├── span - Select date
 * │   │   │   │   └── div(MuiPickersToolbar-content)
 * │   │   │   │       └── h4 - Jun, 2023
 * │   │   │   ├─ div(MuiPickersLayout-contentWrapper)
 * │   │   │   │    └─ div(MuiDateCalendar-root)
 * │   │   │   │       ├── div(MuiPickersCalendarHeader-root)
 * │   │   │   │       │   ├── div(MuiPickersCalendarHeader-labelContainer)
 * │   │   │   │       │   │   ├── div - June 2023
 * │   │   │   │       │   │   └── button - switchViewButton
 * │   │   │   │       │   └── div(MuiPickersArrowSwitcher-root)
 * │   │   │   │       │        ├── button - ArrowLeftIcon
 * │   │   │   │       │        └── button - ArrowRightIcon
 * │   │   │   │       └── div(MuiPickersFadeTransitionGroup-root)
 * │   │   │   │           └── div
 * │   │   │   │               └── div
 * │   │   │   │                   └── div(role="grid")
 * │   │   │   │                       └── div(MuiDayCalendar-weekContainer)
 * │   │   │   │                           ├── button(MuiPickersDay) - 28
 * │   │   │   │                           └── button(MuiPickersDay) - 29
 * │   │   │   └── div(MuiDialogActions-root)
 * │   │   │           ├── button - Cancel
 * │   │   │           └── button - OK
 * │   └── div(data-testid="sentinelEnd")
 */

export const previousSelectedCssClass = 'App-Previous-Selected'

export const slotPropsPopperSx = {
	'.MuiPaper-root': {
		backgroundImage: 'none', // MuiPaper has default gradient, so we need to override it
		backgroundColor: '#1B1B1B',

		// meet style
		'.MuiPickersLayout-toolbar': {
			paddingTop: '8px',
			paddingBottom: '6px',
			paddingLeft: '26px',
			paddingRight: '24px'
		},

		'.MuiPickersCalendarHeader-root': {
			// make label (June 2023) display in the center (default is on the left)
			justifyContent: 'center',
			'.MuiPickersCalendarHeader-labelContainer': {
				margin: 0,
				// eslint-disable-next-line @typescript-eslint/no-magic-numbers
				zIndex: 1 // HACK: greater than the zIndex of the arrowSwitcher, so this one is clickable to switch view
			},

			// make arrow left and right on each side (default is on the right side)
			'.MuiPickersArrowSwitcher-root': {
				position: 'absolute',
				left: '0',
				width: '100%',
				display: 'flex',
				justifyContent: 'space-between',
				paddingLeft: '5px',
				paddingRight: '5px',
				zIndex: 0 // HACK: smaller than the zIndex of the labelContainer, so labelContainer is clickable to switch view
			},

			// in our design, we don't need this
			'.MuiPickersCalendarHeader-switchViewButton': {
				display: 'none'
			}
		},

		'.MuiDayCalendar-slideTransition': {
			minHeight: '220px',

			'.MuiDayCalendar-weekContainer': {
				margin: '0',

				'.MuiPickersDay-root': {
					fontSize: '14px',

					':hover': {
						backgroundColor: '#FFFFFF',
						color: '#1B1B1B'
					},
					':focus': {
						backgroundColor: '#1B1B1B'
					},

					'&.MuiPickersDay-today': {
						border: 'none'
					},

					'&.Mui-selected': {
						backgroundColor: '#00A3FF',
						color: '#FFFFFF'
					},

					'&.MuiPickersDay-dayOutsideMonth': {
						color: '#5D5D5D'
					},

					[`&.${previousSelectedCssClass}`]: {
						border: '1px solid #00A3FF'
					}
				}
			}
		},

		'.MuiPickersLayout-actionBar': {
			paddingTop: '5px',
			paddingBottom: '12px',

			// make action button with longer distance
			'&>:not(:first-of-type)': {
				marginLeft: '40px'
			}
		}
	}
}

export const slotPropsTextFieldSx = {
	'.MuiOutlinedInput-root': {
		'&.Mui-focused fieldset': {
			border: '3px solid #FFFFFF'
		}
	}
}

export const slotPropsInputAdornmentSx = {
	'&': {
		visibility: 'hidden' // HACK: this is the calendar icon, although we can use disableOpenPicker to hide it, but that will make the calendar lose its position
	}
}

export const slotPropsActionBarSx = {
	button: {
		textTransform: 'none',
		color: '#FFFFFF'
	}
}
