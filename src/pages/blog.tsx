//Bootstrap

//Components

export const title = 'Blog'

const BlogPage = (props: any) => {
	return (
		<p>{props.slug}</p>
		// <Frame title={title}>
		// 	<Head title={title} />
		// 	<DisplayHeader title={title} />
		// 	<Container>
		// 		<BlogPosts />
		// 	</Container>
		// </Frame>
	)
}

export default BlogPage
