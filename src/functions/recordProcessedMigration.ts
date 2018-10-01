import ProcessedMigration from '@js-migrations/core/dist/utils/types/ProcessedMigration';
import FacadeConfig from '../FacadeConfig';

export default (config: FacadeConfig) => {
  return async (migration: ProcessedMigration) => {
    const db = await config.db();
    const collection = db.collection(config.collectionName);
    await collection.insertOne(migration);
  };
};
