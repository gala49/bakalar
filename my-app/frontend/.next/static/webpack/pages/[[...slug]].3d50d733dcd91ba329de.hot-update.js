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
      className: "container section-padding",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        className: "text-center",
        children: data.title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 9
      }, _this), data.boxes.map(function (box, index) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: classnames__WEBPACK_IMPORTED_MODULE_1___default()( // Common classes
          "d-flex flex-col justify-start row p-5", {
            "lg:flex-row": index % 2 === 0,
            "lg:flex-row-reverse": index % 2 === 1
          }),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "col-12 col-lg-6",
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
            className: "col-12 col-lg-6 max-h-full",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zZWN0aW9ucy90ZXh0LWEtb2JyYXplay5qcyJdLCJuYW1lcyI6WyJUZXh0QU9icmF6ZWsiLCJkYXRhIiwidGl0bGUiLCJib3hlcyIsIm1hcCIsImJveCIsImluZGV4IiwiY2xhc3NOYW1lcyIsIl9faHRtbCIsImNvbnRlbnQiLCJpbWFnZSIsImlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFlBQVksR0FBRyxTQUFmQSxZQUFlLE9BQWM7QUFBQSxNQUFYQyxJQUFXLFFBQVhBLElBQVc7QUFDakM7QUFBQTtBQUNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBSyxlQUFTLEVBQUMsMkJBQWY7QUFBQSw4QkFDSTtBQUFJLGlCQUFTLEVBQUMsYUFBZDtBQUFBLGtCQUE2QkEsSUFBSSxDQUFDQztBQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREosRUFFS0QsSUFBSSxDQUFDRSxLQUFMLENBQVdDLEdBQVgsQ0FBZSxVQUFDQyxHQUFELEVBQU1DLEtBQU47QUFBQSw0QkFDWjtBQUNJLG1CQUFTLEVBQUVDLGlEQUFVLEVBQ2pCO0FBQ0EsaURBRmlCLEVBR2pCO0FBQ0EsMkJBQWVELEtBQUssR0FBRyxDQUFSLEtBQWMsQ0FEN0I7QUFFQSxtQ0FBdUJBLEtBQUssR0FBRyxDQUFSLEtBQWM7QUFGckMsV0FIaUIsQ0FEekI7QUFBQSxrQ0FZSTtBQUFLLHFCQUFTLEVBQUMsaUJBQWY7QUFBQSxtQ0FDSTtBQUFLLHFDQUF1QixFQUFFO0FBQUVFLHNCQUFNLEVBQUVILEdBQUcsQ0FBQ0k7QUFBZDtBQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFaSixlQWdCSTtBQUFLLHFCQUFTLEVBQUMsNEJBQWY7QUFBQSxtQ0FDSTtBQUFLLHVCQUFTLEVBQUMsZUFBZjtBQUFBLHFDQUNJLDhEQUFDLG9EQUFEO0FBQVcscUJBQUssRUFBRUosR0FBRyxDQUFDSztBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBaEJKO0FBQUEsV0FTU0wsR0FBRyxDQUFDTSxFQVRiO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRFk7QUFBQSxPQUFmLENBRkw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBL0NGO0FBNEVELENBN0VEOztLQUFNWCxZO0FBK0VOLCtEQUFlQSxZQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL1tbLi4uc2x1Z11dLjNkNTBkNzMzZGNkOTFiYTMyOWRlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiXHJcbmltcG9ydCBOZXh0SW1hZ2UgZnJvbSBcIi4uL2VsZW1lbnRzL2ltYWdlXCJcclxuaW1wb3J0IFZpZGVvIGZyb20gXCIuLi9lbGVtZW50cy92aWRlb1wiXHJcbmltcG9ydCBDdXN0b21MaW5rIGZyb20gXCIuLi9lbGVtZW50cy9jdXN0b20tbGlua1wiXHJcblxyXG5jb25zdCBUZXh0QU9icmF6ZWsgPSAoeyBkYXRhIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgLy8gPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgZ2FwLTEyIHB5LTEyXCI+XHJcbiAgICAvLyAgIDxoMj57ZGF0YS5mZWF0dXJlfTwvaDI+XHJcbiAgICAvLyAgIHtkYXRhLmZlYXR1cmVzLm1hcCgoZmVhdHVyZSwgaW5kZXgpID0+IChcclxuICAgIC8vICAgICA8ZGl2XHJcbiAgICAvLyAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoXHJcbiAgICAvLyAgICAgICAgIC8vIENvbW1vbiBjbGFzc2VzXHJcbiAgICAvLyAgICAgICAgIFwiZmxleCBmbGV4LWNvbCBqdXN0aWZ5LXN0YXJ0IHJvdyBweS0xMlwiLFxyXG4gICAgLy8gICAgICAgICB7XHJcbiAgICAvLyAgICAgICAgICAgXCJsZzpmbGV4LXJvd1wiOiBpbmRleCAlIDIgPT09IDAsXHJcbiAgICAvLyAgICAgICAgICAgXCJsZzpmbGV4LXJvdy1yZXZlcnNlXCI6IGluZGV4ICUgMiA9PT0gMSxcclxuICAgIC8vICAgICAgICAgfVxyXG4gICAgLy8gICAgICAgKX1cclxuICAgIC8vICAgICAgIGtleT17ZmVhdHVyZS5pZH1cclxuICAgIC8vICAgICA+XHJcbiAgICAvLyAgICAgICB7LyogVGV4dCBzZWN0aW9uICovfVxyXG4gICAgLy8gICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLWxnLTYgdGV4dC1sZ1wiPlxyXG4gICAgLy8gICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGl0bGVcIj57ZmVhdHVyZS50aXRsZX08L2gzPlxyXG4gICAgLy8gICAgICAgICA8cCBjbGFzc05hbWU9XCJteS02XCI+e2ZlYXR1cmUuZGVzY3JpcHRpb259PC9wPlxyXG4gICAgLy8gICAgICAgICA8Q3VzdG9tTGluayBsaW5rPXtmZWF0dXJlLmxpbmt9PlxyXG4gICAgLy8gICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1ibHVlLTYwMCB3aXRoLWFycm93IGhvdmVyOnVuZGVybGluZVwiPlxyXG4gICAgLy8gICAgICAgICAgICAge2ZlYXR1cmUubGluay50ZXh0fVxyXG4gICAgLy8gICAgICAgICAgIDwvZGl2PlxyXG4gICAgLy8gICAgICAgICA8L0N1c3RvbUxpbms+XHJcbiAgICAvLyAgICAgICA8L2Rpdj5cclxuICAgIC8vICAgICAgIHsvKiBNZWRpYSBzZWN0aW9uICovfVxyXG4gICAgLy8gICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLWxnLTYgbWF4LWgtZnVsbFwiPlxyXG4gICAgLy8gICAgICAgICB7LyogSW1hZ2VzICovfVxyXG4gICAgLy8gICAgICAgICB7ZmVhdHVyZS5tZWRpYS5kYXRhLmF0dHJpYnV0ZXMubWltZS5zdGFydHNXaXRoKFwiaW1hZ2VcIikgJiYgKFxyXG4gICAgLy8gICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGgtYXV0b1wiPlxyXG4gICAgLy8gICAgICAgICAgICAgPE5leHRJbWFnZSBtZWRpYT17ZmVhdHVyZS5tZWRpYX0gLz5cclxuICAgIC8vICAgICAgICAgICA8L2Rpdj5cclxuICAgIC8vICAgICAgICAgKX1cclxuICAgIC8vICAgICAgICAgey8qIFZpZGVvcyAqL31cclxuICAgIC8vICAgICAgICAge2ZlYXR1cmUubWVkaWEuZGF0YS5hdHRyaWJ1dGVzLm1pbWUuc3RhcnRzV2l0aChcInZpZGVvXCIpICYmIChcclxuICAgIC8vICAgICAgICAgICA8VmlkZW9cclxuICAgIC8vICAgICAgICAgICAgIG1lZGlhPXtmZWF0dXJlLm1lZGlhfVxyXG4gICAgLy8gICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGgtYXV0b1wiXHJcbiAgICAvLyAgICAgICAgICAgICBhdXRvUGxheVxyXG4gICAgLy8gICAgICAgICAgICAgY29udHJvbHM9e2ZhbHNlfVxyXG4gICAgLy8gICAgICAgICAgIC8+XHJcbiAgICAvLyAgICAgICAgICl9XHJcbiAgICAvLyAgICAgICA8L2Rpdj5cclxuICAgIC8vICAgICA8L2Rpdj5cclxuICAgIC8vICAgKSl9XHJcbiAgICAvLyA8L2Rpdj5cclxuICAgIC8vIDxkaXYgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBkYXRhLmRlc2NyaXB0aW9uIH19PjwvZGl2PlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgc2VjdGlvbi1wYWRkaW5nXCI+XHJcbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+e2RhdGEudGl0bGV9PC9oMT5cclxuICAgICAgICB7ZGF0YS5ib3hlcy5tYXAoKGJveCwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIENvbW1vbiBjbGFzc2VzXHJcbiAgICAgICAgICAgICAgICAgICAgXCJkLWZsZXggZmxleC1jb2wganVzdGlmeS1zdGFydCByb3cgcC01XCIsXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwibGc6ZmxleC1yb3dcIjogaW5kZXggJSAyID09PSAwLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibGc6ZmxleC1yb3ctcmV2ZXJzZVwiOiBpbmRleCAlIDIgPT09IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIGtleT17Ym94LmlkfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7LyogVGV4dCBzZWN0aW9uICovfVxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLWxnLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogYm94LmNvbnRlbnQgfX0+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIHsvKiBNZWRpYSBzZWN0aW9uICovfVxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLWxnLTYgbWF4LWgtZnVsbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGgtYXV0b1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TmV4dEltYWdlIG1lZGlhPXtib3guaW1hZ2V9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgICAgXHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRleHRBT2JyYXpla1xyXG4iXSwic291cmNlUm9vdCI6IiJ9