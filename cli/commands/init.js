import chalk from 'chalk';
import { sync } from 'cross-spawn';
import * as logger from '../utils/logger';
import { hasYarn, retrievePackageJson, writePackageJson } from '../utils/packageManager';

export default async (options = {}) => {
  logger.title('\n Adding Muil to project... \n');

  logger.info('Installing package...');
  const useYarn = Boolean(options.useNpm !== true) && hasYarn();
  const installAsDevDependencies = true;
  sync(useYarn ? 'yarn' : 'npm', [useYarn ? 'add' : 'install', 'muil-2', installAsDevDependencies ? '-D' : '']);

  logger.info('Adding scripts...\n');
  const packageJson = await retrievePackageJson();
  packageJson.dependencies = packageJson.dependencies || {};
  packageJson.devDependencies = packageJson.devDependencies || {};
  packageJson.scripts = packageJson.scripts || {};
  packageJson.scripts.muil = 'muil editor';
  packageJson.scripts['muil-login'] = 'muil login';
  packageJson.scripts['muil-publish'] = 'muil publish';
  writePackageJson(packageJson);

  logger.success('Muil installed successfully 💪');
  logger.info(`To run Muil, type: ${chalk.green(`${useYarn ? 'yarn' : 'npm run'} muil`)}\n`);
};
