module.exports = {
  siteMetadata: {
    title: 'React Native Minimalist PWA',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-react-next',
    'gatsby-plugin-react-native-web',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'PWA',
        short_name: 'PWA',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#ffffff',
        display: 'standalone',
        orientation: 'portrait',
        icon: 'icon.png',
        icons: [
          {
            src: `/favicons/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/favicons/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
  ],
}
