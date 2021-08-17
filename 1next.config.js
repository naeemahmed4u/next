module.exports = {
  distDir: 'build',
  httpAgentOptions: {
    keepAlive: false,
  },
  reactStrictMode: true,
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Fixes npm packages that depend on `fs` module
    if (!isServer) {
      config.node = {
        fs: 'empty',
        child_process: 'empty', 
        readline: 'empty'        
      }
    }

    return config
  }
}

