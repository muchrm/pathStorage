describe('pathStorage', function () {
  let pathStorage;
  const testKey = 'test';
  let hash = new Date().getTime();

  it('I/O', function () {
    pathStorage = new PathStorage();

    pathStorage.setItem(testKey, hash.toString());
    expect(pathStorage.getItem(testKey)).toBe(hash.toString());
  });

  it('remove', function () {
    pathStorage = new PathStorage();

    pathStorage.removeItem(testKey);
    expect(pathStorage.getItem(testKey)).toBe(undefined);
  });

  it('clear', function () {
    pathStorage = new PathStorage();

    pathStorage.clear();
    expect(pathStorage.getItem(testKey)).toBe(undefined);
  });

  it('key', function () {
    pathStorage = new PathStorage();

    pathStorage.clear();

    pathStorage.setItem(testKey, hash.toString());
    expect(pathStorage.key(0)).toBe(hash.toString());
  });

  it('option:autoExecute', function () {
    pathStorage = new PathStorage({autoExecute: false});
    pathStorage.clear();

    pathStorage.setItem(testKey, hash.toString());
    pathStorage.load();
    expect(pathStorage.getItem(testKey)).toBe(undefined);

    pathStorage.setItem(testKey, hash.toString());
    pathStorage.execute();
    pathStorage.load();
    expect(pathStorage.getItem(testKey)).toBe(hash.toString());
  });
});
