self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_lukas_OneDrive_Desktop_bakalarka_my_site_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_lukas_OneDrive_Desktop_bakalarka_my_site_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_lukas_OneDrive_Desktop_bakalarka_my_site_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_lukas_OneDrive_Desktop_bakalarka_my_site_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var C_Users_lukas_OneDrive_Desktop_bakalarka_my_site_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/error */ "./node_modules/next/error.js");
/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_error__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next-seo */ "./node_modules/next-seo/lib/next-seo.module.js");
/* harmony import */ var utils_media__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! utils/media */ "./utils/media.js");
/* harmony import */ var utils_api__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! utils/api */ "./utils/api.js");
/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/styles/index.css */ "./styles/index.css");
/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_styles_index_css__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.css */ "./node_modules/bootstrap/dist/css/bootstrap.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @/styles/style.scss */ "./styles/style.scss");
/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_styles_style_scss__WEBPACK_IMPORTED_MODULE_13__);
/* module decorator */ module = __webpack_require__.hmd(module);






var _jsxFileName = "C:\\Users\\lukas\\OneDrive\\Desktop\\bakalarka\\my-site\\frontend\\pages\\_app.js",
    _this = undefined;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_lukas_OneDrive_Desktop_bakalarka_my_site_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }












var MyApp = function MyApp(_ref) {
  var Component = _ref.Component,
      pageProps = _ref.pageProps;
  // Extract the data we need
  var global = pageProps.global;

  if (global == null) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)((next_error__WEBPACK_IMPORTED_MODULE_6___default()), {
      statusCode: 404
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 12
    }, _this);
  }

  var _global$attributes = global.attributes,
      metadata = _global$attributes.metadata,
      favicon = _global$attributes.favicon,
      metaTitleSuffix = _global$attributes.metaTitleSuffix;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_5___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("link", {
        rel: "shortcut icon",
        href: (0,utils_media__WEBPACK_IMPORTED_MODULE_9__.getStrapiMedia)(favicon.data.attributes.url)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("link", {
        rel: "preconnect",
        href: "https://fonts.googleapis.com"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("link", {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossorigin: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("link", {
        href: "https://fonts.googleapis.com/css2?family=Poppins&display=swap",
        rel: "stylesheet"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(next_seo__WEBPACK_IMPORTED_MODULE_8__.DefaultSeo, {
      titleTemplate: "%s | ".concat(metaTitleSuffix),
      title: "Page",
      description: metadata.metaDescription,
      openGraph: {
        images: Object.values(metadata.shareImage.data.attributes.formats).map(function (image) {
          return {
            url: (0,utils_media__WEBPACK_IMPORTED_MODULE_9__.getStrapiMedia)(image.url),
            width: image.width,
            height: image.height
          };
        })
      },
      twitter: {
        cardType: metadata.twitterCardType,
        handle: metadata.twitterUsername
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }, _this)]
  }, void 0, true);
}; // getInitialProps disables automatic static optimization for pages that don't
// have getStaticProps. So [[...slug]] pages still get SSG.
// Hopefully we can replace this with getStaticProps once this issue is fixed:
// https://github.com/vercel/next.js/discussions/10949


_c = MyApp;

MyApp.getInitialProps = /*#__PURE__*/function () {
  var _ref2 = (0,C_Users_lukas_OneDrive_Desktop_bakalarka_my_site_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/C_Users_lukas_OneDrive_Desktop_bakalarka_my_site_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(appContext) {
    var appProps, globalLocale;
    return C_Users_lukas_OneDrive_Desktop_bakalarka_my_site_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return next_app__WEBPACK_IMPORTED_MODULE_4___default().getInitialProps(appContext);

          case 2:
            appProps = _context.sent;
            _context.next = 5;
            return (0,utils_api__WEBPACK_IMPORTED_MODULE_10__.getGlobalData)(appContext.router.locale);

          case 5:
            globalLocale = _context.sent;
            return _context.abrupt("return", _objectSpread(_objectSpread({}, appProps), {}, {
              pageProps: {
                global: globalLocale
              }
            }));

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref2.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (MyApp);

var _c;

$RefreshReg$(_c, "MyApp");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC5qcyJdLCJuYW1lcyI6WyJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImdsb2JhbCIsImF0dHJpYnV0ZXMiLCJtZXRhZGF0YSIsImZhdmljb24iLCJtZXRhVGl0bGVTdWZmaXgiLCJnZXRTdHJhcGlNZWRpYSIsImRhdGEiLCJ1cmwiLCJtZXRhRGVzY3JpcHRpb24iLCJpbWFnZXMiLCJPYmplY3QiLCJ2YWx1ZXMiLCJzaGFyZUltYWdlIiwiZm9ybWF0cyIsIm1hcCIsImltYWdlIiwid2lkdGgiLCJoZWlnaHQiLCJjYXJkVHlwZSIsInR3aXR0ZXJDYXJkVHlwZSIsImhhbmRsZSIsInR3aXR0ZXJVc2VybmFtZSIsImdldEluaXRpYWxQcm9wcyIsImFwcENvbnRleHQiLCJBcHAiLCJhcHBQcm9wcyIsImdldEdsb2JhbERhdGEiLCJyb3V0ZXIiLCJsb2NhbGUiLCJnbG9iYWxMb2NhbGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsT0FBOEI7QUFBQSxNQUEzQkMsU0FBMkIsUUFBM0JBLFNBQTJCO0FBQUEsTUFBaEJDLFNBQWdCLFFBQWhCQSxTQUFnQjtBQUMxQztBQUQwQyxNQUVsQ0MsTUFGa0MsR0FFdkJELFNBRnVCLENBRWxDQyxNQUZrQzs7QUFHMUMsTUFBSUEsTUFBTSxJQUFJLElBQWQsRUFBb0I7QUFDbEIsd0JBQU8sOERBQUMsbURBQUQ7QUFBVyxnQkFBVSxFQUFFO0FBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBUDtBQUNEOztBQUx5QywyQkFPS0EsTUFBTSxDQUFDQyxVQVBaO0FBQUEsTUFPbENDLFFBUGtDLHNCQU9sQ0EsUUFQa0M7QUFBQSxNQU94QkMsT0FQd0Isc0JBT3hCQSxPQVB3QjtBQUFBLE1BT2ZDLGVBUGUsc0JBT2ZBLGVBUGU7QUFTMUMsc0JBQ0U7QUFBQSw0QkFFRSw4REFBQyxrREFBRDtBQUFBLDhCQUNFO0FBQ0UsV0FBRyxFQUFDLGVBRE47QUFFRSxZQUFJLEVBQUVDLDJEQUFjLENBQUNGLE9BQU8sQ0FBQ0csSUFBUixDQUFhTCxVQUFiLENBQXdCTSxHQUF6QjtBQUZ0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFLRTtBQUFNLFdBQUcsRUFBQyxZQUFWO0FBQXVCLFlBQUksRUFBQztBQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBTEYsZUFNRTtBQUFNLFdBQUcsRUFBQyxZQUFWO0FBQXVCLFlBQUksRUFBQywyQkFBNUI7QUFBd0QsbUJBQVc7QUFBbkU7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQU5GLGVBT0U7QUFBTSxZQUFJLEVBQUMsK0RBQVg7QUFBMkUsV0FBRyxFQUFDO0FBQS9FO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRixlQVlFLDhEQUFDLGdEQUFEO0FBQ0UsbUJBQWEsaUJBQVVILGVBQVYsQ0FEZjtBQUVFLFdBQUssRUFBQyxNQUZSO0FBR0UsaUJBQVcsRUFBRUYsUUFBUSxDQUFDTSxlQUh4QjtBQUlFLGVBQVMsRUFBRTtBQUNUQyxjQUFNLEVBQUVDLE1BQU0sQ0FBQ0MsTUFBUCxDQUNOVCxRQUFRLENBQUNVLFVBQVQsQ0FBb0JOLElBQXBCLENBQXlCTCxVQUF6QixDQUFvQ1ksT0FEOUIsRUFFTkMsR0FGTSxDQUVGLFVBQUNDLEtBQUQsRUFBVztBQUNmLGlCQUFPO0FBQ0xSLGVBQUcsRUFBRUYsMkRBQWMsQ0FBQ1UsS0FBSyxDQUFDUixHQUFQLENBRGQ7QUFFTFMsaUJBQUssRUFBRUQsS0FBSyxDQUFDQyxLQUZSO0FBR0xDLGtCQUFNLEVBQUVGLEtBQUssQ0FBQ0U7QUFIVCxXQUFQO0FBS0QsU0FSTztBQURDLE9BSmI7QUFlRSxhQUFPLEVBQUU7QUFDUEMsZ0JBQVEsRUFBRWhCLFFBQVEsQ0FBQ2lCLGVBRFo7QUFFUEMsY0FBTSxFQUFFbEIsUUFBUSxDQUFDbUI7QUFGVjtBQWZYO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFaRixlQWlDRSw4REFBQyxTQUFELG9CQUFldEIsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBakNGO0FBQUEsa0JBREY7QUFxQ0QsQ0E5Q0QsQyxDQWdEQTtBQUNBO0FBQ0E7QUFDQTs7O0tBbkRNRixLOztBQW9ETkEsS0FBSyxDQUFDeUIsZUFBTjtBQUFBLHdXQUF3QixpQkFBT0MsVUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUVDQywrREFBQSxDQUFvQkQsVUFBcEIsQ0FGRDs7QUFBQTtBQUVoQkUsb0JBRmdCO0FBQUE7QUFBQSxtQkFHS0MseURBQWEsQ0FBQ0gsVUFBVSxDQUFDSSxNQUFYLENBQWtCQyxNQUFuQixDQUhsQjs7QUFBQTtBQUdoQkMsd0JBSGdCO0FBQUEsNkVBTWpCSixRQU5pQjtBQU9wQjFCLHVCQUFTLEVBQUU7QUFDVEMsc0JBQU0sRUFBRTZCO0FBREM7QUFQUzs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUF4Qjs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFhQSwrREFBZWhDLEtBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5jMjY1MDc0ZDRiZDY3Yzg1YWE1ZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFwcCBmcm9tIFwibmV4dC9hcHBcIlxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiXG5pbXBvcnQgRXJyb3JQYWdlIGZyb20gXCJuZXh0L2Vycm9yXCJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiXG5pbXBvcnQgeyBEZWZhdWx0U2VvIH0gZnJvbSBcIm5leHQtc2VvXCJcbmltcG9ydCB7IGdldFN0cmFwaU1lZGlhIH0gZnJvbSBcInV0aWxzL21lZGlhXCJcbmltcG9ydCB7IGdldEdsb2JhbERhdGEgfSBmcm9tIFwidXRpbHMvYXBpXCJcbmltcG9ydCBcIkAvc3R5bGVzL2luZGV4LmNzc1wiXG5pbXBvcnQgXCJib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLmNzc1wiXG5pbXBvcnQgXCJAL3N0eWxlcy9zdHlsZS5zY3NzXCJcblxuY29uc3QgTXlBcHAgPSAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSA9PiB7XG4gIC8vIEV4dHJhY3QgdGhlIGRhdGEgd2UgbmVlZFxuICBjb25zdCB7IGdsb2JhbCB9ID0gcGFnZVByb3BzXG4gIGlmIChnbG9iYWwgPT0gbnVsbCkge1xuICAgIHJldHVybiA8RXJyb3JQYWdlIHN0YXR1c0NvZGU9ezQwNH0gLz5cbiAgfVxuXG4gIGNvbnN0IHsgbWV0YWRhdGEsIGZhdmljb24sIG1ldGFUaXRsZVN1ZmZpeCB9ID0gZ2xvYmFsLmF0dHJpYnV0ZXNcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7LyogRmF2aWNvbiAqL31cbiAgICAgIDxIZWFkPlxuICAgICAgICA8bGlua1xuICAgICAgICAgIHJlbD1cInNob3J0Y3V0IGljb25cIlxuICAgICAgICAgIGhyZWY9e2dldFN0cmFwaU1lZGlhKGZhdmljb24uZGF0YS5hdHRyaWJ1dGVzLnVybCl9XG4gICAgICAgIC8+XG4gICAgICAgIDxsaW5rIHJlbD1cInByZWNvbm5lY3RcIiBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbVwiLz5cbiAgICAgICAgPGxpbmsgcmVsPVwicHJlY29ubmVjdFwiIGhyZWY9XCJodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tXCIgY3Jvc3NvcmlnaW4vPlxuICAgICAgICA8bGluayBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Qb3BwaW5zJmRpc3BsYXk9c3dhcFwiIHJlbD1cInN0eWxlc2hlZXRcIj48L2xpbms+XG4gICAgICA8L0hlYWQ+XG4gICAgICB7LyogR2xvYmFsIHNpdGUgbWV0YWRhdGEgKi99XG4gICAgICA8RGVmYXVsdFNlb1xuICAgICAgICB0aXRsZVRlbXBsYXRlPXtgJXMgfCAke21ldGFUaXRsZVN1ZmZpeH1gfVxuICAgICAgICB0aXRsZT1cIlBhZ2VcIlxuICAgICAgICBkZXNjcmlwdGlvbj17bWV0YWRhdGEubWV0YURlc2NyaXB0aW9ufVxuICAgICAgICBvcGVuR3JhcGg9e3tcbiAgICAgICAgICBpbWFnZXM6IE9iamVjdC52YWx1ZXMoXG4gICAgICAgICAgICBtZXRhZGF0YS5zaGFyZUltYWdlLmRhdGEuYXR0cmlidXRlcy5mb3JtYXRzXG4gICAgICAgICAgKS5tYXAoKGltYWdlKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICB1cmw6IGdldFN0cmFwaU1lZGlhKGltYWdlLnVybCksXG4gICAgICAgICAgICAgIHdpZHRoOiBpbWFnZS53aWR0aCxcbiAgICAgICAgICAgICAgaGVpZ2h0OiBpbWFnZS5oZWlnaHQsXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSksXG4gICAgICAgIH19XG4gICAgICAgIHR3aXR0ZXI9e3tcbiAgICAgICAgICBjYXJkVHlwZTogbWV0YWRhdGEudHdpdHRlckNhcmRUeXBlLFxuICAgICAgICAgIGhhbmRsZTogbWV0YWRhdGEudHdpdHRlclVzZXJuYW1lLFxuICAgICAgICB9fVxuICAgICAgLz5cbiAgICAgIHsvKiBEaXNwbGF5IHRoZSBjb250ZW50ICovfVxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgIDwvPlxuICApXG59XG5cbi8vIGdldEluaXRpYWxQcm9wcyBkaXNhYmxlcyBhdXRvbWF0aWMgc3RhdGljIG9wdGltaXphdGlvbiBmb3IgcGFnZXMgdGhhdCBkb24ndFxuLy8gaGF2ZSBnZXRTdGF0aWNQcm9wcy4gU28gW1suLi5zbHVnXV0gcGFnZXMgc3RpbGwgZ2V0IFNTRy5cbi8vIEhvcGVmdWxseSB3ZSBjYW4gcmVwbGFjZSB0aGlzIHdpdGggZ2V0U3RhdGljUHJvcHMgb25jZSB0aGlzIGlzc3VlIGlzIGZpeGVkOlxuLy8gaHR0cHM6Ly9naXRodWIuY29tL3ZlcmNlbC9uZXh0LmpzL2Rpc2N1c3Npb25zLzEwOTQ5XG5NeUFwcC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoYXBwQ29udGV4dCkgPT4ge1xuICAvLyBDYWxscyBwYWdlJ3MgYGdldEluaXRpYWxQcm9wc2AgYW5kIGZpbGxzIGBhcHBQcm9wcy5wYWdlUHJvcHNgXG4gIGNvbnN0IGFwcFByb3BzID0gYXdhaXQgQXBwLmdldEluaXRpYWxQcm9wcyhhcHBDb250ZXh0KVxuICBjb25zdCBnbG9iYWxMb2NhbGUgPSBhd2FpdCBnZXRHbG9iYWxEYXRhKGFwcENvbnRleHQucm91dGVyLmxvY2FsZSlcblxuICByZXR1cm4ge1xuICAgIC4uLmFwcFByb3BzLFxuICAgIHBhZ2VQcm9wczoge1xuICAgICAgZ2xvYmFsOiBnbG9iYWxMb2NhbGUsXG4gICAgfSxcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcFxuIl0sInNvdXJjZVJvb3QiOiIifQ==