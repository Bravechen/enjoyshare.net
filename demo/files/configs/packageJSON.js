module.exports = function combinePackageJSON({
  projectName,
  projectVersoin,
  projectDescription,
  entry,
  testCMD,
  entryDir,
  entry,
  git,
  author,
  license,
  repoHomepage
}) {
  return `{
  "name": "${projectName}",
  "version": "${projectVersoin || '1.0.0'}",
  "description": "${projectDescription}",
  "main": "${entry}",
  "type": "${useESM ? 'module': ''}",
  "scripts": {
    "test": "${testCMD || 'test'}",
    "start": "node --experimental-modules ${entryDir}/${entry}",
    "dev": "set DEBUG=* & node --inspect --experimental-modules ${entryDir}/${entry}",
    "dev:server": "set DEBUG=* & npx supervisor --experimental-modules --inspect ${entryDir}/${entry}"
  },
  "repository": {
    "type": "git",
    "url": "git+${git}"
  },
  "author": "${author}",
  "license": "${license || "MIT"}",
  "bugs": {
    "url": "${git}/issues}"
  },
  "homepage": "${repoHomepage || `${git}#readme`}",
  "dependencies": {
    "cookie-parse": "^0.4.0",
    "debug": "^4.1.1",
    "express": "^4.17.1",
    "hbs": "^4.0.6",
    "http-errors": "^1.7.3",
    "morgan": "^1.9.1"
  },
  "devDependencies": {
    "gulp": "^4.0.2",

    "gulp-postcss": "^8.0.0",
    "autoprefixer": "^9.7.1"
  }
}`;
};
