# blocks
Experiments with blocks for Wordpress Gutenberg editor

## Getting started

### Requirements

Install the required software:
- Docker
- NodeJS (v18.1.0 or newer) and NPM
- @wordpress/env [NPM library](https://www.npmjs.com/package/@wordpress/env?activeTab=versions)

### Start your development

Once the required tools are installed

```shell
wp-env start
```

## Steps

1. Used `@wordpress/create-block` to create test-block plugin. [Ref](https://developer.wordpress.org/block-editor/getting-started/create-block/#quick-start)
   1. Use `npm start` to run updates of the code changes.

## Extras

To stop your development environment run:
```shell
wp-env stop
```

To see all possible commands available on `wp-env` command, type:
```shell
wp-env --help
```

To erase all WordPress installation data, you can type:
```shell
wp-env destroy
```
