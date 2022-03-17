self["webpackHotUpdate_N_E"]("pages/[[...slug]]",{

/***/ "./components/sections/hero.js":
/*!*************************************!*\
  !*** ./components/sections/hero.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-markdown */ "./node_modules/react-markdown/src/react-markdown.js");
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var utils_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! utils/button */ "./utils/button.js");
/* harmony import */ var _elements_button_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../elements/button-link */ "./components/elements/button-link.js");
/* harmony import */ var _elements_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../elements/image */ "./components/elements/image.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\lukas\\OneDrive\\Desktop\\bakalarka\\my-site\\frontend\\components\\sections\\hero.js",
    _this = undefined;






var Hero = function Hero(_ref) {
  var data = _ref.data;
  return (
    /*#__PURE__*/
    // <main className="container flex flex-col md:flex-row items-center justify-between py-12">
    //   {/* Left column for content */}
    //   <div className="flex-1 sm:pr-8">
    //     {/* Hero section label */}
    //     <p className="uppercase tracking-wide font-semibold">{data.label}</p>
    //     {/* Big title */}
    //     <h1 className="title mt-2 sm:mt-0 mb-4 sm:mb-2">{data.title}</h1>
    //     {/* Description paragraph */}
    //     <p className="text-xl mb-6">{data.description}</p>
    //     {/* Buttons row */}
    //     <div className="flex flex-row flex-wrap gap-4">
    //       {data.buttons.map((button) => (
    //         <ButtonLink
    //           button={button}
    //           appearance={getButtonAppearance(button.type, "light")}
    //           key={button.id}
    //         />
    //       ))}
    //     </div>
    //     {/* Small rich text */}
    //     <div className="text-base md:text-sm mt-4 sm:mt-3 rich-text-hero">
    //       <Markdown>{data.smallTextWithLink}</Markdown>
    //     </div>
    //   </div>
    //   {/* Right column for the image */}
    //   <div className="flex-shrink-0 w-full md:w-6/12 mt-6 md:mt-0">
    //     <NextImage media={data.picture} />
    //   </div>
    // </main>
    (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("main", {
      className: "heroSection",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "container text-center text-white d-flex justify-content-center flex-column align-items-center",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
          children: data.title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 17
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "d-flex flex-row flex-wrap gap-4 justify-content-center mt-3",
          children: data.buttons.map(function (button) {
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_elements_button_link__WEBPACK_IMPORTED_MODULE_3__.default, {
              button: button,
              appearance: (0,utils_button__WEBPACK_IMPORTED_MODULE_2__.getButtonAppearance)(button.type, "light")
            }, button.id, false, {
              fileName: _jsxFileName,
              lineNumber: 43,
              columnNumber: 25
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 17
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 13
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 9
    }, _this)
  );
};

_c = Hero;
/* harmony default export */ __webpack_exports__["default"] = (Hero);

var _c;

$RefreshReg$(_c, "Hero");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zZWN0aW9ucy9oZXJvLmpzIl0sIm5hbWVzIjpbIkhlcm8iLCJkYXRhIiwidGl0bGUiLCJidXR0b25zIiwibWFwIiwiYnV0dG9uIiwiZ2V0QnV0dG9uQXBwZWFyYW5jZSIsInR5cGUiLCJpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxPQUFjO0FBQUEsTUFBWEMsSUFBVyxRQUFYQSxJQUFXO0FBQ3ZCO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUk7QUFBTSxlQUFTLEVBQUMsYUFBaEI7QUFBQSw2QkFDSTtBQUFLLGlCQUFTLEVBQUMsK0ZBQWY7QUFBQSxnQ0FDSTtBQUFBLG9CQUFLQSxJQUFJLENBQUNDO0FBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESixlQUVJO0FBQUssbUJBQVMsRUFBQyw2REFBZjtBQUFBLG9CQUNLRCxJQUFJLENBQUNFLE9BQUwsQ0FBYUMsR0FBYixDQUFpQixVQUFDQyxNQUFEO0FBQUEsZ0NBQ2QsOERBQUMsMERBQUQ7QUFDSSxvQkFBTSxFQUFFQSxNQURaO0FBRUksd0JBQVUsRUFBRUMsaUVBQW1CLENBQUNELE1BQU0sQ0FBQ0UsSUFBUixFQUFjLE9BQWQ7QUFGbkMsZUFHU0YsTUFBTSxDQUFDRyxFQUhoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURjO0FBQUEsV0FBakI7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUEvQko7QUE4Q0gsQ0EvQ0Q7O0tBQU1SLEk7QUFpRE4sK0RBQWVBLElBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvW1suLi5zbHVnXV0uMDBlNzNiMjZhNzRlMjg5ODAyNzkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNYXJrZG93biBmcm9tIFwicmVhY3QtbWFya2Rvd25cIlxuaW1wb3J0IHsgZ2V0QnV0dG9uQXBwZWFyYW5jZSB9IGZyb20gXCJ1dGlscy9idXR0b25cIlxuaW1wb3J0IEJ1dHRvbkxpbmsgZnJvbSBcIi4uL2VsZW1lbnRzL2J1dHRvbi1saW5rXCJcbmltcG9ydCBOZXh0SW1hZ2UgZnJvbSBcIi4uL2VsZW1lbnRzL2ltYWdlXCJcblxuY29uc3QgSGVybyA9ICh7IGRhdGEgfSkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgLy8gPG1haW4gY2xhc3NOYW1lPVwiY29udGFpbmVyIGZsZXggZmxleC1jb2wgbWQ6ZmxleC1yb3cgaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBweS0xMlwiPlxuICAgIC8vICAgey8qIExlZnQgY29sdW1uIGZvciBjb250ZW50ICovfVxuICAgIC8vICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTEgc206cHItOFwiPlxuICAgIC8vICAgICB7LyogSGVybyBzZWN0aW9uIGxhYmVsICovfVxuICAgIC8vICAgICA8cCBjbGFzc05hbWU9XCJ1cHBlcmNhc2UgdHJhY2tpbmctd2lkZSBmb250LXNlbWlib2xkXCI+e2RhdGEubGFiZWx9PC9wPlxuICAgIC8vICAgICB7LyogQmlnIHRpdGxlICovfVxuICAgIC8vICAgICA8aDEgY2xhc3NOYW1lPVwidGl0bGUgbXQtMiBzbTptdC0wIG1iLTQgc206bWItMlwiPntkYXRhLnRpdGxlfTwvaDE+XG4gICAgLy8gICAgIHsvKiBEZXNjcmlwdGlvbiBwYXJhZ3JhcGggKi99XG4gICAgLy8gICAgIDxwIGNsYXNzTmFtZT1cInRleHQteGwgbWItNlwiPntkYXRhLmRlc2NyaXB0aW9ufTwvcD5cbiAgICAvLyAgICAgey8qIEJ1dHRvbnMgcm93ICovfVxuICAgIC8vICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cgZmxleC13cmFwIGdhcC00XCI+XG4gICAgLy8gICAgICAge2RhdGEuYnV0dG9ucy5tYXAoKGJ1dHRvbikgPT4gKFxuICAgIC8vICAgICAgICAgPEJ1dHRvbkxpbmtcbiAgICAvLyAgICAgICAgICAgYnV0dG9uPXtidXR0b259XG4gICAgLy8gICAgICAgICAgIGFwcGVhcmFuY2U9e2dldEJ1dHRvbkFwcGVhcmFuY2UoYnV0dG9uLnR5cGUsIFwibGlnaHRcIil9XG4gICAgLy8gICAgICAgICAgIGtleT17YnV0dG9uLmlkfVxuICAgIC8vICAgICAgICAgLz5cbiAgICAvLyAgICAgICApKX1cbiAgICAvLyAgICAgPC9kaXY+XG4gICAgLy8gICAgIHsvKiBTbWFsbCByaWNoIHRleHQgKi99XG4gICAgLy8gICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1iYXNlIG1kOnRleHQtc20gbXQtNCBzbTptdC0zIHJpY2gtdGV4dC1oZXJvXCI+XG4gICAgLy8gICAgICAgPE1hcmtkb3duPntkYXRhLnNtYWxsVGV4dFdpdGhMaW5rfTwvTWFya2Rvd24+XG4gICAgLy8gICAgIDwvZGl2PlxuICAgIC8vICAgPC9kaXY+XG4gICAgLy8gICB7LyogUmlnaHQgY29sdW1uIGZvciB0aGUgaW1hZ2UgKi99XG4gICAgLy8gICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtc2hyaW5rLTAgdy1mdWxsIG1kOnctNi8xMiBtdC02IG1kOm10LTBcIj5cbiAgICAvLyAgICAgPE5leHRJbWFnZSBtZWRpYT17ZGF0YS5waWN0dXJlfSAvPlxuICAgIC8vICAgPC9kaXY+XG4gICAgLy8gPC9tYWluPlxuICAgIFxuICAgICAgICA8bWFpbiBjbGFzc05hbWU9XCJoZXJvU2VjdGlvblwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgdGV4dC1jZW50ZXIgdGV4dC13aGl0ZSBkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBmbGV4LWNvbHVtbiBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICA8aDE+e2RhdGEudGl0bGV9PC9oMT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBmbGV4LXJvdyBmbGV4LXdyYXAgZ2FwLTQganVzdGlmeS1jb250ZW50LWNlbnRlciBtdC0zXCI+XG4gICAgICAgICAgICAgICAgICAgIHtkYXRhLmJ1dHRvbnMubWFwKChidXR0b24pID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25MaW5rXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uPXtidXR0b259XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXBwZWFyYW5jZT17Z2V0QnV0dG9uQXBwZWFyYW5jZShidXR0b24udHlwZSwgXCJsaWdodFwiKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2J1dHRvbi5pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbWFpbj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBIZXJvXG4iXSwic291cmNlUm9vdCI6IiJ9