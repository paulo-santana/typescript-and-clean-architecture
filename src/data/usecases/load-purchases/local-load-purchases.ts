import { CacheStore } from '@/data/protocols/cache';
import { SavePurchases } from '@/domain/usecases';

export class LocalLoadPurchases implements SavePurchases {
  key : string = 'purchases';
  
  constructor(
    private readonly cacheStore: CacheStore, 
    private readonly timestamp: Date
  ) {}

  async save (purchases: Array<SavePurchases.Params>): Promise<void> {
    this.cacheStore.replace(this.key, {
      timestamp: this.timestamp,
      value: purchases
    });
  }

  async loadAll(): Promise<void> {
    this.cacheStore.fetch(this.key);
  }
}
