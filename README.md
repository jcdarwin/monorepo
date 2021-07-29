# What is this?

This is a simple demonstration of using lerna with yarn workspaces to manage a monorepo.


## Initialise our repo
```
git init
yarn init -y
```


## Add lerna
```
# yarn global add lerna --prefix /usr/local
npm install --global lerna
lerna init
```


## Create our workspaces

Add the following to `package.json`

```
  "private": true,
  "workspaces": [
    "packages/*"
  ],
```

```
lerna create components -y
lerna create webapp -y
yarn workspaces info
```


## Add a dependency to a package

```
lerna add chalk --scope=webapp
# or: yarn workspace webapp add chalk
```


## Add a dependency to all packages

```
lerna add jest
```


## Add a dev dependency to the root

When we're not interested in the dependency being used by our packages.

```
yarn add husky --dev -W
```


## Removing a dependency from all packages

```
lerna exec -- yarn remove jest
```


## Removing a dependency from given packages

```
lerna exec --scope=webapp -- yarn remove chalk
```


## Share workspace packages

```
lerna add components --scope=webapp
```


## Add some functionality

In `packages/webapp/lib/webapp.js`:

```
'use strict';

const chalk = require('chalk')
const components = require('components')

function webapp() {
  console.log(chalk.green('here is the webapp'))
  console.log(chalk.yellow(components()))
}

webapp()
```

In `packages/components/lib/components.js`

```
'use strict';

module.exports = components;

function components() {
  return 'here is the components'
}
```


## Start things

```
lerna add components --scope=webapp

cd packages/webapp
yarn start

#yarn workspace webapp remove components
```


## Run a command in all packages

```
lerna run test --stream
```

as opposed to the following, which runs jest from the top level, and uses the root `jest.config.js`:

```
npx jest
```


## Lerna updata wizard

[Lerna updata wizard](https://github.com/webuniverseio/lerna-wizard) is useful for managing module dependenices across packages.

```
yarn global add lerna-update-wizard

npx lernaupdate
```

Lerna updata wizard also provides a CLI for Lerna (via `npx lerna-wizard`), though I've not found this so useful.


## Reading

* https://doppelmutzi.github.io/monorepo-lerna-yarn-workspaces/
* https://classic.yarnpkg.com/en/docs/workspaces/
* https://codeburst.io/monorepos-by-example-part-1-3a883b49047e
* https://medium.com/@jsilvax/a-workflow-guide-for-lerna-with-yarn-workspaces-60f97481149d
