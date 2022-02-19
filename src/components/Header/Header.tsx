//Dependencies
import React from 'react'
import PropTypes from 'prop-types'
import { menuItemsPropTypes } from 'utils/propTypes'
import { Box, Header as GrommetHeader, Menu, Nav, ResponsiveContext } from 'grommet'

//Components
import * as Styled from './Header.styles'
import Logo from 'svg/Logo'

//Styles

type MenuItemTypes = {
	label: string
	href: string
}

type LayoutProps = {
	menuItems: Array<MenuItemTypes>
	siteTitle: string
}

const Header = ({ siteTitle, menuItems }: LayoutProps) => {
	// const size = React.useContext(ResponsiveContext)

	return (
		<GrommetHeader justify='between'>
			<Box direction='row' align='center' gap='medium' pad={{ vertical: 'small', horizontal: 'large' }}>
				<Styled.Lockup
					title={siteTitle}
					color='brand'
					icon={<Logo foreground='#bb72ff' />}
					href={'/'}
					label={
						<>
							<span className='accent'>flavor</span>ite places
						</>
					}
					size='large'
				></Styled.Lockup>
			</Box>
			<Box direction='row' align='center' gap='medium' pad={{ vertical: 'small', horizontal: 'large' }}>
				<ResponsiveContext.Consumer>
					{(size) =>
						size === 'small' ? (
							<Menu a11yTitle='Navigation menu' dropProps={{ align: { top: 'bottom', right: 'right' } }} items={menuItems}></Menu>
						) : (
							<Nav direction='row' gap='medium' pad={{ vertical: 'small', horizontal: 'large' }}>
								{menuItems.map((menuItem: MenuItemTypes, i) => {
									return <Styled.NavLink key={`${menuItem.label}${i}`} {...menuItem} size='medium' />
								})}
							</Nav>
						)
					}
				</ResponsiveContext.Consumer>
			</Box>
		</GrommetHeader>
	)
}

Header.propTypes = {
	menuItems: menuItemsPropTypes,
	siteTitle: PropTypes.string.isRequired,
}

export default Header
