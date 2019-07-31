/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const _ = require(`lodash`)
const Promise = require(`bluebird`)
const path = require(`path`)
const fs = require(`fs-extra`)
const slash = require(`slash`)
const slugify = require(`slugify`)
const url = require(`url`)
const getpkgjson = require(`get-package-json-from-github`)
const parseGHUrl = require(`parse-github-url`)
const { GraphQLClient } = require(`graphql-request`)
const moment = require(`moment`)
const startersRedirects = require(`./starter-redirects.json`)



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
