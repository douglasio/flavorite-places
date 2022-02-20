import React, { useState } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import * as Styled from './WorldMap.styles'
import { Anchor, Box, Image, Stack, Text } from 'grommet'
import PlaceholderImage from 'src/images/placeholder-image.png'

type PlaceTypes = {
	name: string
	slug: string
	location: { lat: number; lon: number } | null
	image: {
		description: string
		file: {
			url: string
		}
	}
}

const WorldMap = () => {
	const {
		allContentfulPlace: { places },
	} = useStaticQuery(graphql`
		query getPlaces {
			allContentfulPlace {
				places: nodes {
					name
					slug
					location {
						lat
						lon
					}
					image {
						description
						file {
							url
						}
					}
				}
			}
		}
	`)

	const [activePlace, setActivePlace] = useState(places[Math.floor(Math.random() * places.length)].name)

	return (
		<Styled.WorldMap
			alignSelf='center'
			color='light-6'
			// continents={[
			// 	{
			// 		name: 'Africa',
			// 		color: 'light-5',
			// 		// onClick: (name) => {},
			// 	},
			// ]}
			// onSelectPlace={(lat, lon) => {}}
			fill={true}
			places={places.map((place: PlaceTypes, i: number) => {
				const drop: object = {
					dropProps: {
						align: { left: 'right' },
						background: { color: 'dark-6' },
						margin: { left: 'medium' },
					},
					content: (
						<Box overflow='hidden'>
							<Anchor title={place.name} href={place.slug}>
								<Stack anchor='bottom'>
									<Image alt={place.image.description} fit='cover' src={`${place.image.file.url}?w=150&h=150`} fallback={PlaceholderImage} />
									<Box
										margin={{ vertical: 'small' }}
										direction='row'
										background={{ color: 'light-2', opacity: 'strong' }}
										pad={{ horizontal: 'small', vertical: 'xxsmall' }}
									>
										<Text color='dark-1'>{place.name}</Text>
									</Box>
								</Stack>
							</Anchor>
						</Box>
					),
				}

				return {
					key: i,
					name: place.name,
					location: [place.location?.lat, place.location?.lon],
					className: 'worldMap-place',
					color: activePlace === place.name ? 'accent-1' : 'accent-3',

					onClick: () => {
						setActivePlace(place.name)
						// navigate(place.slug)
					},
					...(activePlace === place.name ? drop : {}),
				}
			})}
		/>
	)
}

export default WorldMap
