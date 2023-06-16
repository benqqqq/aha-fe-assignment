import { createTheme } from '@mui/material'

export default createTheme({
	/**
	 * XXX: follow the guide to pick the colors: https://mui.com/material-ui/customization/palette/,
	 * instead of write arbitrary colors
	 * (because we don't have a full understand of the color palettes in our design system, so we use arbitrary colors now)
	 */
	palette: {
		mode: 'dark'
	},
	typography: {
		fontFamily: ['Ubuntu', 'sans-serif'].join(',')
	},
	components: {
		MuiTextField: {
			defaultProps: {
				InputLabelProps: {
					shrink: true // to fit our style, make the label always shrink on the top of the input (label is default only shrink when focused)
				}
			},
			styleOverrides: {
				/**
				 * MuiTextField Structure
				 * - div.MuiTextField-root
				 *   - label.MuiInputLabel-root
				 *   - div.MuiOutlinedInput-root
				 *     - input.MuiOutlinedInput-input
				 *     - fieldset.MuiOutlinedInput-notchedOutline  // mui use fieldset as outlined TextField's border
				 */
				root: {
					width: '335px',
					'label, label.Mui-focused': {
						color: 'white',
						letterSpacing: '0.4px'
					},
					'.MuiOutlinedInput-root': {
						'input:focus': {
							boxShadow: 'none' // HACK: overwrite the box shadow added by tailwindcss
						},
						input: {
							padding: '20px 12px',
							'&::placeholder': {
								color: '#5D5D5D'
							}
						},
						fieldset: {
							border: '3px solid #929292',
							borderRadius: '8px',
							height: '63px'
						},
						'&.Mui-focused fieldset': {
							border: '3px solid #00A3FF'
						}
					}
				}
			}
		}
	}
})
