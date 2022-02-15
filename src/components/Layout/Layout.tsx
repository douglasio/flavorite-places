//Dependencies
import React from 'react'
import { ThemeProvider } from '@mui/material'

//Styles
import theme from 'styles/theme'

type LayoutProps = {
	children: any
}

const Layout = ({ children }: LayoutProps) => {
	return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export default Layout
