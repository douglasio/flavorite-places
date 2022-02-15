import { createTheme } from '@mui/material'

const theme = createTheme({
	palette: {
		primary: {
			main: '#7d0808',
		},
		secondary: {
			main: '#ffffff',
		},
		background: {
			default: '#000000',
			paper: '#707070',
		},
		error: {
			main: '#fb1000',
		},
	},
})

export default theme
