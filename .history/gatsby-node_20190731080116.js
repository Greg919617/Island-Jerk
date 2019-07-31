/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

createRedirect({
    fromPath: `/docs/templates`,
    toPath:`/contributing/docs-templates`,
    isPermanent: true,
})
createRedirect({
    fromPath: `/docs/site-showcase-submissions/`,
    toPath: '/contributing/site-showcase-submissions',
    isPermanent: true,
})
