# mongo
> Implementation of the js-migrations RepoFacade using Mongo.

### Usage
1. Install it with `npm i @js-migrations/mongo`.
1. [Use the factory to create the repository facade](#use-the-factory).
1. [Use the facade with the @js-migrations/core service](https://github.com/js-migrations/core#use-the-factory).

#### Use the factory
```typescript
import mongoMigrationsRepoFactory from '@js-migrations/mongo/dist/factory';
import connectToDb from '@js-migrations/mongo/dist/utils/connectToDb';

const migrationsRepoFacade = mongoMigrationsRepoFactory({
  db: connectToDb({
    dbName: 'your_db_name',
    url: 'mongodb://127.0.0.1',
  }),
  // Optional property.
  collectionName: 'migrations',
  // Optional property.
  lockCollectionName: 'migrationsLock',
  // Optional property.
  migrations: [{
    down: async () => {},
    key: 'your_migration_name',
    up: async () => {},
  }],
});
```
