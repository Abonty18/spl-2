"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = useSnackbar;

var _react = _interopRequireDefault(require("react"));

var _SnackbarContext = _interopRequireDefault(require("./SnackbarContext"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function useSnackbar() {
  return _react["default"].useContext(_SnackbarContext["default"]);
}