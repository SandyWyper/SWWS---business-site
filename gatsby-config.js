module.exports = {
  plugins: [
    'gatsby-plugin-next-seo',
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
        background_color: `#f2f7f4`,
        theme_color: `#aec0d8`,
        display: `minimal-ui`,
        icon: `./static/TWS-title-image.jpg` // This path is relative to the root of the site.
      }
    }
  ]
};
