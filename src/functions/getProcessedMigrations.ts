import ProcessedMigration from '@js-migrations/core/dist/utils/types/ProcessedMigration';
import FacadeConfig from '../FacadeConfig';

export default (config: FacadeConfig) => {
  return async () => {
    const db = await config.db();
    const collection = db.collection(config.collectionName);
    const docs = await collection.find().toArray();
    const migrations = docs.map((doc): ProcessedMigration => {
      return {
        batchStart: new Date(doc.batchStart),
        key: doc.key,
        processEnd: new Date(doc.processEnd),
        processStart: new Date(doc.processStart),
      };
    });
    return migrations;
  };
};
