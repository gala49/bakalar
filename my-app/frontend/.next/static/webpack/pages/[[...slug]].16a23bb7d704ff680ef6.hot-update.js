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
/* harmony import */ var _components_sections_text_image_mosaic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/sections/text-image-mosaic */ "./components/sections/text-image-mosaic.js");
/* harmony import */ var _components_sections_large_video__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/sections/large-video */ "./components/sections/large-video.js");
/* harmony import */ var _components_sections_feature_columns_group__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/sections/feature-columns-group */ "./components/sections/feature-columns-group.js");
/* harmony import */ var _components_sections_feature_rows_group__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/sections/feature-rows-group */ "./components/sections/feature-rows-group.js");
/* harmony import */ var _components_sections_bottom_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/sections/bottom-actions */ "./components/sections/bottom-actions.js");
/* harmony import */ var _components_sections_testimonials_group__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components/sections/testimonials-group */ "./components/sections/testimonials-group.js");
/* harmony import */ var _sections_rich_text__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./sections/rich-text */ "./components/sections/rich-text.js");
/* harmony import */ var _sections_pricing__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./sections/pricing */ "./components/sections/pricing.js");
/* harmony import */ var _sections_lead_form__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./sections/lead-form */ "./components/sections/lead-form.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\lukas\\OneDrive\\Desktop\\bakalarska-prace\\my-app\\frontend\\components\\sections.js",
    _this = undefined,
    _s = $RefreshSig$();











 // Map Strapi sections to section components

var sectionComponents = {
  ComponentSectionsHero: _components_sections_hero__WEBPACK_IMPORTED_MODULE_2__.default,
  ComponentSectionsTextImageMosaic: _components_sections_text_image_mosaic__WEBPACK_IMPORTED_MODULE_3__.default,
  ComponentSectionsLargeVideo: _components_sections_large_video__WEBPACK_IMPORTED_MODULE_4__.default,
  ComponentSectionsFeatureColumnsGroup: _components_sections_feature_columns_group__WEBPACK_IMPORTED_MODULE_5__.default,
  ComponentSectionsFeatureRowsGroup: _components_sections_feature_rows_group__WEBPACK_IMPORTED_MODULE_6__.default,
  ComponentSectionsBottomActions: _components_sections_bottom_actions__WEBPACK_IMPORTED_MODULE_7__.default,
  ComponentSectionsTestimonialsGroup: _components_sections_testimonials_group__WEBPACK_IMPORTED_MODULE_8__.default,
  ComponentSectionsRichText: _sections_rich_text__WEBPACK_IMPORTED_MODULE_9__.default,
  ComponentSectionsPricing: _sections_pricing__WEBPACK_IMPORTED_MODULE_10__.default,
  ComponentSectionsLeadForm: _sections_lead_form__WEBPACK_IMPORTED_MODULE_11__.default
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
    lineNumber: 37,
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
        lineNumber: 50,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 47,
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
      lineNumber: 66,
      columnNumber: 19
    }, _this), sections.map(function (section) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Section, {
        sectionData: section
      }, "".concat(section.__typename).concat(section.id), false, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 9
      }, _this);
    })]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 64,
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

/***/ "./components/sections/text-image-mosaic.js":
/*!**************************************************!*\
  !*** ./components/sections/text-image-mosaic.js ***!
  \**************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\lukas\\OneDrive\\Desktop\\bakalarska-prace\\my-app\\frontend\\components\\sections\\text-image-mosaic.js",
    _this = undefined;



var TextImageMosaic = function TextImageMosaic(_ref) {
  var data = _ref.data;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "container gap-12 py-12",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
      children: data.feature
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
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
            lineNumber: 21,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            className: "my-6",
            children: feature.description
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 22,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CustomLink, {
            link: feature.link,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "text-blue-600 with-arrow hover:underline",
              children: feature.link.text
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 24,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 23,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "col-12 col-lg-6 max-h-full",
          children: [feature.media.data.attributes.mime.startsWith("image") && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "w-full h-auto",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NextImage, {
              media: feature.media
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 34,
              columnNumber: 17
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 15
          }, _this), feature.media.data.attributes.mime.startsWith("video") && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Video, {
            media: feature.media,
            className: "w-full h-auto",
            autoPlay: true,
            controls: false
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 15
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 11
        }, _this)]
      }, feature.id, true, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 9
      }, _this);
    })]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, _this);
};

_c = TextImageMosaic;
/* harmony default export */ __webpack_exports__["default"] = (TextImageMosaic);

var _c;

$RefreshReg$(_c, "TextImageMosaic");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zZWN0aW9ucy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zZWN0aW9ucy90ZXh0LWltYWdlLW1vc2FpYy5qcyJdLCJuYW1lcyI6WyJzZWN0aW9uQ29tcG9uZW50cyIsIkNvbXBvbmVudFNlY3Rpb25zSGVybyIsIkhlcm8iLCJDb21wb25lbnRTZWN0aW9uc1RleHRJbWFnZU1vc2FpYyIsIlRleHRJbWFnZU1vc2FpYyIsIkNvbXBvbmVudFNlY3Rpb25zTGFyZ2VWaWRlbyIsIkxhcmdlVmlkZW8iLCJDb21wb25lbnRTZWN0aW9uc0ZlYXR1cmVDb2x1bW5zR3JvdXAiLCJGZWF0dXJlQ29sdW1uc0dyb3VwIiwiQ29tcG9uZW50U2VjdGlvbnNGZWF0dXJlUm93c0dyb3VwIiwiRmVhdHVyZVJvd3NHcm91cCIsIkNvbXBvbmVudFNlY3Rpb25zQm90dG9tQWN0aW9ucyIsIkJvdHRvbUFjdGlvbnMiLCJDb21wb25lbnRTZWN0aW9uc1Rlc3RpbW9uaWFsc0dyb3VwIiwiVGVzdGltb25pYWxzR3JvdXAiLCJDb21wb25lbnRTZWN0aW9uc1JpY2hUZXh0IiwiUmljaFRleHQiLCJDb21wb25lbnRTZWN0aW9uc1ByaWNpbmciLCJQcmljaW5nIiwiQ29tcG9uZW50U2VjdGlvbnNMZWFkRm9ybSIsIkxlYWRGb3JtIiwiU2VjdGlvbiIsInNlY3Rpb25EYXRhIiwiU2VjdGlvbkNvbXBvbmVudCIsIl9fdHlwZW5hbWUiLCJQcmV2aWV3TW9kZUJhbm5lciIsInJvdXRlciIsInVzZVJvdXRlciIsImV4aXRVUkwiLCJlbmNvZGVVUklDb21wb25lbnQiLCJhc1BhdGgiLCJTZWN0aW9ucyIsInNlY3Rpb25zIiwicHJldmlldyIsIm1hcCIsInNlY3Rpb24iLCJpZCIsImRhdGEiLCJmZWF0dXJlIiwiZmVhdHVyZXMiLCJpbmRleCIsImNsYXNzTmFtZXMiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwibGluayIsInRleHQiLCJtZWRp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O0FBQUE7QUFBQSxtQkFISixFQVFHUixPQUFPLENBQUNRLEtBQVIsQ0FBY1QsSUFBZCxDQUFtQlUsVUFBbkIsQ0FBOEJDLElBQTlCLENBQW1DQyxVQUFuQyxDQUE4QyxPQUE5QyxrQkFDQyw4REFBQyxLQUFEO0FBQ0UsaUJBQUssRUFBRVgsT0FBTyxDQUFDUSxLQURqQjtBQUVFLHFCQUFTLEVBQUMsZUFGWjtBQUdFLG9CQUFRLE1BSFY7QUFJRSxvQkFBUSxFQUFFO0FBSlo7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFUSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBdEJGO0FBQUEsU0FTT1IsT0FBTyxDQUFDRixFQVRmO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEaUI7QUFBQSxLQUFsQixDQUZIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBK0NELENBaEREOztLQUFNaEMsZTtBQWtETiwrREFBZUEsZUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9bWy4uLnNsdWddXS4xNmEyM2JiN2Q3MDRmZjY4MGVmNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCJcbmltcG9ydCBIZXJvIGZyb20gXCJAL2NvbXBvbmVudHMvc2VjdGlvbnMvaGVyb1wiXG5pbXBvcnQgVGV4dEltYWdlTW9zYWljIGZyb20gXCJAL2NvbXBvbmVudHMvc2VjdGlvbnMvdGV4dC1pbWFnZS1tb3NhaWNcIlxuaW1wb3J0IExhcmdlVmlkZW8gZnJvbSBcIkAvY29tcG9uZW50cy9zZWN0aW9ucy9sYXJnZS12aWRlb1wiXG5pbXBvcnQgRmVhdHVyZUNvbHVtbnNHcm91cCBmcm9tIFwiQC9jb21wb25lbnRzL3NlY3Rpb25zL2ZlYXR1cmUtY29sdW1ucy1ncm91cFwiXG5pbXBvcnQgRmVhdHVyZVJvd3NHcm91cCBmcm9tIFwiQC9jb21wb25lbnRzL3NlY3Rpb25zL2ZlYXR1cmUtcm93cy1ncm91cFwiXG5pbXBvcnQgQm90dG9tQWN0aW9ucyBmcm9tIFwiQC9jb21wb25lbnRzL3NlY3Rpb25zL2JvdHRvbS1hY3Rpb25zXCJcbmltcG9ydCBUZXN0aW1vbmlhbHNHcm91cCBmcm9tIFwiQC9jb21wb25lbnRzL3NlY3Rpb25zL3Rlc3RpbW9uaWFscy1ncm91cFwiXG5pbXBvcnQgUmljaFRleHQgZnJvbSBcIi4vc2VjdGlvbnMvcmljaC10ZXh0XCJcbmltcG9ydCBQcmljaW5nIGZyb20gXCIuL3NlY3Rpb25zL3ByaWNpbmdcIlxuaW1wb3J0IExlYWRGb3JtIGZyb20gXCIuL3NlY3Rpb25zL2xlYWQtZm9ybVwiXG5cbi8vIE1hcCBTdHJhcGkgc2VjdGlvbnMgdG8gc2VjdGlvbiBjb21wb25lbnRzXG5jb25zdCBzZWN0aW9uQ29tcG9uZW50cyA9IHtcbiAgQ29tcG9uZW50U2VjdGlvbnNIZXJvOiBIZXJvLFxuICBDb21wb25lbnRTZWN0aW9uc1RleHRJbWFnZU1vc2FpYzogVGV4dEltYWdlTW9zYWljLFxuICBDb21wb25lbnRTZWN0aW9uc0xhcmdlVmlkZW86IExhcmdlVmlkZW8sXG4gIENvbXBvbmVudFNlY3Rpb25zRmVhdHVyZUNvbHVtbnNHcm91cDogRmVhdHVyZUNvbHVtbnNHcm91cCxcbiAgQ29tcG9uZW50U2VjdGlvbnNGZWF0dXJlUm93c0dyb3VwOiBGZWF0dXJlUm93c0dyb3VwLFxuICBDb21wb25lbnRTZWN0aW9uc0JvdHRvbUFjdGlvbnM6IEJvdHRvbUFjdGlvbnMsXG4gIENvbXBvbmVudFNlY3Rpb25zVGVzdGltb25pYWxzR3JvdXA6IFRlc3RpbW9uaWFsc0dyb3VwLFxuICBDb21wb25lbnRTZWN0aW9uc1JpY2hUZXh0OiBSaWNoVGV4dCxcbiAgQ29tcG9uZW50U2VjdGlvbnNQcmljaW5nOiBQcmljaW5nLFxuICBDb21wb25lbnRTZWN0aW9uc0xlYWRGb3JtOiBMZWFkRm9ybSxcbn1cblxuLy8gRGlzcGxheSBhIHNlY3Rpb24gaW5kaXZpZHVhbGx5XG5jb25zdCBTZWN0aW9uID0gKHsgc2VjdGlvbkRhdGEgfSkgPT4ge1xuICAvLyBQcmVwYXJlIHRoZSBjb21wb25lbnRcbiAgY29uc3QgU2VjdGlvbkNvbXBvbmVudCA9IHNlY3Rpb25Db21wb25lbnRzW3NlY3Rpb25EYXRhLl9fdHlwZW5hbWVdXG5cbiAgaWYgKCFTZWN0aW9uQ29tcG9uZW50KSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxuXG4gIC8vIERpc3BsYXkgdGhlIHNlY3Rpb25cbiAgcmV0dXJuIDxTZWN0aW9uQ29tcG9uZW50IGRhdGE9e3NlY3Rpb25EYXRhfSAvPlxufVxuXG5jb25zdCBQcmV2aWV3TW9kZUJhbm5lciA9ICgpID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgY29uc3QgZXhpdFVSTCA9IGAvYXBpL2V4aXQtcHJldmlldz9yZWRpcmVjdD0ke2VuY29kZVVSSUNvbXBvbmVudChcbiAgICByb3V0ZXIuYXNQYXRoXG4gICl9YFxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJweS00IGJnLXJlZC02MDAgdGV4dC1yZWQtMTAwIGZvbnQtc2VtaWJvbGQgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgIFByZXZpZXcgbW9kZSBpcyBvbi57XCIgXCJ9XG4gICAgICAgIDxhXG4gICAgICAgICAgY2xhc3NOYW1lPVwidW5kZXJsaW5lXCJcbiAgICAgICAgICBocmVmPXtgL2FwaS9leGl0LXByZXZpZXc/cmVkaXJlY3Q9JHtyb3V0ZXIuYXNQYXRofWB9XG4gICAgICAgID5cbiAgICAgICAgICBUdXJuIG9mZlxuICAgICAgICA8L2E+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG4vLyBEaXNwbGF5IHRoZSBsaXN0IG9mIHNlY3Rpb25zXG5jb25zdCBTZWN0aW9ucyA9ICh7IHNlY3Rpb25zLCBwcmV2aWV3IH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2xcIj5cbiAgICAgIHsvKiBTaG93IGEgYmFubmVyIGlmIHByZXZpZXcgbW9kZSBpcyBvbiAqL31cbiAgICAgIHtwcmV2aWV3ICYmIDxQcmV2aWV3TW9kZUJhbm5lciAvPn1cbiAgICAgIHsvKiBTaG93IHRoZSBhY3R1YWwgc2VjdGlvbnMgKi99XG4gICAgICB7c2VjdGlvbnMubWFwKChzZWN0aW9uKSA9PiAoXG4gICAgICAgIDxTZWN0aW9uXG4gICAgICAgICAgc2VjdGlvbkRhdGE9e3NlY3Rpb259XG4gICAgICAgICAga2V5PXtgJHtzZWN0aW9uLl9fdHlwZW5hbWV9JHtzZWN0aW9uLmlkfWB9XG4gICAgICAgIC8+XG4gICAgICApKX1cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTZWN0aW9uc1xuIiwiaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIlxyXG5cclxuY29uc3QgVGV4dEltYWdlTW9zYWljID0gKHsgZGF0YSB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGdhcC0xMiBweS0xMlwiPlxyXG4gICAgICA8aDI+e2RhdGEuZmVhdHVyZX08L2gyPlxyXG4gICAgICB7ZGF0YS5mZWF0dXJlcy5tYXAoKGZlYXR1cmUsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKFxyXG4gICAgICAgICAgICAvLyBDb21tb24gY2xhc3Nlc1xyXG4gICAgICAgICAgICBcImZsZXggZmxleC1jb2wganVzdGlmeS1zdGFydCByb3cgcHktMTJcIixcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIFwibGc6ZmxleC1yb3dcIjogaW5kZXggJSAyID09PSAwLFxyXG4gICAgICAgICAgICAgIFwibGc6ZmxleC1yb3ctcmV2ZXJzZVwiOiBpbmRleCAlIDIgPT09IDEsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgICBrZXk9e2ZlYXR1cmUuaWR9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgey8qIFRleHQgc2VjdGlvbiAqL31cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1sZy02IHRleHQtbGdcIj5cclxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRpdGxlXCI+e2ZlYXR1cmUudGl0bGV9PC9oMz5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibXktNlwiPntmZWF0dXJlLmRlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgICAgICAgPEN1c3RvbUxpbmsgbGluaz17ZmVhdHVyZS5saW5rfT5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtYmx1ZS02MDAgd2l0aC1hcnJvdyBob3Zlcjp1bmRlcmxpbmVcIj5cclxuICAgICAgICAgICAgICAgIHtmZWF0dXJlLmxpbmsudGV4dH1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9DdXN0b21MaW5rPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICB7LyogTWVkaWEgc2VjdGlvbiAqL31cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1sZy02IG1heC1oLWZ1bGxcIj5cclxuICAgICAgICAgICAgey8qIEltYWdlcyAqL31cclxuICAgICAgICAgICAge2ZlYXR1cmUubWVkaWEuZGF0YS5hdHRyaWJ1dGVzLm1pbWUuc3RhcnRzV2l0aChcImltYWdlXCIpICYmIChcclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBoLWF1dG9cIj5cclxuICAgICAgICAgICAgICAgIDxOZXh0SW1hZ2UgbWVkaWE9e2ZlYXR1cmUubWVkaWF9IC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIHsvKiBWaWRlb3MgKi99XHJcbiAgICAgICAgICAgIHtmZWF0dXJlLm1lZGlhLmRhdGEuYXR0cmlidXRlcy5taW1lLnN0YXJ0c1dpdGgoXCJ2aWRlb1wiKSAmJiAoXHJcbiAgICAgICAgICAgICAgPFZpZGVvXHJcbiAgICAgICAgICAgICAgICBtZWRpYT17ZmVhdHVyZS5tZWRpYX1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBoLWF1dG9cIlxyXG4gICAgICAgICAgICAgICAgYXV0b1BsYXlcclxuICAgICAgICAgICAgICAgIGNvbnRyb2xzPXtmYWxzZX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICkpfVxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUZXh0SW1hZ2VNb3NhaWNcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==