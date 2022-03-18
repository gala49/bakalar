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
          className: "w-full col text-lg",
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
          className: "w-full col max-h-full",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zZWN0aW9ucy9mZWF0dXJlLXJvd3MtZ3JvdXAuanMiXSwibmFtZXMiOlsiRmVhdHVyZVJvd3NHcm91cCIsImRhdGEiLCJmZWF0dXJlcyIsIm1hcCIsImZlYXR1cmUiLCJpbmRleCIsImNsYXNzTmFtZXMiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwibGluayIsInRleHQiLCJtZWRpYSIsImF0dHJpYnV0ZXMiLCJtaW1lIiwic3RhcnRzV2l0aCIsImlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsT0FBYztBQUFBLE1BQVhDLElBQVcsUUFBWEEsSUFBVztBQUNyQyxzQkFDRTtBQUFLLGFBQVMsRUFBQywwQ0FBZjtBQUFBLGNBQ0dBLElBQUksQ0FBQ0MsUUFBTCxDQUFjQyxHQUFkLENBQWtCLFVBQUNDLE9BQUQsRUFBVUMsS0FBVjtBQUFBLDBCQUNqQjtBQUNFLGlCQUFTLEVBQUVDLGlEQUFVLEVBQ25CO0FBQ0EseUVBRm1CLEVBR25CO0FBQ0UseUJBQWVELEtBQUssR0FBRyxDQUFSLEtBQWMsQ0FEL0I7QUFFRSxpQ0FBdUJBLEtBQUssR0FBRyxDQUFSLEtBQWM7QUFGdkMsU0FIbUIsQ0FEdkI7QUFBQSxnQ0FZRTtBQUFLLG1CQUFTLEVBQUMsb0JBQWY7QUFBQSxrQ0FDRTtBQUFJLHFCQUFTLEVBQUMsT0FBZDtBQUFBLHNCQUF1QkQsT0FBTyxDQUFDRztBQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBRUU7QUFBRyxxQkFBUyxFQUFDLE1BQWI7QUFBQSxzQkFBcUJILE9BQU8sQ0FBQ0k7QUFBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRixlQUdFLDhEQUFDLDBEQUFEO0FBQVksZ0JBQUksRUFBRUosT0FBTyxDQUFDSyxJQUExQjtBQUFBLG1DQUNFO0FBQUssdUJBQVMsRUFBQywwQ0FBZjtBQUFBLHdCQUNHTCxPQUFPLENBQUNLLElBQVIsQ0FBYUM7QUFEaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVpGLGVBc0JFO0FBQUssbUJBQVMsRUFBQyx1QkFBZjtBQUFBLHFCQUVHTixPQUFPLENBQUNPLEtBQVIsQ0FBY1YsSUFBZCxDQUFtQlcsVUFBbkIsQ0FBOEJDLElBQTlCLENBQW1DQyxVQUFuQyxDQUE4QyxPQUE5QyxrQkFDQztBQUFLLHFCQUFTLEVBQUMsZUFBZjtBQUFBLG1DQUNFLDhEQUFDLG9EQUFEO0FBQVcsbUJBQUssRUFBRVYsT0FBTyxDQUFDTztBQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFISixFQVFHUCxPQUFPLENBQUNPLEtBQVIsQ0FBY1YsSUFBZCxDQUFtQlcsVUFBbkIsQ0FBOEJDLElBQTlCLENBQW1DQyxVQUFuQyxDQUE4QyxPQUE5QyxrQkFDQyw4REFBQyxvREFBRDtBQUNFLGlCQUFLLEVBQUVWLE9BQU8sQ0FBQ08sS0FEakI7QUFFRSxxQkFBUyxFQUFDLGVBRlo7QUFHRSxvQkFBUSxNQUhWO0FBSUUsb0JBQVEsRUFBRTtBQUpaO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBVEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQXRCRjtBQUFBLFNBU09QLE9BQU8sQ0FBQ1csRUFUZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRGlCO0FBQUEsS0FBbEI7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUE4Q0QsQ0EvQ0Q7O0tBQU1mLGdCO0FBaUROLCtEQUFlQSxnQkFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9bWy4uLnNsdWddXS5kNTFiYzIxYTYyYWJhNjI0MmJjNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIlxuaW1wb3J0IE5leHRJbWFnZSBmcm9tIFwiLi4vZWxlbWVudHMvaW1hZ2VcIlxuaW1wb3J0IFZpZGVvIGZyb20gXCIuLi9lbGVtZW50cy92aWRlb1wiXG5pbXBvcnQgQ3VzdG9tTGluayBmcm9tIFwiLi4vZWxlbWVudHMvY3VzdG9tLWxpbmtcIlxuXG5jb25zdCBGZWF0dXJlUm93c0dyb3VwID0gKHsgZGF0YSB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgZmxleCBmbGV4LWNvbCBnYXAtMTIgcHktMTIgcm93XCI+XG4gICAgICB7ZGF0YS5mZWF0dXJlcy5tYXAoKGZlYXR1cmUsIGluZGV4KSA9PiAoXG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoXG4gICAgICAgICAgICAvLyBDb21tb24gY2xhc3Nlc1xuICAgICAgICAgICAgXCJmbGV4IGZsZXgtY29sIGp1c3RpZnktc3RhcnQgZ2FwLTEwIHJvdyByb3ctY29scy0xIHJvdy1jb2xzLWxnLTJcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJsZzpmbGV4LXJvd1wiOiBpbmRleCAlIDIgPT09IDAsXG4gICAgICAgICAgICAgIFwibGc6ZmxleC1yb3ctcmV2ZXJzZVwiOiBpbmRleCAlIDIgPT09IDEsXG4gICAgICAgICAgICB9XG4gICAgICAgICAgKX1cbiAgICAgICAgICBrZXk9e2ZlYXR1cmUuaWR9XG4gICAgICAgID5cbiAgICAgICAgICB7LyogVGV4dCBzZWN0aW9uICovfVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGNvbCB0ZXh0LWxnXCI+XG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGl0bGVcIj57ZmVhdHVyZS50aXRsZX08L2gzPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibXktNlwiPntmZWF0dXJlLmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICAgIDxDdXN0b21MaW5rIGxpbms9e2ZlYXR1cmUubGlua30+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1ibHVlLTYwMCB3aXRoLWFycm93IGhvdmVyOnVuZGVybGluZVwiPlxuICAgICAgICAgICAgICAgIHtmZWF0dXJlLmxpbmsudGV4dH1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L0N1c3RvbUxpbms+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgey8qIE1lZGlhIHNlY3Rpb24gKi99XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgY29sIG1heC1oLWZ1bGxcIj5cbiAgICAgICAgICAgIHsvKiBJbWFnZXMgKi99XG4gICAgICAgICAgICB7ZmVhdHVyZS5tZWRpYS5kYXRhLmF0dHJpYnV0ZXMubWltZS5zdGFydHNXaXRoKFwiaW1hZ2VcIikgJiYgKFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBoLWF1dG9cIj5cbiAgICAgICAgICAgICAgICA8TmV4dEltYWdlIG1lZGlhPXtmZWF0dXJlLm1lZGlhfSAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICB7LyogVmlkZW9zICovfVxuICAgICAgICAgICAge2ZlYXR1cmUubWVkaWEuZGF0YS5hdHRyaWJ1dGVzLm1pbWUuc3RhcnRzV2l0aChcInZpZGVvXCIpICYmIChcbiAgICAgICAgICAgICAgPFZpZGVvXG4gICAgICAgICAgICAgICAgbWVkaWE9e2ZlYXR1cmUubWVkaWF9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGgtYXV0b1wiXG4gICAgICAgICAgICAgICAgYXV0b1BsYXlcbiAgICAgICAgICAgICAgICBjb250cm9scz17ZmFsc2V9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICkpfVxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEZlYXR1cmVSb3dzR3JvdXBcbiJdLCJzb3VyY2VSb290IjoiIn0=