self["webpackHotUpdate_N_E"]("pages/[[...slug]]",{

/***/ "./utils/api.js":
/*!**********************!*\
  !*** ./utils/api.js ***!
  \**********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStrapiURL": function() { return /* binding */ getStrapiURL; },
/* harmony export */   "fetchAPI": function() { return /* binding */ fetchAPI; },
/* harmony export */   "getPageData": function() { return /* binding */ getPageData; },
/* harmony export */   "getGlobalData": function() { return /* binding */ getGlobalData; }
/* harmony export */ });
/* harmony import */ var C_Users_lukas_OneDrive_Desktop_bakalarska_prace_my_app_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_lukas_OneDrive_Desktop_bakalarska_prace_my_app_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_lukas_OneDrive_Desktop_bakalarska_prace_my_app_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_lukas_OneDrive_Desktop_bakalarska_prace_my_app_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var C_Users_lukas_OneDrive_Desktop_bakalarska_prace_my_app_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! qs */ "./node_modules/qs/lib/index.js");
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(qs__WEBPACK_IMPORTED_MODULE_3__);
/* module decorator */ module = __webpack_require__.hmd(module);
/* provided dependency */ var process = __webpack_require__(/*! process */ "./node_modules/process/browser.js");




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_lukas_OneDrive_Desktop_bakalarska_prace_my_app_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


function getStrapiURL(path) {
  return "".concat(process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337").concat(path);
}
/**
 * Helper to make GET requests to Strapi API endpoints
 * @param {string} path Path of the API route
 * @param {Object} urlParamsObject URL params object, will be stringified
 * @param {RequestInit} options Options passed to fetch
 * @returns Parsed API call response
 */

function fetchAPI(_x) {
  return _fetchAPI.apply(this, arguments);
}
/**
 *
 * @param {Object} options
 * @param {string} options.slug The page's slug
 * @param {string} options.locale The current locale specified in router.locale
 * @param {boolean} options.preview router isPreview value
 */

function _fetchAPI() {
  _fetchAPI = (0,C_Users_lukas_OneDrive_Desktop_bakalarska_prace_my_app_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_Users_lukas_OneDrive_Desktop_bakalarska_prace_my_app_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(path) {
    var urlParamsObject,
        options,
        mergedOptions,
        queryString,
        requestUrl,
        response,
        data,
        _args = arguments;
    return C_Users_lukas_OneDrive_Desktop_bakalarska_prace_my_app_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            urlParamsObject = _args.length > 1 && _args[1] !== undefined ? _args[1] : {};
            options = _args.length > 2 && _args[2] !== undefined ? _args[2] : {};
            // Merge default and user options
            mergedOptions = _objectSpread({
              headers: {
                "Content-Type": "application/json"
              }
            }, options); // Build request URL

            queryString = qs__WEBPACK_IMPORTED_MODULE_3___default().stringify(urlParamsObject);
            requestUrl = "".concat(getStrapiURL("/api".concat(path).concat(queryString ? "?".concat(queryString) : ""))); // Trigger API call

            _context.next = 7;
            return fetch(requestUrl, mergedOptions);

          case 7:
            response = _context.sent;

            if (response.ok) {
              _context.next = 11;
              break;
            }

            console.error(response.statusText);
            throw new Error("An error occured please try again");

          case 11:
            _context.next = 13;
            return response.json();

          case 13:
            data = _context.sent;
            return _context.abrupt("return", data);

          case 15:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _fetchAPI.apply(this, arguments);
}

function getPageData(_x2) {
  return _getPageData.apply(this, arguments);
} // Get site data from Strapi (metadata, navbar, footer...)

function _getPageData() {
  _getPageData = (0,C_Users_lukas_OneDrive_Desktop_bakalarska_prace_my_app_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_Users_lukas_OneDrive_Desktop_bakalarska_prace_my_app_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2(_ref) {
    var _pagesData$data;

    var slug, locale, preview, gqlEndpoint, pagesRes, pagesData;
    return C_Users_lukas_OneDrive_Desktop_bakalarska_prace_my_app_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            slug = _ref.slug, locale = _ref.locale, preview = _ref.preview;
            // Find the pages that match this slug
            gqlEndpoint = getStrapiURL("/graphql");
            _context2.next = 4;
            return fetch(gqlEndpoint, {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify({
                query: "\n        fragment FileParts on UploadFileEntityResponse {\n          data {\n            id\n            attributes {\n              alternativeText\n              width\n              height\n              mime\n              url\n              formats\n            }\n          }\n        }\n        query GetPages(\n          $slug: String!\n          $publicationState: PublicationState!\n          $locale: I18NLocaleCode!\n        ) {        \n          pages(\n            filters: { slug: { eq: $slug } }\n            publicationState: $publicationState\n            locale: $locale\n          ) {\n            data {\n              id\n              attributes {\n                locale\n                localizations {\n                  data {\n                    id\n                    attributes {\n                      locale\n                    }\n                  }\n                }\n                slug\n                metadata {\n                  metaTitle\n                  metaDescription\n                  shareImage {\n                    ...FileParts\n                  }\n                  twitterCardType\n                  twitterUsername\n                }\n                contentSections {\n                  __typename\n                  ... on ComponentSectionsBottomActions {\n                    id\n                    title\n                    buttons {\n                      id\n                      newTab\n                      text\n                      type\n                      url\n                    }\n                  }\n                  ... on ComponentSectionsHero {\n                    id\n                    buttons {\n                      id\n                      newTab\n                      text\n                      type\n                      url\n                    }\n                    title\n                    picture {\n                      ...FileParts\n                    }\n                  }\n                  ... on ComponentSectionsFeatureColumnsGroup {\n                    id\n                    features {\n                      id\n                      description\n                      icon {\n                        ...FileParts\n                      }\n                      title\n                    }\n                  }\n                  ... on ComponentSectionsFeatureRowsGroup {\n                    id\n                    features {\n                      id\n                      description\n                      title\n                    }\n                  }\n                  ... on ComponentSectionsTextImageMosaic {\n                    id\n                    features {\n                      id\n                      description\n                      title\n                      picture {\n                        ...FileParts\n                      }\n                    }\n                  }\n                  ... on ComponentSectionsTestimonialsGroup {\n                    id\n                    description\n                    link {\n                      id\n                      newTab\n                      text\n                      url\n                    }\n                    logos {\n                      id\n                      title\n                      logo {\n                        ...FileParts\n                      }\n                    }\n                    testimonials {\n                      id\n                      logo {\n                        ...FileParts\n                      }\n                      picture {\n                        ...FileParts\n                      }\n                      text\n                      authorName\n                      authorTitle\n                      link\n                    }\n                    title\n                  }\n                  ... on ComponentSectionsLargeVideo {\n                    id\n                    description\n                    title\n                    poster {\n                      ...FileParts\n                    }\n                    video {\n                      ...FileParts\n                    }\n                  }\n                  ... on ComponentSectionsRichText {\n                    id\n                    content\n                  }\n                  ... on ComponentSectionsPricing {\n                    id\n                    title\n                    plans {\n                      description\n                      features {\n                        id\n                        name\n                      }\n                      id\n                      isRecommended\n                      name\n                      price\n                      pricePeriod\n                    }\n                  }\n                  ... on ComponentSectionsLeadForm {\n                    id\n                    emailPlaceholder\n                    location\n                    submitButton {\n                      id\n                      text\n                      type\n                    }\n                    title\n                  }\n                }\n              }\n            }\n          }\n        }      \n      ",
                variables: {
                  slug: slug,
                  publicationState: preview ? "PREVIEW" : "LIVE",
                  locale: locale
                }
              })
            });

          case 4:
            pagesRes = _context2.sent;
            _context2.next = 7;
            return pagesRes.json();

          case 7:
            pagesData = _context2.sent;

            if (!(((_pagesData$data = pagesData.data) === null || _pagesData$data === void 0 ? void 0 : _pagesData$data.pages) == null || pagesData.data.pages.length === 0)) {
              _context2.next = 10;
              break;
            }

            return _context2.abrupt("return", null);

          case 10:
            return _context2.abrupt("return", pagesData.data.pages.data[0]);

          case 11:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _getPageData.apply(this, arguments);
}

function getGlobalData(_x3) {
  return _getGlobalData.apply(this, arguments);
}

function _getGlobalData() {
  _getGlobalData = (0,C_Users_lukas_OneDrive_Desktop_bakalarska_prace_my_app_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_Users_lukas_OneDrive_Desktop_bakalarska_prace_my_app_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3(locale) {
    var gqlEndpoint, globalRes, global;
    return C_Users_lukas_OneDrive_Desktop_bakalarska_prace_my_app_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            gqlEndpoint = getStrapiURL("/graphql");
            _context3.next = 3;
            return fetch(gqlEndpoint, {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify({
                query: "\n        fragment FileParts on UploadFileEntityResponse {\n          data {\n            id\n            attributes {\n              alternativeText\n              width\n              height\n              mime\n              url\n              formats\n            }\n          }\n        }\n        query GetGlobal($locale: I18NLocaleCode!) {\n          global(locale: $locale) {\n            data {\n              id\n              attributes {\n                favicon {\n                  ...FileParts\n                }\n                metadata {\n                  metaTitle\n                  metaDescription\n                  shareImage {\n                    ...FileParts\n                  }\n                  twitterCardType\n                  twitterUsername\n                }\n                metaTitleSuffix\n                notificationBanner {\n                  type\n                  text\n                }\n                navbar {\n                  logo {\n                    ...FileParts\n                  }\n                  links {\n                    id\n                    url\n                    newTab\n                    text\n                  }\n                  button {\n                    id\n                    url\n                    newTab\n                    text\n                    type\n                  }\n                }\n                footer {\n                  logo {\n                    ...FileParts\n                  }\n                  smallText\n                  columns {\n                    id\n                    title\n                    links {\n                      id\n                      url\n                      newTab\n                      text\n                    }\n                  }\n                }\n              }\n            }\n          }\n        }      \n      ",
                variables: {
                  locale: locale
                }
              })
            });

          case 3:
            globalRes = _context3.sent;
            _context3.next = 6;
            return globalRes.json();

          case 6:
            global = _context3.sent;
            return _context3.abrupt("return", global.data.global);

          case 8:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _getGlobalData.apply(this, arguments);
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvYXBpLmpzIl0sIm5hbWVzIjpbImdldFN0cmFwaVVSTCIsInBhdGgiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfU1RSQVBJX0FQSV9VUkwiLCJmZXRjaEFQSSIsInVybFBhcmFtc09iamVjdCIsIm9wdGlvbnMiLCJtZXJnZWRPcHRpb25zIiwiaGVhZGVycyIsInF1ZXJ5U3RyaW5nIiwicXMiLCJyZXF1ZXN0VXJsIiwiZmV0Y2giLCJyZXNwb25zZSIsIm9rIiwiY29uc29sZSIsImVycm9yIiwic3RhdHVzVGV4dCIsIkVycm9yIiwianNvbiIsImRhdGEiLCJnZXRQYWdlRGF0YSIsInNsdWciLCJsb2NhbGUiLCJwcmV2aWV3IiwiZ3FsRW5kcG9pbnQiLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInF1ZXJ5IiwidmFyaWFibGVzIiwicHVibGljYXRpb25TdGF0ZSIsInBhZ2VzUmVzIiwicGFnZXNEYXRhIiwicGFnZXMiLCJsZW5ndGgiLCJnZXRHbG9iYWxEYXRhIiwiZ2xvYmFsUmVzIiwiZ2xvYmFsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRU8sU0FBU0EsWUFBVCxDQUFzQkMsSUFBdEIsRUFBNEI7QUFDakMsbUJBQ0VDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQywwQkFBWixJQUEwQyx1QkFENUMsU0FFR0gsSUFGSDtBQUdEO0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ08sU0FBZUksUUFBdEI7QUFBQTtBQUFBO0FBMkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7b1hBakNPLGlCQUF3QkosSUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBOEJLLDJCQUE5QiwyREFBZ0QsRUFBaEQ7QUFBb0RDLG1CQUFwRCwyREFBOEQsRUFB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O0FBeUZDb0Isa0JBekZEO0FBQUEsOENBMEZFQSxNQUFNLENBQUNuQixJQUFQLENBQVltQixNQTFGZDs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL1tbLi4uc2x1Z11dLjczMTk3Y2VlYjk4NTk4OTU3YmFlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcXMgZnJvbSBcInFzXCJcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFN0cmFwaVVSTChwYXRoKSB7XG4gIHJldHVybiBgJHtcbiAgICBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TVFJBUElfQVBJX1VSTCB8fCBcImh0dHA6Ly9sb2NhbGhvc3Q6MTMzN1wiXG4gIH0ke3BhdGh9YFxufVxuXG4vKipcbiAqIEhlbHBlciB0byBtYWtlIEdFVCByZXF1ZXN0cyB0byBTdHJhcGkgQVBJIGVuZHBvaW50c1xuICogQHBhcmFtIHtzdHJpbmd9IHBhdGggUGF0aCBvZiB0aGUgQVBJIHJvdXRlXG4gKiBAcGFyYW0ge09iamVjdH0gdXJsUGFyYW1zT2JqZWN0IFVSTCBwYXJhbXMgb2JqZWN0LCB3aWxsIGJlIHN0cmluZ2lmaWVkXG4gKiBAcGFyYW0ge1JlcXVlc3RJbml0fSBvcHRpb25zIE9wdGlvbnMgcGFzc2VkIHRvIGZldGNoXG4gKiBAcmV0dXJucyBQYXJzZWQgQVBJIGNhbGwgcmVzcG9uc2VcbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGZldGNoQVBJKHBhdGgsIHVybFBhcmFtc09iamVjdCA9IHt9LCBvcHRpb25zID0ge30pIHtcbiAgLy8gTWVyZ2UgZGVmYXVsdCBhbmQgdXNlciBvcHRpb25zXG4gIGNvbnN0IG1lcmdlZE9wdGlvbnMgPSB7XG4gICAgaGVhZGVyczoge1xuICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgfSxcbiAgICAuLi5vcHRpb25zLFxuICB9XG5cbiAgLy8gQnVpbGQgcmVxdWVzdCBVUkxcbiAgY29uc3QgcXVlcnlTdHJpbmcgPSBxcy5zdHJpbmdpZnkodXJsUGFyYW1zT2JqZWN0KVxuICBjb25zdCByZXF1ZXN0VXJsID0gYCR7Z2V0U3RyYXBpVVJMKFxuICAgIGAvYXBpJHtwYXRofSR7cXVlcnlTdHJpbmcgPyBgPyR7cXVlcnlTdHJpbmd9YCA6IFwiXCJ9YFxuICApfWBcblxuICAvLyBUcmlnZ2VyIEFQSSBjYWxsXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2gocmVxdWVzdFVybCwgbWVyZ2VkT3B0aW9ucylcblxuICAvLyBIYW5kbGUgcmVzcG9uc2VcbiAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgIGNvbnNvbGUuZXJyb3IocmVzcG9uc2Uuc3RhdHVzVGV4dClcbiAgICB0aHJvdyBuZXcgRXJyb3IoYEFuIGVycm9yIG9jY3VyZWQgcGxlYXNlIHRyeSBhZ2FpbmApXG4gIH1cbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxuICByZXR1cm4gZGF0YVxufVxuXG4vKipcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMuc2x1ZyBUaGUgcGFnZSdzIHNsdWdcbiAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLmxvY2FsZSBUaGUgY3VycmVudCBsb2NhbGUgc3BlY2lmaWVkIGluIHJvdXRlci5sb2NhbGVcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gb3B0aW9ucy5wcmV2aWV3IHJvdXRlciBpc1ByZXZpZXcgdmFsdWVcbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFBhZ2VEYXRhKHsgc2x1ZywgbG9jYWxlLCBwcmV2aWV3IH0pIHtcbiAgLy8gRmluZCB0aGUgcGFnZXMgdGhhdCBtYXRjaCB0aGlzIHNsdWdcbiAgY29uc3QgZ3FsRW5kcG9pbnQgPSBnZXRTdHJhcGlVUkwoXCIvZ3JhcGhxbFwiKVxuICBjb25zdCBwYWdlc1JlcyA9IGF3YWl0IGZldGNoKGdxbEVuZHBvaW50LCB7XG4gICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICBoZWFkZXJzOiB7XG4gICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICB9LFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgIHF1ZXJ5OiBgXG4gICAgICAgIGZyYWdtZW50IEZpbGVQYXJ0cyBvbiBVcGxvYWRGaWxlRW50aXR5UmVzcG9uc2Uge1xuICAgICAgICAgIGRhdGEge1xuICAgICAgICAgICAgaWRcbiAgICAgICAgICAgIGF0dHJpYnV0ZXMge1xuICAgICAgICAgICAgICBhbHRlcm5hdGl2ZVRleHRcbiAgICAgICAgICAgICAgd2lkdGhcbiAgICAgICAgICAgICAgaGVpZ2h0XG4gICAgICAgICAgICAgIG1pbWVcbiAgICAgICAgICAgICAgdXJsXG4gICAgICAgICAgICAgIGZvcm1hdHNcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVlcnkgR2V0UGFnZXMoXG4gICAgICAgICAgJHNsdWc6IFN0cmluZyFcbiAgICAgICAgICAkcHVibGljYXRpb25TdGF0ZTogUHVibGljYXRpb25TdGF0ZSFcbiAgICAgICAgICAkbG9jYWxlOiBJMThOTG9jYWxlQ29kZSFcbiAgICAgICAgKSB7ICAgICAgICBcbiAgICAgICAgICBwYWdlcyhcbiAgICAgICAgICAgIGZpbHRlcnM6IHsgc2x1ZzogeyBlcTogJHNsdWcgfSB9XG4gICAgICAgICAgICBwdWJsaWNhdGlvblN0YXRlOiAkcHVibGljYXRpb25TdGF0ZVxuICAgICAgICAgICAgbG9jYWxlOiAkbG9jYWxlXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICBkYXRhIHtcbiAgICAgICAgICAgICAgaWRcbiAgICAgICAgICAgICAgYXR0cmlidXRlcyB7XG4gICAgICAgICAgICAgICAgbG9jYWxlXG4gICAgICAgICAgICAgICAgbG9jYWxpemF0aW9ucyB7XG4gICAgICAgICAgICAgICAgICBkYXRhIHtcbiAgICAgICAgICAgICAgICAgICAgaWRcbiAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlcyB7XG4gICAgICAgICAgICAgICAgICAgICAgbG9jYWxlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc2x1Z1xuICAgICAgICAgICAgICAgIG1ldGFkYXRhIHtcbiAgICAgICAgICAgICAgICAgIG1ldGFUaXRsZVxuICAgICAgICAgICAgICAgICAgbWV0YURlc2NyaXB0aW9uXG4gICAgICAgICAgICAgICAgICBzaGFyZUltYWdlIHtcbiAgICAgICAgICAgICAgICAgICAgLi4uRmlsZVBhcnRzXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB0d2l0dGVyQ2FyZFR5cGVcbiAgICAgICAgICAgICAgICAgIHR3aXR0ZXJVc2VybmFtZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb250ZW50U2VjdGlvbnMge1xuICAgICAgICAgICAgICAgICAgX190eXBlbmFtZVxuICAgICAgICAgICAgICAgICAgLi4uIG9uIENvbXBvbmVudFNlY3Rpb25zQm90dG9tQWN0aW9ucyB7XG4gICAgICAgICAgICAgICAgICAgIGlkXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlXG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvbnMge1xuICAgICAgICAgICAgICAgICAgICAgIGlkXG4gICAgICAgICAgICAgICAgICAgICAgbmV3VGFiXG4gICAgICAgICAgICAgICAgICAgICAgdGV4dFxuICAgICAgICAgICAgICAgICAgICAgIHR5cGVcbiAgICAgICAgICAgICAgICAgICAgICB1cmxcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgLi4uIG9uIENvbXBvbmVudFNlY3Rpb25zSGVybyB7XG4gICAgICAgICAgICAgICAgICAgIGlkXG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvbnMge1xuICAgICAgICAgICAgICAgICAgICAgIGlkXG4gICAgICAgICAgICAgICAgICAgICAgbmV3VGFiXG4gICAgICAgICAgICAgICAgICAgICAgdGV4dFxuICAgICAgICAgICAgICAgICAgICAgIHR5cGVcbiAgICAgICAgICAgICAgICAgICAgICB1cmxcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aXRsZVxuICAgICAgICAgICAgICAgICAgICBwaWN0dXJlIHtcbiAgICAgICAgICAgICAgICAgICAgICAuLi5GaWxlUGFydHNcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgLi4uIG9uIENvbXBvbmVudFNlY3Rpb25zRmVhdHVyZUNvbHVtbnNHcm91cCB7XG4gICAgICAgICAgICAgICAgICAgIGlkXG4gICAgICAgICAgICAgICAgICAgIGZlYXR1cmVzIHtcbiAgICAgICAgICAgICAgICAgICAgICBpZFxuICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgaWNvbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAuLi5GaWxlUGFydHNcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgdGl0bGVcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgLi4uIG9uIENvbXBvbmVudFNlY3Rpb25zRmVhdHVyZVJvd3NHcm91cCB7XG4gICAgICAgICAgICAgICAgICAgIGlkXG4gICAgICAgICAgICAgICAgICAgIGZlYXR1cmVzIHtcbiAgICAgICAgICAgICAgICAgICAgICBpZFxuICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgdGl0bGVcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgLi4uIG9uIENvbXBvbmVudFNlY3Rpb25zVGV4dEltYWdlTW9zYWljIHtcbiAgICAgICAgICAgICAgICAgICAgaWRcbiAgICAgICAgICAgICAgICAgICAgZmVhdHVyZXMge1xuICAgICAgICAgICAgICAgICAgICAgIGlkXG4gICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb25cbiAgICAgICAgICAgICAgICAgICAgICB0aXRsZVxuICAgICAgICAgICAgICAgICAgICAgIHBpY3R1cmUge1xuICAgICAgICAgICAgICAgICAgICAgICAgLi4uRmlsZVBhcnRzXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAuLi4gb24gQ29tcG9uZW50U2VjdGlvbnNUZXN0aW1vbmlhbHNHcm91cCB7XG4gICAgICAgICAgICAgICAgICAgIGlkXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uXG4gICAgICAgICAgICAgICAgICAgIGxpbmsge1xuICAgICAgICAgICAgICAgICAgICAgIGlkXG4gICAgICAgICAgICAgICAgICAgICAgbmV3VGFiXG4gICAgICAgICAgICAgICAgICAgICAgdGV4dFxuICAgICAgICAgICAgICAgICAgICAgIHVybFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGxvZ29zIHtcbiAgICAgICAgICAgICAgICAgICAgICBpZFxuICAgICAgICAgICAgICAgICAgICAgIHRpdGxlXG4gICAgICAgICAgICAgICAgICAgICAgbG9nbyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAuLi5GaWxlUGFydHNcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGVzdGltb25pYWxzIHtcbiAgICAgICAgICAgICAgICAgICAgICBpZFxuICAgICAgICAgICAgICAgICAgICAgIGxvZ28ge1xuICAgICAgICAgICAgICAgICAgICAgICAgLi4uRmlsZVBhcnRzXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIHBpY3R1cmUge1xuICAgICAgICAgICAgICAgICAgICAgICAgLi4uRmlsZVBhcnRzXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIHRleHRcbiAgICAgICAgICAgICAgICAgICAgICBhdXRob3JOYW1lXG4gICAgICAgICAgICAgICAgICAgICAgYXV0aG9yVGl0bGVcbiAgICAgICAgICAgICAgICAgICAgICBsaW5rXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGl0bGVcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIC4uLiBvbiBDb21wb25lbnRTZWN0aW9uc0xhcmdlVmlkZW8ge1xuICAgICAgICAgICAgICAgICAgICBpZFxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvblxuICAgICAgICAgICAgICAgICAgICB0aXRsZVxuICAgICAgICAgICAgICAgICAgICBwb3N0ZXIge1xuICAgICAgICAgICAgICAgICAgICAgIC4uLkZpbGVQYXJ0c1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHZpZGVvIHtcbiAgICAgICAgICAgICAgICAgICAgICAuLi5GaWxlUGFydHNcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgLi4uIG9uIENvbXBvbmVudFNlY3Rpb25zUmljaFRleHQge1xuICAgICAgICAgICAgICAgICAgICBpZFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAuLi4gb24gQ29tcG9uZW50U2VjdGlvbnNQcmljaW5nIHtcbiAgICAgICAgICAgICAgICAgICAgaWRcbiAgICAgICAgICAgICAgICAgICAgdGl0bGVcbiAgICAgICAgICAgICAgICAgICAgcGxhbnMge1xuICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgZmVhdHVyZXMge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWRcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWVcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgaWRcbiAgICAgICAgICAgICAgICAgICAgICBpc1JlY29tbWVuZGVkXG4gICAgICAgICAgICAgICAgICAgICAgbmFtZVxuICAgICAgICAgICAgICAgICAgICAgIHByaWNlXG4gICAgICAgICAgICAgICAgICAgICAgcHJpY2VQZXJpb2RcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgLi4uIG9uIENvbXBvbmVudFNlY3Rpb25zTGVhZEZvcm0ge1xuICAgICAgICAgICAgICAgICAgICBpZFxuICAgICAgICAgICAgICAgICAgICBlbWFpbFBsYWNlaG9sZGVyXG4gICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uXG4gICAgICAgICAgICAgICAgICAgIHN1Ym1pdEJ1dHRvbiB7XG4gICAgICAgICAgICAgICAgICAgICAgaWRcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0XG4gICAgICAgICAgICAgICAgICAgICAgdHlwZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9ICAgICAgXG4gICAgICBgLFxuICAgICAgdmFyaWFibGVzOiB7XG4gICAgICAgIHNsdWcsXG4gICAgICAgIHB1YmxpY2F0aW9uU3RhdGU6IHByZXZpZXcgPyBcIlBSRVZJRVdcIiA6IFwiTElWRVwiLFxuICAgICAgICBsb2NhbGUsXG4gICAgICB9LFxuICAgIH0pLFxuICB9KVxuXG4gIGNvbnN0IHBhZ2VzRGF0YSA9IGF3YWl0IHBhZ2VzUmVzLmpzb24oKVxuICAvLyBNYWtlIHN1cmUgd2UgZm91bmQgc29tZXRoaW5nLCBvdGhlcndpc2UgcmV0dXJuIG51bGxcbiAgaWYgKHBhZ2VzRGF0YS5kYXRhPy5wYWdlcyA9PSBudWxsIHx8IHBhZ2VzRGF0YS5kYXRhLnBhZ2VzLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBudWxsXG4gIH1cblxuICAvLyBSZXR1cm4gdGhlIGZpcnN0IGl0ZW0gc2luY2UgdGhlcmUgc2hvdWxkIG9ubHkgYmUgb25lIHJlc3VsdCBwZXIgc2x1Z1xuICByZXR1cm4gcGFnZXNEYXRhLmRhdGEucGFnZXMuZGF0YVswXVxufVxuXG4vLyBHZXQgc2l0ZSBkYXRhIGZyb20gU3RyYXBpIChtZXRhZGF0YSwgbmF2YmFyLCBmb290ZXIuLi4pXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0R2xvYmFsRGF0YShsb2NhbGUpIHtcbiAgY29uc3QgZ3FsRW5kcG9pbnQgPSBnZXRTdHJhcGlVUkwoXCIvZ3JhcGhxbFwiKVxuICBjb25zdCBnbG9iYWxSZXMgPSBhd2FpdCBmZXRjaChncWxFbmRwb2ludCwge1xuICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgaGVhZGVyczoge1xuICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgfSxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICBxdWVyeTogYFxuICAgICAgICBmcmFnbWVudCBGaWxlUGFydHMgb24gVXBsb2FkRmlsZUVudGl0eVJlc3BvbnNlIHtcbiAgICAgICAgICBkYXRhIHtcbiAgICAgICAgICAgIGlkXG4gICAgICAgICAgICBhdHRyaWJ1dGVzIHtcbiAgICAgICAgICAgICAgYWx0ZXJuYXRpdmVUZXh0XG4gICAgICAgICAgICAgIHdpZHRoXG4gICAgICAgICAgICAgIGhlaWdodFxuICAgICAgICAgICAgICBtaW1lXG4gICAgICAgICAgICAgIHVybFxuICAgICAgICAgICAgICBmb3JtYXRzXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXJ5IEdldEdsb2JhbCgkbG9jYWxlOiBJMThOTG9jYWxlQ29kZSEpIHtcbiAgICAgICAgICBnbG9iYWwobG9jYWxlOiAkbG9jYWxlKSB7XG4gICAgICAgICAgICBkYXRhIHtcbiAgICAgICAgICAgICAgaWRcbiAgICAgICAgICAgICAgYXR0cmlidXRlcyB7XG4gICAgICAgICAgICAgICAgZmF2aWNvbiB7XG4gICAgICAgICAgICAgICAgICAuLi5GaWxlUGFydHNcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbWV0YWRhdGEge1xuICAgICAgICAgICAgICAgICAgbWV0YVRpdGxlXG4gICAgICAgICAgICAgICAgICBtZXRhRGVzY3JpcHRpb25cbiAgICAgICAgICAgICAgICAgIHNoYXJlSW1hZ2Uge1xuICAgICAgICAgICAgICAgICAgICAuLi5GaWxlUGFydHNcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIHR3aXR0ZXJDYXJkVHlwZVxuICAgICAgICAgICAgICAgICAgdHdpdHRlclVzZXJuYW1lXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG1ldGFUaXRsZVN1ZmZpeFxuICAgICAgICAgICAgICAgIG5vdGlmaWNhdGlvbkJhbm5lciB7XG4gICAgICAgICAgICAgICAgICB0eXBlXG4gICAgICAgICAgICAgICAgICB0ZXh0XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG5hdmJhciB7XG4gICAgICAgICAgICAgICAgICBsb2dvIHtcbiAgICAgICAgICAgICAgICAgICAgLi4uRmlsZVBhcnRzXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBsaW5rcyB7XG4gICAgICAgICAgICAgICAgICAgIGlkXG4gICAgICAgICAgICAgICAgICAgIHVybFxuICAgICAgICAgICAgICAgICAgICBuZXdUYWJcbiAgICAgICAgICAgICAgICAgICAgdGV4dFxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICAgICAgICAgICAgaWRcbiAgICAgICAgICAgICAgICAgICAgdXJsXG4gICAgICAgICAgICAgICAgICAgIG5ld1RhYlxuICAgICAgICAgICAgICAgICAgICB0ZXh0XG4gICAgICAgICAgICAgICAgICAgIHR5cGVcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9vdGVyIHtcbiAgICAgICAgICAgICAgICAgIGxvZ28ge1xuICAgICAgICAgICAgICAgICAgICAuLi5GaWxlUGFydHNcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIHNtYWxsVGV4dFxuICAgICAgICAgICAgICAgICAgY29sdW1ucyB7XG4gICAgICAgICAgICAgICAgICAgIGlkXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlXG4gICAgICAgICAgICAgICAgICAgIGxpbmtzIHtcbiAgICAgICAgICAgICAgICAgICAgICBpZFxuICAgICAgICAgICAgICAgICAgICAgIHVybFxuICAgICAgICAgICAgICAgICAgICAgIG5ld1RhYlxuICAgICAgICAgICAgICAgICAgICAgIHRleHRcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSAgICAgIFxuICAgICAgYCxcbiAgICAgIHZhcmlhYmxlczoge1xuICAgICAgICBsb2NhbGUsXG4gICAgICB9LFxuICAgIH0pLFxuICB9KVxuXG4gIGNvbnN0IGdsb2JhbCA9IGF3YWl0IGdsb2JhbFJlcy5qc29uKClcbiAgcmV0dXJuIGdsb2JhbC5kYXRhLmdsb2JhbFxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==