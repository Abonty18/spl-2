"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = withSnackbar;

var _react = _interopRequireDefault(require("react"));

var _SnackbarContext = _interopRequireDefault(require("./SnackbarContext"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * Creates a HOC that will inject the snackbar prop into the wrapped
 * component.
 */
function withSnackbar() {
  return function (Component) {
    return function (props) {
      return /*#__PURE__*/_react["default"].createElement(_SnackbarContext["default"].Consumer, null, function (snackbar) {
        return /*#__PURE__*/_react["default"].createElement(Component, _extends({
          snackbar: snackbar
        }, props));
      });
    };
  };
}