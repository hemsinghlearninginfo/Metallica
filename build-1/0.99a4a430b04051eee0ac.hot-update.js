webpackHotUpdate(0,{

/***/ 248:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(4);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _importAllPages = __webpack_require__(63);\n\nvar _importAllPages2 = _interopRequireDefault(_importAllPages);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar FAQs = function (_Component) {\n  _inherits(FAQs, _Component);\n\n  function FAQs() {\n    _classCallCheck(this, FAQs);\n\n    return _possibleConstructorReturn(this, (FAQs.__proto__ || Object.getPrototypeOf(FAQs)).apply(this, arguments));\n  }\n\n  _createClass(FAQs, [{\n    key: \"render\",\n    value: function render() {\n      return _react2.default.createElement(\n        \"div\",\n        null,\n        _react2.default.createElement(_importAllPages2.default.PageHeader, { name: \"FAQs\", description: \"\" }),\n        _react2.default.createElement(\n          \"div\",\n          { className: \"content-box\" },\n          _react2.default.createElement(\n            \"div\",\n            { className: \"container\" },\n            _react2.default.createElement(\n              \"div\",\n              { className: \"col-md-12\" },\n              _react2.default.createElement(\n                \"div\",\n                { className: \"tab-content panels-faq\" },\n                _react2.default.createElement(\n                  \"div\",\n                  { className: \"tab-pane active\", id: \"tab1\" },\n                  _react2.default.createElement(\n                    \"div\",\n                    { className: \"panel-group\", id: \"help-accordion-1\" },\n                    _react2.default.createElement(\n                      \"div\",\n                      { className: \"panel panel-default panel-help\" },\n                      _react2.default.createElement(\n                        \"a\",\n                        { href: \"#opret-produkt\", \"data-toggle\": \"collapse\", \"data-parent\": \"#help-accordion-1\" },\n                        _react2.default.createElement(\n                          \"div\",\n                          { className: \"panel-heading\" },\n                          _react2.default.createElement(\n                            \"h2\",\n                            null,\n                            \"How do I edit my profile?\"\n                          )\n                        )\n                      ),\n                      _react2.default.createElement(\n                        \"div\",\n                        { id: \"opret-produkt\", className: \"collapse in\" },\n                        _react2.default.createElement(\n                          \"div\",\n                          { className: \"panel-body\" },\n                          _react2.default.createElement(\n                            \"p\",\n                            null,\n                            \"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus nesciunt ut officiis accusantium quisquam minima praesentium, beatae fugit illo nobis fugiat adipisci quia distinctio repellat culpa saepe, optio aperiam est!\"\n                          ),\n                          _react2.default.createElement(\n                            \"p\",\n                            null,\n                            _react2.default.createElement(\n                              \"strong\",\n                              null,\n                              \"Example: \"\n                            ),\n                            \"Facere, id excepturi iusto aliquid beatae delectus nemo enim, ad saepe nam et.\"\n                          )\n                        )\n                      )\n                    ),\n                    _react2.default.createElement(\n                      \"div\",\n                      { className: \"panel panel-default panel-help\" },\n                      _react2.default.createElement(\n                        \"a\",\n                        { href: \"#rediger-produkt\", \"data-toggle\": \"collapse\", \"data-parent\": \"#help-accordion-1\" },\n                        _react2.default.createElement(\n                          \"div\",\n                          { className: \"panel-heading\" },\n                          _react2.default.createElement(\n                            \"h2\",\n                            null,\n                            \"How do I upload a new profile picture?\"\n                          )\n                        )\n                      ),\n                      _react2.default.createElement(\n                        \"div\",\n                        { id: \"rediger-produkt\", className: \"collapse\" },\n                        _react2.default.createElement(\n                          \"div\",\n                          { className: \"panel-body\" },\n                          _react2.default.createElement(\n                            \"p\",\n                            null,\n                            \"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus nesciunt ut officiis accusantium quisquam minima praesentium, beatae fugit illo nobis fugiat adipisci quia distinctio repellat culpa saepe, optio aperiam est!\"\n                          ),\n                          _react2.default.createElement(\n                            \"p\",\n                            null,\n                            _react2.default.createElement(\n                              \"strong\",\n                              null,\n                              \"Example: \"\n                            ),\n                            \"Facere, id excepturi iusto aliquid beatae delectus nemo enim, ad saepe nam et.\"\n                          )\n                        )\n                      )\n                    ),\n                    _react2.default.createElement(\n                      \"div\",\n                      { className: \"panel panel-default panel-help\" },\n                      _react2.default.createElement(\n                        \"a\",\n                        { href: \"#ret-pris\", \"data-toggle\": \"collapse\", \"data-parent\": \"#help-accordion-1\" },\n                        _react2.default.createElement(\n                          \"div\",\n                          { className: \"panel-heading\" },\n                          _react2.default.createElement(\n                            \"h2\",\n                            null,\n                            \"Can I change my phone number?\"\n                          )\n                        )\n                      ),\n                      _react2.default.createElement(\n                        \"div\",\n                        { id: \"ret-pris\", className: \"collapse\" },\n                        _react2.default.createElement(\n                          \"div\",\n                          { className: \"panel-body\" },\n                          _react2.default.createElement(\n                            \"p\",\n                            null,\n                            \"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus nesciunt ut officiis accusantium quisquam minima praesentium, beatae fugit illo nobis fugiat adipisci quia distinctio repellat culpa saepe, optio aperiam est!\"\n                          ),\n                          _react2.default.createElement(\n                            \"p\",\n                            null,\n                            _react2.default.createElement(\n                              \"strong\",\n                              null,\n                              \"Example: \"\n                            ),\n                            \"Facere, id excepturi iusto aliquid beatae delectus nemo enim, ad saepe nam et.\"\n                          )\n                        )\n                      )\n                    ),\n                    _react2.default.createElement(\n                      \"div\",\n                      { className: \"panel panel-default panel-help\" },\n                      _react2.default.createElement(\n                        \"a\",\n                        { href: \"#slet-produkt\", \"data-toggle\": \"collapse\", \"data-parent\": \"#help-accordion-1\" },\n                        _react2.default.createElement(\n                          \"div\",\n                          { className: \"panel-heading\" },\n                          _react2.default.createElement(\n                            \"h2\",\n                            null,\n                            \"Where do I change my privacy settings?\"\n                          )\n                        )\n                      ),\n                      _react2.default.createElement(\n                        \"div\",\n                        { id: \"slet-produkt\", className: \"collapse\" },\n                        _react2.default.createElement(\n                          \"div\",\n                          { className: \"panel-body\" },\n                          _react2.default.createElement(\n                            \"p\",\n                            null,\n                            \"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus nesciunt ut officiis accusantium quisquam minima praesentium, beatae fugit illo nobis fugiat adipisci quia distinctio repellat culpa saepe, optio aperiam est!\"\n                          ),\n                          _react2.default.createElement(\n                            \"p\",\n                            null,\n                            _react2.default.createElement(\n                              \"strong\",\n                              null,\n                              \"Example: \"\n                            ),\n                            \"Facere, id excepturi iusto aliquid beatae delectus nemo enim, ad saepe nam et.\"\n                          )\n                        )\n                      )\n                    ),\n                    _react2.default.createElement(\n                      \"div\",\n                      { className: \"panel panel-default panel-help\" },\n                      _react2.default.createElement(\n                        \"a\",\n                        { href: \"#opret-kampagne\", \"data-toggle\": \"collapse\", \"data-parent\": \"#help-accordion-1\" },\n                        _react2.default.createElement(\n                          \"div\",\n                          { className: \"panel-heading\" },\n                          _react2.default.createElement(\n                            \"h2\",\n                            null,\n                            \"What is this?\"\n                          )\n                        )\n                      ),\n                      _react2.default.createElement(\n                        \"div\",\n                        { id: \"opret-kampagne\", className: \"collapse\" },\n                        _react2.default.createElement(\n                          \"div\",\n                          { className: \"panel-body\" },\n                          _react2.default.createElement(\n                            \"p\",\n                            null,\n                            \"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus nesciunt ut officiis accusantium quisquam minima praesentium, beatae fugit illo nobis fugiat adipisci quia distinctio repellat culpa saepe, optio aperiam est!\"\n                          ),\n                          _react2.default.createElement(\n                            \"p\",\n                            null,\n                            _react2.default.createElement(\n                              \"strong\",\n                              null,\n                              \"Example: \"\n                            ),\n                            \"Facere, id excepturi iusto aliquid beatae delectus nemo enim, ad saepe nam et.\"\n                          )\n                        )\n                      )\n                    )\n                  )\n                ),\n                _react2.default.createElement(\n                  \"div\",\n                  { className: \"tab-pane\", id: \"tab2\" },\n                  _react2.default.createElement(\n                    \"div\",\n                    { className: \"panel-group\", id: \"help-accordion-2\" },\n                    _react2.default.createElement(\n                      \"div\",\n                      { className: \"panel panel-default panel-help\" },\n                      _react2.default.createElement(\n                        \"a\",\n                        { href: \"#help-three\", \"data-toggle\": \"collapse\", \"data-parent\": \"#help-accordion-2\" },\n                        _react2.default.createElement(\n                          \"div\",\n                          { className: \"panel-heading\" },\n                          _react2.default.createElement(\n                            \"h2\",\n                            null,\n                            \"Lorem ipsum?\"\n                          )\n                        )\n                      ),\n                      _react2.default.createElement(\n                        \"div\",\n                        { id: \"help-three\", className: \"collapse in\" },\n                        _react2.default.createElement(\n                          \"div\",\n                          { className: \"panel-body\" },\n                          _react2.default.createElement(\n                            \"p\",\n                            null,\n                            \"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus nesciunt ut officiis accusantium quisquam minima praesentium, beatae fugit illo nobis fugiat adipisci quia distinctio repellat culpa saepe, optio aperiam est!\"\n                          ),\n                          _react2.default.createElement(\n                            \"p\",\n                            null,\n                            _react2.default.createElement(\n                              \"strong\",\n                              null,\n                              \"Example: \"\n                            ),\n                            \"Facere, id excepturi iusto aliquid beatae delectus nemo enim, ad saepe nam et.\"\n                          )\n                        )\n                      )\n                    )\n                  )\n                )\n              )\n            )\n          )\n        )\n      );\n    }\n  }]);\n\n  return FAQs;\n}(_react.Component);\n\nexports.default = FAQs;\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/components/faqs.js\n// module id = 248\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/components/faqs.js?");

/***/ })

})