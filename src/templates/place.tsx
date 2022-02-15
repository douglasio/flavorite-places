import React from 'react'

//Gatsby
import { graphql } from 'gatsby'

//Bootstrap

//FontAwesome

//Styles

//Components

export const query = graphql`
	query ($slug: String!) {
		contentfulPlace(slug: { eq: $slug }) {
			name
			location {
				lat
				lon
			}
			slug
			image {
				file {
					url
				}
			}
		}
	}
`

const Place = (props: any) => {
	return (
		<>
			<h1 className='display-1'>{props.data.contentfulPlace.name}</h1>
			<p></p>
		</>
	)
}

export default Place
