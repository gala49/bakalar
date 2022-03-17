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
  var backgroundImage = {
    backgroundImage: url(data.picture)
  };
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
      className: "py-12 heroSection",
      style: data.picture,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "container",
        children: "ahoj"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 13
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zZWN0aW9ucy9oZXJvLmpzIl0sIm5hbWVzIjpbIkhlcm8iLCJkYXRhIiwiYmFja2dyb3VuZEltYWdlIiwidXJsIiwicGljdHVyZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxPQUFjO0FBQUEsTUFBWEMsSUFBVyxRQUFYQSxJQUFXO0FBQ3ZCLE1BQU1DLGVBQWUsR0FBRztBQUNwQkEsbUJBQWUsRUFBRUMsR0FBRyxDQUFDRixJQUFJLENBQUNHLE9BQU47QUFEQSxHQUF4QjtBQUlBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0k7QUFBTSxlQUFTLEVBQUMsbUJBQWhCO0FBQW9DLFdBQUssRUFBRUgsSUFBSSxDQUFDRyxPQUFoRDtBQUFBLDZCQUNJO0FBQUssaUJBQVMsRUFBQyxXQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQTlCSjtBQWtDSCxDQXZDRDs7S0FBTUosSTtBQXlDTiwrREFBZUEsSUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9bWy4uLnNsdWddXS5jYWJiOGU3YzIwNjNhZTk3MjliZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1hcmtkb3duIGZyb20gXCJyZWFjdC1tYXJrZG93blwiXG5pbXBvcnQgeyBnZXRCdXR0b25BcHBlYXJhbmNlIH0gZnJvbSBcInV0aWxzL2J1dHRvblwiXG5pbXBvcnQgQnV0dG9uTGluayBmcm9tIFwiLi4vZWxlbWVudHMvYnV0dG9uLWxpbmtcIlxuaW1wb3J0IE5leHRJbWFnZSBmcm9tIFwiLi4vZWxlbWVudHMvaW1hZ2VcIlxuXG5jb25zdCBIZXJvID0gKHsgZGF0YSB9KSA9PiB7XG4gICAgY29uc3QgYmFja2dyb3VuZEltYWdlID0ge1xuICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IHVybChkYXRhLnBpY3R1cmUpXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAvLyA8bWFpbiBjbGFzc05hbWU9XCJjb250YWluZXIgZmxleCBmbGV4LWNvbCBtZDpmbGV4LXJvdyBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHB5LTEyXCI+XG4gICAgLy8gICB7LyogTGVmdCBjb2x1bW4gZm9yIGNvbnRlbnQgKi99XG4gICAgLy8gICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMSBzbTpwci04XCI+XG4gICAgLy8gICAgIHsvKiBIZXJvIHNlY3Rpb24gbGFiZWwgKi99XG4gICAgLy8gICAgIDxwIGNsYXNzTmFtZT1cInVwcGVyY2FzZSB0cmFja2luZy13aWRlIGZvbnQtc2VtaWJvbGRcIj57ZGF0YS5sYWJlbH08L3A+XG4gICAgLy8gICAgIHsvKiBCaWcgdGl0bGUgKi99XG4gICAgLy8gICAgIDxoMSBjbGFzc05hbWU9XCJ0aXRsZSBtdC0yIHNtOm10LTAgbWItNCBzbTptYi0yXCI+e2RhdGEudGl0bGV9PC9oMT5cbiAgICAvLyAgICAgey8qIERlc2NyaXB0aW9uIHBhcmFncmFwaCAqL31cbiAgICAvLyAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14bCBtYi02XCI+e2RhdGEuZGVzY3JpcHRpb259PC9wPlxuICAgIC8vICAgICB7LyogQnV0dG9ucyByb3cgKi99XG4gICAgLy8gICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBmbGV4LXdyYXAgZ2FwLTRcIj5cbiAgICAvLyAgICAgICB7ZGF0YS5idXR0b25zLm1hcCgoYnV0dG9uKSA9PiAoXG4gICAgLy8gICAgICAgICA8QnV0dG9uTGlua1xuICAgIC8vICAgICAgICAgICBidXR0b249e2J1dHRvbn1cbiAgICAvLyAgICAgICAgICAgYXBwZWFyYW5jZT17Z2V0QnV0dG9uQXBwZWFyYW5jZShidXR0b24udHlwZSwgXCJsaWdodFwiKX1cbiAgICAvLyAgICAgICAgICAga2V5PXtidXR0b24uaWR9XG4gICAgLy8gICAgICAgICAvPlxuICAgIC8vICAgICAgICkpfVxuICAgIC8vICAgICA8L2Rpdj5cbiAgICAvLyAgICAgey8qIFNtYWxsIHJpY2ggdGV4dCAqL31cbiAgICAvLyAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWJhc2UgbWQ6dGV4dC1zbSBtdC00IHNtOm10LTMgcmljaC10ZXh0LWhlcm9cIj5cbiAgICAvLyAgICAgICA8TWFya2Rvd24+e2RhdGEuc21hbGxUZXh0V2l0aExpbmt9PC9NYXJrZG93bj5cbiAgICAvLyAgICAgPC9kaXY+XG4gICAgLy8gICA8L2Rpdj5cbiAgICAvLyAgIHsvKiBSaWdodCBjb2x1bW4gZm9yIHRoZSBpbWFnZSAqL31cbiAgICAvLyAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC1zaHJpbmstMCB3LWZ1bGwgbWQ6dy02LzEyIG10LTYgbWQ6bXQtMFwiPlxuICAgIC8vICAgICA8TmV4dEltYWdlIG1lZGlhPXtkYXRhLnBpY3R1cmV9IC8+XG4gICAgLy8gICA8L2Rpdj5cbiAgICAvLyA8L21haW4+XG4gICAgICAgIDxtYWluIGNsYXNzTmFtZT1cInB5LTEyIGhlcm9TZWN0aW9uXCIgc3R5bGU9e2RhdGEucGljdHVyZX0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPmFob2o8L2Rpdj5cbiAgICAgICAgPC9tYWluPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhlcm9cbiJdLCJzb3VyY2VSb290IjoiIn0=