# open-filename-check

`open-filename-check` is an open source module for filename checking.

## Getting start

### Build

```shell
npm run build
```

### Run

```shell
# node lib/index.js
```

## Docs

### The definition of Config

Please refer to [deglob](https://www.npmjs.com/package/deglob)

```typescript
interface Config {
  patterns: string[];
  options: {
    useGitIgnore?: boolean;
    usePackageJson?: boolean;
    configKey?: string;
    gitIgnoreFile?: string;
    ignore?: string[];
    cwd?: string;
  };
}
```

#### Default config

```javascript
{
  patterns: [ '**/*.ts' ],
  options: {
    useGitIgnore: true,
    ignore: [ 'node_modules/**/*' ],
  },
}
```

#### Customer configuration

Note: In order to facilitate the user to integrate the configuration into the package.json file, after loading the configuration file, the configuration will be read from the `open-filename-check` field, so the specific configuration should be included in the `open-filename-check` field, for example:

```json
{
  "open-filename-check": {
    "patterns": [ "**/*.ts" ],
    "options": {
      "useGitIgnore": true,
      "ignore": [ "node_modules/**/*" ]
    }
  }
}
```

The configuration file can be placed in any path of the project and specified by `FILENAME_CHECK_CONFIG_PATH` environment variable, for example:

```shell
# export FILENAME_CHECK_CONFIG_PATH=./open-filename-check.json
# node lib/index.js
```

### docker

#### build

```bash
# docker build -t open-filename-check .
```

#### run

```bash
# docker run -it -v src/path:/github/workspace open-filename-check
```
