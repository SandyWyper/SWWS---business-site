module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-codebushi`,
      options: {
        tailwindConfig: `tailwind.config.js`
      }
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Yeseva One', 'Raleway:400,600,700', 'Ubuntu Condensed']
        }
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Tindebox Web Solutions`,
        short_name: `TWS`,
        start_url: `/`,
        background_color: `#17161E`,
        theme_color: `#526A92`,
        display: `minimal-ui`,
        icon: `./static/cube-icon-black.png` // This path is relative to the root of the site.
      }
    }
  ]
};
