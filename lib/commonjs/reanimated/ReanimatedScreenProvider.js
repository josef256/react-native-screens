"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ReanimatedScreenProvider;
var _react = _interopRequireDefault(require("react"));
var _reactNativeScreens = require("react-native-screens");
var _ReanimatedNativeStackScreen = _interopRequireDefault(require("./ReanimatedNativeStackScreen"));
var _ReanimatedScreen = _interopRequireDefault(require("./ReanimatedScreen"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
class ReanimatedScreenWrapper extends _react.default.Component {
  ref = null;
  setNativeProps(props) {
    this.ref?.setNativeProps(props);
  }
  setRef = ref => {
    this.ref = ref;
    this.props.onComponentRef?.(ref);
  };
  render() {
    const ReanimatedScreen = this.props.isNativeStack ? _ReanimatedNativeStackScreen.default : _ReanimatedScreen.default;
    return /*#__PURE__*/_react.default.createElement(ReanimatedScreen, _extends({}, this.props, {
      // @ts-ignore some problems with ref
      ref: this.setRef
    }));
  }
}
function ReanimatedScreenProvider(props) {
  return (
    /*#__PURE__*/
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    _react.default.createElement(_reactNativeScreens.ScreenContext.Provider, {
      value: ReanimatedScreenWrapper
    }, props.children)
  );
}
//# sourceMappingURL=ReanimatedScreenProvider.js.map