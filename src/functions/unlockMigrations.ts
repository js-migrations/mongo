import FacadeConfig from '../FacadeConfig';

export default (config: FacadeConfig) => {
  return async () => {
    const db = await config.db();
    await db.dropCollection(config.lockCollectionName);
  };
};
