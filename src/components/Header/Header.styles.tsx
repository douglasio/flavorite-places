import styled from 'styled-components'
import { Anchor } from 'grommet'
// import theme from 'styles/theme'

export const Lockup = styled(Anchor)`
	font-family: 'Barrio', Arial, Helvetica, sans-serif;
	font-size: 2rem;

	svg {
		min-width: 3rem;
	}

	span {
		white-space: nowrap;
	}

	.accent {
		filter: brightness(150%);
	}
`

export const NavLink = styled(Anchor)`
	text-transform: capitalize;
`
