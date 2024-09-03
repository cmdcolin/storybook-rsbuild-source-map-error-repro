# error with production build of storybook-rsbuild

See https://github.com/rspack-contrib/storybook-rsbuild/issues/83

Reproduce:

```
clone repo
cd repo
yarn
yarn storybook # devmode, works
yarn storybook:build # error
```

## output

```
$ storybook build
storybook v8.2.9

info => Cleaning outputDir: storybook-static
info => Loading presets
info => Building manager..
info => Manager built (94 ms)
info => Building preview..
info Addon-docs: using MDX3
WARN No story files found for the specified pattern: stories/**/*.mdx
info => Copying static files: public at storybook-static
● web ━━━━━━━━━━━━━━━━━━━━━━━━━ (70%) sealing asset processing                                        Panic occurred at runtime. Please file an issue on GitHub with the backtrace below: https://github.com/web-infra-dev/rspack/issues
Message:  called `Option::unwrap()` on a `None` value
Location: index.crates.io-6f17d22bba15001f/rspack_sources-0.3.0/src/helpers.rs:838

Backtrace omitted.

Run with RUST_BACKTRACE=1 environment variable to display it.
Run with RUST_BACKTRACE=full to include source snippets.
Aborted (core dumped)
error Command failed with exit code 134.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.

```
