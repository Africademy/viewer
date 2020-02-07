import WebpackDevServer from 'webpack-dev-server';
import webpack from 'webpack';
import * as logger from '../utils/logger';
import storyConfig from '../../webpack.config.js';

export default async ({ port, templatesDirectory }) => {
  logger.title('\n Starting Muil editor... \n');

  const compiler = webpack(storyConfig({ templatesDirectory }));
  const server = new WebpackDevServer(compiler, {
    quiet: true,
    overlay: true,
    hotOnly: true,
    open: process.platform === 'win32' ? 'chrome' : process.platform === 'darwin' ? 'Google Chrome' : 'google-chrome',
  });

  server.listen(port, 'localhost', () => logger.info(`Muil editor is running at http://localhost:${port}/`));
};
