# {{github}} [![NPM version](https://badge.fury.io/js/handlebars-helper-gh-buttons.png)](http://badge.fury.io/js/handlebars-helper-gh-buttons)

> Handlebars helper for adding [github buttons](https://github.com/mdo/github-buttons) to your site.

## Installation

Use [npm](npmjs.org) to install the package: `npm i handlebars-helper-gh-buttons`.

## Register the helper

In your project's Gruntfile, to register the helper add `handlebars-helper-gh-buttons` to the `helpers` property in the [Assemble](http://assemble.io) task or target options:

```javascript
grunt.initConfig({
  assemble: {
    options: {
      // the 'handlebars-helper-gh-buttons' npm module must also be listed in
      // devDependencies for assemble to automatically resolve the helper
      helpers: ['handlebars-helper-gh-buttons', 'foo/*.js']
    },
    files: {
      'dist/': ['src/templates/*.hbs']
    }
  }
});
```
## Usage

With the helper registered, you may now begin using it in your templates.

```html
{{github user="upstage" repo="upstage" type="star"}}
```

## Options

The following hash options may be passed to the helper, in the form of `foo="value"`:

#### user
Type: `String`
Default: `undefined`

The GitHub user or org. Example: `jonschlinkert`.

#### repo
Type: `String`
Default: `undefined`

The GitHub repo. Example: `sublime-monokai-extended`.

#### type
Type: `String`
Default: `undefined`

The button type. Options are `star` and `watch` for repos, and `follow` for users.

#### count
Type: `String`
Default: `true`

Whether or not to show the count or stars, watchers or followers.

#### width
Type: `String`
Default: `undefined`

The width of the rendered iframe. Allows you to override the default values that are automatically defined based on other options.

#### height
Type: `String`
Default: `undefined`

The height of the rendered iframe. Allows you to override the default values that are automatically defined based on other options.

#### size
Type: `String`
Default: `none`

The only option is `large`. When `size="large"` is defined, `width` and `height` will automatically be adjusted.


## Author

**Jon Schlinkert**

+ [github/Jon Schlinkert](http://github.com/Jon Schlinkert)
+ [twitter/Jon Schlinkert](http://twitter.com/Jon Schlinkert)

## License and Copyright

Licensed under the [MIT License](./LICENSE-MIT)
Copyright (c) Jon Schlinkert, contributors.