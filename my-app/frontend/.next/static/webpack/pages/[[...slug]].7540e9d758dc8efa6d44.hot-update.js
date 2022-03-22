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


var _jsxFileName = "C:\\Users\\lukas\\OneDrive\\Desktop\\bakalarka\\bakalar\\my-app\\frontend\\components\\sections\\feature-rows-group.js",
    _this = undefined;






var FeatureRowsGroup = function FeatureRowsGroup(_ref) {
  var data = _ref.data;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "container gap-12 py-12",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
      children: data.feature
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, _this), data.features.map(function (feature, index) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()( // Common classes
        "flex flex-col justify-start row py-12", {
          "lg:flex-row": index % 2 === 0,
          "lg:flex-row-reverse": index % 2 === 1
        }),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "col-12 col-lg-6 text-lg",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
            className: "title",
            children: feature.title
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            className: "my-6",
            children: feature.description
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 25,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_elements_custom_link__WEBPACK_IMPORTED_MODULE_4__.default, {
            link: feature.link,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "text-blue-600 with-arrow hover:underline",
              children: feature.link.text
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 27,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 26,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "col-12 col-lg-6 max-h-full",
          children: [feature.media.data.attributes.mime.startsWith("image") && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "w-full h-auto",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_elements_image__WEBPACK_IMPORTED_MODULE_2__.default, {
              media: feature.media
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 37,
              columnNumber: 17
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 15
          }, _this), feature.media.data.attributes.mime.startsWith("video") && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_elements_video__WEBPACK_IMPORTED_MODULE_3__.default, {
            media: feature.media,
            className: "w-full h-auto",
            autoPlay: true,
            controls: false
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 15
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 11
        }, _this)]
      }, feature.id, true, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }, _this);
    })]
  }, void 0, true, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zZWN0aW9ucy9mZWF0dXJlLXJvd3MtZ3JvdXAuanMiXSwibmFtZXMiOlsiRmVhdHVyZVJvd3NHcm91cCIsImRhdGEiLCJmZWF0dXJlIiwiZmVhdHVyZXMiLCJtYXAiLCJpbmRleCIsImNsYXNzTmFtZXMiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwibGluayIsInRleHQiLCJtZWRpYSIsImF0dHJpYnV0ZXMiLCJtaW1lIiwic3RhcnRzV2l0aCIsImlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsT0FBYztBQUFBLE1BQVhDLElBQVcsUUFBWEEsSUFBVztBQUNyQyxzQkFDRTtBQUFLLGFBQVMsRUFBQyx3QkFBZjtBQUFBLDRCQUNFO0FBQUEsZ0JBQUtBLElBQUksQ0FBQ0M7QUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsRUFFR0QsSUFBSSxDQUFDRSxRQUFMLENBQWNDLEdBQWQsQ0FBa0IsVUFBQ0YsT0FBRCxFQUFVRyxLQUFWO0FBQUEsMEJBQ2pCO0FBQ0UsaUJBQVMsRUFBRUMsaURBQVUsRUFDbkI7QUFDQSwrQ0FGbUIsRUFHbkI7QUFDRSx5QkFBZUQsS0FBSyxHQUFHLENBQVIsS0FBYyxDQUQvQjtBQUVFLGlDQUF1QkEsS0FBSyxHQUFHLENBQVIsS0FBYztBQUZ2QyxTQUhtQixDQUR2QjtBQUFBLGdDQVlFO0FBQUssbUJBQVMsRUFBQyx5QkFBZjtBQUFBLGtDQUNFO0FBQUkscUJBQVMsRUFBQyxPQUFkO0FBQUEsc0JBQXVCSCxPQUFPLENBQUNLO0FBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFFRTtBQUFHLHFCQUFTLEVBQUMsTUFBYjtBQUFBLHNCQUFxQkwsT0FBTyxDQUFDTTtBQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZGLGVBR0UsOERBQUMsMERBQUQ7QUFBWSxnQkFBSSxFQUFFTixPQUFPLENBQUNPLElBQTFCO0FBQUEsbUNBQ0U7QUFBSyx1QkFBUyxFQUFDLDBDQUFmO0FBQUEsd0JBQ0dQLE9BQU8sQ0FBQ08sSUFBUixDQUFhQztBQURoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBWkYsZUFzQkU7QUFBSyxtQkFBUyxFQUFDLDRCQUFmO0FBQUEscUJBRUdSLE9BQU8sQ0FBQ1MsS0FBUixDQUFjVixJQUFkLENBQW1CVyxVQUFuQixDQUE4QkMsSUFBOUIsQ0FBbUNDLFVBQW5DLENBQThDLE9BQTlDLGtCQUNDO0FBQUsscUJBQVMsRUFBQyxlQUFmO0FBQUEsbUNBQ0UsOERBQUMsb0RBQUQ7QUFBVyxtQkFBSyxFQUFFWixPQUFPLENBQUNTO0FBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUhKLEVBUUdULE9BQU8sQ0FBQ1MsS0FBUixDQUFjVixJQUFkLENBQW1CVyxVQUFuQixDQUE4QkMsSUFBOUIsQ0FBbUNDLFVBQW5DLENBQThDLE9BQTlDLGtCQUNDLDhEQUFDLG9EQUFEO0FBQ0UsaUJBQUssRUFBRVosT0FBTyxDQUFDUyxLQURqQjtBQUVFLHFCQUFTLEVBQUMsZUFGWjtBQUdFLG9CQUFRLE1BSFY7QUFJRSxvQkFBUSxFQUFFO0FBSlo7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFUSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBdEJGO0FBQUEsU0FTT1QsT0FBTyxDQUFDYSxFQVRmO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEaUI7QUFBQSxLQUFsQixDQUZIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBK0NELENBaEREOztLQUFNZixnQjtBQWtETiwrREFBZUEsZ0JBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvW1suLi5zbHVnXV0uNzU0MGU5ZDc1OGRjOGVmYTZkNDQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjbGFzc05hbWVzIGZyb20gXCJjbGFzc25hbWVzXCJcclxuaW1wb3J0IE5leHRJbWFnZSBmcm9tIFwiLi4vZWxlbWVudHMvaW1hZ2VcIlxyXG5pbXBvcnQgVmlkZW8gZnJvbSBcIi4uL2VsZW1lbnRzL3ZpZGVvXCJcclxuaW1wb3J0IEN1c3RvbUxpbmsgZnJvbSBcIi4uL2VsZW1lbnRzL2N1c3RvbS1saW5rXCJcclxuXHJcbmNvbnN0IEZlYXR1cmVSb3dzR3JvdXAgPSAoeyBkYXRhIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgZ2FwLTEyIHB5LTEyXCI+XHJcbiAgICAgIDxoMj57ZGF0YS5mZWF0dXJlfTwvaDI+XHJcbiAgICAgIHtkYXRhLmZlYXR1cmVzLm1hcCgoZmVhdHVyZSwgaW5kZXgpID0+IChcclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoXHJcbiAgICAgICAgICAgIC8vIENvbW1vbiBjbGFzc2VzXHJcbiAgICAgICAgICAgIFwiZmxleCBmbGV4LWNvbCBqdXN0aWZ5LXN0YXJ0IHJvdyBweS0xMlwiLFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgXCJsZzpmbGV4LXJvd1wiOiBpbmRleCAlIDIgPT09IDAsXHJcbiAgICAgICAgICAgICAgXCJsZzpmbGV4LXJvdy1yZXZlcnNlXCI6IGluZGV4ICUgMiA9PT0gMSxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgKX1cclxuICAgICAgICAgIGtleT17ZmVhdHVyZS5pZH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7LyogVGV4dCBzZWN0aW9uICovfVxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLWxnLTYgdGV4dC1sZ1wiPlxyXG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGl0bGVcIj57ZmVhdHVyZS50aXRsZX08L2gzPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJteS02XCI+e2ZlYXR1cmUuZGVzY3JpcHRpb259PC9wPlxyXG4gICAgICAgICAgICA8Q3VzdG9tTGluayBsaW5rPXtmZWF0dXJlLmxpbmt9PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1ibHVlLTYwMCB3aXRoLWFycm93IGhvdmVyOnVuZGVybGluZVwiPlxyXG4gICAgICAgICAgICAgICAge2ZlYXR1cmUubGluay50ZXh0fVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0N1c3RvbUxpbms+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIHsvKiBNZWRpYSBzZWN0aW9uICovfVxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLWxnLTYgbWF4LWgtZnVsbFwiPlxyXG4gICAgICAgICAgICB7LyogSW1hZ2VzICovfVxyXG4gICAgICAgICAgICB7ZmVhdHVyZS5tZWRpYS5kYXRhLmF0dHJpYnV0ZXMubWltZS5zdGFydHNXaXRoKFwiaW1hZ2VcIikgJiYgKFxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGgtYXV0b1wiPlxyXG4gICAgICAgICAgICAgICAgPE5leHRJbWFnZSBtZWRpYT17ZmVhdHVyZS5tZWRpYX0gLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgey8qIFZpZGVvcyAqL31cclxuICAgICAgICAgICAge2ZlYXR1cmUubWVkaWEuZGF0YS5hdHRyaWJ1dGVzLm1pbWUuc3RhcnRzV2l0aChcInZpZGVvXCIpICYmIChcclxuICAgICAgICAgICAgICA8VmlkZW9cclxuICAgICAgICAgICAgICAgIG1lZGlhPXtmZWF0dXJlLm1lZGlhfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGgtYXV0b1wiXHJcbiAgICAgICAgICAgICAgICBhdXRvUGxheVxyXG4gICAgICAgICAgICAgICAgY29udHJvbHM9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKSl9XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZlYXR1cmVSb3dzR3JvdXBcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==