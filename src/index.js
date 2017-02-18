import app from './app'

if (module.hot) {
  module.hot.accept('./app', () => {
    const newApp = require('./app').default;
    newApp()
  });
}

app()