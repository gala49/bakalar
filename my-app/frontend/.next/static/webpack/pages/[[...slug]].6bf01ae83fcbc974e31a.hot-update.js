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
/* harmony import */ var _components_sections_radek_tabulky__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/sections/radek-tabulky */ "./components/sections/radek-tabulky.js");
/* harmony import */ var _components_sections_radek_tabulky__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_components_sections_radek_tabulky__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_sections_large_video__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/sections/large-video */ "./components/sections/large-video.js");
/* harmony import */ var _components_sections_feature_columns_group__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/sections/feature-columns-group */ "./components/sections/feature-columns-group.js");
/* harmony import */ var _components_sections_feature_rows_group__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components/sections/feature-rows-group */ "./components/sections/feature-rows-group.js");
/* harmony import */ var _components_sections_bottom_actions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/components/sections/bottom-actions */ "./components/sections/bottom-actions.js");
/* harmony import */ var _components_sections_testimonials_group__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/components/sections/testimonials-group */ "./components/sections/testimonials-group.js");
/* harmony import */ var _sections_rich_text__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./sections/rich-text */ "./components/sections/rich-text.js");
/* harmony import */ var _sections_pricing__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./sections/pricing */ "./components/sections/pricing.js");
/* harmony import */ var _sections_lead_form__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./sections/lead-form */ "./components/sections/lead-form.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\lukas\\OneDrive\\Desktop\\bakalarka\\bakalar\\my-app\\frontend\\components\\sections.js",
    _this = undefined,
    _s = $RefreshSig$();













 // Map Strapi sections to section components

var sectionComponents = {
  ComponentSectionsHero: _components_sections_hero__WEBPACK_IMPORTED_MODULE_2__.default,
  ComponentSectionsTextAObrazek: _components_sections_text_a_obrazek__WEBPACK_IMPORTED_MODULE_3__.default,
  ComponentSectionsDarkovyPoukaz: _components_sections_darkovy_poukaz__WEBPACK_IMPORTED_MODULE_4__.default,
  ComponentSectionsRadekTabulky: (_components_sections_radek_tabulky__WEBPACK_IMPORTED_MODULE_5___default()),
  ComponentSectionsLargeVideo: _components_sections_large_video__WEBPACK_IMPORTED_MODULE_6__.default,
  ComponentSectionsFeatureColumnsGroup: _components_sections_feature_columns_group__WEBPACK_IMPORTED_MODULE_7__.default,
  ComponentSectionsFeatureRowsGroup: _components_sections_feature_rows_group__WEBPACK_IMPORTED_MODULE_8__.default,
  ComponentSectionsBottomActions: _components_sections_bottom_actions__WEBPACK_IMPORTED_MODULE_9__.default,
  ComponentSectionsTestimonialsGroup: _components_sections_testimonials_group__WEBPACK_IMPORTED_MODULE_10__.default,
  ComponentSectionsRichText: _sections_rich_text__WEBPACK_IMPORTED_MODULE_11__.default,
  ComponentSectionsPricing: _sections_pricing__WEBPACK_IMPORTED_MODULE_12__.default,
  ComponentSectionsLeadForm: _sections_lead_form__WEBPACK_IMPORTED_MODULE_13__.default
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
    lineNumber: 41,
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
        lineNumber: 54,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 51,
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
      lineNumber: 70,
      columnNumber: 19
    }, _this), sections.map(function (section) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Section, {
        sectionData: section
      }, "".concat(section.__typename).concat(section.id), false, {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 9
      }, _this);
    })]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 68,
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

/***/ "./components/sections/radek-tabulky.js":
/*!**********************************************!*\
  !*** ./components/sections/radek-tabulky.js ***!
  \**********************************************/
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zZWN0aW9ucy5qcyJdLCJuYW1lcyI6WyJzZWN0aW9uQ29tcG9uZW50cyIsIkNvbXBvbmVudFNlY3Rpb25zSGVybyIsIkhlcm8iLCJDb21wb25lbnRTZWN0aW9uc1RleHRBT2JyYXplayIsIlRleHRBT2JyYXplayIsIkNvbXBvbmVudFNlY3Rpb25zRGFya292eVBvdWtheiIsIkRhcmtvdnlQb3VrYXoiLCJDb21wb25lbnRTZWN0aW9uc1JhZGVrVGFidWxreSIsIlJhZGVrVGFidWxreSIsIkNvbXBvbmVudFNlY3Rpb25zTGFyZ2VWaWRlbyIsIkxhcmdlVmlkZW8iLCJDb21wb25lbnRTZWN0aW9uc0ZlYXR1cmVDb2x1bW5zR3JvdXAiLCJGZWF0dXJlQ29sdW1uc0dyb3VwIiwiQ29tcG9uZW50U2VjdGlvbnNGZWF0dXJlUm93c0dyb3VwIiwiRmVhdHVyZVJvd3NHcm91cCIsIkNvbXBvbmVudFNlY3Rpb25zQm90dG9tQWN0aW9ucyIsIkJvdHRvbUFjdGlvbnMiLCJDb21wb25lbnRTZWN0aW9uc1Rlc3RpbW9uaWFsc0dyb3VwIiwiVGVzdGltb25pYWxzR3JvdXAiLCJDb21wb25lbnRTZWN0aW9uc1JpY2hUZXh0IiwiUmljaFRleHQiLCJDb21wb25lbnRTZWN0aW9uc1ByaWNpbmciLCJQcmljaW5nIiwiQ29tcG9uZW50U2VjdGlvbnNMZWFkRm9ybSIsIkxlYWRGb3JtIiwiU2VjdGlvbiIsInNlY3Rpb25EYXRhIiwiU2VjdGlvbkNvbXBvbmVudCIsIl9fdHlwZW5hbWUiLCJQcmV2aWV3TW9kZUJhbm5lciIsInJvdXRlciIsInVzZVJvdXRlciIsImV4aXRVUkwiLCJlbmNvZGVVUklDb21wb25lbnQiLCJhc1BhdGgiLCJTZWN0aW9ucyIsInNlY3Rpb25zIiwicHJldmlldyIsIm1hcCIsInNlY3Rpb24iLCJpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtDQUdBOztBQUNBLElBQU1BLGlCQUFpQixHQUFHO0FBQ3hCQyx1QkFBcUIsRUFBRUMsOERBREM7QUFFeEJDLCtCQUE2QixFQUFFQyx3RUFGUDtBQUd4QkMsZ0NBQThCLEVBQUVDLHdFQUhSO0FBSXhCQywrQkFBNkIsRUFBRUMsMkVBSlA7QUFLeEJDLDZCQUEyQixFQUFFQyxxRUFMTDtBQU14QkMsc0NBQW9DLEVBQUVDLCtFQU5kO0FBT3hCQyxtQ0FBaUMsRUFBRUMsNEVBUFg7QUFReEJDLGdDQUE4QixFQUFFQyx3RUFSUjtBQVN4QkMsb0NBQWtDLEVBQUVDLDZFQVRaO0FBVXhCQywyQkFBeUIsRUFBRUMseURBVkg7QUFXeEJDLDBCQUF3QixFQUFFQyx1REFYRjtBQVl4QkMsMkJBQXlCLEVBQUVDLHlEQUFRQTtBQVpYLENBQTFCLEMsQ0FlQTs7QUFDQSxJQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxPQUFxQjtBQUFBLE1BQWxCQyxXQUFrQixRQUFsQkEsV0FBa0I7QUFDbkM7QUFDQSxNQUFNQyxnQkFBZ0IsR0FBRzNCLGlCQUFpQixDQUFDMEIsV0FBVyxDQUFDRSxVQUFiLENBQTFDOztBQUVBLE1BQUksQ0FBQ0QsZ0JBQUwsRUFBdUI7QUFDckIsV0FBTyxJQUFQO0FBQ0QsR0FOa0MsQ0FRbkM7OztBQUNBLHNCQUFPLDhEQUFDLGdCQUFEO0FBQWtCLFFBQUksRUFBRUQ7QUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFQO0FBQ0QsQ0FWRDs7S0FBTUQsTzs7QUFZTixJQUFNSSxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLEdBQU07QUFBQTs7QUFDOUIsTUFBTUMsTUFBTSxHQUFHQyxzREFBUyxFQUF4QjtBQUNBLE1BQU1DLE9BQU8sd0NBQWlDQyxrQkFBa0IsQ0FDOURILE1BQU0sQ0FBQ0ksTUFEdUQsQ0FBbkQsQ0FBYjtBQUlBLHNCQUNFO0FBQUssYUFBUyxFQUFDLG9FQUFmO0FBQUEsMkJBQ0U7QUFBSyxlQUFTLEVBQUMsV0FBZjtBQUFBLHdDQUNzQixHQUR0QixlQUVFO0FBQ0UsaUJBQVMsRUFBQyxXQURaO0FBRUUsWUFBSSx1Q0FBZ0NKLE1BQU0sQ0FBQ0ksTUFBdkMsQ0FGTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQWFELENBbkJELEMsQ0FxQkE7OztHQXJCTUwsaUI7VUFDV0Usa0Q7OztNQURYRixpQjs7QUFzQk4sSUFBTU0sUUFBUSxHQUFHLFNBQVhBLFFBQVcsUUFBMkI7QUFBQSxNQUF4QkMsUUFBd0IsU0FBeEJBLFFBQXdCO0FBQUEsTUFBZEMsT0FBYyxTQUFkQSxPQUFjO0FBQzFDLHNCQUNFO0FBQUssYUFBUyxFQUFDLGVBQWY7QUFBQSxlQUVHQSxPQUFPLGlCQUFJLDhEQUFDLGlCQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGZCxFQUlHRCxRQUFRLENBQUNFLEdBQVQsQ0FBYSxVQUFDQyxPQUFEO0FBQUEsMEJBQ1osOERBQUMsT0FBRDtBQUNFLG1CQUFXLEVBQUVBO0FBRGYsbUJBRVVBLE9BQU8sQ0FBQ1gsVUFGbEIsU0FFK0JXLE9BQU8sQ0FBQ0MsRUFGdkM7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURZO0FBQUEsS0FBYixDQUpIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBYUQsQ0FkRDs7TUFBTUwsUTtBQWdCTiwrREFBZUEsUUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9bWy4uLnNsdWddXS42YmYwMWFlODNmY2JjOTc0ZTMxYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCJcclxuaW1wb3J0IEhlcm8gZnJvbSBcIkAvY29tcG9uZW50cy9zZWN0aW9ucy9oZXJvXCJcclxuaW1wb3J0IFRleHRBT2JyYXplayBmcm9tIFwiQC9jb21wb25lbnRzL3NlY3Rpb25zL3RleHQtYS1vYnJhemVrXCJcclxuaW1wb3J0IERhcmtvdnlQb3VrYXogZnJvbSBcIkAvY29tcG9uZW50cy9zZWN0aW9ucy9kYXJrb3Z5LXBvdWthelwiXHJcbmltcG9ydCBSYWRla1RhYnVsa3kgZnJvbSBcIkAvY29tcG9uZW50cy9zZWN0aW9ucy9yYWRlay10YWJ1bGt5XCJcclxuaW1wb3J0IExhcmdlVmlkZW8gZnJvbSBcIkAvY29tcG9uZW50cy9zZWN0aW9ucy9sYXJnZS12aWRlb1wiXHJcbmltcG9ydCBGZWF0dXJlQ29sdW1uc0dyb3VwIGZyb20gXCJAL2NvbXBvbmVudHMvc2VjdGlvbnMvZmVhdHVyZS1jb2x1bW5zLWdyb3VwXCJcclxuaW1wb3J0IEZlYXR1cmVSb3dzR3JvdXAgZnJvbSBcIkAvY29tcG9uZW50cy9zZWN0aW9ucy9mZWF0dXJlLXJvd3MtZ3JvdXBcIlxyXG5pbXBvcnQgQm90dG9tQWN0aW9ucyBmcm9tIFwiQC9jb21wb25lbnRzL3NlY3Rpb25zL2JvdHRvbS1hY3Rpb25zXCJcclxuaW1wb3J0IFRlc3RpbW9uaWFsc0dyb3VwIGZyb20gXCJAL2NvbXBvbmVudHMvc2VjdGlvbnMvdGVzdGltb25pYWxzLWdyb3VwXCJcclxuaW1wb3J0IFJpY2hUZXh0IGZyb20gXCIuL3NlY3Rpb25zL3JpY2gtdGV4dFwiXHJcbmltcG9ydCBQcmljaW5nIGZyb20gXCIuL3NlY3Rpb25zL3ByaWNpbmdcIlxyXG5pbXBvcnQgTGVhZEZvcm0gZnJvbSBcIi4vc2VjdGlvbnMvbGVhZC1mb3JtXCJcclxuXHJcbi8vIE1hcCBTdHJhcGkgc2VjdGlvbnMgdG8gc2VjdGlvbiBjb21wb25lbnRzXHJcbmNvbnN0IHNlY3Rpb25Db21wb25lbnRzID0ge1xyXG4gIENvbXBvbmVudFNlY3Rpb25zSGVybzogSGVybyxcclxuICBDb21wb25lbnRTZWN0aW9uc1RleHRBT2JyYXplazogVGV4dEFPYnJhemVrLFxyXG4gIENvbXBvbmVudFNlY3Rpb25zRGFya292eVBvdWthejogRGFya292eVBvdWtheixcclxuICBDb21wb25lbnRTZWN0aW9uc1JhZGVrVGFidWxreTogUmFkZWtUYWJ1bGt5LFxyXG4gIENvbXBvbmVudFNlY3Rpb25zTGFyZ2VWaWRlbzogTGFyZ2VWaWRlbyxcclxuICBDb21wb25lbnRTZWN0aW9uc0ZlYXR1cmVDb2x1bW5zR3JvdXA6IEZlYXR1cmVDb2x1bW5zR3JvdXAsXHJcbiAgQ29tcG9uZW50U2VjdGlvbnNGZWF0dXJlUm93c0dyb3VwOiBGZWF0dXJlUm93c0dyb3VwLFxyXG4gIENvbXBvbmVudFNlY3Rpb25zQm90dG9tQWN0aW9uczogQm90dG9tQWN0aW9ucyxcclxuICBDb21wb25lbnRTZWN0aW9uc1Rlc3RpbW9uaWFsc0dyb3VwOiBUZXN0aW1vbmlhbHNHcm91cCxcclxuICBDb21wb25lbnRTZWN0aW9uc1JpY2hUZXh0OiBSaWNoVGV4dCxcclxuICBDb21wb25lbnRTZWN0aW9uc1ByaWNpbmc6IFByaWNpbmcsXHJcbiAgQ29tcG9uZW50U2VjdGlvbnNMZWFkRm9ybTogTGVhZEZvcm0sXHJcbn1cclxuXHJcbi8vIERpc3BsYXkgYSBzZWN0aW9uIGluZGl2aWR1YWxseVxyXG5jb25zdCBTZWN0aW9uID0gKHsgc2VjdGlvbkRhdGEgfSkgPT4ge1xyXG4gIC8vIFByZXBhcmUgdGhlIGNvbXBvbmVudFxyXG4gIGNvbnN0IFNlY3Rpb25Db21wb25lbnQgPSBzZWN0aW9uQ29tcG9uZW50c1tzZWN0aW9uRGF0YS5fX3R5cGVuYW1lXVxyXG5cclxuICBpZiAoIVNlY3Rpb25Db21wb25lbnQpIHtcclxuICAgIHJldHVybiBudWxsXHJcbiAgfVxyXG5cclxuICAvLyBEaXNwbGF5IHRoZSBzZWN0aW9uXHJcbiAgcmV0dXJuIDxTZWN0aW9uQ29tcG9uZW50IGRhdGE9e3NlY3Rpb25EYXRhfSAvPlxyXG59XHJcblxyXG5jb25zdCBQcmV2aWV3TW9kZUJhbm5lciA9ICgpID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gIGNvbnN0IGV4aXRVUkwgPSBgL2FwaS9leGl0LXByZXZpZXc/cmVkaXJlY3Q9JHtlbmNvZGVVUklDb21wb25lbnQoXHJcbiAgICByb3V0ZXIuYXNQYXRoXHJcbiAgKX1gXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInB5LTQgYmctcmVkLTYwMCB0ZXh0LXJlZC0xMDAgZm9udC1zZW1pYm9sZCB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZVwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgIFByZXZpZXcgbW9kZSBpcyBvbi57XCIgXCJ9XHJcbiAgICAgICAgPGFcclxuICAgICAgICAgIGNsYXNzTmFtZT1cInVuZGVybGluZVwiXHJcbiAgICAgICAgICBocmVmPXtgL2FwaS9leGl0LXByZXZpZXc/cmVkaXJlY3Q9JHtyb3V0ZXIuYXNQYXRofWB9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgVHVybiBvZmZcclxuICAgICAgICA8L2E+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG4vLyBEaXNwbGF5IHRoZSBsaXN0IG9mIHNlY3Rpb25zXHJcbmNvbnN0IFNlY3Rpb25zID0gKHsgc2VjdGlvbnMsIHByZXZpZXcgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2xcIj5cclxuICAgICAgey8qIFNob3cgYSBiYW5uZXIgaWYgcHJldmlldyBtb2RlIGlzIG9uICovfVxyXG4gICAgICB7cHJldmlldyAmJiA8UHJldmlld01vZGVCYW5uZXIgLz59XHJcbiAgICAgIHsvKiBTaG93IHRoZSBhY3R1YWwgc2VjdGlvbnMgKi99XHJcbiAgICAgIHtzZWN0aW9ucy5tYXAoKHNlY3Rpb24pID0+IChcclxuICAgICAgICA8U2VjdGlvblxyXG4gICAgICAgICAgc2VjdGlvbkRhdGE9e3NlY3Rpb259XHJcbiAgICAgICAgICBrZXk9e2Ake3NlY3Rpb24uX190eXBlbmFtZX0ke3NlY3Rpb24uaWR9YH1cclxuICAgICAgICAvPlxyXG4gICAgICApKX1cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2VjdGlvbnNcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==