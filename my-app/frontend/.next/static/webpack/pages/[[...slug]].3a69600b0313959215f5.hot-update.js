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
  ComponentSectionsDarkovyPoukaz: _components_sections_darkovy_poukaz__WEBPACK_IMPORTED_MODULE_4__.default,
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


var _jsxFileName = "C:\\Users\\lukas\\OneDrive\\Desktop\\bakalarka\\bakalar\\my-app\\frontend\\components\\sections\\darkovy-poukaz.js",
    _this = undefined;






var DarkovyPoukaz = function DarkovyPoukaz(_ref) {
  var data = _ref.data;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "container section-padding text-image-section",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
      className: "text-center mb-5",
      children: data.title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      dangerouslySetInnerHTML: {
        __html: data.text
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }, _this);
};

_c = DarkovyPoukaz;
/* harmony default export */ __webpack_exports__["default"] = (DarkovyPoukaz);

var _c;

$RefreshReg$(_c, "DarkovyPoukaz");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zZWN0aW9ucy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zZWN0aW9ucy9kYXJrb3Z5LXBvdWthei5qcyJdLCJuYW1lcyI6WyJzZWN0aW9uQ29tcG9uZW50cyIsIkNvbXBvbmVudFNlY3Rpb25zSGVybyIsIkhlcm8iLCJDb21wb25lbnRTZWN0aW9uc1RleHRBT2JyYXplayIsIlRleHRBT2JyYXplayIsIkNvbXBvbmVudFNlY3Rpb25zRGFya292eVBvdWtheiIsIkRhcmtvdnlQb3VrYXoiLCJDb21wb25lbnRTZWN0aW9uc0xhcmdlVmlkZW8iLCJMYXJnZVZpZGVvIiwiQ29tcG9uZW50U2VjdGlvbnNGZWF0dXJlQ29sdW1uc0dyb3VwIiwiRmVhdHVyZUNvbHVtbnNHcm91cCIsIkNvbXBvbmVudFNlY3Rpb25zRmVhdHVyZVJvd3NHcm91cCIsIkZlYXR1cmVSb3dzR3JvdXAiLCJDb21wb25lbnRTZWN0aW9uc0JvdHRvbUFjdGlvbnMiLCJCb3R0b21BY3Rpb25zIiwiQ29tcG9uZW50U2VjdGlvbnNUZXN0aW1vbmlhbHNHcm91cCIsIlRlc3RpbW9uaWFsc0dyb3VwIiwiQ29tcG9uZW50U2VjdGlvbnNSaWNoVGV4dCIsIlJpY2hUZXh0IiwiQ29tcG9uZW50U2VjdGlvbnNQcmljaW5nIiwiUHJpY2luZyIsIkNvbXBvbmVudFNlY3Rpb25zTGVhZEZvcm0iLCJMZWFkRm9ybSIsIlNlY3Rpb24iLCJzZWN0aW9uRGF0YSIsIlNlY3Rpb25Db21wb25lbnQiLCJfX3R5cGVuYW1lIiwiUHJldmlld01vZGVCYW5uZXIiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJleGl0VVJMIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiYXNQYXRoIiwiU2VjdGlvbnMiLCJzZWN0aW9ucyIsInByZXZpZXciLCJtYXAiLCJzZWN0aW9uIiwiaWQiLCJkYXRhIiwidGl0bGUiLCJfX2h0bWwiLCJ0ZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7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RUFBQyxrQkFBZDtBQUFBLGdCQUFrQ0EsSUFBSSxDQUFDQztBQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREosZUFFSTtBQUFLLDZCQUF1QixFQUFFO0FBQUVDLGNBQU0sRUFBRUYsSUFBSSxDQUFDRztBQUFmO0FBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQU1ELENBUEQ7O0tBQU1wQyxhO0FBU04sK0RBQWVBLGFBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvW1suLi5zbHVnXV0uM2E2OTYwMGIwMzEzOTU5MjE1ZjUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiXHJcbmltcG9ydCBIZXJvIGZyb20gXCJAL2NvbXBvbmVudHMvc2VjdGlvbnMvaGVyb1wiXHJcbmltcG9ydCBUZXh0QU9icmF6ZWsgZnJvbSBcIkAvY29tcG9uZW50cy9zZWN0aW9ucy90ZXh0LWEtb2JyYXpla1wiXHJcbmltcG9ydCBEYXJrb3Z5UG91a2F6IGZyb20gXCJAL2NvbXBvbmVudHMvc2VjdGlvbnMvZGFya292eS1wb3VrYXpcIlxyXG5pbXBvcnQgTGFyZ2VWaWRlbyBmcm9tIFwiQC9jb21wb25lbnRzL3NlY3Rpb25zL2xhcmdlLXZpZGVvXCJcclxuaW1wb3J0IEZlYXR1cmVDb2x1bW5zR3JvdXAgZnJvbSBcIkAvY29tcG9uZW50cy9zZWN0aW9ucy9mZWF0dXJlLWNvbHVtbnMtZ3JvdXBcIlxyXG5pbXBvcnQgRmVhdHVyZVJvd3NHcm91cCBmcm9tIFwiQC9jb21wb25lbnRzL3NlY3Rpb25zL2ZlYXR1cmUtcm93cy1ncm91cFwiXHJcbmltcG9ydCBCb3R0b21BY3Rpb25zIGZyb20gXCJAL2NvbXBvbmVudHMvc2VjdGlvbnMvYm90dG9tLWFjdGlvbnNcIlxyXG5pbXBvcnQgVGVzdGltb25pYWxzR3JvdXAgZnJvbSBcIkAvY29tcG9uZW50cy9zZWN0aW9ucy90ZXN0aW1vbmlhbHMtZ3JvdXBcIlxyXG5pbXBvcnQgUmljaFRleHQgZnJvbSBcIi4vc2VjdGlvbnMvcmljaC10ZXh0XCJcclxuaW1wb3J0IFByaWNpbmcgZnJvbSBcIi4vc2VjdGlvbnMvcHJpY2luZ1wiXHJcbmltcG9ydCBMZWFkRm9ybSBmcm9tIFwiLi9zZWN0aW9ucy9sZWFkLWZvcm1cIlxyXG5cclxuLy8gTWFwIFN0cmFwaSBzZWN0aW9ucyB0byBzZWN0aW9uIGNvbXBvbmVudHNcclxuY29uc3Qgc2VjdGlvbkNvbXBvbmVudHMgPSB7XHJcbiAgQ29tcG9uZW50U2VjdGlvbnNIZXJvOiBIZXJvLFxyXG4gIENvbXBvbmVudFNlY3Rpb25zVGV4dEFPYnJhemVrOiBUZXh0QU9icmF6ZWssXHJcbiAgQ29tcG9uZW50U2VjdGlvbnNEYXJrb3Z5UG91a2F6OiBEYXJrb3Z5UG91a2F6LFxyXG4gIENvbXBvbmVudFNlY3Rpb25zTGFyZ2VWaWRlbzogTGFyZ2VWaWRlbyxcclxuICBDb21wb25lbnRTZWN0aW9uc0ZlYXR1cmVDb2x1bW5zR3JvdXA6IEZlYXR1cmVDb2x1bW5zR3JvdXAsXHJcbiAgQ29tcG9uZW50U2VjdGlvbnNGZWF0dXJlUm93c0dyb3VwOiBGZWF0dXJlUm93c0dyb3VwLFxyXG4gIENvbXBvbmVudFNlY3Rpb25zQm90dG9tQWN0aW9uczogQm90dG9tQWN0aW9ucyxcclxuICBDb21wb25lbnRTZWN0aW9uc1Rlc3RpbW9uaWFsc0dyb3VwOiBUZXN0aW1vbmlhbHNHcm91cCxcclxuICBDb21wb25lbnRTZWN0aW9uc1JpY2hUZXh0OiBSaWNoVGV4dCxcclxuICBDb21wb25lbnRTZWN0aW9uc1ByaWNpbmc6IFByaWNpbmcsXHJcbiAgQ29tcG9uZW50U2VjdGlvbnNMZWFkRm9ybTogTGVhZEZvcm0sXHJcbn1cclxuXHJcbi8vIERpc3BsYXkgYSBzZWN0aW9uIGluZGl2aWR1YWxseVxyXG5jb25zdCBTZWN0aW9uID0gKHsgc2VjdGlvbkRhdGEgfSkgPT4ge1xyXG4gIC8vIFByZXBhcmUgdGhlIGNvbXBvbmVudFxyXG4gIGNvbnN0IFNlY3Rpb25Db21wb25lbnQgPSBzZWN0aW9uQ29tcG9uZW50c1tzZWN0aW9uRGF0YS5fX3R5cGVuYW1lXVxyXG5cclxuICBpZiAoIVNlY3Rpb25Db21wb25lbnQpIHtcclxuICAgIHJldHVybiBudWxsXHJcbiAgfVxyXG5cclxuICAvLyBEaXNwbGF5IHRoZSBzZWN0aW9uXHJcbiAgcmV0dXJuIDxTZWN0aW9uQ29tcG9uZW50IGRhdGE9e3NlY3Rpb25EYXRhfSAvPlxyXG59XHJcblxyXG5jb25zdCBQcmV2aWV3TW9kZUJhbm5lciA9ICgpID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gIGNvbnN0IGV4aXRVUkwgPSBgL2FwaS9leGl0LXByZXZpZXc/cmVkaXJlY3Q9JHtlbmNvZGVVUklDb21wb25lbnQoXHJcbiAgICByb3V0ZXIuYXNQYXRoXHJcbiAgKX1gXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInB5LTQgYmctcmVkLTYwMCB0ZXh0LXJlZC0xMDAgZm9udC1zZW1pYm9sZCB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZVwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgIFByZXZpZXcgbW9kZSBpcyBvbi57XCIgXCJ9XHJcbiAgICAgICAgPGFcclxuICAgICAgICAgIGNsYXNzTmFtZT1cInVuZGVybGluZVwiXHJcbiAgICAgICAgICBocmVmPXtgL2FwaS9leGl0LXByZXZpZXc/cmVkaXJlY3Q9JHtyb3V0ZXIuYXNQYXRofWB9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgVHVybiBvZmZcclxuICAgICAgICA8L2E+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG4vLyBEaXNwbGF5IHRoZSBsaXN0IG9mIHNlY3Rpb25zXHJcbmNvbnN0IFNlY3Rpb25zID0gKHsgc2VjdGlvbnMsIHByZXZpZXcgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2xcIj5cclxuICAgICAgey8qIFNob3cgYSBiYW5uZXIgaWYgcHJldmlldyBtb2RlIGlzIG9uICovfVxyXG4gICAgICB7cHJldmlldyAmJiA8UHJldmlld01vZGVCYW5uZXIgLz59XHJcbiAgICAgIHsvKiBTaG93IHRoZSBhY3R1YWwgc2VjdGlvbnMgKi99XHJcbiAgICAgIHtzZWN0aW9ucy5tYXAoKHNlY3Rpb24pID0+IChcclxuICAgICAgICA8U2VjdGlvblxyXG4gICAgICAgICAgc2VjdGlvbkRhdGE9e3NlY3Rpb259XHJcbiAgICAgICAgICBrZXk9e2Ake3NlY3Rpb24uX190eXBlbmFtZX0ke3NlY3Rpb24uaWR9YH1cclxuICAgICAgICAvPlxyXG4gICAgICApKX1cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2VjdGlvbnNcclxuIiwiaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIlxyXG5pbXBvcnQgTmV4dEltYWdlIGZyb20gXCIuLi9lbGVtZW50cy9pbWFnZVwiXHJcbmltcG9ydCBWaWRlbyBmcm9tIFwiLi4vZWxlbWVudHMvdmlkZW9cIlxyXG5pbXBvcnQgQ3VzdG9tTGluayBmcm9tIFwiLi4vZWxlbWVudHMvY3VzdG9tLWxpbmtcIlxyXG5cclxuY29uc3QgRGFya292eVBvdWtheiA9ICh7IGRhdGEgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBzZWN0aW9uLXBhZGRpbmcgdGV4dC1pbWFnZS1zZWN0aW9uXCI+XHJcbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIG1iLTVcIj57ZGF0YS50aXRsZX08L2gyPlxyXG4gICAgICAgIDxkaXYgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBkYXRhLnRleHQgfX0+PC9kaXY+IFxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEYXJrb3Z5UG91a2F6XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=