self["webpackHotUpdate_N_E"]("pages/[[...slug]]",{

/***/ "./components/sections/text-a-obrazek.js":
/*!***********************************************!*\
  !*** ./components/sections/text-a-obrazek.js ***!
  \***********************************************/
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


var _jsxFileName = "C:\\Users\\lukas\\OneDrive\\Desktop\\bakalarka\\bakalar\\my-app\\frontend\\components\\sections\\text-a-obrazek.js",
    _this = undefined;






var TextAObrazek = function TextAObrazek(_ref) {
  var data = _ref.data;
  return (
    /*#__PURE__*/
    // <div className="container gap-12 py-12">
    //   <h2>{data.feature}</h2>
    //   {data.features.map((feature, index) => (
    //     <div
    //       className={classNames(
    //         // Common classes
    //         "flex flex-col justify-start row py-12",
    //         {
    //           "lg:flex-row": index % 2 === 0,
    //           "lg:flex-row-reverse": index % 2 === 1,
    //         }
    //       )}
    //       key={feature.id}
    //     >
    //       {/* Text section */}
    //       <div className="col-12 col-lg-6 text-lg">
    //         <h3 className="title">{feature.title}</h3>
    //         <p className="my-6">{feature.description}</p>
    //         <CustomLink link={feature.link}>
    //           <div className="text-blue-600 with-arrow hover:underline">
    //             {feature.link.text}
    //           </div>
    //         </CustomLink>
    //       </div>
    //       {/* Media section */}
    //       <div className="col-12 col-lg-6 max-h-full">
    //         {/* Images */}
    //         {feature.media.data.attributes.mime.startsWith("image") && (
    //           <div className="w-full h-auto">
    //             <NextImage media={feature.media} />
    //           </div>
    //         )}
    //         {/* Videos */}
    //         {feature.media.data.attributes.mime.startsWith("video") && (
    //           <Video
    //             media={feature.media}
    //             className="w-full h-auto"
    //             autoPlay
    //             controls={false}
    //           />
    //         )}
    //       </div>
    //     </div>
    //   ))}
    // </div>
    // <div dangerouslySetInnerHTML={{ __html: data.description }}></div>
    (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "container section-padding text-image-section",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
        className: "text-center mb-5",
        children: data.title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 9
      }, _this), data.boxes.map(function (box, index) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: classnames__WEBPACK_IMPORTED_MODULE_1___default()( // Common classes
          "d-flex flex-col justify-start row p-5 pb-0 boxes-row", {
            "lg:flex-row": index % 2 === 0,
            "lg:flex-row-reverse": index % 2 === 1
          }),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "col-12 col-lg-6 box-color p-5",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              dangerouslySetInnerHTML: {
                __html: box.content
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 70,
              columnNumber: 21
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 69,
            columnNumber: 17
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "col-12 col-lg-6 max-h-full px-0",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "w-full h-auto",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_elements_image__WEBPACK_IMPORTED_MODULE_2__.default, {
                media: box.image
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 75,
                columnNumber: 25
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 74,
              columnNumber: 21
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 73,
            columnNumber: 17
          }, _this)]
        }, box.id, true, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 13
        }, _this);
      })]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 5
    }, _this)
  );
};

_c = TextAObrazek;
/* harmony default export */ __webpack_exports__["default"] = (TextAObrazek);

var _c;

$RefreshReg$(_c, "TextAObrazek");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zZWN0aW9ucy90ZXh0LWEtb2JyYXplay5qcyJdLCJuYW1lcyI6WyJUZXh0QU9icmF6ZWsiLCJkYXRhIiwidGl0bGUiLCJib3hlcyIsIm1hcCIsImJveCIsImluZGV4IiwiY2xhc3NOYW1lcyIsIl9faHRtbCIsImNvbnRlbnQiLCJpbWFnZSIsImlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFlBQVksR0FBRyxTQUFmQSxZQUFlLE9BQWM7QUFBQSxNQUFYQyxJQUFXLFFBQVhBLElBQVc7QUFDakM7QUFBQTtBQUNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBSyxlQUFTLEVBQUMsOENBQWY7QUFBQSw4QkFDSTtBQUFJLGlCQUFTLEVBQUMsa0JBQWQ7QUFBQSxrQkFBa0NBLElBQUksQ0FBQ0M7QUFBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKLEVBRUtELElBQUksQ0FBQ0UsS0FBTCxDQUFXQyxHQUFYLENBQWUsVUFBQ0MsR0FBRCxFQUFNQyxLQUFOO0FBQUEsNEJBQ1o7QUFDSSxtQkFBUyxFQUFFQyxpREFBVSxFQUNqQjtBQUNBLGdFQUZpQixFQUdqQjtBQUNBLDJCQUFlRCxLQUFLLEdBQUcsQ0FBUixLQUFjLENBRDdCO0FBRUEsbUNBQXVCQSxLQUFLLEdBQUcsQ0FBUixLQUFjO0FBRnJDLFdBSGlCLENBRHpCO0FBQUEsa0NBWUk7QUFBSyxxQkFBUyxFQUFDLCtCQUFmO0FBQUEsbUNBQ0k7QUFBSyxxQ0FBdUIsRUFBRTtBQUFFRSxzQkFBTSxFQUFFSCxHQUFHLENBQUNJO0FBQWQ7QUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBWkosZUFnQkk7QUFBSyxxQkFBUyxFQUFDLGlDQUFmO0FBQUEsbUNBQ0k7QUFBSyx1QkFBUyxFQUFDLGVBQWY7QUFBQSxxQ0FDSSw4REFBQyxvREFBRDtBQUFXLHFCQUFLLEVBQUVKLEdBQUcsQ0FBQ0s7QUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQWhCSjtBQUFBLFdBU1NMLEdBQUcsQ0FBQ00sRUFUYjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURZO0FBQUEsT0FBZixDQUZMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQS9DRjtBQTRFRCxDQTdFRDs7S0FBTVgsWTtBQStFTiwrREFBZUEsWUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9bWy4uLnNsdWddXS4zZDlhMDQ0MDAxZDA5MDZhYzBmYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIlxyXG5pbXBvcnQgTmV4dEltYWdlIGZyb20gXCIuLi9lbGVtZW50cy9pbWFnZVwiXHJcbmltcG9ydCBWaWRlbyBmcm9tIFwiLi4vZWxlbWVudHMvdmlkZW9cIlxyXG5pbXBvcnQgQ3VzdG9tTGluayBmcm9tIFwiLi4vZWxlbWVudHMvY3VzdG9tLWxpbmtcIlxyXG5cclxuY29uc3QgVGV4dEFPYnJhemVrID0gKHsgZGF0YSB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIC8vIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGdhcC0xMiBweS0xMlwiPlxyXG4gICAgLy8gICA8aDI+e2RhdGEuZmVhdHVyZX08L2gyPlxyXG4gICAgLy8gICB7ZGF0YS5mZWF0dXJlcy5tYXAoKGZlYXR1cmUsIGluZGV4KSA9PiAoXHJcbiAgICAvLyAgICAgPGRpdlxyXG4gICAgLy8gICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKFxyXG4gICAgLy8gICAgICAgICAvLyBDb21tb24gY2xhc3Nlc1xyXG4gICAgLy8gICAgICAgICBcImZsZXggZmxleC1jb2wganVzdGlmeS1zdGFydCByb3cgcHktMTJcIixcclxuICAgIC8vICAgICAgICAge1xyXG4gICAgLy8gICAgICAgICAgIFwibGc6ZmxleC1yb3dcIjogaW5kZXggJSAyID09PSAwLFxyXG4gICAgLy8gICAgICAgICAgIFwibGc6ZmxleC1yb3ctcmV2ZXJzZVwiOiBpbmRleCAlIDIgPT09IDEsXHJcbiAgICAvLyAgICAgICAgIH1cclxuICAgIC8vICAgICAgICl9XHJcbiAgICAvLyAgICAgICBrZXk9e2ZlYXR1cmUuaWR9XHJcbiAgICAvLyAgICAgPlxyXG4gICAgLy8gICAgICAgey8qIFRleHQgc2VjdGlvbiAqL31cclxuICAgIC8vICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1sZy02IHRleHQtbGdcIj5cclxuICAgIC8vICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRpdGxlXCI+e2ZlYXR1cmUudGl0bGV9PC9oMz5cclxuICAgIC8vICAgICAgICAgPHAgY2xhc3NOYW1lPVwibXktNlwiPntmZWF0dXJlLmRlc2NyaXB0aW9ufTwvcD5cclxuICAgIC8vICAgICAgICAgPEN1c3RvbUxpbmsgbGluaz17ZmVhdHVyZS5saW5rfT5cclxuICAgIC8vICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtYmx1ZS02MDAgd2l0aC1hcnJvdyBob3Zlcjp1bmRlcmxpbmVcIj5cclxuICAgIC8vICAgICAgICAgICAgIHtmZWF0dXJlLmxpbmsudGV4dH1cclxuICAgIC8vICAgICAgICAgICA8L2Rpdj5cclxuICAgIC8vICAgICAgICAgPC9DdXN0b21MaW5rPlxyXG4gICAgLy8gICAgICAgPC9kaXY+XHJcbiAgICAvLyAgICAgICB7LyogTWVkaWEgc2VjdGlvbiAqL31cclxuICAgIC8vICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1sZy02IG1heC1oLWZ1bGxcIj5cclxuICAgIC8vICAgICAgICAgey8qIEltYWdlcyAqL31cclxuICAgIC8vICAgICAgICAge2ZlYXR1cmUubWVkaWEuZGF0YS5hdHRyaWJ1dGVzLm1pbWUuc3RhcnRzV2l0aChcImltYWdlXCIpICYmIChcclxuICAgIC8vICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBoLWF1dG9cIj5cclxuICAgIC8vICAgICAgICAgICAgIDxOZXh0SW1hZ2UgbWVkaWE9e2ZlYXR1cmUubWVkaWF9IC8+XHJcbiAgICAvLyAgICAgICAgICAgPC9kaXY+XHJcbiAgICAvLyAgICAgICAgICl9XHJcbiAgICAvLyAgICAgICAgIHsvKiBWaWRlb3MgKi99XHJcbiAgICAvLyAgICAgICAgIHtmZWF0dXJlLm1lZGlhLmRhdGEuYXR0cmlidXRlcy5taW1lLnN0YXJ0c1dpdGgoXCJ2aWRlb1wiKSAmJiAoXHJcbiAgICAvLyAgICAgICAgICAgPFZpZGVvXHJcbiAgICAvLyAgICAgICAgICAgICBtZWRpYT17ZmVhdHVyZS5tZWRpYX1cclxuICAgIC8vICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBoLWF1dG9cIlxyXG4gICAgLy8gICAgICAgICAgICAgYXV0b1BsYXlcclxuICAgIC8vICAgICAgICAgICAgIGNvbnRyb2xzPXtmYWxzZX1cclxuICAgIC8vICAgICAgICAgICAvPlxyXG4gICAgLy8gICAgICAgICApfVxyXG4gICAgLy8gICAgICAgPC9kaXY+XHJcbiAgICAvLyAgICAgPC9kaXY+XHJcbiAgICAvLyAgICkpfVxyXG4gICAgLy8gPC9kaXY+XHJcbiAgICAvLyA8ZGl2IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogZGF0YS5kZXNjcmlwdGlvbiB9fT48L2Rpdj5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIHNlY3Rpb24tcGFkZGluZyB0ZXh0LWltYWdlLXNlY3Rpb25cIj5cclxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgbWItNVwiPntkYXRhLnRpdGxlfTwvaDI+XHJcbiAgICAgICAge2RhdGEuYm94ZXMubWFwKChib3gsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhcclxuICAgICAgICAgICAgICAgICAgICAvLyBDb21tb24gY2xhc3Nlc1xyXG4gICAgICAgICAgICAgICAgICAgIFwiZC1mbGV4IGZsZXgtY29sIGp1c3RpZnktc3RhcnQgcm93IHAtNSBwYi0wIGJveGVzLXJvd1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImxnOmZsZXgtcm93XCI6IGluZGV4ICUgMiA9PT0gMCxcclxuICAgICAgICAgICAgICAgICAgICBcImxnOmZsZXgtcm93LXJldmVyc2VcIjogaW5kZXggJSAyID09PSAxLFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICBrZXk9e2JveC5pZH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgey8qIFRleHQgc2VjdGlvbiAqL31cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1sZy02IGJveC1jb2xvciBwLTVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogYm94LmNvbnRlbnQgfX0+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIHsvKiBNZWRpYSBzZWN0aW9uICovfVxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLWxnLTYgbWF4LWgtZnVsbCBweC0wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgaC1hdXRvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxOZXh0SW1hZ2UgbWVkaWE9e2JveC5pbWFnZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApKX1cclxuICAgICAgICBcclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGV4dEFPYnJhemVrXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=