import React from 'react'
import { StaticQuery } from 'gatsby'
import { render, screen } from '@testing-library/react'
import { siteTitle } from 'utils/constants'

import Header from './Header'

const mockMenuItems = [
	{ label: 'Link 1', href: '/' },
	{ label: 'Link 2', href: '/' },
]

const TestHeader = () => <Header data-testid='testHeader' menuItems={mockMenuItems} siteTitle={siteTitle} />

test('displays all menu items', () => {
	render(<TestHeader />)
	mockMenuItems.forEach((item) => {
		expect(screen.getByText(item.label)).toBeInTheDocument()
	})
})
