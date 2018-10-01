import FacadeConfig from '../FacadeConfig';

export default (config: FacadeConfig) => {
  return async (key: string) => {
    const db = await config.db();
    const collection = db.collection(config.collectionName);
    // Deletes all occurances of the key because the migration can be processed more than once.
    await collection.deleteMany({ key });
  };
};
