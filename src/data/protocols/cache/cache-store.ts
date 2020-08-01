export interface CacheStore {
  deleteKey: string;
  insertKey: string;
  delete: (key: string) => void;
  insert: (key: string) => void;
}
