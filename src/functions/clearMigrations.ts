import FacadeConfig from '../FacadeConfig';

const collectionMissingError = 26;

export default (config: FacadeConfig) => {
  return async () => {
    const db = await config.db();
    try {
      await db.dropCollection(config.collectionName);
    } catch (err) {
      if (err.code === collectionMissingError) {
        // We don't mind this error, sometimes this collection won't exist.
        return;
      }
      // istanbul ignore next
      throw err;
    }
  };
};
