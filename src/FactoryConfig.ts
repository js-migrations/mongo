import Migration from '@js-migrations/core/dist/utils/types/Migration';
import { Db } from 'mongodb';

export default interface FactoryConfig {
  readonly db: () => Promise<Db>;
  readonly collectionName?: string;
  readonly lockCollectionName?: string;
  readonly migrations?: Migration[];
}
