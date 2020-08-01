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
  test('Should not delete cache on sut.init', () => {
    const { cacheStore } = makeSut ();
    expect(cacheStore.deleteCallsCount).toBe(0);
  });

  test('Should delete old cache on sut.save', async () => {
    const { sut, cacheStore } = makeSut();
    const purchases = mockPurchases();
    await sut.save(purchases);
    expect(cacheStore.deleteCallsCount).toBe(1);
    expect(cacheStore.deleteKey).toBe('purchases');
  });

  test('Should not insert new Cache if delete fails', () => {
    const { sut, cacheStore } = makeSut();
    cacheStore.simulateDeleteError();
    const purchases = mockPurchases();
    const promise = sut.save(purchases);
    expect(cacheStore.insertCallsCount).toBe(0);
    expect(promise).rejects.toThrow();
  });

  test('Should insert new cache if delete succeeds', async () => {
    const { sut, cacheStore } = makeSut();
    
    const purchases = mockPurchases();
    
    await sut.save(purchases);
    expect(cacheStore.insertCallsCount).toBe(1);
    expect(cacheStore.deleteCallsCount).toBe(1);
    expect(cacheStore.insertKey).toBe('purchases');
    expect(cacheStore.insertValues).toEqual(purchases);
  });

  test('Should throw if insert throws', () => {
    const { sut, cacheStore } = makeSut();
    cacheStore.simulateInsertError();
    const purchases = mockPurchases();
    const promise = sut.save(purchases);
    expect(promise).rejects.toThrow();
  });

})
