import * as sourceMapSupport from 'source-map-support';
sourceMapSupport.install();

import serviceFactory from '@js-migrations/core/dist/factory';
import factoryTest from '@js-migrations/core/dist/factoryTest';
import { config } from 'dotenv';
import repoFactory from './factory';
import connectToDb from './utils/connectToDb';
config();

factoryTest((migrations) => {
  const repo = repoFactory({
    db: connectToDb({
      dbName: process.env.MONGO_DATABASE_NAME as string,
      url: 'mongodb://127.0.0.1',
    }),
    collectionName: 'migrations',
    lockCollectionName: 'migrationsLock',
    migrations,
  });
  return serviceFactory({ repo });
});
