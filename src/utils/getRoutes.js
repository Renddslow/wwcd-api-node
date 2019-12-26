const fs = require('fs');
const path = require('path');

module.exports = (root) => {
  const routes = fs.readFileSync(path.join(__dirname, '..', 'index.js'));
  const regexpr = /router\.use\('\/([a-zA-Z-\d]*)/g;

  return Object.assign(
    {},
    ...routes
      .toString()
      .split('\n')
      .filter((f) => f)
      .map((f) => f.trim())
      .filter((f) => f && f.match(regexpr))
      .map((f) => {
        f.match(regexpr);
        const [_, route] = regexpr.exec(f) || [];
        return { [route]: `${root}/${route}` };
      }),
  );
};
