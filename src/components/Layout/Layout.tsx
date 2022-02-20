//Dependencies
import React from 'react'
import PropTypes from 'prop-types'
import { graphql, useStaticQuery } from 'gatsby'
import { Grommet, Main } from 'grommet'

//Components
import { Header } from 'components'

//Styles
import './layout.css'
import theme from 'styles/theme'

type LayoutProps = {
	children: any
}

const Layout = ({ children }: LayoutProps) => {
	const {
		site: { siteMetadata },
	} = useStaticQuery(graphql`
		query {
			site {
				siteMetadata {
					title
					menuLinks {
						label
						href
					}
					socialLinks {
						label
						href
					}
				}
			}
		}
	`)

	return (
		<Grommet theme={theme}>
			<Header menuItems={siteMetadata.menuLinks.concat(siteMetadata.socialLinks)} siteTitle={siteMetadata.title} />
			<Main>{children}</Main>
		</Grommet>
	)
}

Layout.propTypes = {
	children: PropTypes.node.isRequired,
}

export default Layout
