self["webpackHotUpdate_N_E"]("pages/[[...slug]]",{

/***/ "./components/sections.js":
/*!********************************!*\
  !*** ./components/sections.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_sections_hero__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/sections/hero */ "./components/sections/hero.js");
/* harmony import */ var _components_sections_text_a_obrazek__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/sections/text-a-obrazek */ "./components/sections/text-a-obrazek.js");
/* harmony import */ var _components_sections_darkovy_poukaz__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/sections/darkovy-poukaz */ "./components/sections/darkovy-poukaz.js");
/* harmony import */ var _components_sections_darkovy_poukaz__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_components_sections_darkovy_poukaz__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_sections_large_video__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/sections/large-video */ "./components/sections/large-video.js");
/* harmony import */ var _components_sections_feature_columns_group__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/sections/feature-columns-group */ "./components/sections/feature-columns-group.js");
/* harmony import */ var _components_sections_feature_rows_group__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/sections/feature-rows-group */ "./components/sections/feature-rows-group.js");
/* harmony import */ var _components_sections_bottom_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components/sections/bottom-actions */ "./components/sections/bottom-actions.js");
/* harmony import */ var _components_sections_testimonials_group__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/components/sections/testimonials-group */ "./components/sections/testimonials-group.js");
/* harmony import */ var _sections_rich_text__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./sections/rich-text */ "./components/sections/rich-text.js");
/* harmony import */ var _sections_pricing__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./sections/pricing */ "./components/sections/pricing.js");
/* harmony import */ var _sections_lead_form__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./sections/lead-form */ "./components/sections/lead-form.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\lukas\\OneDrive\\Desktop\\bakalarka\\bakalar\\my-app\\frontend\\components\\sections.js",
    _this = undefined,
    _s = $RefreshSig$();












 // Map Strapi sections to section components

var sectionComponents = {
  ComponentSectionsHero: _components_sections_hero__WEBPACK_IMPORTED_MODULE_2__.default,
  ComponentSectionsTextAObrazek: _components_sections_text_a_obrazek__WEBPACK_IMPORTED_MODULE_3__.default,
  ComponentSectionsDarkovyPoukaz: (_components_sections_darkovy_poukaz__WEBPACK_IMPORTED_MODULE_4___default()),
  ComponentSectionsLargeVideo: _components_sections_large_video__WEBPACK_IMPORTED_MODULE_5__.default,
  ComponentSectionsFeatureColumnsGroup: _components_sections_feature_columns_group__WEBPACK_IMPORTED_MODULE_6__.default,
  ComponentSectionsFeatureRowsGroup: _components_sections_feature_rows_group__WEBPACK_IMPORTED_MODULE_7__.default,
  ComponentSectionsBottomActions: _components_sections_bottom_actions__WEBPACK_IMPORTED_MODULE_8__.default,
  ComponentSectionsTestimonialsGroup: _components_sections_testimonials_group__WEBPACK_IMPORTED_MODULE_9__.default,
  ComponentSectionsRichText: _sections_rich_text__WEBPACK_IMPORTED_MODULE_10__.default,
  ComponentSectionsPricing: _sections_pricing__WEBPACK_IMPORTED_MODULE_11__.default,
  ComponentSectionsLeadForm: _sections_lead_form__WEBPACK_IMPORTED_MODULE_12__.default
}; // Display a section individually

var Section = function Section(_ref) {
  var sectionData = _ref.sectionData;
  // Prepare the component
  var SectionComponent = sectionComponents[sectionData.__typename];

  if (!SectionComponent) {
    return null;
  } // Display the section


  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SectionComponent, {
    data: sectionData
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 39,
    columnNumber: 10
  }, _this);
};

_c = Section;

var PreviewModeBanner = function PreviewModeBanner() {
  _s();

  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
  var exitURL = "/api/exit-preview?redirect=".concat(encodeURIComponent(router.asPath));
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "py-4 bg-red-600 text-red-100 font-semibold uppercase tracking-wide",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "container",
      children: ["Preview mode is on.", " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        className: "underline",
        href: "/api/exit-preview?redirect=".concat(router.asPath),
        children: "Turn off"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 49,
    columnNumber: 5
  }, _this);
}; // Display the list of sections


_s(PreviewModeBanner, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter];
});

_c2 = PreviewModeBanner;

var Sections = function Sections(_ref2) {
  var sections = _ref2.sections,
      preview = _ref2.preview;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "flex flex-col",
    children: [preview && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PreviewModeBanner, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 19
    }, _this), sections.map(function (section) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Section, {
        sectionData: section
      }, "".concat(section.__typename).concat(section.id), false, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 9
      }, _this);
    })]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 66,
    columnNumber: 5
  }, _this);
};

_c3 = Sections;
/* harmony default export */ __webpack_exports__["default"] = (Sections);

var _c, _c2, _c3;

$RefreshReg$(_c, "Section");
$RefreshReg$(_c2, "PreviewModeBanner");
$RefreshReg$(_c3, "Sections");

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


/***/ }),

/***/ "./components/sections/darkovy-poukaz.js":
/*!***********************************************!*\
  !*** ./components/sections/darkovy-poukaz.js ***!
  \***********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/* module decorator */ module = __webpack_require__.nmd(module);


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zZWN0aW9ucy5qcyJdLCJuYW1lcyI6WyJzZWN0aW9uQ29tcG9uZW50cyIsIkNvbXBvbmVudFNlY3Rpb25zSGVybyIsIkhlcm8iLCJDb21wb25lbnRTZWN0aW9uc1RleHRBT2JyYXplayIsIlRleHRBT2JyYXplayIsIkNvbXBvbmVudFNlY3Rpb25zRGFya292eVBvdWtheiIsIkRhcmtvdnlQb3VrYXoiLCJDb21wb25lbnRTZWN0aW9uc0xhcmdlVmlkZW8iLCJMYXJnZVZpZGVvIiwiQ29tcG9uZW50U2VjdGlvbnNGZWF0dXJlQ29sdW1uc0dyb3VwIiwiRmVhdHVyZUNvbHVtbnNHcm91cCIsIkNvbXBvbmVudFNlY3Rpb25zRmVhdHVyZVJvd3NHcm91cCIsIkZlYXR1cmVSb3dzR3JvdXAiLCJDb21wb25lbnRTZWN0aW9uc0JvdHRvbUFjdGlvbnMiLCJCb3R0b21BY3Rpb25zIiwiQ29tcG9uZW50U2VjdGlvbnNUZXN0aW1vbmlhbHNHcm91cCIsIlRlc3RpbW9uaWFsc0dyb3VwIiwiQ29tcG9uZW50U2VjdGlvbnNSaWNoVGV4dCIsIlJpY2hUZXh0IiwiQ29tcG9uZW50U2VjdGlvbnNQcmljaW5nIiwiUHJpY2luZyIsIkNvbXBvbmVudFNlY3Rpb25zTGVhZEZvcm0iLCJMZWFkRm9ybSIsIlNlY3Rpb24iLCJzZWN0aW9uRGF0YSIsIlNlY3Rpb25Db21wb25lbnQiLCJfX3R5cGVuYW1lIiwiUHJldmlld01vZGVCYW5uZXIiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJleGl0VVJMIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiYXNQYXRoIiwiU2VjdGlvbnMiLCJzZWN0aW9ucyIsInByZXZpZXciLCJtYXAiLCJzZWN0aW9uIiwiaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FHQTs7QUFDQSxJQUFNQSxpQkFBaUIsR0FBRztBQUN4QkMsdUJBQXFCLEVBQUVDLDhEQURDO0FBRXhCQywrQkFBNkIsRUFBRUMsd0VBRlA7QUFHeEJDLGdDQUE4QixFQUFFQyw0RUFIUjtBQUl4QkMsNkJBQTJCLEVBQUVDLHFFQUpMO0FBS3hCQyxzQ0FBb0MsRUFBRUMsK0VBTGQ7QUFNeEJDLG1DQUFpQyxFQUFFQyw0RUFOWDtBQU94QkMsZ0NBQThCLEVBQUVDLHdFQVBSO0FBUXhCQyxvQ0FBa0MsRUFBRUMsNEVBUlo7QUFTeEJDLDJCQUF5QixFQUFFQyx5REFUSDtBQVV4QkMsMEJBQXdCLEVBQUVDLHVEQVZGO0FBV3hCQywyQkFBeUIsRUFBRUMseURBQVFBO0FBWFgsQ0FBMUIsQyxDQWNBOztBQUNBLElBQU1DLE9BQU8sR0FBRyxTQUFWQSxPQUFVLE9BQXFCO0FBQUEsTUFBbEJDLFdBQWtCLFFBQWxCQSxXQUFrQjtBQUNuQztBQUNBLE1BQU1DLGdCQUFnQixHQUFHekIsaUJBQWlCLENBQUN3QixXQUFXLENBQUNFLFVBQWIsQ0FBMUM7O0FBRUEsTUFBSSxDQUFDRCxnQkFBTCxFQUF1QjtBQUNyQixXQUFPLElBQVA7QUFDRCxHQU5rQyxDQVFuQzs7O0FBQ0Esc0JBQU8sOERBQUMsZ0JBQUQ7QUFBa0IsUUFBSSxFQUFFRDtBQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQVA7QUFDRCxDQVZEOztLQUFNRCxPOztBQVlOLElBQU1JLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsR0FBTTtBQUFBOztBQUM5QixNQUFNQyxNQUFNLEdBQUdDLHNEQUFTLEVBQXhCO0FBQ0EsTUFBTUMsT0FBTyx3Q0FBaUNDLGtCQUFrQixDQUM5REgsTUFBTSxDQUFDSSxNQUR1RCxDQUFuRCxDQUFiO0FBSUEsc0JBQ0U7QUFBSyxhQUFTLEVBQUMsb0VBQWY7QUFBQSwyQkFDRTtBQUFLLGVBQVMsRUFBQyxXQUFmO0FBQUEsd0NBQ3NCLEdBRHRCLGVBRUU7QUFDRSxpQkFBUyxFQUFDLFdBRFo7QUFFRSxZQUFJLHVDQUFnQ0osTUFBTSxDQUFDSSxNQUF2QyxDQUZOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBYUQsQ0FuQkQsQyxDQXFCQTs7O0dBckJNTCxpQjtVQUNXRSxrRDs7O01BRFhGLGlCOztBQXNCTixJQUFNTSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxRQUEyQjtBQUFBLE1BQXhCQyxRQUF3QixTQUF4QkEsUUFBd0I7QUFBQSxNQUFkQyxPQUFjLFNBQWRBLE9BQWM7QUFDMUMsc0JBQ0U7QUFBSyxhQUFTLEVBQUMsZUFBZjtBQUFBLGVBRUdBLE9BQU8saUJBQUksOERBQUMsaUJBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZkLEVBSUdELFFBQVEsQ0FBQ0UsR0FBVCxDQUFhLFVBQUNDLE9BQUQ7QUFBQSwwQkFDWiw4REFBQyxPQUFEO0FBQ0UsbUJBQVcsRUFBRUE7QUFEZixtQkFFVUEsT0FBTyxDQUFDWCxVQUZsQixTQUUrQlcsT0FBTyxDQUFDQyxFQUZ2QztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRFk7QUFBQSxLQUFiLENBSkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFhRCxDQWREOztNQUFNTCxRO0FBZ0JOLCtEQUFlQSxRQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL1tbLi4uc2x1Z11dLmZkYmU1MThjOWRmMTliMGU4NTliLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIlxyXG5pbXBvcnQgSGVybyBmcm9tIFwiQC9jb21wb25lbnRzL3NlY3Rpb25zL2hlcm9cIlxyXG5pbXBvcnQgVGV4dEFPYnJhemVrIGZyb20gXCJAL2NvbXBvbmVudHMvc2VjdGlvbnMvdGV4dC1hLW9icmF6ZWtcIlxyXG5pbXBvcnQgRGFya292eVBvdWtheiBmcm9tIFwiQC9jb21wb25lbnRzL3NlY3Rpb25zL2RhcmtvdnktcG91a2F6XCJcclxuaW1wb3J0IExhcmdlVmlkZW8gZnJvbSBcIkAvY29tcG9uZW50cy9zZWN0aW9ucy9sYXJnZS12aWRlb1wiXHJcbmltcG9ydCBGZWF0dXJlQ29sdW1uc0dyb3VwIGZyb20gXCJAL2NvbXBvbmVudHMvc2VjdGlvbnMvZmVhdHVyZS1jb2x1bW5zLWdyb3VwXCJcclxuaW1wb3J0IEZlYXR1cmVSb3dzR3JvdXAgZnJvbSBcIkAvY29tcG9uZW50cy9zZWN0aW9ucy9mZWF0dXJlLXJvd3MtZ3JvdXBcIlxyXG5pbXBvcnQgQm90dG9tQWN0aW9ucyBmcm9tIFwiQC9jb21wb25lbnRzL3NlY3Rpb25zL2JvdHRvbS1hY3Rpb25zXCJcclxuaW1wb3J0IFRlc3RpbW9uaWFsc0dyb3VwIGZyb20gXCJAL2NvbXBvbmVudHMvc2VjdGlvbnMvdGVzdGltb25pYWxzLWdyb3VwXCJcclxuaW1wb3J0IFJpY2hUZXh0IGZyb20gXCIuL3NlY3Rpb25zL3JpY2gtdGV4dFwiXHJcbmltcG9ydCBQcmljaW5nIGZyb20gXCIuL3NlY3Rpb25zL3ByaWNpbmdcIlxyXG5pbXBvcnQgTGVhZEZvcm0gZnJvbSBcIi4vc2VjdGlvbnMvbGVhZC1mb3JtXCJcclxuXHJcbi8vIE1hcCBTdHJhcGkgc2VjdGlvbnMgdG8gc2VjdGlvbiBjb21wb25lbnRzXHJcbmNvbnN0IHNlY3Rpb25Db21wb25lbnRzID0ge1xyXG4gIENvbXBvbmVudFNlY3Rpb25zSGVybzogSGVybyxcclxuICBDb21wb25lbnRTZWN0aW9uc1RleHRBT2JyYXplazogVGV4dEFPYnJhemVrLFxyXG4gIENvbXBvbmVudFNlY3Rpb25zRGFya292eVBvdWthejogRGFya292eVBvdWtheixcclxuICBDb21wb25lbnRTZWN0aW9uc0xhcmdlVmlkZW86IExhcmdlVmlkZW8sXHJcbiAgQ29tcG9uZW50U2VjdGlvbnNGZWF0dXJlQ29sdW1uc0dyb3VwOiBGZWF0dXJlQ29sdW1uc0dyb3VwLFxyXG4gIENvbXBvbmVudFNlY3Rpb25zRmVhdHVyZVJvd3NHcm91cDogRmVhdHVyZVJvd3NHcm91cCxcclxuICBDb21wb25lbnRTZWN0aW9uc0JvdHRvbUFjdGlvbnM6IEJvdHRvbUFjdGlvbnMsXHJcbiAgQ29tcG9uZW50U2VjdGlvbnNUZXN0aW1vbmlhbHNHcm91cDogVGVzdGltb25pYWxzR3JvdXAsXHJcbiAgQ29tcG9uZW50U2VjdGlvbnNSaWNoVGV4dDogUmljaFRleHQsXHJcbiAgQ29tcG9uZW50U2VjdGlvbnNQcmljaW5nOiBQcmljaW5nLFxyXG4gIENvbXBvbmVudFNlY3Rpb25zTGVhZEZvcm06IExlYWRGb3JtLFxyXG59XHJcblxyXG4vLyBEaXNwbGF5IGEgc2VjdGlvbiBpbmRpdmlkdWFsbHlcclxuY29uc3QgU2VjdGlvbiA9ICh7IHNlY3Rpb25EYXRhIH0pID0+IHtcclxuICAvLyBQcmVwYXJlIHRoZSBjb21wb25lbnRcclxuICBjb25zdCBTZWN0aW9uQ29tcG9uZW50ID0gc2VjdGlvbkNvbXBvbmVudHNbc2VjdGlvbkRhdGEuX190eXBlbmFtZV1cclxuXHJcbiAgaWYgKCFTZWN0aW9uQ29tcG9uZW50KSB7XHJcbiAgICByZXR1cm4gbnVsbFxyXG4gIH1cclxuXHJcbiAgLy8gRGlzcGxheSB0aGUgc2VjdGlvblxyXG4gIHJldHVybiA8U2VjdGlvbkNvbXBvbmVudCBkYXRhPXtzZWN0aW9uRGF0YX0gLz5cclxufVxyXG5cclxuY29uc3QgUHJldmlld01vZGVCYW5uZXIgPSAoKSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICBjb25zdCBleGl0VVJMID0gYC9hcGkvZXhpdC1wcmV2aWV3P3JlZGlyZWN0PSR7ZW5jb2RlVVJJQ29tcG9uZW50KFxyXG4gICAgcm91dGVyLmFzUGF0aFxyXG4gICl9YFxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJweS00IGJnLXJlZC02MDAgdGV4dC1yZWQtMTAwIGZvbnQtc2VtaWJvbGQgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICBQcmV2aWV3IG1vZGUgaXMgb24ue1wiIFwifVxyXG4gICAgICAgIDxhXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJ1bmRlcmxpbmVcIlxyXG4gICAgICAgICAgaHJlZj17YC9hcGkvZXhpdC1wcmV2aWV3P3JlZGlyZWN0PSR7cm91dGVyLmFzUGF0aH1gfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIFR1cm4gb2ZmXHJcbiAgICAgICAgPC9hPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuLy8gRGlzcGxheSB0aGUgbGlzdCBvZiBzZWN0aW9uc1xyXG5jb25zdCBTZWN0aW9ucyA9ICh7IHNlY3Rpb25zLCBwcmV2aWV3IH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sXCI+XHJcbiAgICAgIHsvKiBTaG93IGEgYmFubmVyIGlmIHByZXZpZXcgbW9kZSBpcyBvbiAqL31cclxuICAgICAge3ByZXZpZXcgJiYgPFByZXZpZXdNb2RlQmFubmVyIC8+fVxyXG4gICAgICB7LyogU2hvdyB0aGUgYWN0dWFsIHNlY3Rpb25zICovfVxyXG4gICAgICB7c2VjdGlvbnMubWFwKChzZWN0aW9uKSA9PiAoXHJcbiAgICAgICAgPFNlY3Rpb25cclxuICAgICAgICAgIHNlY3Rpb25EYXRhPXtzZWN0aW9ufVxyXG4gICAgICAgICAga2V5PXtgJHtzZWN0aW9uLl9fdHlwZW5hbWV9JHtzZWN0aW9uLmlkfWB9XHJcbiAgICAgICAgLz5cclxuICAgICAgKSl9XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlY3Rpb25zXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=