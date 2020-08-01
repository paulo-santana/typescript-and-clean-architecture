import { CacheStore } from '@/data/protocols/cache';
import { LocalSavePurchases } from '@/data/usecases';
import { SavePurchases } from '@/domain/usecases';
import { CacheStoreSpy, mockPurchases } from '@/data/tests';

type SutTypes = {
  sut: LocalSavePurchases
  cacheStore: CacheStoreSpy
}

const makeSut = () :SutTypes => {
  const cacheStore = new CacheStoreSpy();
  const sut = new LocalSavePurchases(cacheStore);
  return {
    sut,
    cacheStore
  }
}

describe('LocalSavePurchases', () => {
  test('Should not delete or insert cache on sut.init', () => {
    const { cacheStore } = makeSut ();
    expect(cacheStore.messages).toEqual([]);
  });

  test('Should delete old cache on sut.save', async () => {
    const { sut, cacheStore } = makeSut();
    const purchases = mockPurchases();
    await sut.save(purchases);
    expect(cacheStore.messages).toEqual([
      CacheStoreSpy.Message.delete,
      CacheStoreSpy.Message.insert,
    ]);
    expect(cacheStore.deleteKey).toBe('purchases');
  });

  test('Should not insert new Cache if delete fails', async () => {
    const { sut, cacheStore } = makeSut();
    cacheStore.simulateDeleteError();
    const purchases = mockPurchases();
    const promise = sut.save(purchases);
    expect(cacheStore.messages).toEqual([CacheStoreSpy.Message.delete,]);
    await expect(promise).rejects.toThrow();
  });

  test('Should insert new cache if delete succeeds', async () => {
    const { sut, cacheStore } = makeSut();
    const purchases = mockPurchases();
    await sut.save(purchases);
    expect(cacheStore.messages).toEqual([
      CacheStoreSpy.Message.delete,
      CacheStoreSpy.Message.insert,
    ]);
    expect(cacheStore.insertKey).toBe('purchases');
    expect(cacheStore.insertValues).toEqual(purchases);
  });

  test('Should throw if insert throws', async () => {
    const { sut, cacheStore } = makeSut();
    cacheStore.simulateInsertError();
    const purchases = mockPurchases();
    const promise = sut.save(purchases);
    expect(cacheStore.messages).toEqual([
      CacheStoreSpy.Message.delete,
      CacheStoreSpy.Message.insert,
    ]);
    await expect(promise).rejects.toThrow();
  });

})
