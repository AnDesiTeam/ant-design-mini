const {
  doPublish,
  execSync,
  generateSematicVersion,
} = require('./publishUtils');

console.log('dist tag:', process.env.DIST_TAG);

let version = process.env.DIST_VERSION;
if (!version) {
  const currentVersion = require('../package.json').version;
  console.log(`currentVersion`, currentVersion);
  version = generateSematicVersion(
    process.env.DIST_TAG,
    'patch',
    currentVersion
  );
}

console.log('version:', version);

doPublish(process.env.DIST_TAG, version);

if (process.env.DIST_VERSION) {
  // 只对 release 的分支打 Tag
  execSync(`git tag ${process.env.DIST_VERSION}`);
  execSync(
    `git push origin ${process.env.DIST_VERSION}:${process.env.DIST_VERSION}`
  );
}
