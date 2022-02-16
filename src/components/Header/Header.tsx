//Dependencies
import React from 'react'
import PropTypes from 'prop-types'
import { menuItemsPropTypes } from 'utils/propTypes'
import { Link } from 'gatsby'
import { Anchor, Box, Header as GrommetHeader, Heading, Menu, ResponsiveContext } from 'grommet'

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
		<GrommetHeader background='background' justify='between'>
			<Heading>
				<Box justify='start'>
					<Styled.GrommetAnchor icon={<Logo />} href='/' label={siteTitle} size='large' />
				</Box>
			</Heading>
			<ResponsiveContext.Consumer>
				{(size) =>
					size === 'small' ? (
						<Box justify='end'>
							<Menu a11yTitle='Navigation menu' dropProps={{ align: { top: 'bottom', right: 'right' } }} items={menuItems}></Menu>
						</Box>
					) : (
						<Box justify='end' direction='row'>
							{menuItems.map((menuItem: MenuItemTypes, i) => {
								return (
									<Box pad='small'>
										<Styled.GrommetAnchor key={`${menuItem.label}${i}`} {...menuItem} size='large' />
									</Box>
								)
							})}
						</Box>
					)
				}
			</ResponsiveContext.Consumer>
		</GrommetHeader>
	)
}

Header.propTypes = {
	menuItems: menuItemsPropTypes,
	siteTitle: PropTypes.string.isRequired,
}

export default Header
