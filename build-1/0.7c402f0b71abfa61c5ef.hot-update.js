webpackHotUpdate(0,{

/***/ 278:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(4);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterDom = __webpack_require__(58);\n\nvar _reactFontawesome = __webpack_require__(242);\n\nvar _icon = __webpack_require__(270);\n\nvar _icon2 = _interopRequireDefault(_icon);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar NavigationBar = function (_Component) {\n    _inherits(NavigationBar, _Component);\n\n    function NavigationBar(props) {\n        _classCallCheck(this, NavigationBar);\n\n        return _possibleConstructorReturn(this, (NavigationBar.__proto__ || Object.getPrototypeOf(NavigationBar)).call(this, props));\n    }\n\n    _createClass(NavigationBar, [{\n        key: 'render',\n        value: function render() {\n            return _react2.default.createElement(\n                'nav',\n                { className: 'navbar fixed-top navbar-expand-lg navbar-dark bg-dark' },\n                _react2.default.createElement(\n                    _reactRouterDom.NavLink,\n                    { className: 'navbar-brand', to: '/' },\n                    _react2.default.createElement(_reactFontawesome.FontAwesomeIcon, { icon: 'align-left' }),\n                    ' Metallica'\n                ),\n                _react2.default.createElement(\n                    'button',\n                    { className: 'navbar-toggler', type: 'button', 'data-toggle': 'collapse', 'data-target': '#navbarSupportedContent', 'aria-controls': 'navbarSupportedContent', 'aria-expanded': 'false', 'aria-label': 'Toggle navigation' },\n                    _react2.default.createElement('span', { className: 'navbar-toggler-icon' })\n                ),\n                _react2.default.createElement(\n                    'div',\n                    { className: 'collapse navbar-collapse', id: 'navbarSupportedContent' },\n                    _react2.default.createElement(\n                        'ul',\n                        { 'class': 'nav navbar-nav' },\n                        _react2.default.createElement(\n                            'li',\n                            null,\n                            _react2.default.createElement(\n                                _reactRouterDom.NavLink,\n                                { className: 'nav-link', to: '/faqs' },\n                                'FAQs'\n                            )\n                        )\n                    ),\n                    _react2.default.createElement(\n                        'ul',\n                        { 'class': 'nav navbar-nav navbar-right' },\n                        _react2.default.createElement(\n                            'li',\n                            null,\n                            _react2.default.createElement(\n                                'a',\n                                { href: '#' },\n                                _react2.default.createElement('span', { 'class': 'glyphicon glyphicon-user' }),\n                                ' Sign Up'\n                            )\n                        ),\n                        _react2.default.createElement(\n                            'li',\n                            null,\n                            _react2.default.createElement(\n                                'a',\n                                { href: '#' },\n                                _react2.default.createElement('span', { 'class': 'glyphicon glyphicon-log-in' }),\n                                ' Login'\n                            )\n                        )\n                    )\n                )\n            );\n        }\n    }]);\n\n    return NavigationBar;\n}(_react.Component);\n\nexports.default = NavigationBar;\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/components/header/navigationBar.js\n// module id = 278\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/components/header/navigationBar.js?");

/***/ })

})