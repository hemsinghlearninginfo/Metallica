webpackHotUpdate(0,{

/***/ 270:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(4);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _importAllPages = __webpack_require__(63);\n\nvar _importAllPages2 = _interopRequireDefault(_importAllPages);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar FAQs = function (_Component) {\n  _inherits(FAQs, _Component);\n\n  function FAQs() {\n    _classCallCheck(this, FAQs);\n\n    return _possibleConstructorReturn(this, (FAQs.__proto__ || Object.getPrototypeOf(FAQs)).apply(this, arguments));\n  }\n\n  _createClass(FAQs, [{\n    key: \"render\",\n    value: function render() {\n      return _react2.default.createElement(\n        \"div\",\n        null,\n        _react2.default.createElement(_importAllPages2.default.PageHeader, { name: \"Post My Orders\", description: \"\" })\n      );\n    }\n  }]);\n\n  return FAQs;\n}(_react.Component);\n\nexports.default = FAQs;\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/components/postOrders.js\n// module id = 270\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/components/postOrders.js?");

/***/ }),

/***/ 63:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _header = __webpack_require__(240);\n\nvar _header2 = _interopRequireDefault(_header);\n\nvar _footer = __webpack_require__(246);\n\nvar _footer2 = _interopRequireDefault(_footer);\n\nvar _home = __webpack_require__(247);\n\nvar _home2 = _interopRequireDefault(_home);\n\nvar _faqs = __webpack_require__(248);\n\nvar _faqs2 = _interopRequireDefault(_faqs);\n\nvar _postOrders = __webpack_require__(270);\n\nvar _postOrders2 = _interopRequireDefault(_postOrders);\n\nvar _contact = __webpack_require__(249);\n\nvar _contact2 = _interopRequireDefault(_contact);\n\nvar _carousel = __webpack_require__(250);\n\nvar _carousel2 = _interopRequireDefault(_carousel);\n\nvar _pageHeading = __webpack_require__(251);\n\nvar _pageHeading2 = _interopRequireDefault(_pageHeading);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar AllPages = function AllPages() {\n    _classCallCheck(this, AllPages);\n};\n\nAllPages.Header = _header2.default;\nAllPages.Home = _home2.default;\nAllPages.FAQs = _faqs2.default;\nAllPages.Contact = _contact2.default;\nAllPages.Footer = _footer2.default;\nAllPages.Carousel = _carousel2.default;\nAllPages.PageHeader = _pageHeading2.default;\nexports.default = AllPages;\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/components/route/importAllPages.js\n// module id = 63\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/components/route/importAllPages.js?");

/***/ })

})