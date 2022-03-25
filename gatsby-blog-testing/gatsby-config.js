/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
    /* Your site config here */
    plugins: [
        "gatsby-transformer-remark",
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `projects`,
                path: `${__dirname}/src/projects/`,
            },
        },
    ],
    siteMetadata: {
        title: `Blog Testing`,
        description: `A simple blog built with Gatsby`,
        copyright: `This website is copyright © 2020 by AssADev`,
    },
}
