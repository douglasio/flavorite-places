const path = require('path')

// module.exports.createPages = async ({ graphql, actions }) => {
// 	const { createPage } = actions
// 	const blogTemplate = path.resolve('./src/templates/blog.js')
// 	const placesTemplate = path.resolve('./src/templates/place.js')
// 	const res = await graphql(`
// 		query {
// 			allContentfulBlogPost {
// 				edges {
// 					node {
// 						slug
// 					}
// 				}
// 			}
// 			allContentfulPlace {
// 				edges {
// 					node {
// 						slug
// 					}
// 				}
// 			}
// 		}
// 	`)

// 	res.data.allContentfulBlogPost.edges.forEach((edge) => {
// 		createPage({
// 			component: blogTemplate,
// 			path: `/blog/${edge.node.slug}`,
// 			context: {
// 				slug: edge.node.slug,
// 			},
// 		})
// 	})

// 	res.data.allContentfulPlace.edges.forEach((edge) => {
// 		createPage({
// 			component: placesTemplate,
// 			path: `/places/${edge.node.slug}`,
// 			context: {
// 				slug: edge.node.slug,
// 			},
// 		})
// 	})
// }
