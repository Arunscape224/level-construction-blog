const { slugify } = require('./src/util/utilityFunctions')
const path = require('path')

exports.createPages = ({ graphql, actions }) => {
    const {createPage} = actions
    const blogPost = path.resolve(`./src/templates/single-post.js`)
    return graphql(`
        {
            allContentfulPost {
                edges { 
                  node {
                    id
                    title
                    author
                    slug
                    tags
                 
                    date(formatString: "MMMM Do YYYY")
                    body {
                      body
                    }
                  }
                }
              }
            }
        `).then(result => {
            if(result.errors) {
                throw result.errors
            }
            const posts = result.data.allContentfulPost.edges

posts.forEach((post, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node
    const next = index === 0 ? null : posts[index - 1].node
    createPage({
        path: post.node.slug,
        component: blogPost,
        context: {
            slug: post.node.slug,
            previous,
            next
        }
    })
})
            
        })
} 