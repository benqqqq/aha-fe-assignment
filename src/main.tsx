import App from 'App'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { registerSW } from 'virtual:pwa-register'
import './index.css'
import muiTheme from './muiTheme'
import { ThemeProvider as MuiThemeProvider } from '@mui/material'

registerSW()

const container = document.querySelector('#root')
if (container) {
	const root = createRoot(container)
	root.render(
		<StrictMode>
			<MuiThemeProvider theme={muiTheme}>
				<App />
			</MuiThemeProvider>
		</StrictMode>
	)
}
