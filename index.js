"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _util = require("util");

var _timeStamp = _interopRequireDefault(require("./time-stamp"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = (0, _util.deprecate)(app => {
  app.loopback.modelBuilder.mixins.define('TimeStamp', _timeStamp.default);
}, 'DEPRECATED: Use mixinSources, see https://github.com/clarkbw/loopback-ds-timestamp-mixin#mixinsources');

exports.default = _default;
module.exports = exports.default;