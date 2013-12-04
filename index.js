/**
 * Handlebars Helpers: {{ghbtn}}
 * Copyright (c) 2013 Jon Schlinkert
 * Licensed under the MIT License (MIT).
 */

// Node.js
var path   = require('path');
var fs     = require('fs');

// node_modules
var grunt = require('grunt');
var _     = require('lodash')


// Export helpers
module.exports.register = function (Handlebars, options, params) {

  'use strict';

  var opts = options;

  /**
   * {{ghbtn}}
   * => {{ghbtn user="assemble" repo="assemble"}}
   */
  Handlebars.registerHelper('ghbtn', function (options) {

    options = options || {};
    options.hash = options.hash || {};

    options = _.extend(options, opts.data, this, options.hash);

    // Defaults
    var type   = options.type   || 'watch'; // watch || fork || follow
    var count  = options.count  || 'true';
    var title  = options.title  || 'Star on GitHub';

    /**
     * Text
     */

    // Default button text
    if(type === 'fork') {
      title = 'Fork on GitHub';
    }

    if(type === 'follow') {
      title = 'Follow on GitHub';
    }

    if(type === 'watch') {
      title = 'Watch on GitHub';
    }

    /**
     * Sizes
     */

    var width  = options.width  || 62;
    var height = options.height || 20;

    /**
     * Watch
     */

    // Basic Watch button
    if(type === 'watch') {
      width  = width || 62;
      height = height || 20;
    }
    // Watch with count
    if(type === 'watch' && count === true) {
      width  = width || 110;
      height = height || 20;
    }


    /**
     * Fork
     */

    // Basic Fork button
    if(type === 'fork') {
      width  = width || 53;
      height = height || 20;
    }
    // Fork with count
    if(type === 'fork' && count === true) {
      width  = width || 95;
      height = height || 20;
    }

    /**
     * Follow
     */

    // Basic Follow button
    if(type === 'follow') {
      width  = width || 132;
      height = height || 20;
    }
    // Follow with count
    if(type === 'follow' && count === true) {
      width  = width || 165;
      height = height || 20;
    }

    // Large Watch button with count
    options.size = options.size || '';
    if(options.size === 'large') {
      options.size = '&size=large';
      width  = 170;
      height = 30;
    }

    var user = 'user='     + (options.user  || 'assemble');
    var repo = '&repo='    + (options.repo  || 'assemble');

    type     = '&type='    + type; // watch || fork || follow
    count    = '&count='   + count;
    width    = ' width="'  + width + '" ';
    height   = ' height="' + height + '" ';

    var src   = 'http://ghbtns.com/github-btn.html?';
    var attrs = '" allowtransparency="true" frameborder="0" scrolling="0"';
    var inner = src + user + repo + type + count + options.size + attrs + width + height;

    var button = '<iframe src="' + inner + '></iframe>';
    return new Handlebars.SafeString(button);
  });

};
