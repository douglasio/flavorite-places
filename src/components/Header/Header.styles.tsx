import styled from 'styled-components'
import { Anchor } from 'grommet'
import theme from 'styles/theme'

export const GrommetAnchor = styled(Anchor)`
	color: ${theme.global.colors.brand.light};

	svg {
		min-width: 5rem;
	}

	span {
		white-space: nowrap;
	}
`
