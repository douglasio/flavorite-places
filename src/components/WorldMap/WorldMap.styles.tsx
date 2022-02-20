import styled from 'styled-components'
import { WorldMap as GrommetWorldMap } from 'grommet'

export const WorldMap = styled(GrommetWorldMap)`
	.worldMap-place {
		cursor: pointer;
		transition: all 200ms;

		img {
			opacity: 0;
		}

		&:hover {
			filter: brightness(150%);

			img {
				opacity: 1;
			}
		}
	}
`

// export const PlaceCaption = styled(Text)`

// `
