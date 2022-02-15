import { useStaticQuery, graphql } from 'gatsby'

//Dependencies

//Components

export const title = 'Places'

const PlacesPage = (props: any) => {
	const data = useStaticQuery(graphql`
		query {
			allContentfulPlace {
				edges {
					node {
						name
						description {
							raw
						}
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
			}
		}
	`)

	return (
		<p>
			{props.slug} {data}
		</p>
	)
}

export default PlacesPage
