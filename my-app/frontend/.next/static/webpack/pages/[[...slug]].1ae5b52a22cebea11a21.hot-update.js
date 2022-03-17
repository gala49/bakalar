self["webpackHotUpdate_N_E"]("pages/[[...slug]]",{

/***/ "./components/layout.js":
/*!******************************!*\
  !*** ./components/layout.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _elements_navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./elements/navbar */ "./components/elements/navbar.js");
/* harmony import */ var _elements_footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./elements/footer */ "./components/elements/footer.js");
/* harmony import */ var _elements_notification_banner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./elements/notification-banner */ "./components/elements/notification-banner.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\lukas\\OneDrive\\Desktop\\bakalarka\\my-site\\frontend\\components\\layout.js",
    _this = undefined,
    _s = $RefreshSig$();






var Layout = function Layout(_ref) {
  _s();

  var children = _ref.children,
      global = _ref.global,
      pageContext = _ref.pageContext;
  var _global$attributes = global.attributes,
      navbar = _global$attributes.navbar,
      footer = _global$attributes.footer,
      notificationBanner = _global$attributes.notificationBanner;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true),
      bannerIsShown = _useState[0],
      setBannerIsShown = _useState[1];

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "flex flex-col justify-between min-h-screen",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "flex-1",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_elements_navbar__WEBPACK_IMPORTED_MODULE_2__.default, {
        navbar: navbar,
        pageContext: pageContext
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: children
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_elements_footer__WEBPACK_IMPORTED_MODULE_3__.default, {
      footer: footer
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 5
  }, _this);
};

_s(Layout, "ain661HBhjkqZfDgjKdAb5SUzKo=");

_c = Layout;
/* harmony default export */ __webpack_exports__["default"] = (Layout);

var _c;

$RefreshReg$(_c, "Layout");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXQuanMiXSwibmFtZXMiOlsiTGF5b3V0IiwiY2hpbGRyZW4iLCJnbG9iYWwiLCJwYWdlQ29udGV4dCIsImF0dHJpYnV0ZXMiLCJuYXZiYXIiLCJmb290ZXIiLCJub3RpZmljYXRpb25CYW5uZXIiLCJ1c2VTdGF0ZSIsImJhbm5lcklzU2hvd24iLCJzZXRCYW5uZXJJc1Nob3duIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxPQUF1QztBQUFBOztBQUFBLE1BQXBDQyxRQUFvQyxRQUFwQ0EsUUFBb0M7QUFBQSxNQUExQkMsTUFBMEIsUUFBMUJBLE1BQTBCO0FBQUEsTUFBbEJDLFdBQWtCLFFBQWxCQSxXQUFrQjtBQUFBLDJCQUNMRCxNQUFNLENBQUNFLFVBREY7QUFBQSxNQUM1Q0MsTUFENEMsc0JBQzVDQSxNQUQ0QztBQUFBLE1BQ3BDQyxNQURvQyxzQkFDcENBLE1BRG9DO0FBQUEsTUFDNUJDLGtCQUQ0QixzQkFDNUJBLGtCQUQ0Qjs7QUFBQSxrQkFHVkMsK0NBQVEsQ0FBQyxJQUFELENBSEU7QUFBQSxNQUc3Q0MsYUFINkM7QUFBQSxNQUc5QkMsZ0JBSDhCOztBQUlwRCxzQkFDRTtBQUFLLGFBQVMsRUFBQyw0Q0FBZjtBQUFBLDRCQUNFO0FBQUssZUFBUyxFQUFDLFFBQWY7QUFBQSw4QkFDRSw4REFBQyxxREFBRDtBQUFRLGNBQU0sRUFBRUwsTUFBaEI7QUFBd0IsbUJBQVcsRUFBRUY7QUFBckM7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBRUU7QUFBQSxrQkFBTUY7QUFBTjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFNRSw4REFBQyxxREFBRDtBQUFRLFlBQU0sRUFBRUs7QUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBVUQsQ0FkRDs7R0FBTU4sTTs7S0FBQUEsTTtBQWdCTiwrREFBZUEsTUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9bWy4uLnNsdWddXS4xYWU1YjUyYTIyY2ViZWExMWEyMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IE5hdmJhciBmcm9tIFwiLi9lbGVtZW50cy9uYXZiYXJcIlxuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi9lbGVtZW50cy9mb290ZXJcIlxuaW1wb3J0IE5vdGlmaWNhdGlvbkJhbm5lciBmcm9tIFwiLi9lbGVtZW50cy9ub3RpZmljYXRpb24tYmFubmVyXCJcblxuY29uc3QgTGF5b3V0ID0gKHsgY2hpbGRyZW4sIGdsb2JhbCwgcGFnZUNvbnRleHQgfSkgPT4ge1xuICBjb25zdCB7IG5hdmJhciwgZm9vdGVyLCBub3RpZmljYXRpb25CYW5uZXIgfSA9IGdsb2JhbC5hdHRyaWJ1dGVzXG5cbiAgY29uc3QgW2Jhbm5lcklzU2hvd24sIHNldEJhbm5lcklzU2hvd25dID0gdXNlU3RhdGUodHJ1ZSlcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wganVzdGlmeS1iZXR3ZWVuIG1pbi1oLXNjcmVlblwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTFcIj5cbiAgICAgICAgPE5hdmJhciBuYXZiYXI9e25hdmJhcn0gcGFnZUNvbnRleHQ9e3BhZ2VDb250ZXh0fSAvPlxuICAgICAgICA8ZGl2PntjaGlsZHJlbn08L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgXG4gICAgICA8Rm9vdGVyIGZvb3Rlcj17Zm9vdGVyfSAvPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IExheW91dFxuIl0sInNvdXJjZVJvb3QiOiIifQ==