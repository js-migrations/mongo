import LockedMigrationsError from '@js-migrations/core/dist/utils/errors/LockedMigrationsError';
import FacadeConfig from '../FacadeConfig';

const lockedDocument = { locked: true };
const lockAlreadyExistsError = 11000;
const lockTableAlreadyExistsError = 48;

export default (config: FacadeConfig) => {
  return async () => {
    const db = await config.db();
    try {
      const collection = await db.createCollection(config.lockCollectionName);
      await collection.createIndex({ locked: 1 }, { unique: true });
      await collection.insertOne(lockedDocument);
    } catch (err) {
      if (err.code === lockAlreadyExistsError || err.code === lockTableAlreadyExistsError) {
        throw new LockedMigrationsError();
      }
      /* istanbul ignore next */
      throw err;
    }
  };
};
