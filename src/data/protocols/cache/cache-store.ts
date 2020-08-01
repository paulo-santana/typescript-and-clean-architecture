export interface CacheStore {
  key: string;
  delete: (key: string) => void;
}
