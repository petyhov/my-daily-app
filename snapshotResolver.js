module.exports = {
  testPathForConsistencyCheck: 'src/components/Some/Some.test.js',

  resolveSnapshotPath: (testPath, snapshotExtension) =>
    testPath.replace(/.test.([tj]sx?)/, '.test' + snapshotExtension).replace('src', '__snapshots__'),

  resolveTestPath: (snapshotFilePath, snapshotExtension) =>
    snapshotFilePath.replace(snapshotExtension, '.js').replace('__snapshots__', 'src'),
};
