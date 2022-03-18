self["webpackHotUpdate_N_E"]("pages/[[...slug]]",{

/***/ "./components/sections/feature-rows-group.js":
/*!***************************************************!*\
  !*** ./components/sections/feature-rows-group.js ***!
  \***************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _elements_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../elements/image */ "./components/elements/image.js");
/* harmony import */ var _elements_video__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../elements/video */ "./components/elements/video.js");
/* harmony import */ var _elements_custom_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../elements/custom-link */ "./components/elements/custom-link.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\lukas\\OneDrive\\Desktop\\bakalarska-prace\\my-app\\frontend\\components\\sections\\feature-rows-group.js",
    _this = undefined;






var FeatureRowsGroup = function FeatureRowsGroup(_ref) {
  var data = _ref.data;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "container flex flex-col gap-12 py-12 row",
    children: data.features.map(function (feature, index) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()( // Common classes
        "flex flex-col justify-start gap-10 row row-cols-1 row-cols-lg-2", {
          "lg:flex-row": index % 2 === 0,
          "lg:flex-row-reverse": index % 2 === 1
        }),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "col text-lg",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
            className: "title",
            children: feature.title
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 23,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            className: "my-6",
            children: feature.description
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_elements_custom_link__WEBPACK_IMPORTED_MODULE_4__.default, {
            link: feature.link,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "text-blue-600 with-arrow hover:underline",
              children: feature.link.text
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 26,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 25,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "col max-h-full",
          children: [feature.media.data.attributes.mime.startsWith("image") && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "w-full h-auto",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_elements_image__WEBPACK_IMPORTED_MODULE_2__.default, {
              media: feature.media
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 36,
              columnNumber: 17
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 15
          }, _this), feature.media.data.attributes.mime.startsWith("video") && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_elements_video__WEBPACK_IMPORTED_MODULE_3__.default, {
            media: feature.media,
            className: "w-full h-auto",
            autoPlay: true,
            controls: false
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 15
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 11
        }, _this)]
      }, feature.id, true, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 9
      }, _this);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }, _this);
};

_c = FeatureRowsGroup;
/* harmony default export */ __webpack_exports__["default"] = (FeatureRowsGroup);

var _c;

$RefreshReg$(_c, "FeatureRowsGroup");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zZWN0aW9ucy9mZWF0dXJlLXJvd3MtZ3JvdXAuanMiXSwibmFtZXMiOlsiRmVhdHVyZVJvd3NHcm91cCIsImRhdGEiLCJmZWF0dXJlcyIsIm1hcCIsImZlYXR1cmUiLCJpbmRleCIsImNsYXNzTmFtZXMiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwibGluayIsInRleHQiLCJtZWRpYSIsImF0dHJpYnV0ZXMiLCJtaW1lIiwic3RhcnRzV2l0aCIsImlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsT0FBYztBQUFBLE1BQVhDLElBQVcsUUFBWEEsSUFBVztBQUNyQyxzQkFDRTtBQUFLLGFBQVMsRUFBQywwQ0FBZjtBQUFBLGNBQ0dBLElBQUksQ0FBQ0MsUUFBTCxDQUFjQyxHQUFkLENBQWtCLFVBQUNDLE9BQUQsRUFBVUMsS0FBVjtBQUFBLDBCQUNqQjtBQUNFLGlCQUFTLEVBQUVDLGlEQUFVLEVBQ25CO0FBQ0EseUVBRm1CLEVBR25CO0FBQ0UseUJBQWVELEtBQUssR0FBRyxDQUFSLEtBQWMsQ0FEL0I7QUFFRSxpQ0FBdUJBLEtBQUssR0FBRyxDQUFSLEtBQWM7QUFGdkMsU0FIbUIsQ0FEdkI7QUFBQSxnQ0FZRTtBQUFLLG1CQUFTLEVBQUMsYUFBZjtBQUFBLGtDQUNFO0FBQUkscUJBQVMsRUFBQyxPQUFkO0FBQUEsc0JBQXVCRCxPQUFPLENBQUNHO0FBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFFRTtBQUFHLHFCQUFTLEVBQUMsTUFBYjtBQUFBLHNCQUFxQkgsT0FBTyxDQUFDSTtBQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZGLGVBR0UsOERBQUMsMERBQUQ7QUFBWSxnQkFBSSxFQUFFSixPQUFPLENBQUNLLElBQTFCO0FBQUEsbUNBQ0U7QUFBSyx1QkFBUyxFQUFDLDBDQUFmO0FBQUEsd0JBQ0dMLE9BQU8sQ0FBQ0ssSUFBUixDQUFhQztBQURoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBWkYsZUFzQkU7QUFBSyxtQkFBUyxFQUFDLGdCQUFmO0FBQUEscUJBRUdOLE9BQU8sQ0FBQ08sS0FBUixDQUFjVixJQUFkLENBQW1CVyxVQUFuQixDQUE4QkMsSUFBOUIsQ0FBbUNDLFVBQW5DLENBQThDLE9BQTlDLGtCQUNDO0FBQUsscUJBQVMsRUFBQyxlQUFmO0FBQUEsbUNBQ0UsOERBQUMsb0RBQUQ7QUFBVyxtQkFBSyxFQUFFVixPQUFPLENBQUNPO0FBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUhKLEVBUUdQLE9BQU8sQ0FBQ08sS0FBUixDQUFjVixJQUFkLENBQW1CVyxVQUFuQixDQUE4QkMsSUFBOUIsQ0FBbUNDLFVBQW5DLENBQThDLE9BQTlDLGtCQUNDLDhEQUFDLG9EQUFEO0FBQ0UsaUJBQUssRUFBRVYsT0FBTyxDQUFDTyxLQURqQjtBQUVFLHFCQUFTLEVBQUMsZUFGWjtBQUdFLG9CQUFRLE1BSFY7QUFJRSxvQkFBUSxFQUFFO0FBSlo7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFUSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBdEJGO0FBQUEsU0FTT1AsT0FBTyxDQUFDVyxFQVRmO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEaUI7QUFBQSxLQUFsQjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQThDRCxDQS9DRDs7S0FBTWYsZ0I7QUFpRE4sK0RBQWVBLGdCQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL1tbLi4uc2x1Z11dLjU5NmQyMzgwZDYyMzZlM2FlYTBjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiXG5pbXBvcnQgTmV4dEltYWdlIGZyb20gXCIuLi9lbGVtZW50cy9pbWFnZVwiXG5pbXBvcnQgVmlkZW8gZnJvbSBcIi4uL2VsZW1lbnRzL3ZpZGVvXCJcbmltcG9ydCBDdXN0b21MaW5rIGZyb20gXCIuLi9lbGVtZW50cy9jdXN0b20tbGlua1wiXG5cbmNvbnN0IEZlYXR1cmVSb3dzR3JvdXAgPSAoeyBkYXRhIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBmbGV4IGZsZXgtY29sIGdhcC0xMiBweS0xMiByb3dcIj5cbiAgICAgIHtkYXRhLmZlYXR1cmVzLm1hcCgoZmVhdHVyZSwgaW5kZXgpID0+IChcbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhcbiAgICAgICAgICAgIC8vIENvbW1vbiBjbGFzc2VzXG4gICAgICAgICAgICBcImZsZXggZmxleC1jb2wganVzdGlmeS1zdGFydCBnYXAtMTAgcm93IHJvdy1jb2xzLTEgcm93LWNvbHMtbGctMlwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcImxnOmZsZXgtcm93XCI6IGluZGV4ICUgMiA9PT0gMCxcbiAgICAgICAgICAgICAgXCJsZzpmbGV4LXJvdy1yZXZlcnNlXCI6IGluZGV4ICUgMiA9PT0gMSxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICApfVxuICAgICAgICAgIGtleT17ZmVhdHVyZS5pZH1cbiAgICAgICAgPlxuICAgICAgICAgIHsvKiBUZXh0IHNlY3Rpb24gKi99XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgdGV4dC1sZ1wiPlxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRpdGxlXCI+e2ZlYXR1cmUudGl0bGV9PC9oMz5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm15LTZcIj57ZmVhdHVyZS5kZXNjcmlwdGlvbn08L3A+XG4gICAgICAgICAgICA8Q3VzdG9tTGluayBsaW5rPXtmZWF0dXJlLmxpbmt9PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtYmx1ZS02MDAgd2l0aC1hcnJvdyBob3Zlcjp1bmRlcmxpbmVcIj5cbiAgICAgICAgICAgICAgICB7ZmVhdHVyZS5saW5rLnRleHR9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9DdXN0b21MaW5rPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIHsvKiBNZWRpYSBzZWN0aW9uICovfVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIG1heC1oLWZ1bGxcIj5cbiAgICAgICAgICAgIHsvKiBJbWFnZXMgKi99XG4gICAgICAgICAgICB7ZmVhdHVyZS5tZWRpYS5kYXRhLmF0dHJpYnV0ZXMubWltZS5zdGFydHNXaXRoKFwiaW1hZ2VcIikgJiYgKFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBoLWF1dG9cIj5cbiAgICAgICAgICAgICAgICA8TmV4dEltYWdlIG1lZGlhPXtmZWF0dXJlLm1lZGlhfSAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICB7LyogVmlkZW9zICovfVxuICAgICAgICAgICAge2ZlYXR1cmUubWVkaWEuZGF0YS5hdHRyaWJ1dGVzLm1pbWUuc3RhcnRzV2l0aChcInZpZGVvXCIpICYmIChcbiAgICAgICAgICAgICAgPFZpZGVvXG4gICAgICAgICAgICAgICAgbWVkaWE9e2ZlYXR1cmUubWVkaWF9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGgtYXV0b1wiXG4gICAgICAgICAgICAgICAgYXV0b1BsYXlcbiAgICAgICAgICAgICAgICBjb250cm9scz17ZmFsc2V9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICkpfVxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEZlYXR1cmVSb3dzR3JvdXBcbiJdLCJzb3VyY2VSb290IjoiIn0=