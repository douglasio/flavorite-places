import React from 'react'

//Gatsby
import { graphql } from 'gatsby'

//Bootstrap

//FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'

//Contentful
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

//Styles

//Components

export const query = graphql`
	query ($slug: String!) {
		contentfulBlogPost(slug: { eq: $slug }) {
			title
			slug
			publishedDate(formatString: "MMMM YYYY")
			author
			location {
				lat
				lon
			}
			body {
				raw
			}
		}
	}
`

const Blog = (props: any) => {
	const options = {
		renderNode: {
			'embedded-asset-block': (node: any) => {
				const alt = node.data.target.fields.title['en-US']
				const url = node.data.target.fields.file['en-US'].url
				return <img alt={alt} src={url} className='img-fluid' />
			},
		},
	}
	return (
		<>
			<h1 className='display-1'>{props.data.contentfulBlogPost.title}</h1>
			<FontAwesomeIcon icon={faMapMarkerAlt} className='mr-2' />
			{/* {props.data.contentfulBlogPost.location.lat + ', ' + props.data.contentfulBlogPost.location.lon} */}

			<p>{props.data.contentfulBlogPost.publishedDate}</p>
			<p>
				<strong>{props.data.contentfulBlogPost.author}</strong>
			</p>
			<div>{documentToReactComponents(props.data.contentfulBlogPost.body.json, options)}</div>
		</>
	)
}

export default Blog
