/**
 * Handlebars Helpers: {{ghbtn}}
 * Copyright (c) 2013 Jon Schlinkert
 * Licensed under the MIT License (MIT).
 */

// Node.js
var path = require('path');
var fs = require('fs');

// node_modules
var grunt = require('grunt');
var _ = require('lodash')

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
    var type = options.type || 'watch'; // watch || fork || follow
    var count = options.count || true;
    var title = options.title || 'Star on GitHub';
    var size = options.size || '';

    // Default button text
    title = (type === 'fork') ? 'Fork on GitHub' : title;
    title = (type === 'follow') ? 'Follow on GitHub' : title;
    title = (type === 'watch') ? 'Watch on GitHub' : title;

    var width = 62;
    var height = 20;

    // Basic Watch button
    if (type === 'watch') {
      width = 62;
      height = 20;
    }
    // Watch with count
    if (type === 'watch' && (count === 'true' || count === true)) {
      width = 110;
      height = 20;
    }

    // Basic Fork button
    if (type === 'fork') {
      width = 53;
      height = 20;
    }
    // Fork with count
    if (type === 'fork' && (count === 'true' || count === true)) {
      width = 95;
      height = 20;
    }

    // Basic Follow button
    if (type === 'follow') {
      width = 132;
      height = 20;
    }
    // Follow with count
    if (type === 'follow' && (count === 'true' || count === true)) {
      width = 165;
      height = 20;
    }

    // Large Watch button with count
    if (size === 'large') {
      size = '&size=large';
      width = 170;
      height = 30;
    }

    var user = 'user=' + (options.user || 'assemble');
    var repo = '&repo=' + (options.repo || 'assemble');

    type = '&type=' + type; // watch || fork || follow
    count = '&count=' + count;
    width = ' width="' + width + '" ';
    height = ' height="' + height + '" ';

    var src = 'http://ghbtns.com/github-btn.html?';
    var attrs = '" allowtransparency="true" frameborder="0" scrolling="0"';
    var inner = src + user + repo + type + count + size + attrs + width + height;

    var button = '<iframe src="' + inner + '></iframe>';
    return new Handlebars.SafeString(button.replace(/&amp;/g, '&'));
  });

};